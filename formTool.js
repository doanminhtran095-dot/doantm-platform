/**
 * DOANTM Platform - DVC Form Tool & Electronic Document Engine
 * Features:
 * 1. CCCD QR Code Scanner, Image Parser & Sample Presets (Standard VNeID QR format)
 * 2. Official Form CT01 (TT 66/2023/TT-BCA) & Legal Rental Agreement Generator
 * 3. Dual High-DPI Signature Pads (Landlord & Applicant) with Bezier smoothing
 * 4. High-Resolution PDF, Image Export & Print Engine
 */

class DVCFormEngine {
  constructor() {
    // Current Form State
    this.formData = {
      // Applicant (Người kê khai / Bên thuê)
      fullName: 'NGUYỄN VĂN AN',
      dob: '15/08/1995',
      gender: 'Nam',
      idNumber: '001095012345',
      idIssueDate: '10/05/2021',
      phone: '0988 123 456',
      email: 'nguyenvanan@gmail.com',
      permanentAddress: 'Số 12 Hàng Buồm, P. Hàng Buồm, Q. Hoàn Kiếm, TP. Hà Nội',
      job: 'Kỹ sư phần mềm AI',
      
      // Temporary Stay Address (Nơi đăng ký tạm trú / Thuê nhà)
      policeStation: 'Công an Phường Dịch Vọng Hậu, Quận Cầu Giấy, TP. Hà Nội',
      tempAddress: 'Số 48 Ngõ 175 Xuân Thủy, P. Dịch Vọng Hậu, Q. Cầu Giấy, TP. Hà Nội',
      requestContent: 'Đăng ký tạm trú thời hạn 12 tháng tại địa chỉ thuê trọ',
      
      // Landlord (Chủ nhà / Bên cho thuê)
      landlordName: 'TRẦN VĂN THẮNG',
      landlordId: '001072004567',
      landlordPhone: '0912 345 678',
      landlordDob: '20/10/1972',
      landlordRelation: 'Chủ nhà cho thuê',
      
      // Rental Agreement Specs
      rentPrice: '5.500.000',
      deposit: '5.500.000',
      contractDuration: '12',
      startDate: '15/10/2026',
      signDate: '11/10/2026',
    };

    // Signature data URLs
    this.signatures = {
      landlord: null,
      applicant: null
    };

    // Signature Pad instances
    this.pads = {
      landlord: null,
      applicant: null
    };

    this.activeTab = 'ct01'; // 'ct01' or 'contract'
    this.penColor = '#0038A8'; // Official blue legal ink

    this.init();
  }

  init() {
    this.populateFormInputs();
    this.setupSignaturePads();
    this.bindEvents();
    this.updatePreviewDocuments();
  }

  // ==========================================
  // SIGNATURE PAD ENGINE (Dual Canvas)
  // ==========================================
  setupSignaturePads() {
    const landlordCanvas = document.getElementById('sig-canvas-landlord');
    const applicantCanvas = document.getElementById('sig-canvas-applicant');

    if (landlordCanvas) {
      if (!this.pads.landlord) {
        this.pads.landlord = this.initSingleCanvas(landlordCanvas, 'landlord');
      } else {
        this.pads.landlord.resize();
      }
    }
    if (applicantCanvas) {
      if (!this.pads.applicant) {
        this.pads.applicant = this.initSingleCanvas(applicantCanvas, 'applicant');
      } else {
        this.pads.applicant.resize();
      }
    }
  }

  initSingleCanvas(canvas, type) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const currentWidth = rect.width > 0 ? rect.width : 320;
      const currentHeight = rect.height > 0 ? rect.height : 140;
      const prevSig = this.signatures[type];

      canvas.width = currentWidth * dpr;
      canvas.height = currentHeight * dpr;
      ctx.scale(dpr, dpr);

