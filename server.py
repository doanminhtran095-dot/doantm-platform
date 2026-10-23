# -*- coding: utf-8 -*-
"""
server.py - MÁY CHỦ BẢO MẬT DOANTM PLATFORM & BACKEND API SCAN CCCD
- Phục vụ toàn bộ giao diện Web (HTML, CSS, JS, Assets)
- Cung cấp Backend API bảo mật tại /api/scan-cccd (Giấu API Key, không lộ ra ngoài)
- Tích hợp bộ lọc chống spam & rate limiting theo IP
"""

import os
import sys

# Khắc phục triệt để lỗi mã hóa Windows cp1258 trên đường dẫn tiếng Việt
try:
    if sys.stdout and hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    if sys.stderr and hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

import json
import time
import urllib.request
import urllib.error
from http.server import HTTPServer, SimpleHTTPRequestHandler

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)

# 1. Đọc khóa bí mật từ file .env
def load_env():
    env_file = os.path.join(BASE_DIR, '.env')
    if os.path.exists(env_file):
        with open(env_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    os.environ[k.strip()] = v.strip().strip('"').strip("'")

load_env()

# 2. GIẢI PHÁP 3: Quản lý Rate Limiting & Chống Spam theo IP
ip_rate_limits = {}
RATE_LIMIT_WINDOW = 60.0       # Khung thời gian: 1 phút (60 giây)
MAX_REQUESTS_PER_WINDOW = 5    # Tối đa 5 lượt quét / phút mỗi IP

class SecureServerHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def log_message(self, format, *args):
        try:
            msg = "%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), format % args)
            sys.stdout.write(msg)
            sys.stdout.flush()
        except Exception:
            pass

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/scan-cccd':
            self.handle_scan_cccd()
        else:
            self.send_error(404, "Endpoint khong ton tai")

    def handle_scan_cccd(self):
        client_ip = self.client_address[0]
        now = time.time()

        # Kiểm tra Rate Limit theo IP (Chống Spam / Click tặc)
        record = ip_rate_limits.get(client_ip, {'count': 0, 'reset': now + RATE_LIMIT_WINDOW})
        if now > record['reset']:
            record['count'] = 0
            record['reset'] = now + RATE_LIMIT_WINDOW
        record['count'] += 1
        ip_rate_limits[client_ip] = record

        if record['count'] > MAX_REQUESTS_PER_WINDOW:
            wait_sec = max(1, int(record['reset'] - now))
            self.send_json_response(429, {
                'ok': False,
                'error': f'Ban thao tac qua nhanh! Vui long cho {wait_sec} giay truoc khi thuc hien tiep.'
            })
            return

        # Kiểm tra API Key từ Biến Môi Trường Bí Mật (Tự động nạp lại nếu file .env vừa sửa)
        load_env()
        api_key = os.environ.get('GEMINI_API_KEY', '').strip()
        if not api_key:
            self.send_json_response(200, {
                'ok': False,
                'useClientOcr': True,
                'error': 'May chu chua duoc cau hinh GEMINI_API_KEY trong file .env tren may.'
            })
            return

        # Đọc dữ liệu gửi lên
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            if content_length > 15 * 1024 * 1024:
                self.send_json_response(413, {'ok': False, 'error': 'Dung luong anh vuot qua 15MB.'})
                return

            body_bytes = self.rfile.read(content_length)
            body = json.loads(body_bytes.decode('utf-8'))
            image_raw = body.get('image', '')
            if not image_raw or len(image_raw) < 50:
                self.send_json_response(400, {'ok': False, 'error': 'Du lieu hinh anh CCCD khong hop le.'})
                return

            if ',' in image_raw:
                base64_data = image_raw.split(',', 1)[1]
            else:
                base64_data = image_raw

            system_prompt = (
                "Ban la he thong AI trich xuat thong tin Can cuoc cong dan / The Can cuoc Viet Nam (ca mau cu va mau moi 2024).\n"
                "Hay doc cac chu in tren mat the trong anh va tra ve mot doi tuong JSON duy nhat co cac truong:\n"
                "- citizenId: So CCCD / So Dinh danh ca nhan 12 chu so (hoac so CMND 9 so)\n"
                "- fullName: Ho va ten in hoa co dau tieng Viet chinh xac nhu in tren the (vi du: TRẦN MINH ĐOÀN, NGUYỄN VĂN AN)\n"
                "- birthDate: Ngay thang nam sinh dinh dang DD/MM/YYYY (vi du: 18/03/1995)\n"
                "- gender: Gioi tinh ('Nam' hoac 'Nu')\n"
                "- permanentAddress: Noi thuong tru / Noi cu tru day du neu ghi tren the (neu anh la the Can cuoc moi 2024 khong in dia chi o mat truoc thi de null)\n"
                "- issueDate: Ngay cap the neu co (DD/MM/YYYY, neu khong co thi de null)\n\n"
                "Chi tra ve JSON thuan, khong boc markdown hay text giai thich nao khac."
            )

            req_payload = {
                "contents": [{
                    "parts": [
                        {"text": system_prompt},
                        {"inline_data": {"mime_type": "image/jpeg", "data": base64_data}}
                    ]
                }],
                "generationConfig": {
                    "response_mime_type": "application/json",
                    "temperature": 0.1
                },
                "safetySettings": [
                    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
                    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
                    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
                    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"}
                ]
            }

            # Danh sách model Google Gemini chuẩn hỗ trợ xử lý hình ảnh (ưu tiên gemini-3.5-flash phản hồi siêu tốc)
            models_to_try = ['gemini-3.5-flash', 'gemini-3.7-flash', 'gemini-3.8-flash', 'gemini-3-flash-preview']
            resp_data = None
            last_err = None

            for model_name in models_to_try:
                try:
                    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
                    req = urllib.request.Request(
                        url,
                        data=json.dumps(req_payload).encode('utf-8'),
                        headers={'Content-Type': 'application/json'}
                    )
                    with urllib.request.urlopen(req, timeout=35) as resp:
                        resp_data = json.loads(resp.read().decode('utf-8'))
                        break
                except urllib.error.HTTPError as he:
                    last_err = he
                    if he.code in (400, 401, 403, 404, 500, 502, 503):
                        continue
                    else:
                        break
                except Exception as ex:
                    last_err = ex
                    continue

            if not resp_data:
                if last_err:
                    raise last_err
                raise Exception("Khong the ket noi den model Gemini")

            raw_text = resp_data['candidates'][0]['content']['parts'][0]['text']

            clean_json = raw_text.strip()
            if clean_json.startswith('```json'):
                clean_json = clean_json[7:]
            if clean_json.startswith('```'):
                clean_json = clean_json[3:]
            if clean_json.endswith('```'):
                clean_json = clean_json[:-3]
            clean_json = clean_json.strip()

            parsed = json.loads(clean_json)
            self.send_json_response(200, {'ok': True, 'data': parsed})
        except urllib.error.HTTPError as e:
            err_msg = e.read().decode('utf-8', errors='ignore')
            self.send_json_response(502, {'ok': False, 'error': f'Loi Google AI ({e.code}): {err_msg}'})
        except Exception as e:
            self.send_json_response(500, {'ok': False, 'error': f'Loi may chu: {str(e)}'})

    def send_json_response(self, code, data):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

def run(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, SecureServerHandler)
    print("=" * 65, flush=True)
    print(f">> DOANTM PLATFORM SERVER DANG CHAY TAI: http://localhost:{port}", flush=True)
    print(f">> BACKEND PROXY SCAN CCCD (BAO MAT): http://localhost:{port}/api/scan-cccd", flush=True)
    print(f">> CHONG SPAM: TOI DA 5 YEU CAU / PHUT MOI IP", flush=True)
    print("=" * 65, flush=True)
    httpd.serve_forever()

if __name__ == '__main__':
    p = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run(p)
