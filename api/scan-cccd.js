// Tăng dung lượng tối đa cho ảnh CCCD gửi từ thiết bị di động
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4.5mb',
    },
  },
};

// ============================================================================
// API/SCAN-CCCD.JS - SERVERLESS BACKEND PROXY (VERCEL / NODE.JS)
// GIẢI PHÁP 2: Giấu hoàn toàn API Key trên Server, người dùng F12 không thấy được
// GIẢI PHÁP 3: Chống spam, Rate Limiting theo địa chỉ IP
// ============================================================================

const ipRateLimits = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // Khung thời gian: 1 phút
const MAX_REQUESTS_PER_WINDOW = 10;     // Tối đa 10 lượt quét / phút mỗi IP

export default async function handler(req, res) {
  // 1. Cấu hình CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Chỉ chấp nhận phương thức POST' });
  }

  // 2. Rate Limiting & Chống Spam theo IP
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown-client';
  const now = Date.now();
  const userRate = ipRateLimits.get(clientIp) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };

  if (now > userRate.resetAt) {
    userRate.count = 0;
    userRate.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }

  userRate.count += 1;
  ipRateLimits.set(clientIp, userRate);

  if (userRate.count > MAX_REQUESTS_PER_WINDOW) {
    const waitSeconds = Math.ceil((userRate.resetAt - now) / 1000);
    return res.status(429).json({
      ok: false,
      error: `Bạn thao tác quá nhanh! Vui lòng chờ ${waitSeconds} giây trước khi thực hiện lượt quét tiếp theo.`
    });
  }

  // 3. Lấy API Key từ Biến Môi Trường Bí Mật
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(200).json({
      ok: false,
      useClientOcr: true,
      error: 'Máy chủ chưa cấu hình GEMINI_API_KEY trong biến môi trường.'
    });
  }

  try {
    const { image } = req.body || {};
    if (!image || typeof image !== 'string' || image.length < 50) {
      return res.status(400).json({ ok: false, error: 'Dữ liệu hình ảnh CCCD không hợp lệ.' });
    }

    const base64Data = image.replace(/^data:image\/[a-z]+;base64,/, '');

    const systemPrompt = `Bạn là hệ thống AI trích xuất thông tin Căn cước công dân (CCCD) Việt Nam.
Hãy đọc các chữ in trên mặt trước (hoặc mặt sau) của thẻ CCCD trong ảnh và trả về một đối tượng JSON duy nhất có các trường:
- citizenId: Số CCCD 12 chữ số (hoặc số CMND 9 số)
- fullName: Họ và tên in hoa có dấu tiếng Việt (ví dụ: NGUYỄN VĂN AN)
- birthDate: Ngày tháng năm sinh định dạng DD/MM/YYYY (ví dụ: 18/03/1995)
- gender: Giới tính ('Nam' hoặc 'Nữ')
- permanentAddress: Nơi thường trú đầy đủ ghi trên thẻ (đầy đủ số nhà, đường, thôn/xóm, phường/xã, quận/huyện, tỉnh/thành phố)
- issueDate: Ngày cấp thẻ nếu thấy (DD/MM/YYYY)

Chỉ trả về JSON thuần, không bọc markdown hay text giải thích nào khác.`;

    const requestBody = {
      contents: [{
        parts: [
          { text: systemPrompt },
          { inline_data: { mime_type: 'image/jpeg', data: base64Data } }
        ]
      }],
      generationConfig: {
        response_mime_type: 'application/json',
        temperature: 0.1
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
      ]
    };

    // Google Gemini API hỗ trợ query param ?key= cho cả token chuẩn và AQ/OAuth
    const headers = { 'Content-Type': 'application/json' };

    // Danh sách model Google Gemini chuẩn, ưu tiên gemini-2.0-flash phản hồi siêu tốc (~1-2s)
    const models = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-2.5-flash', 'gemini-flash-latest'];
    let response = null;
    let lastError = '';

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(requestBody),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) break;
        const errJson = await response.json().catch(() => ({}));
        lastError = errJson.error?.message || response.statusText;
      } catch (e) {
        lastError = e.message;
      }
    }

    if (!response || !response.ok) {
      return res.status(200).json({
        ok: false,
        useClientOcr: true,
        error: `Cloud AI không phản hồi (${lastError || 'Unknown'}).`
      });
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!rawText) {
      return res.status(200).json({ ok: false, useClientOcr: true, error: 'AI không nhận diện được chữ trên ảnh thẻ CCCD.' });
    }

    let cleanJson = rawText.trim();
    const jsonMatch = cleanJson.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      cleanJson = jsonMatch[0];
    } else {
      if (cleanJson.startsWith('```json')) {
        cleanJson = cleanJson.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
      } else if (cleanJson.startsWith('```')) {
        cleanJson = cleanJson.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }
    }

    const parsed = JSON.parse(cleanJson);
    return res.status(200).json({ ok: true, data: parsed });
  } catch (err) {
    return res.status(200).json({ ok: false, useClientOcr: true, error: err.message || 'Lỗi xử lý AI trên máy chủ.' });
  }
}