      ctx.strokeStyle = this.penColor;
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (prevSig) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, currentWidth, currentHeight);
        };
        img.src = prevSig;
      }
    };

    resize();

    let isDrawing = false;
    let lastPoint = null;
    let points = [];

    const getPos = (e) => {
      const box = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - box.left,
        y: clientY - box.top
      };
    };

    const startDraw = (e) => {
      e.preventDefault();
      isDrawing = true;
      const pos = getPos(e);
      lastPoint = pos;
      points = [pos];
    };

    const draw = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const currentPoint = getPos(e);
      points.push(currentPoint);

      if (points.length >= 3) {
        const xc = (points[points.length - 2].x + points[points.length - 1].x) / 2;
        const yc = (points[points.length - 2].y + points[points.length - 1].y) / 2;
        ctx.beginPath();
        ctx.moveTo(points[points.length - 3].x, points[points.length - 3].y);
        ctx.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, xc, yc);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();
      }
      lastPoint = currentPoint;
    };

    const stopDraw = () => {
      if (isDrawing) {
        isDrawing = false;
        // Save signature
        this.signatures[type] = canvas.toDataURL('image/png');
        this.applySignaturesToDocuments();
      }
    };

    // Events
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    window.addEventListener('touchend', stopDraw);

    return {
      canvas,
      ctx,
      resize,
      clear: () => {
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
        this.signatures[type] = null;
        this.applySignaturesToDocuments();
      }
    };
  }

  setPenColor(color) {
    this.penColor = color;
    if (this.pads.landlord) this.pads.landlord.ctx.strokeStyle = color;
    if (this.pads.applicant) this.pads.applicant.ctx.strokeStyle = color;
  }

  // ==========================================
  // QR CODE PARSER & PRESETS
  // ==========================================
  parseCCCDQRString(qrText) {
    if (!qrText || typeof qrText !== 'string') return false;

    // Standard Vietnamese CCCD QR format:
    // [12-digit CCCD]|[9-digit CMND]|[Full Name]|[DDMMYYYY]|[Gender]|[Address]|[DDMMYYYY issue date]
    const parts = qrText.trim().split('|');

    if (parts.length >= 6) {
      const idNumber = parts[0].trim();
      const fullName = parts[2] ? parts[2].trim().toUpperCase() : '';
      let rawDob = parts[3] ? parts[3].trim() : '';
      let formattedDob = rawDob;
      if (rawDob.length === 8) {
        formattedDob = `${rawDob.substr(0, 2)}/${rawDob.substr(2, 2)}/${rawDob.substr(4, 4)}`;
      }
      const gender = parts[4] ? parts[4].trim() : 'Nam';
      const address = parts[5] ? parts[5].trim() : '';
      let rawIssue = parts[6] ? parts[6].trim() : '';
      let formattedIssue = rawIssue;
      if (rawIssue.length === 8) {
        formattedIssue = `${rawIssue.substr(0, 2)}/${rawIssue.substr(2, 2)}/${rawIssue.substr(4, 4)}`;
      }

      this.formData.idNumber = idNumber;
      this.formData.fullName = fullName;
      this.formData.dob = formattedDob;
      this.formData.gender = gender;
      this.formData.permanentAddress = address;
      if (formattedIssue) this.formData.idIssueDate = formattedIssue;

      this.populateFormInputs();
      this.updatePreviewDocuments();
      return true;
    }
    return false;
  }

  applyPreset(presetKey) {
    const presets = {
      preset1: {
        fullName: 'NGUYỄN VĂN AN',
        dob: '15/08/1995',
        gender: 'Nam',
        idNumber: '001095012345',
        idIssueDate: '10/05/2021',
        permanentAddress: 'Số 12 Hàng Buồm, P. Hàng Buồm, Q. Hoàn Kiếm, TP. Hà Nội',
        phone: '0988 123 456',
        email: 'nguyenvanan.tech@gmail.com',
        job: 'Kỹ sư AI & Phần mềm'
      },
      preset2: {
        fullName: 'TRẦN THỊ MAI',
        dob: '22/11/1998',
        gender: 'Nữ',
        idNumber: '079198005678',
        idIssueDate: '15/09/2022',
        permanentAddress: 'Số 88 Nguyễn Huệ, P. Bến Nghé, Quận 1, TP. Hồ Chí Minh',
        phone: '0903 888 999',
        email: 'tranmaidesign@gmail.com',
        job: 'Chuyên viên Thiết kế UI/UX'
      },
      preset3: {
        fullName: 'LÊ HOÀNG LONG',
        dob: '05/03/1992',
        gender: 'Nam',
        idNumber: '048092008901',
        idIssueDate: '28/04/2021',
        permanentAddress: 'Số 45 Lê Duẩn, P. Hải Châu 1, Q. Hải Châu, TP. Đà Nẵng',
        phone: '0918 777 666',
        email: 'hoanglong.pilot@gmail.com',
        job: 'Phi công Drone & Đo đạc 3D'
      }
    };

    if (presets[presetKey]) {
      Object.assign(this.formData, presets[presetKey]);
      this.populateFormInputs();
      this.updatePreviewDocuments();
      return true;
    }
    return false;
  }

  // Populate HTML Inputs from Data
  populateFormInputs() {
    const bindMap = {
      'input-fullName': 'fullName',
      'input-dob': 'dob',
      'input-gender': 'gender',
      'input-idNumber': 'idNumber',
      'input-idIssueDate': 'idIssueDate',
      'input-phone': 'phone',
      'input-permanentAddress': 'permanentAddress',
      'input-tempAddress': 'tempAddress',
      'input-policeStation': 'policeStation',
      'input-landlordName': 'landlordName',
      'input-landlordId': 'landlordId',
      'input-landlordPhone': 'landlordPhone',
      'input-rentPrice': 'rentPrice',
      'input-deposit': 'deposit',
      'input-contractDuration': 'contractDuration'
    };

    for (let [elementId, dataKey] of Object.entries(bindMap)) {
      const el = document.getElementById(elementId);
      if (el) {
        el.value = this.formData[dataKey] || '';
      }
    }
  }

  // Read HTML inputs to state
  readFormInputs() {
    const bindMap = {
      'input-fullName': 'fullName',
      'input-dob': 'dob',
      'input-gender': 'gender',
      'input-idNumber': 'idNumber',
      'input-idIssueDate': 'idIssueDate',
      'input-phone': 'phone',
      'input-permanentAddress': 'permanentAddress',
      'input-tempAddress': 'tempAddress',
      'input-policeStation': 'policeStation',
      'input-landlordName': 'landlordName',
      'input-landlordId': 'landlordId',
      'input-landlordPhone': 'landlordPhone',
      'input-rentPrice': 'rentPrice',
      'input-deposit': 'deposit',
      'input-contractDuration': 'contractDuration'
    };

    for (let [elementId, dataKey] of Object.entries(bindMap)) {
      const el = document.getElementById(elementId);
      if (el) {
        this.formData[dataKey] = el.value.trim();
      }
    }
    this.updatePreviewDocuments();
  }

  bindEvents() {
    // Dynamic change listeners on all input fields
    const inputs = document.querySelectorAll('.dvc-sync-input');
    inputs.forEach(input => {
      input.addEventListener('input', () => this.readFormInputs());
    });

    // Clear signature buttons
    const clearLandlordBtn = document.getElementById('btn-clear-sig-landlord');
    if (clearLandlordBtn) {
      clearLandlordBtn.addEventListener('click', () => {
        if (this.pads.landlord) this.pads.landlord.clear();
      });
    }

    const clearApplicantBtn = document.getElementById('btn-clear-sig-applicant');
    if (clearApplicantBtn) {
      clearApplicantBtn.addEventListener('click', () => {
        if (this.pads.applicant) this.pads.applicant.clear();
      });
    }

    // Pen color toggles
    const penBlue = document.getElementById('pen-color-blue');
    const penBlack = document.getElementById('pen-color-black');
    if (penBlue) penBlue.addEventListener('click', () => this.setPenColor('#0038A8'));
    if (penBlack) penBlack.addEventListener('click', () => this.setPenColor('#111827'));
  }

  // ==========================================
  // DOCUMENT GENERATION & RENDERING
  // ==========================================
  updatePreviewDocuments() {
    this.renderCT01();
    this.renderRentalContract();
    this.applySignaturesToDocuments();
  }

  renderCT01() {
    const container = document.getElementById('doc-ct01-preview');
    if (!container) return;

    const d = this.formData;

    container.innerHTML = `
      <div class="printable-document bg-white text-gray-900 p-8 shadow-sm font-serif border border-gray-200 rounded-lg text-sm leading-relaxed max-w-4xl mx-auto">
        <!-- National Emblem & Header -->
        <div class="text-center mb-6">
          <p class="font-bold text-sm tracking-widest uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p class="font-semibold text-xs tracking-wider">Độc lập - Tự do - Hạnh phúc</p>
          <div class="w-32 h-[1px] bg-gray-800 mx-auto my-2"></div>
          <p class="text-[11px] text-gray-500 italic">Mẫu CT01 ban hành kèm theo Thông tư số 66/2023/TT-BCA của Bộ Công An</p>
        </div>

        <h2 class="text-center font-bold text-lg uppercase my-4 tracking-wide text-red-900">
          TỜ KHAI THAY ĐỔI THÔNG TIN CƯ TRÚ
        </h2>

        <div class="mb-4">
          <p class="font-semibold">Kính gửi: <span class="font-normal underline decoration-dotted underline-offset-4">${d.policeStation || 'Công an xã/phường/thị trấn tiếp nhận'}</span></p>
        </div>

        <!-- Personal Info Section -->
        <div class="space-y-2 mb-6">
          <p><strong>1. Họ, chữ đệm và tên:</strong> <span class="font-bold uppercase tracking-wide">${d.fullName}</span></p>
          <div class="grid grid-cols-2 gap-4">
            <p><strong>2. Ngày, tháng, năm sinh:</strong> ${d.dob}</p>
            <p><strong>3. Giới tính:</strong> ${d.gender}</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <p><strong>4. Số định danh cá nhân / CCCD:</strong> <span class="font-mono font-semibold">${d.idNumber}</span></p>
            <p><strong>5. Ngày cấp:</strong> ${d.idIssueDate}</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <p><strong>6. Số điện thoại:</strong> ${d.phone}</p>
            <p><strong>7. Email:</strong> ${d.email}</p>
          </div>
          <p><strong>8. Nơi thường trú:</strong> ${d.permanentAddress}</p>
          <p><strong>9. Nơi tạm trú / chỗ ở hiện tại:</strong> ${d.tempAddress}</p>
          <p><strong>10. Nghề nghiệp, nơi làm việc:</strong> ${d.job}</p>
          <p><strong>11. Họ tên chủ hộ:</strong> ${d.landlordName} &nbsp;|&nbsp; <strong>Quan hệ với chủ hộ:</strong> ${d.landlordRelation}</p>
          <p class="bg-amber-50 p-2.5 rounded border border-amber-200 text-amber-950 font-medium">
            <strong>12. Nội dung đề nghị:</strong> ${d.requestContent} tại ${d.tempAddress}.
          </p>
        </div>

        <!-- Signatures Row in CT01 -->
        <div class="mt-8 pt-4 border-t border-gray-300">
          <p class="text-right italic text-xs mb-4">Hà Nội, ngày 11 tháng 10 năm 2026</p>
          <div class="grid grid-cols-2 gap-8 text-center">
            <!-- Landlord Consent -->
            <div class="border border-dashed border-gray-300 rounded p-4 bg-gray-50/50">
              <p class="font-bold text-xs uppercase text-gray-800">Ý KIẾN CỦA CHỦ HỘ / CHỦ NHÀ CHO THUÊ</p>
              <p class="text-[11px] text-gray-500 italic mb-2">(Đồng ý cho đăng ký tạm trú)</p>
              <div class="h-28 flex items-center justify-center relative my-2" id="doc-sig-slot-landlord-ct01">
                <span class="text-xs text-gray-400 italic font-sans">[Chưa có chữ ký điện tử]</span>
              </div>
              <p class="font-bold uppercase text-xs text-gray-800">${d.landlordName}</p>
              <p class="text-[11px] text-gray-600 font-mono">CCCD: ${d.landlordId}</p>
            </div>

            <!-- Applicant Signature -->
            <div class="border border-dashed border-gray-300 rounded p-4 bg-gray-50/50">
              <p class="font-bold text-xs uppercase text-gray-800">NGƯỜI KÊ KHAI</p>
              <p class="text-[11px] text-gray-500 italic mb-2">(Ký, ghi rõ họ tên và cam đoan)</p>
              <div class="h-28 flex items-center justify-center relative my-2" id="doc-sig-slot-applicant-ct01">
                <span class="text-xs text-gray-400 italic font-sans">[Chưa có chữ ký điện tử]</span>
              </div>
              <p class="font-bold uppercase text-xs text-gray-800">${d.fullName}</p>
              <p class="text-[11px] text-gray-600 font-mono">CCCD: ${d.idNumber}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderRentalContract() {
    const container = document.getElementById('doc-contract-preview');
    if (!container) return;

    const d = this.formData;

    container.innerHTML = `
      <div class="printable-document bg-white text-gray-900 p-8 shadow-sm font-serif border border-gray-200 rounded-lg text-sm leading-relaxed max-w-4xl mx-auto">
        <!-- Contract Header -->
        <div class="text-center mb-6">
          <p class="font-bold text-sm tracking-widest uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p class="font-semibold text-xs tracking-wider">Độc lập - Tự do - Hạnh phúc</p>
          <div class="w-32 h-[1px] bg-gray-800 mx-auto my-2"></div>
        </div>

        <h2 class="text-center font-bold text-lg uppercase my-3 tracking-wide text-gray-900">
          HỢP ĐỒNG THUÊ NHÀ Ở / CĂN HỘ
        </h2>
        <p class="text-center text-xs text-gray-500 italic mb-6">Số: DOANTM-HDTN/2026/089</p>

        <p class="mb-3 text-xs italic">Hôm nay, ngày ${d.signDate}, tại địa chỉ: ${d.tempAddress}, chúng tôi gồm các bên:</p>

        <!-- Party A (Landlord) -->
        <div class="bg-gray-50 p-3 rounded mb-4 border border-gray-200">
          <p class="font-bold text-xs uppercase text-red-900 mb-1">BÊN CHO THUÊ (BÊN A):</p>
          <p>Ông/Bà: <strong>${d.landlordName}</strong> &nbsp;|&nbsp; Sinh ngày: ${d.landlordDob}</p>
          <p>Số CCCD/Định danh: <strong class="font-mono">${d.landlordId}</strong> &nbsp;|&nbsp; Điện thoại: ${d.landlordPhone}</p>
          <p>Là chủ sở hữu hợp pháp của căn nhà / phòng trọ tại: ${d.tempAddress}</p>
        </div>

        <!-- Party B (Tenant) -->
        <div class="bg-gray-50 p-3 rounded mb-4 border border-gray-200">
          <p class="font-bold text-xs uppercase text-red-900 mb-1">BÊN THUÊ (BÊN B):</p>
          <p>Ông/Bà: <strong class="uppercase">${d.fullName}</strong> &nbsp;|&nbsp; Sinh ngày: ${d.dob}</p>
          <p>Số CCCD/Định danh: <strong class="font-mono">${d.idNumber}</strong> &nbsp;|&nbsp; Điện thoại: ${d.phone}</p>
          <p>Thường trú: ${d.permanentAddress}</p>
        </div>

        <!-- Terms -->
        <div class="space-y-2 mb-6 text-xs">
          <p><strong>Điều 1. Mục đích thuê:</strong> Bên A đồng ý cho Bên B thuê diện tích nhà ở tại địa chỉ nêu trên để sử dụng vào mục đích để ở sinh hoạt hợp pháp.</p>
          <p><strong>Điều 2. Thời hạn thuê và giá thuê:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Thời hạn thuê: <strong>${d.contractDuration} tháng</strong> kể từ ngày ${d.startDate}.</li>
            <li>Giá thuê nhà: <strong>${d.rentPrice} VNĐ / tháng</strong> (Bằng chữ: Năm triệu năm trăm nghìn đồng chẵn).</li>
            <li>Tiền đặt cọc bảo đảm: <strong>${d.deposit} VNĐ</strong>.</li>
          </ul>
          <p><strong>Điều 3. Cam kết cư trú:</strong> Bên A có trách nhiệm tạo điều kiện, ký xác nhận hồ sơ để Bên B thực hiện thủ tục đăng ký tạm trú theo đúng Luật Cư trú hiện hành trên Cổng Dịch Vụ Công Quốc Gia hoặc VNeID.</p>
        </div>

        <!-- Signatures Row in Contract -->
        <div class="mt-8 pt-4 border-t border-gray-300">
          <div class="grid grid-cols-2 gap-8 text-center">
            <!-- Party A -->
            <div class="border border-dashed border-gray-300 rounded p-4 bg-gray-50/50">
              <p class="font-bold text-xs uppercase text-gray-800">ĐẠI DIỆN BÊN A (BÊN CHO THUÊ)</p>
              <p class="text-[11px] text-gray-500 italic mb-2">(Ký và ghi rõ họ tên)</p>
              <div class="h-28 flex items-center justify-center relative my-2" id="doc-sig-slot-landlord-contract">
                <span class="text-xs text-gray-400 italic font-sans">[Chưa có chữ ký điện tử]</span>
              </div>
              <p class="font-bold uppercase text-xs text-gray-800">${d.landlordName}</p>
            </div>

            <!-- Party B -->
            <div class="border border-dashed border-gray-300 rounded p-4 bg-gray-50/50">
              <p class="font-bold text-xs uppercase text-gray-800">ĐẠI DIỆN BÊN B (BÊN THUÊ)</p>
              <p class="text-[11px] text-gray-500 italic mb-2">(Ký và ghi rõ họ tên)</p>
              <div class="h-28 flex items-center justify-center relative my-2" id="doc-sig-slot-applicant-contract">
                <span class="text-xs text-gray-400 italic font-sans">[Chưa có chữ ký điện tử]</span>
              </div>
              <p class="font-bold uppercase text-xs text-gray-800">${d.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  applySignaturesToDocuments() {
    const slots = [
      { id: 'doc-sig-slot-landlord-ct01', type: 'landlord', name: this.formData.landlordName },
      { id: 'doc-sig-slot-landlord-contract', type: 'landlord', name: this.formData.landlordName },
      { id: 'doc-sig-slot-applicant-ct01', type: 'applicant', name: this.formData.fullName },
      { id: 'doc-sig-slot-applicant-contract', type: 'applicant', name: this.formData.fullName },
    ];

    slots.forEach(slot => {
      const el = document.getElementById(slot.id);
      if (!el) return;

      const sigData = this.signatures[slot.type];
      if (sigData) {
        el.innerHTML = `
          <div class="flex flex-col items-center justify-center">
            <img src="${sigData}" alt="Chữ ký điện tử" class="max-h-20 max-w-full object-contain filter drop-shadow-sm pointer-events-none" />
            <span class="text-[10px] text-green-700 font-sans font-medium flex items-center gap-1 mt-1">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Đã ký số điện tử DOANTM e-Sign
            </span>
          </div>
        `;
      } else {
        el.innerHTML = `<span class="text-xs text-gray-400 italic font-sans">[Chưa có chữ ký điện tử]</span>`;
      }
    });
  }

  // ==========================================
  // EXPORT & DOWNLOAD ENGINE
  // ==========================================
  async exportCurrentDocumentPDF() {
    const targetEl = this.activeTab === 'ct01' 
      ? document.getElementById('doc-ct01-preview') 
      : document.getElementById('doc-contract-preview');

    if (!targetEl) return;

    if (typeof window.html2pdf === 'undefined') {
      window.print();
      return;
    }

    const docName = this.activeTab === 'ct01' ? 'DOANTM_ToKhai_CT01' : 'DOANTM_HopDongThueNha';
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `${docName}_${this.formData.fullName.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await window.html2pdf().set(opt).from(targetEl).save();
      return true;
    } catch (err) {
      console.error('PDF export failed, using print fallback', err);
      window.print();
      return false;
    }
  }

  printCurrentDocument() {
    window.print();
  }
}

// Global initialization
window.DVCFormEngine = DVCFormEngine;
