/**
 * DOANTM PLATFORM - CT01 & CITIZEN SERVICE PORTAL ENGINE
 * Exact Functional Replication of capan.vn/client/ct01:
 * - Dual CCCD QR Scanner (Camera + Drag-to-Crop Image + Raw QR + Presets)
 * - Live 2-Page A4 Document Preview (Mẫu CT01 TT 116/2026 & Hợp đồng cho thuê, mượn, ở nhờ)
 * - Interactive Dual Signature Pads with Stroke Undo (Bên A Chủ nhà & Bên B Người kê khai)
 * - Up to 9 Family Members Editor (Mục 11 CT01)
 * - CT02 (Đơn cớ mất) & CT03 (Đơn xin xác nhận hạnh kiểm) + Word/PDF Export
 * - High-Resolution 2-Page PDF & 2-File JPG Export (1240x1754 A4)
 * - Progress Lookup & 31-Area CSKV Officer Directory
 */

// ============================================================================
// 1. STATE & DATA DEFINITIONS
// ============================================================================
const INITIAL_FORM_STATE = {
  members: [],
  fullName: '',
  birthDate: '',
  gender: '',
  citizenId: '',
  phone: '',
  email: '',
  permanentAddress: '',
  currentAddress: '',
  requestContent: 'Đăng ký tạm trú',
  houseNo: '',
  street: '',
  quarter: '',
  ward: 'Phường An Nhơn',
  city: 'TP. Hồ Chí Minh',
  moveInDate: '',
  landlordName: '',
  landlordBirthYear: '',
  landlordId: '',
  landlordAddress: ''
};

let formState = JSON.parse(JSON.stringify(INITIAL_FORM_STATE));
let tenantSignatureDataUrl = '';
let landlordSignatureDataUrl = '';
let previewFitMode = 'fit';
let currentScale = 1;

// Active Form Key ('ct01' | 'ct02' | 'ct03' | 'ct04' | 'ct07')
let activeFormKey = 'ct01';

// Citizen Application State (for CT02 Loss & CT03 Conduct)
let citizenAppState = {
  fullName: '',
  birthDate: '',
  citizenId: '',
  issueDate: '',
  issuePlace: 'Cục Cảnh sát QLHC về TTXH',
  permanentAddress: '',
  phone: '',
  lossDate: '',
  lostItems: '',
  lossLocation: '',
  lossReason: '',
  replacementPurpose: 'làm lại giấy tờ cá nhân',
  birthPlace: '',
  hometown: '',
  ethnicity: 'Kinh',
  currentAddress: '',
  applicationReason: 'bổ sung hồ sơ xin việc làm',
  organization: '',
  organizationAddress: '',
  signingLocation: 'An Nhơn',
  signingDate: new Date().toISOString().slice(0, 10)
};

// Batch Residence Registration State (for CT07 - Điền hồ sơ tạm trú theo số lượng)
let batchState = {
  count: 3,
  landlord: {
    fullName: '',
    birthYear: '',
    citizenId: '',
    permanentAddress: '',
    signatureDataUrl: '',
    signatureStrokes: []
  },
  house: {
    houseNo: '',
    street: '',
    ward: 'Phường An Nhơn',
    city: 'TP. Hồ Chí Minh',
    contractDatetime: ''
  },
  tenants: []
};

// Sample QR Preset for testing
const SAMPLE_QR_PRESETS = {
  sample_default: '001090012345|012345678|NGUYỄN VĂN AN|15081990|Nam|Số 123 Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh|10052021'
};

// 31 CSKV Officers Data from capan.vn
const CSKV_OFFICERS = [
  ['Lê Lại Hoàng Anh', '0366012345'],
  ['Nguyễn Công Trí', '0777703879'],
  ['Bùi Chí Nguyện', '0834598859'],
  ['Dương Thiện Chí', '0934578789'],
  ['Phạm Minh Nhựt', '0907291389'],
  ['Trương Văn Thiệp', '0947063564'],
  ['Trịnh Minh Phụng', '0909994636'],
  ['Nguyễn Bình Phương', '0909285702'],
  ['Lê Ngọc Huân', '0903311722'],
  ['Trần Viết Sơn', '0906603806'],
  ['Trần Nhật Hoàng', '0981048279'],
  ['Phan Lê Xuân', '0909456986'],
  ['Đỗ Thanh Phúc', '0902822988'],
  ['Bùi Thái Sơn', '0908508484'],
  ['Lê Hồng Tự', '0937726779'],
  ['Đinh Minh Tâm', '0888314116'],
  ['Võ Văn Tèo', '0986938459'],
  ['Lê Anh Hiếu', '0829645890'],
  ['Nguyễn Văn Hưng', '0909018303'],
  ['Trần Duy Phú', '0937711012'],
  ['Phạm Văn Hùng', '0934178995'],
  ['Nguyễn Hùng Cường', '0934476033'],
  ['Nguyễn Lê Minh Quang', '0774204559'],
  ['Hà Ngọc Minh', '0932013646'],
  ['Lê Hồng Công', '0908208219'],
  ['Trương Phạm Anh Khoa', '0903646230'],
  ['Nguyễn Minh Quý', '0938700908'],
  ['Nguyễn Văn Vương', '0989377773'],
  ['Phan Văn Tiền', '0965707789'],
  ['Lại Minh Hoàng', '0979309998'],
  ['Nguyễn Trọng Khôi', '0908090647']
];
let revealedCskvAreas = new Set();

// ============================================================================
// 2. INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // Default contract datetime to today at 10:00
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const defaultDateTime = `${yyyy}-${mm}-${dd}T10:00`;
  formState.moveInDate = defaultDateTime;
  const dtInput = document.getElementById('ct01-contract-datetime');
  if (dtInput) dtInput.value = defaultDateTime;

  // Render initial A4 documents & cards
  renderAllA4AndCards();
  updateHouseInfoBadge();

  // Initialize Dual Signature Pads
  initSignaturePads();

  // Setup Responsive A4 Scaling
  setupA4ResponsiveScaler();

  // Setup Image Cropper Pointer Events in QR Modal
  setupQrCropperEvents();

  // Setup Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-drawer-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  // Render CSKV Directory & Initial Lookup
  renderCskvDirectory();
  handleLookupSearch(true);
});

// ============================================================================
// 3. TOAST NOTIFICATION HELPER
// ============================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('capan-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `capan-toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-6px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

// ============================================================================
// 4. NAVIGATION & TAB SWITCHING
// ============================================================================
function switchMainTab(tabName, subUtility) {
  const views = {
    utilities: document.getElementById('view-utilities'),
    declaration: document.getElementById('view-declaration'),
    guide: document.getElementById('view-guide')
  };

  Object.entries(views).forEach(([key, el]) => {
    if (el) el.hidden = key !== tabName;
  });

  // Update desktop nav active state
  document.querySelectorAll('.capan-nav-item').forEach(btn => {
    const t = btn.getAttribute('data-main-tab');
    if (tabName === 'utilities' && subUtility === 'ct01') {
      btn.classList.toggle('active', t === 'utilities');
    } else if (tabName === 'utilities') {
      btn.classList.toggle('active', t === 'utilities-all');
    } else {
      btn.classList.toggle('active', t === tabName);
    }
  });

  // Update mobile drawer active state
  document.querySelectorAll('.capan-drawer-item[data-mobile-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mobile-tab') === tabName);
  });

  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileDrawer) mobileDrawer.classList.remove('open');

  if (tabName === 'utilities' && subUtility) {
    switchUtilityTab(subUtility);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchUtilityTab(utilKey) {
  const subviews = {
    ct01: document.getElementById('subview-ct01'),
    lookup: document.getElementById('subview-lookup'),
    appointment: document.getElementById('subview-appointment')
  };

  Object.entries(subviews).forEach(([k, el]) => {
    if (el) el.hidden = k !== utilKey;
  });

  ['ct01', 'lookup', 'appointment'].forEach(k => {
    const btn = document.getElementById(`util-tab-${k}`);
    if (btn) btn.classList.toggle('active', k === utilKey);
  });

  if (utilKey === 'ct01') {
    setTimeout(() => {
      resizeSignatureCanvases();
      updateA4Scale();
    }, 60);
  }
}

function selectFormCard(formKey) {
  activeFormKey = formKey;

  document.querySelectorAll('.capan-form-tab-card').forEach(card => {
    card.classList.toggle('active', card.getAttribute('data-form-key') === formKey);
  });

  const wsCt01 = document.getElementById('form-workspace-ct01');
  const wsCitizenApp = document.getElementById('form-workspace-citizen-app');
  const wsDeveloping = document.getElementById('form-workspace-developing');
  const wsBatch = document.getElementById('form-workspace-batch');

  if (formKey === 'ct01' || formKey === 'ct04') {
    const isPermanent = formKey === 'ct04';
    if (wsCt01) wsCt01.hidden = false;
    if (wsCitizenApp) wsCitizenApp.hidden = true;
    if (wsDeveloping) wsDeveloping.hidden = true;
    if (wsBatch) wsBatch.hidden = true;

    const titleText = isPermanent ? 'Điền hồ sơ Đăng kí Thường Trú' : 'Điền hồ sơ Đăng kí Tạm trú';
    setText('workspace-steps-title-desktop', titleText);
    setText('workspace-steps-title-mobile', titleText);
    setText(
      'preview-title-desktop',
      isPermanent
        ? 'Xem trước văn bản A4 (Hồ sơ Đăng kí Thường Trú - Mẫu CT01 & Hợp đồng)'
        : 'Xem trước văn bản A4 (Mẫu CT01 & Hợp đồng cư trú)'
    );

    const regValue = isPermanent ? 'Đăng ký thường trú' : 'Đăng ký tạm trú';
    const delValue = isPermanent
      ? 'Xoá đăng kí thường trú do không còn chỗ ở hợp pháp tại căn nhà địa chỉ'
      : 'Xoá đăng kí tạm trú do không còn chỗ ở hợp pháp tại căn nhà địa chỉ';
    const delLabel = isPermanent
      ? 'Xoá đăng kí thường trú do không còn chỗ ở hợp pháp'
      : 'Xoá đăng kí tạm trú do không còn chỗ ở hợp pháp';

    const radioReg = document.getElementById('radio-req-register');
    const radioRegLabel = document.getElementById('radio-req-register-label');
    const radioDel = document.getElementById('radio-req-delete');
    const radioDelLabel = document.getElementById('radio-req-delete-label');

    if (radioReg) radioReg.value = regValue;
    if (radioRegLabel) radioRegLabel.textContent = regValue;
    if (radioDel) radioDel.value = delValue;
    if (radioDelLabel) radioDelLabel.textContent = delLabel;

    const isCurrentlyDelete = String(formState.requestContent || '').startsWith('Xoá đăng kí');
    formState.requestContent = isCurrentlyDelete ? delValue : regValue;
    if (radioReg) radioReg.checked = !isCurrentlyDelete;
    if (radioDel) radioDel.checked = isCurrentlyDelete;

    renderAllA4AndCards();
    setTimeout(() => {
      resizeSignatureCanvases();
      updateA4Scale();
    }, 60);
  } else if (formKey === 'ct02' || formKey === 'ct03') {
    if (wsCt01) wsCt01.hidden = true;
    if (wsCitizenApp) wsCitizenApp.hidden = false;
    if (wsDeveloping) wsDeveloping.hidden = true;
    if (wsBatch) wsBatch.hidden = true;
    syncCitizenAppFromMainState();
    renderCitizenAppPreview();
  } else if (formKey === 'ct07') {
    if (wsCt01) wsCt01.hidden = true;
    if (wsCitizenApp) wsCitizenApp.hidden = true;
    if (wsDeveloping) wsDeveloping.hidden = true;
    if (wsBatch) wsBatch.hidden = false;
    initBatchWorkspace();
  } else {
    if (wsCt01) wsCt01.hidden = true;
    if (wsCitizenApp) wsCitizenApp.hidden = true;
    if (wsDeveloping) wsDeveloping.hidden = false;
    if (wsBatch) wsBatch.hidden = true;

    const heading = document.getElementById('developing-form-heading');
    const desc = document.getElementById('developing-form-desc');
    if (heading) heading.textContent = 'Biểu mẫu đang hoàn thiện';
    if (desc) {
      desc.innerHTML =
        'Hệ thống dịch vụ công đang cập nhật biểu mẫu điện tử theo quy chuẩn mới nhất của Bộ Công An.';
    }
    showToast('Biểu mẫu đang được cập nhật!', 'warn');
  }
}

// ============================================================================
// 5. FORM FIELD UPDATES & LIVE A4 RENDERING
// ============================================================================
function updateFormField(field, value) {
  formState[field] = value;
  if (['houseNo', 'street', 'ward', 'city', 'moveInDate'].includes(field)) {
    updateHouseInfoBadge();
  }
  renderAllA4AndCards();
}

function toggleManualDrawer(target) {
  const drawer = document.getElementById(`manual-drawer-${target}`);
  if (drawer) {
    drawer.hidden = !drawer.hidden;
  }
}

function format12DigitsArray(idStr) {
  const digits = String(idStr || '').replace(/\D/g, '').slice(0, 12);
  return digits.padEnd(12, ' ').split('');
}

function buildResidenceAddressString() {
  const h = (formState.houseNo || '').trim();
  const s = (formState.street || '').trim();
  if (!h && !s) return '';

  const streetPart = [h ? `Số ${h}` : '', s].filter(Boolean).join(' ');
  const parts = [
    streetPart,
    (formState.quarter || '').trim(),
    (formState.ward || 'Phường An Nhơn').trim(),
    (formState.city || 'TP. Hồ Chí Minh').trim()
  ].filter(Boolean);

  return parts.join(', ');
}

function parseContractDateTime(dtStr) {
  if (!dtStr) {
    return { date: '', day: '', month: '', year: '', hours: '10', minutes: '00' };
  }
  const dateMatch = dtStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  const timeMatch = dtStr.match(/T(\d{2}):(\d{2})/);
  const day = dateMatch ? dateMatch[3] : '';
  const month = dateMatch ? dateMatch[2] : '';
  const year = dateMatch ? dateMatch[1] : '';
  return {
    date: dateMatch ? `${day}/${month}/${year}` : '',
    day,
    month,
    year,
    hours: timeMatch ? timeMatch[1] : '10',
    minutes: timeMatch ? timeMatch[2] : '00'
  };
}

function renderAllA4AndCards() {
  // 1. Update Landlord QR Card Summary
  const landlordSummary = document.getElementById('landlord-card-summary');
  if (landlordSummary) {
    if (formState.landlordName) {
      landlordSummary.innerHTML = `
        <div class="qr-scanned-info">
          <div class="info-row">
            <span class="info-label">Họ tên Chủ nhà:</span>
            <span class="info-value text-bold">${escapeHtml(formState.landlordName)}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Số CCCD:</span>
            <span class="info-value text-code">${escapeHtml(formState.landlordId || '---')}</span>
            <span class="info-label" style="margin-left:12px;">Năm sinh:</span>
            <span class="info-value">${escapeHtml(formState.landlordBirthYear || '---')}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Nơi thường trú:</span>
            <span class="info-value">${escapeHtml(formState.landlordAddress || '---')}</span>
          </div>
        </div>
      `;
    } else {
      landlordSummary.innerHTML = `
        <div class="qr-empty-hint">
          Chưa có thông tin Chủ nhà (Bên A)
        </div>
      `;
    }
  }

  // 2. Update Tenant QR Card Summary
  const tenantSummary = document.getElementById('tenant-card-summary');
  if (tenantSummary) {
    if (formState.fullName) {
      tenantSummary.innerHTML = `
        <div class="qr-scanned-info">
          <div class="info-row">
            <span class="info-label">Họ và tên:</span>
            <span class="info-value text-bold">${escapeHtml(formState.fullName)}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Số ĐDCN:</span>
            <span class="info-value text-code">${escapeHtml(formState.citizenId || '---')}</span>
            <span class="info-label" style="margin-left:12px;">Ngày sinh:</span>
            <span class="info-value">${escapeHtml(formState.birthDate || '---')}</span>
            <span class="info-label" style="margin-left:12px;">Giới tính:</span>
            <span class="info-value">${escapeHtml(formState.gender || '---')}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Nơi thường trú:</span>
            <span class="info-value">${escapeHtml(formState.permanentAddress || '---')}</span>
          </div>
        </div>
      `;
    } else {
      tenantSummary.innerHTML = `
        <div class="qr-empty-hint">
          Chưa có thông tin Người kê khai (Bên B)
        </div>
      `;
    }
  }

  // Sync manual drawer inputs if they aren't currently focused
  syncInputValueIfNotFocused('manual-landlordName', formState.landlordName);
  syncInputValueIfNotFocused('manual-landlordId', formState.landlordId);
  syncInputValueIfNotFocused('manual-landlordBirthYear', formState.landlordBirthYear);
  syncInputValueIfNotFocused('manual-landlordAddress', formState.landlordAddress);
  syncInputValueIfNotFocused('manual-fullName', formState.fullName);
  syncInputValueIfNotFocused('manual-citizenId', formState.citizenId);
  syncInputValueIfNotFocused('manual-birthDate', formState.birthDate);
  syncInputValueIfNotFocused('manual-gender', formState.gender);
  syncInputValueIfNotFocused('manual-permanentAddress', formState.permanentAddress);
  syncInputValueIfNotFocused('ct01-house-no', formState.houseNo);
  syncInputValueIfNotFocused('ct01-street', formState.street);
  syncInputValueIfNotFocused('ct01-ward', formState.ward);
  syncInputValueIfNotFocused('ct01-city', formState.city);
  syncInputValueIfNotFocused('ct01-phone', formState.phone);
  syncInputValueIfNotFocused('ct01-email', formState.email);

  // 3. Update A4 Page 1 (Mẫu CT01)
  const wardText = formState.ward || 'Phường An Nhơn';
  const cityText = formState.city || 'TP. Hồ Chí Minh';
  setText('a4-ct01-recipient', `Công an ${wardText} - ${cityText}`);
  setText('a4-ct01-fullName', formState.fullName || '');
  setText('a4-ct01-birthDate', formState.birthDate || '');
  setText('a4-ct01-gender', formState.gender || '');
  setText('a4-ct01-phone', formState.phone || '');
  setText('a4-ct01-email', formState.email || '');
  setText('a4-ct01-headName', formState.fullName || '');
  setText('a4-ct01-relationship', formState.fullName ? 'chủ hộ' : '');

  // Item 4: 12-digit boxes for Tenant
  const tenantDigits = format12DigitsArray(formState.citizenId);
  const tenantBoxesEl = document.getElementById('a4-ct01-tenant-id-boxes');
  if (tenantBoxesEl) {
    tenantBoxesEl.innerHTML = tenantDigits
      .map(d => `<span class="ct01-box-cell"><span class="ct01-box-digit">${escapeHtml(d.trim())}</span></span>`)
      .join('');
  }

  // Item 9: 12-digit boxes for Landlord / Head
  const landlordDigits = format12DigitsArray(formState.landlordId);
  const landlordBoxesEl = document.getElementById('a4-ct01-landlord-id-boxes');
  if (landlordBoxesEl) {
    landlordBoxesEl.innerHTML = landlordDigits
      .map(d => `<span class="ct01-box-cell"><span class="ct01-box-digit">${escapeHtml(d.trim())}</span></span>`)
      .join('');
  }

  // Item 10: Nội dung đề nghị
  const defaultReqContent = activeFormKey === 'ct04' ? 'Đăng ký thường trú' : 'Đăng ký tạm trú';
  const currentReqContent = formState.requestContent || defaultReqContent;
  const isRegisterStay = currentReqContent === 'Đăng ký tạm trú' || currentReqContent === 'Đăng ký thường trú';
  const fullResidenceAddr = buildResidenceAddressString();
  setText('a4-ct01-requestContent', currentReqContent);
  setText('a4-ct01-requestPrefix', isRegisterStay ? ' vào nhà địa chỉ: ' : ': ');

  const reqAddrEl = document.getElementById('a4-ct01-requestAddress');
  if (reqAddrEl) {
    reqAddrEl.className = isRegisterStay ? 'ct01-request-address' : 'ct01-address-row ct01-request-address';
    reqAddrEl.textContent = isRegisterStay ? `${fullResidenceAddr}.` : (fullResidenceAddr ? `${fullResidenceAddr}.` : '');
  }

  // Item 11: 9-row Members Table
  const tbody = document.getElementById('a4-ct01-members-tbody');
  if (tbody) {
    let rowsHtml = '';
    for (let i = 0; i < 9; i++) {
      const m = formState.members[i];
      rowsHtml += `
        <tr>
          <td class="text-center"><span>${m ? i + 1 : ''}</span></td>
          <td><span class="text-uppercase">${escapeHtml(m?.fullName || '')}</span></td>
          <td class="text-center"><span>${escapeHtml(m?.birthDate || '')}</span></td>
          <td class="text-center"><span>${escapeHtml(m?.gender || '')}</span></td>
          <td class="text-center"><span>${escapeHtml(m?.citizenId || '')}</span></td>
          <td class="text-center"><span>${escapeHtml(m?.relationship || '')}</span></td>
        </tr>
      `;
    }
    tbody.innerHTML = rowsHtml;
  }

  // Members Editor Summary List
  const addMemberBtn = document.getElementById('btn-add-member');
  const addMemberLbl = document.getElementById('btn-add-member-label');
  if (addMemberBtn && addMemberLbl) {
    addMemberBtn.disabled = formState.members.length >= 9;
    addMemberLbl.textContent = `Thêm thành viên (${formState.members.length}/9)`;
  }

  const membersListEl = document.getElementById('members-summary-list');
  if (membersListEl) {
    membersListEl.innerHTML = formState.members
      .map(
        (m, idx) => `
        <div class="ct01-member-summary">
          <span>${idx + 1}. <strong>${escapeHtml(m.fullName)}</strong> · ${escapeHtml(m.birthDate)} · ${escapeHtml(m.relationship)}</span>
          <div class="member-actions">
            <button type="button" class="btn-link" onclick="openMemberModal('${m.id}')">Sửa</button>
            <button type="button" class="btn-link danger" onclick="deleteMember('${m.id}')">Xoá</button>
          </div>
        </div>
      `
      )
      .join('');
  }

  // Date & Signatures on CT01
  const dt = parseContractDateTime(formState.moveInDate);
  const shortPlace = wardText.replace(/^Phường\s+/i, '').replace(/^Xã\s+/i, '') || 'An Nhơn';
  setText(
    'a4-sig-date-1',
    dt.date ? `${shortPlace}, ngày ${dt.day} tháng ${dt.month} năm ${dt.year}` : `${shortPlace}, ngày.......tháng....năm.......`
  );
  setText(
    'a4-sig-date-2',
    dt.date ? `${shortPlace}, ngày ${dt.day} tháng ${dt.month} năm ${dt.year}` : `${shortPlace}, ngày.....tháng....năm...`
  );
  setText('a4-sig-date-3', `${shortPlace}, ngày.......tháng....năm...`);
  setText(
    'a4-sig-date-4',
    dt.date ? `${shortPlace}, ngày ${dt.day} tháng ${dt.month} năm ${dt.year}` : `${shortPlace}, ngày....tháng...năm...`
  );

  setText('a4-ct01-sig-head-name', formState.fullName || '');
  setText('a4-ct01-sig-landlord-name', formState.landlordName || '');
  setText('a4-ct01-sig-declarant-name', formState.fullName || '');

  // 4. Update A4 Page 2 (Hợp đồng cho thuê, mượn, ở nhờ)
  setText('a4-contract-hours', dt.hours);
  setText('a4-contract-minutes', dt.minutes);
  setText('a4-contract-date', dt.date);
  setText('a4-contract-address-top', fullResidenceAddr);

  setText('a4-contract-landlordName', formState.landlordName || '');
  setText('a4-contract-landlordBirthYear', formState.landlordBirthYear || '');
  setText('a4-contract-landlordId', formState.landlordId || '');
  setText(
    'a4-contract-landlordAddress',
    formState.landlordAddress || (formState.houseNo || formState.street ? fullResidenceAddr : '')
  );
  setText('a4-contract-propertyAddress', `${fullResidenceAddr}.`);

  setText('a4-contract-tenantName', formState.fullName || '');
  setText('a4-contract-tenantBirth', formState.birthDate || '');
  setText('a4-contract-tenantId', formState.citizenId || '');
  setText('a4-contract-tenantAddress', formState.permanentAddress || '');

  // Render Section 11 members into Part II of Contract (Bên B)
  const contractMembersContainer = document.getElementById('a4-contract-members-list');
  if (contractMembersContainer) {
    if (formState.members && formState.members.length > 0) {
      contractMembersContainer.innerHTML = `
        <div class="contract-members-sublist" style="margin-top: 3px;">
          <p class="party-info-row" style="margin: 2px 0 1px;"><strong>Cùng các thành viên:</strong></p>
          ${formState.members.map((m) => {
            const bYear = extractBirthYearOnly(m.birthDate);
            const idVal = m.citizenId ? escapeHtml(m.citizenId) : '';
            return `
              <div class="party-flex-row contract-member-row" style="margin-bottom: 2px;">
                <span class="party-name">- Ông (bà): <span class="text-uppercase">${escapeHtml(m.fullName || '')}</span></span>
                <span class="party-birth">Sinh năm: <span>${escapeHtml(bYear)}</span></span>
                <span class="party-cccd" style="min-width: 175px; text-align: right;">CCCD: <span>${idVal}</span></span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      contractMembersContainer.innerHTML = '';
    }
  }

  setText('a4-contract-clause1-purpose', activeFormKey === 'ct04' ? 'đăng kí thường trú' : 'đăng kí tam trú');
  setText('a4-contract-clause1-addr', fullResidenceAddr);
  setText('a4-contract-clause1-date', dt.date);

  setText('a4-contract-sig-landlord-name', formState.landlordName || '');
  setText('a4-contract-sig-tenant-name', formState.fullName || '');

  // Render Signature Images into both A4 pages
  renderSignatureImagesOnA4();
}

function renderSignatureImagesOnA4() {
  const headSigBox = document.getElementById('a4-ct01-sig-head');
  const declSigBox = document.getElementById('a4-ct01-sig-declarant');
  const contractTenantSigBox = document.getElementById('a4-contract-sig-tenant');
  const landlordSigBox = document.getElementById('a4-ct01-sig-landlord');
  const contractLandlordSigBox = document.getElementById('a4-contract-sig-landlord');

  const tenantImgHtml = tenantSignatureDataUrl
    ? `<img src="${tenantSignatureDataUrl}" alt="Chữ ký người kê khai" class="sig-canvas-img" />`
    : '';
  const landlordImgHtml = landlordSignatureDataUrl
    ? `<img src="${landlordSignatureDataUrl}" alt="Chữ ký chủ nhà" class="sig-canvas-img" />`
    : '';

  if (headSigBox) headSigBox.innerHTML = tenantImgHtml;
  if (declSigBox) declSigBox.innerHTML = tenantImgHtml;
  if (contractTenantSigBox) contractTenantSigBox.innerHTML = tenantImgHtml;
  if (landlordSigBox) landlordSigBox.innerHTML = landlordImgHtml;
  if (contractLandlordSigBox) contractLandlordSigBox.innerHTML = landlordImgHtml;
}

// ============================================================================
// 6. INTERACTIVE DUAL SIGNATURE PADS (WITH STROKE UNDO)
// ============================================================================
class SmoothSignaturePad {
  constructor(canvasId, wrapperId, placeholderId, undoBtnId, clearBtnId, onUpdate) {
    this.canvas = document.getElementById(canvasId);
    this.wrapper = document.getElementById(wrapperId);
    this.placeholder = document.getElementById(placeholderId);
    this.undoBtn = document.getElementById(undoBtnId);
    this.clearBtn = document.getElementById(clearBtnId);
    this.onUpdate = onUpdate;
    this.strokes = [];
    this.currentStroke = [];
    this.isDrawing = false;
    this.penColor = '#1d4ed8';

    if (this.canvas && this.wrapper) {
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      this.bindEvents();
    }
  }

  resize() {
    if (!this.canvas || !this.wrapper) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 2);
    const width = this.wrapper.clientWidth || 360;
    const height = 130;
    this.canvas.width = width * ratio;
    this.canvas.height = height * ratio;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(ratio, ratio);
    this.redrawAll();
  }

  getPoint(e) {
    const rect = this.canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  bindEvents() {
    const start = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      if (this.wrapper && this.wrapper.clientWidth > 0) {
        const ratio = Math.max(window.devicePixelRatio || 1, 2);
        const expectedW = Math.round((this.wrapper.clientWidth || 360) * ratio);
        if (Math.abs(this.canvas.width - expectedW) > 6) {
          this.resize();
        }
      }
      this.isDrawing = true;
      const pt = this.getPoint(e);
      this.currentStroke = [pt];
      this.drawStrokeSegment(this.currentStroke);
    };

    const move = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pt = this.getPoint(e);
      this.currentStroke.push(pt);
      this.redrawAll();
      this.drawStroke(this.currentStroke);
    };

    const end = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      this.isDrawing = false;
      if (this.currentStroke.length > 0) {
        this.strokes.push([...this.currentStroke]);
        this.currentStroke = [];
        this.redrawAll();
        this.emitUpdate();
      }
    };

    this.canvas.addEventListener('pointerdown', start);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
  }

  drawStroke(points) {
    if (!points || points.length === 0) return;
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = this.penColor;
    ctx.fillStyle = this.penColor;
    ctx.lineWidth = 2.3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (points.length === 1) {
      ctx.beginPath();
      ctx.arc(points[0].x, points[0].y, 1.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 1; i++) {
      const midX = (points[i].x + points[i + 1].x) / 2;
      const midY = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
    }
    const last = points[points.length - 1];
    ctx.lineTo(last.x, last.y);
    ctx.stroke();
    ctx.restore();
  }

  drawStrokeSegment(points) {
    this.drawStroke(points);
  }

  redrawAll() {
    if (!this.ctx || !this.canvas) return;
    const width = this.wrapper.clientWidth || 360;
    this.ctx.clearRect(0, 0, width, 130);
    for (const stroke of this.strokes) {
      this.drawStroke(stroke);
    }
    const hasInk = this.strokes.length > 0;
    if (this.placeholder) this.placeholder.hidden = hasInk;
    if (this.undoBtn) this.undoBtn.disabled = !hasInk;
    if (this.clearBtn) this.clearBtn.disabled = !hasInk;
  }

  undo() {
    if (this.strokes.length === 0) return;
    this.strokes.pop();
    this.redrawAll();
    this.emitUpdate();
  }

  clear() {
    this.strokes = [];
    this.currentStroke = [];
    this.redrawAll();
    this.emitUpdate();
  }

  emitUpdate() {
    const dataUrl = this.strokes.length > 0 ? this.canvas.toDataURL('image/png') : '';
    if (this.onUpdate) this.onUpdate(dataUrl);
  }
}

let landlordPadInstance = null;
let tenantPadInstance = null;

function initSignaturePads() {
  landlordPadInstance = new SmoothSignaturePad(
    'sig-canvas-landlord',
    'sig-wrapper-landlord',
    'sig-placeholder-landlord',
    'btn-undo-landlord',
    'btn-clear-landlord',
    (dataUrl) => {
      landlordSignatureDataUrl = dataUrl;
      renderSignatureImagesOnA4();
    }
  );

  tenantPadInstance = new SmoothSignaturePad(
    'sig-canvas-tenant',
    'sig-wrapper-tenant',
    'sig-placeholder-tenant',
    'btn-undo-tenant',
    'btn-clear-tenant',
    (dataUrl) => {
      tenantSignatureDataUrl = dataUrl;
      renderSignatureImagesOnA4();
    }
  );

  window.addEventListener('resize', () => {
    resizeSignatureCanvases();
  });
}

function resizeSignatureCanvases() {
  if (landlordPadInstance) landlordPadInstance.resize();
  if (tenantPadInstance) tenantPadInstance.resize();
  if (batchLandlordPadInstance) batchLandlordPadInstance.resize();
  if (batchTenantPadInstances && batchTenantPadInstances.length > 0) {
    batchTenantPadInstances.forEach(p => { if (p) p.resize(); });
  }
}

function undoSignature(role) {
  if (role === 'landlord' && landlordPadInstance) landlordPadInstance.undo();
  if (role === 'tenant' && tenantPadInstance) tenantPadInstance.undo();
}

function clearSignature(role) {
  if (role === 'landlord' && landlordPadInstance) landlordPadInstance.clear();
  if (role === 'tenant' && tenantPadInstance) tenantPadInstance.clear();
}

// ============================================================================
// 7. RESPONSIVE A4 SCALER
// ============================================================================
function setupA4ResponsiveScaler() {
  window.addEventListener('resize', updateA4Scale);
  window.addEventListener('orientationchange', () => {
    setTimeout(updateA4Scale, 150);
  });
  updateA4Scale();
}

function setPreviewFitMode(mode) {
  previewFitMode = mode;
  const fitBtn = document.getElementById('btn-scale-fit');
  const actualBtn = document.getElementById('btn-scale-actual');
  if (fitBtn) fitBtn.classList.toggle('active', mode === 'fit');
  if (actualBtn) actualBtn.classList.toggle('active', mode === 'actual');
  updateA4Scale();
}

function updateA4Scale() {
  const wrapper = document.getElementById('doc-preview-wrapper');
  const scalers = [
    document.getElementById('a4-page-scaler'),
    document.getElementById('citizen-app-scaler')
  ].filter(Boolean);
  const badge = document.getElementById('doc-scale-badge');
  const toolbar = document.getElementById('doc-scale-toolbar');
  if (!wrapper || scalers.length === 0) return;

  const wrapperRect = wrapper.getBoundingClientRect();
  const availableWidth = Math.max(0, (wrapperRect.width || wrapper.clientWidth) - 32);
  const A4_STANDARD_WIDTH = 794; // 210mm in standard screen CSS px

  if (availableWidth > 0 && availableWidth < A4_STANDARD_WIDTH) {
    currentScale = Math.max(0.25, Math.min(1, availableWidth / A4_STANDARD_WIDTH));
  } else {
    currentScale = 1;
  }

  if (toolbar) {
    toolbar.hidden = !(currentScale < 0.98);
  }

  const effectiveScale = previewFitMode === 'fit' ? currentScale : 1;

  scalers.forEach(scaler => {
    scaler.style.zoom = ''; // Remove zoom completely to prevent iOS Safari text overlap
    if (effectiveScale < 0.999) {
      scaler.style.width = `${A4_STANDARD_WIDTH}px`;
      scaler.style.minWidth = `${A4_STANDARD_WIDTH}px`;
      scaler.style.transform = `scale(${effectiveScale})`;
      scaler.style.webkitTransform = `scale(${effectiveScale})`;
      scaler.style.transformOrigin = 'top center';
      scaler.style.webkitTransformOrigin = 'top center';

      // Measure unscaled height and apply negative margin to remove dead space
      const unscaledHeight = scaler.scrollHeight;
      const visualHeight = unscaledHeight * effectiveScale;
      const gap = Math.max(0, unscaledHeight - visualHeight);
      scaler.style.marginBottom = `-${Math.round(gap)}px`;
    } else {
      scaler.style.width = '100%';
      scaler.style.minWidth = '';
      scaler.style.transform = 'none';
      scaler.style.webkitTransform = 'none';
      scaler.style.transformOrigin = 'top center';
      scaler.style.webkitTransformOrigin = 'top center';
      scaler.style.marginBottom = '0px';
    }
  });

  if (badge) {
    badge.textContent =
      previewFitMode === 'fit' && currentScale < 0.99
        ? `📱 Tự động vừa màn hình (${Math.round(currentScale * 100)}%)`
        : '📄 Kích thước chuẩn A4 (100%)';
  }
}

// ============================================================================
// 8. CCCD QR SCANNER MODAL (CAMERA + IMAGE CROPPER + PRESETS)
// ============================================================================
let qrScannerTarget = 'tenant'; // 'landlord' | 'tenant' | 'member' | 'citizen-app'
let scannedQrResult = null;
let cameraStream = null;
let cameraAnimFrame = null;
let uploadedQrImageObj = null;
let cropRect = null;
let isDraggingCrop = false;
let cropStartPt = null;

function parseCccdQrPayload(rawText) {
  if (!rawText || typeof rawText !== 'string') return null;
  const trimmed = rawText.trim();

  // 1. Standard QR format with pipe delimiters (|)
  if (trimmed.includes('|')) {
    const parts = trimmed.split('|');
    if (parts.length >= 5) {
      const citizenId = (parts[0] || '').trim();
      const oldId = (parts[1] || '').trim();
      const fullName = (parts[2] || '').trim();
      const rawDob = (parts[3] || '').trim();
      const gender = (parts[4] || '').trim();
      const address = (parts[5] || '').trim();
      const rawIssueDate = (parts[6] || '').trim();

      let birthDate = rawDob;
      let birthYear = '';
      if (rawDob.length === 8 && /^\d{8}$/.test(rawDob)) {
        birthDate = `${rawDob.slice(0, 2)}/${rawDob.slice(2, 4)}/${rawDob.slice(4)}`;
        birthYear = rawDob.slice(4);
      } else if (rawDob.includes('/')) {
        birthDate = rawDob;
        birthYear = extractBirthYearOnly(rawDob);
      }

      let issueDate = rawIssueDate;
      if (rawIssueDate.length === 8 && /^\d{8}$/.test(rawIssueDate)) {
        issueDate = `${rawIssueDate.slice(0, 2)}/${rawIssueDate.slice(2, 4)}/${rawIssueDate.slice(4)}`;
      }

      return {
        citizenId,
        oldId,
        fullName: (fullName || '').toUpperCase(),
        birthDate,
        birthYear: birthYear || extractBirthYearOnly(birthDate),
        gender,
        address,
        issueDate
      };
    }
  }

  // 2. Key-Value Text format (Số CCCD: ..., Họ và tên: ..., Ngày sinh: ...)
  const kv = parseKeyValueCccdText(trimmed);
  if (kv) return kv;

  // 3. Fallback to freeform OCR text parser
  return parseCccdOcrText(trimmed);
}

// Parser for labeled text format (e.g. from VNeID, scanning apps, or clipboard text)
function parseKeyValueCccdText(rawText) {
  if (!rawText || typeof rawText !== 'string') return null;

  const lines = rawText
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean);
  if (lines.length === 0) return null;

  let citizenId = '';
  let oldId = '';
  let fullName = '';
  let birthDate = '';
  let birthYear = '';
  let gender = '';
  let address = '';
  let issueDate = '';

  const reCccd = /^(?:Số\s*(?:thẻ\s*)?CCCD|Số\s*ĐDCN|Số\s*định\s*danh|CCCD|Số\s*căn\s*cước)\s*[:：]\s*(.+)$/i;
  const reCmnd = /^(?:Số\s*CMND|CMND|Số\s*chứng\s*minh)\s*[:：]\s*(.+)$/i;
  const reName = /^(?:Họ\s*(?:và|chữ\s*đệm\s*và)?\s*tên|Họ\s*tên)\s*[:：]\s*(.+)$/i;
  const reGender = /^(?:Giới\s*tính|Phái)\s*[:：]\s*(.+)$/i;
  const reDob = /^(?:Ngày\s*(?:tháng\s*năm\s*)?sinh|Sinh\s*ngày|Năm\s*sinh)\s*[:：]\s*(.+)$/i;
  const reAddress = /^(?:Nơi\s*thường\s*trú|Thường\s*trú|Địa\s*chỉ\s*thường\s*trú|Địa\s*chỉ|Nơi\s*cư\s*trú)\s*[:：]\s*(.+)$/i;
  const reIssue = /^(?:Ngày\s*cấp\s*(?:CCCD|thẻ)?|Cấp\s*ngày)\s*[:：]\s*(.+)$/i;

  let currentKey = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    let m;
    if ((m = line.match(reCccd))) {
      citizenId = m[1].replace(/\D/g, '').slice(0, 12);
      currentKey = 'cccd';
    } else if ((m = line.match(reCmnd))) {
      oldId = m[1].replace(/\D/g, '');
      currentKey = 'cmnd';
    } else if ((m = line.match(reName))) {
      fullName = m[1].trim();
      currentKey = 'name';
    } else if ((m = line.match(reGender))) {
      const gStr = m[1].trim().toLowerCase();
      gender = gStr.startsWith('nữ') || gStr === 'nu' || gStr === 'female' ? 'Nữ' : 'Nam';
      currentKey = 'gender';
    } else if ((m = line.match(reDob))) {
      const val = m[1].trim();
      const dm = val.match(/(\d{1,2})[/\.-](\d{1,2})[/\.-](\d{4})/);
      if (dm) {
        birthDate = `${dm[1].padStart(2, '0')}/${dm[2].padStart(2, '0')}/${dm[3]}`;
        birthYear = dm[3];
      } else if (/^\d{8}$/.test(val)) {
        birthDate = `${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4)}`;
        birthYear = val.slice(4);
      } else {
        birthDate = val;
        const ym = val.match(/\b(19\d{2}|20\d{2})\b/);
        if (ym) birthYear = ym[1];
      }
      currentKey = 'dob';
    } else if ((m = line.match(reAddress))) {
      address = m[1].trim();
      currentKey = 'address';
    } else if ((m = line.match(reIssue))) {
      const val = m[1].trim();
      const im = val.match(/(\d{1,2})[/\.-](\d{1,2})[/\.-](\d{4})/);
      if (im) {
        issueDate = `${im[1].padStart(2, '0')}/${im[2].padStart(2, '0')}/${im[3]}`;
      } else if (/^\d{8}$/.test(val)) {
        issueDate = `${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4)}`;
      } else {
        issueDate = val;
      }
      currentKey = 'issue';
    } else {
      // Continuation line for address if no new key matched
      if (currentKey === 'address' && !line.includes(':')) {
        address += (address ? ', ' : '') + line;
      }
    }
  }

  // Fallback extractions in case lines didn't have standard prefixes
  if (!citizenId) {
    const idMatch = rawText.match(/(?:CCCD|ĐDCN|định\s*danh)[^\d\n]*(\d{12})/i) || rawText.match(/\b(0\d{11})\b/);
    if (idMatch) citizenId = idMatch[1];
  }
  if (!fullName) {
    const nameMatch = rawText.match(/(?:Họ\s*(?:và\s*)?tên|Full\s*name)[:\s]*([^\n\r]+)/i);
    if (nameMatch) {
      const clean = nameMatch[1].trim();
      if (clean && !clean.includes(':')) fullName = clean;
    }
  }
  if (!gender) {
    if (/Giới\s*tính[:\s]*(Nữ|Nu)/i.test(rawText)) gender = 'Nữ';
    else if (/Giới\s*tính[:\s]*Nam/i.test(rawText)) gender = 'Nam';
  }
  if (!birthDate) {
    const dobMatch = rawText.match(/(?:Ngày\s*sinh|Sinh\s*ngày|DOB)[^\d\n]*(\d{1,2}[/\.-]\d{1,2}[/\.-]\d{4})/i);
    if (dobMatch) {
      const dm = dobMatch[1].split(/[/\.-]/);
      birthDate = `${dm[0].padStart(2, '0')}/${dm[1].padStart(2, '0')}/${dm[2]}`;
      birthYear = dm[2];
    }
  }
  if (!address) {
    const addrMatch = rawText.match(/(?:thường\s*trú|residence)[:\s]*([^\n\r]+)/i);
    if (addrMatch) address = addrMatch[1].trim();
  }

  if (!citizenId && !fullName) return null;

  return {
    citizenId,
    oldId,
    fullName: (fullName || '').toUpperCase(),
    birthDate,
    birthYear: birthYear || extractBirthYearOnly(birthDate),
    gender: gender || 'Nam',
    address,
    issueDate
  };
}

// Fallback OCR parser for CCCD image recognition when QR code is not detected
function parseCccdOcrText(rawText) {
  if (!rawText || typeof rawText !== 'string') return null;

  // 1. Citizen ID (12 digits, often starting with 0)
  let citizenId = '';
  const idMatch = rawText.match(/\b(0\d{11})\b/) ||
                  rawText.match(/\b(0\d{2}[\s.-]?\d{3}[\s.-]?\d{3}[\s.-]?\d{3})\b/) ||
                  rawText.match(/(?:Số|No|CCCD|CMND|Số\s*\/[^\d\n]*)\s*([0-9\s.-]{12,16})/i);
  if (idMatch) {
    citizenId = idMatch[1].replace(/[\s.-]/g, '');
  }

  // 2. Date of Birth (dd/mm/yyyy or dd-mm-yyyy)
  let birthDate = '';
  let birthYear = '';
  const dobMatch = rawText.match(/(?:sinh|birth|DOB)[^\d\n]*(\d{1,2}[/\.-]\d{1,2}[/\.-]\d{4})/i) ||
                   rawText.match(/\b(\d{1,2}[/\.-]\d{1,2}[/\.-](?:19|20)\d{2})\b/);
  if (dobMatch) {
    const parts = dobMatch[1].split(/[/\.-]/);
    if (parts.length === 3) {
      birthDate = `${parts[0].padStart(2, '0')}/${parts[1].padStart(2, '0')}/${parts[2]}`;
      birthYear = parts[2];
    }
  }

  // 3. Gender (Nam / Nữ)
  let gender = 'Nam';
  if (/Giới tính[:\s]*(Nam|Nữ)/i.test(rawText)) {
    gender = /Giới tính[:\s]*Nam/i.test(rawText) ? 'Nam' : 'Nữ';
  } else if (/\b(Nữ|Nu)\b/i.test(rawText)) {
    gender = 'Nữ';
  } else if (/\bNam\b/i.test(rawText)) {
    gender = 'Nam';
  }

  // 4. Full Name (Uppercase Vietnamese name)
  let fullName = '';
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/Họ và tên|Full name/i.test(line)) {
      const after = line.replace(/.*(?:Họ và tên|Full name)[:\s]*/i, '').trim();
      if (after && after.length >= 3 && !/\d/.test(after)) {
        fullName = after;
        break;
      }
      if (lines[i + 1]) {
        const next = lines[i + 1].trim();
        if (next && next.length >= 3 && !/\d/.test(next) && !/Ngày|Date|Giới/i.test(next)) {
          fullName = next;
          break;
        }
      }
    }
  }

  // Fallback for full name: find uppercase line
  if (!fullName) {
    const excluded = ['CỘNG HÒA', 'XÃ HỘI', 'VIỆT NAM', 'ĐỘC LẬP', 'TỰ DO', 'HẠNH PHÚC', 'CĂN CƯỚC', 'CÔNG DÂN', 'IDENTITY', 'CARD', 'REPUBLIC', 'SOCIALIST'];
    for (const line of lines) {
      const clean = line.replace(/[^A-ZÀ-Ỹa-zà-ỹ\s]/gi, '').trim();
      const isUpper = clean === clean.toUpperCase() && clean.length >= 5;
      const words = clean.split(/\s+/).length;
      const isEx = excluded.some(kw => clean.includes(kw));
      if (isUpper && words >= 2 && words <= 5 && !isEx) {
        fullName = clean;
        break;
      }
    }
  }

  // 5. Permanent Address / Nơi thường trú
  let address = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/Nơi thường trú|Place of residence|Thường trú/i.test(line)) {
      const parts = [line.replace(/.*(?:thường trú|residence)[:\s]*/i, '').trim()];
      if (lines[i + 1] && !/Có giá trị|Date of expiry|Quê quán|Place of/i.test(lines[i + 1])) {
        parts.push(lines[i + 1].trim());
      }
      address = parts.filter(Boolean).join(', ');
      break;
    }
  }

  if (citizenId || fullName || birthDate) {
    return {
      citizenId: citizenId || '',
      oldId: '',
      fullName: fullName ? fullName.toUpperCase() : '',
      birthDate: birthDate || '',
      birthYear: birthYear || '',
      gender: gender || 'Nam',
      address: address || '',
      issueDate: ''
    };
  }
  return null;
}

let memberModalWasOpen = false;

function openQrScannerModal(target) {
  qrScannerTarget = target || 'tenant';
  scannedQrResult = null;
  uploadedQrImageObj = null;
  cropRect = null;

  const memberModal = document.getElementById('member-modal');
  if (target === 'member') {
    if (memberModal && !memberModal.hidden) {
      memberModalWasOpen = true;
      memberModal.hidden = true;
    } else {
      memberModalWasOpen = false;
    }
  } else {
    memberModalWasOpen = false;
  }

  const modal = document.getElementById('qr-scanner-modal');
  const titleEl = document.getElementById('qr-modal-title');
  const resultCard = document.getElementById('qr-scanned-result-card');
  const applyBtn = document.getElementById('btn-apply-qr-data');
  const cropPanel = document.getElementById('qr-crop-panel');
  const cameraWrapper = document.getElementById('qr-camera-wrapper');
  const rawInput = document.getElementById('qr-raw-string-input');

  if (titleEl) {
    const labelMap = {
      landlord: 'Quét mã QR CCCD — Chủ nhà (Bên A)',
      tenant: 'Quét mã QR CCCD — Người kê khai (Bên B)',
      member: 'Quét mã QR CCCD — Thành viên hộ gia đình (Mục 11)',
      'citizen-app': 'Quét mã QR CCCD — Điền đơn hành chính',
      'batch-landlord': 'Quét / Tải ảnh CCCD — Chủ nhà (Bên A) [Hồ sơ số lượng]'
    };
    if (qrScannerTarget.startsWith('batch-tenant-')) {
      const bIdx = parseInt(qrScannerTarget.replace('batch-tenant-', ''), 10) + 1;
      titleEl.textContent = `Quét / Tải ảnh CCCD — Người thuê #${bIdx}`;
    } else {
      titleEl.textContent = labelMap[qrScannerTarget] || 'Quét mã QR / Tải ảnh thẻ Căn cước công dân (CCCD)';
    }
  }

  if (resultCard) resultCard.hidden = true;
  if (applyBtn) applyBtn.disabled = true;
  const cardApplyBtn = document.getElementById('btn-apply-qr-data-card');
  if (cardApplyBtn) cardApplyBtn.disabled = true;
  const cameraViewport = document.getElementById('qr-camera-viewport');
  if (cameraViewport) cameraViewport.style.display = 'block';
  if (cropPanel) cropPanel.hidden = true;
  if (cameraWrapper) cameraWrapper.hidden = false;
  if (rawInput) rawInput.value = '';
  initAiVisionUI();

  if (modal) {
    modal.hidden = false;
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    startQrCameraStream();
  }
}

function closeQrScannerModal() {
  stopQrCameraStream();
  const modal = document.getElementById('qr-scanner-modal');
  if (modal) modal.hidden = true;

  if (memberModalWasOpen) {
    const memberModal = document.getElementById('member-modal');
    if (memberModal) memberModal.hidden = false;
    memberModalWasOpen = false;
  }
}

async function requestQrCamera() {
  const cropPanel = document.getElementById('qr-crop-panel');
  const cameraWrapper = document.getElementById('qr-camera-wrapper');
  const warningEl = document.getElementById('qr-camera-warning');

  if (cropPanel) cropPanel.hidden = true;
  if (cameraWrapper) cameraWrapper.hidden = false;
  if (warningEl) warningEl.hidden = true;

  stopQrCameraStream();
  await startQrCameraStream();
}

async function startQrCameraStream() {
  const warningEl = document.getElementById('qr-camera-warning');
  const videoEl = document.getElementById('qr-camera-video');
  const cameraWrapper = document.getElementById('qr-camera-wrapper');
  if (warningEl) warningEl.hidden = true;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (warningEl) {
      warningEl.innerHTML = '⚠️ Trình duyệt không hỗ trợ mở camera trực tiếp. Vui lòng bấm <strong>Tải ảnh</strong> hoặc chọn dữ liệu mẫu.';
      warningEl.hidden = false;
    }
    if (cameraWrapper) cameraWrapper.hidden = true;
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    });
    cameraStream = stream;
    if (videoEl) {
      videoEl.srcObject = stream;
      await videoEl.play();
      scanCameraFrameLoop();
    }
    if (cameraWrapper) cameraWrapper.hidden = false;
    if (warningEl) warningEl.hidden = true;
  } catch (err) {
    if (warningEl) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        warningEl.innerHTML = '🔒 <strong>Quyền truy cập Camera đang bị chặn.</strong> Vui lòng bấm vào biểu tượng ổ khóa/camera trên thanh địa chỉ trình duyệt, chọn <em>"Cho phép"</em> Camera rồi bấm lại nút <strong>"Quét QR căn cước"</strong>.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        warningEl.innerHTML = '📷 <strong>Không tìm thấy thiết bị camera</strong> trên máy tính. Bạn hãy bấm nút <strong>Tải ảnh</strong> hoặc tính năng <strong>Đọc bằng AI</strong> bên dưới.';
      } else {
        warningEl.innerHTML = '⚠️ Không thể mở camera. Bạn có thể bấm lại <strong>"Quét QR căn cước"</strong> để thử lại hoặc bấm <strong>Tải ảnh</strong>.';
      }
      warningEl.hidden = false;
    }
    if (cameraWrapper) cameraWrapper.hidden = true;
  }
}

function stopQrCameraStream() {
  if (cameraAnimFrame) {
    cancelAnimationFrame(cameraAnimFrame);
    cameraAnimFrame = null;
  }
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
}

let nativeBarcodeDetector = null;
if (typeof window !== 'undefined' && 'BarcodeDetector' in window) {
  try {
    nativeBarcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });
  } catch (e) {
    nativeBarcodeDetector = null;
  }
}

async function scanCameraFrameLoop() {
  const videoEl = document.getElementById('qr-camera-video');
  if (!cameraStream || !videoEl) return;

  if (videoEl.readyState >= videoEl.HAVE_CURRENT_DATA && videoEl.videoWidth > 0) {
    // 1. Thử BarcodeDetector phần cứng gốc của điện thoại (iOS 17+ & Android cực nhanh)
    if (nativeBarcodeDetector) {
      try {
        const barcodes = await nativeBarcodeDetector.detect(videoEl);
        if (barcodes && barcodes.length > 0 && barcodes[0].rawValue) {
          const parsed = parseCccdQrPayload(barcodes[0].rawValue);
          if (parsed) {
            setScannedQrResult(parsed);
            showToast('Đã quét thành công mã QR CCCD!');
            stopQrCameraStream();
            return;
          }
        }
      } catch (err) {}
    }

    // 2. Fallback jsQR
    if (window.jsQR) {
      const canvas = document.createElement('canvas');
      canvas.width = videoEl.videoWidth;
      canvas.height = videoEl.videoHeight;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (ctx) {
        ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imgData.data, imgData.width, imgData.height, { inversionAttempts: 'attemptBoth' });
        if (code && code.data) {
          const parsed = parseCccdQrPayload(code.data);
          if (parsed) {
            setScannedQrResult(parsed);
            showToast('Đã quét và nhận diện thành công mã QR CCCD!');
            stopQrCameraStream();
            return;
          }
        }
      }
    }
  }

  cameraAnimFrame = requestAnimationFrame(scanCameraFrameLoop);
}

function handleQrImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  stopQrCameraStream();

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      uploadedQrImageObj = {
        src: e.target.result,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        element: img
      };
      const uploadedImgEl = document.getElementById('qr-uploaded-img');
      const cropPanel = document.getElementById('qr-crop-panel');
      const cameraWrapper = document.getElementById('qr-camera-wrapper');
      const selectionBox = document.getElementById('qr-crop-selection-box');
      const btnScanCropped = document.getElementById('btn-scan-cropped');

      if (uploadedImgEl) uploadedImgEl.src = e.target.result;
      if (cameraWrapper) cameraWrapper.hidden = true;
      if (cropPanel) cropPanel.hidden = false;
      if (selectionBox) selectionBox.hidden = true;
      if (btnScanCropped) btnScanCropped.disabled = true;
      cropRect = null;

      // Automatically attempt full-image scan first for convenience
      scanUploadedImage(false, true);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function setupQrCropperEvents() {
  const cropper = document.getElementById('qr-cropper-area');
  const selectionBox = document.getElementById('qr-crop-selection-box');
  const btnScanCropped = document.getElementById('btn-scan-cropped');
  if (!cropper || !selectionBox) return;

  const getRelPt = (e) => {
    const r = cropper.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)),
      y: Math.max(0, Math.min(1, (e.clientY - r.top) / r.height))
    };
  };

  cropper.addEventListener('pointerdown', (e) => {
    isDraggingCrop = true;
    cropStartPt = getRelPt(e);
    cropper.setPointerCapture(e.pointerId);
    cropRect = { left: cropStartPt.x, top: cropStartPt.y, width: 0, height: 0 };
    selectionBox.hidden = false;
  });

  cropper.addEventListener('pointermove', (e) => {
    if (!isDraggingCrop || !cropStartPt) return;
    const cur = getRelPt(e);
    cropRect = {
      left: Math.min(cropStartPt.x, cur.x),
      top: Math.min(cropStartPt.y, cur.y),
      width: Math.abs(cur.x - cropStartPt.x),
      height: Math.abs(cur.y - cropStartPt.y)
    };
    selectionBox.style.left = `${cropRect.left * 100}%`;
    selectionBox.style.top = `${cropRect.top * 100}%`;
    selectionBox.style.width = `${cropRect.width * 100}%`;
    selectionBox.style.height = `${cropRect.height * 100}%`;
  });

  const endDrag = () => {
    if (!isDraggingCrop) return;
    isDraggingCrop = false;
    if (cropRect && cropRect.width >= 0.03 && cropRect.height >= 0.03) {
      if (btnScanCropped) btnScanCropped.disabled = false;
    } else {
      cropRect = null;
      selectionBox.hidden = true;
      if (btnScanCropped) btnScanCropped.disabled = true;
    }
  };

  cropper.addEventListener('pointerup', endDrag);
  cropper.addEventListener('pointercancel', endDrag);
}

async function scanUploadedImage(useCrop, silentIfFail = false) {
  if (!uploadedQrImageObj) return;
  const region = useCrop && cropRect ? cropRect : { left: 0, top: 0, width: 1, height: 1 };

  const sx = Math.round(uploadedQrImageObj.width * region.left);
  const sy = Math.round(uploadedQrImageObj.height * region.top);
  const sw = Math.max(1, Math.round(uploadedQrImageObj.width * region.width));
  const sh = Math.max(1, Math.round(uploadedQrImageObj.height * region.height));

  const canvas = document.createElement('canvas');
  canvas.width = sw;
  canvas.height = sh;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(uploadedQrImageObj.element, sx, sy, sw, sh, 0, 0, sw, sh);

  // 1. Try QR decoding first if jsQR is loaded
  if (window.jsQR) {
    const imgData = ctx.getImageData(0, 0, sw, sh);
    const code = jsQR(imgData.data, sw, sh, { inversionAttempts: 'attemptBoth' });
    const parsed = code && code.data ? parseCccdQrPayload(code.data) : null;

    if (parsed) {
      setScannedQrResult(parsed);
      showToast('Đọc thành công mã QR từ ảnh CCCD!');
      return;
    }
  }

  // 2. TẦNG 2: MÃ QR BỊ MỜ -> MỞ THÔNG BÁO LÝ DO ẢNH MỜ & HƯỚNG DẪN CHUYỂN KHOẢN PHÍ CÔNG NGHỆ AI VISION
  showToast('Ảnh mã QR bị mờ! Đang chuyển sang công nghệ AI Vision...', 'info');
  executeAiVisionOcr();
  return;
}

// ============================================================================
// 8.5 AI VISION OCR FOR CCCD (GIẢI PHÁP 2: BACKEND PROXY & GIẢI PHÁP 3: CHỐNG SPAM)
// ============================================================================
// Khóa dự phòng (chỉ dùng khi không chạy qua Backend Proxy)
const DEFAULT_GEMINI_API_KEY = ""; 
const GEMINI_API_STORAGE_KEY = 'gemini_cccd_api_key';

// GIẢI PHÁP 3: Quản lý Cooldown & Hạn mức phiên chống Click tặc
let isAiVisionScanBusy = false;
let aiVisionCooldownTimer = null;
const AI_COOLDOWN_SECONDS = 15;        // Thời gian chờ 15s giữa 2 lần quét
const MAX_DAILY_AI_SCANS = 10;          // Tối đa 10 lượt quét/ngày mỗi thiết bị
const AI_SCAN_TRACKER_KEY = 'doantm_ai_scan_daily_quota';

function getDailyAiScanCount() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const raw = localStorage.getItem(AI_SCAN_TRACKER_KEY);
    if (!raw) return 0;
    const data = JSON.parse(raw);
    return data.date === today ? (data.count || 0) : 0;
  } catch (e) {
    return 0;
  }
}

function incrementDailyAiScanCount() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const current = getDailyAiScanCount();
    localStorage.setItem(AI_SCAN_TRACKER_KEY, JSON.stringify({ date: today, count: current + 1 }));
  } catch (e) {}
}

function startAiVisionCooldown(seconds = AI_COOLDOWN_SECONDS) {
  const btnTrigger = document.getElementById('btn-trigger-ai-vision');
  if (!btnTrigger) return;
  let remain = seconds;
  btnTrigger.disabled = true;

  if (aiVisionCooldownTimer) clearInterval(aiVisionCooldownTimer);
  btnTrigger.innerHTML = `<span>⏳ Chờ (${remain}s)...</span>`;

  aiVisionCooldownTimer = setInterval(() => {
    remain--;
    if (remain <= 0) {
      clearInterval(aiVisionCooldownTimer);
      aiVisionCooldownTimer = null;
      btnTrigger.disabled = false;
      btnTrigger.innerHTML = '<i data-lucide="bot" style="width:14px;height:14px;"></i><span>Đọc bằng AI</span>';
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    } else {
      btnTrigger.innerHTML = `<span>⏳ Chờ (${remain}s)...</span>`;
    }
  }, 1000);
}

function getStoredGeminiKey() {
  try {
    return localStorage.getItem(GEMINI_API_STORAGE_KEY) || DEFAULT_GEMINI_API_KEY || '';
  } catch (e) {
    return DEFAULT_GEMINI_API_KEY || '';
  }
}

function toggleHouseInfoDrawer(forceOpen) {
  const drawer = document.getElementById('house-info-drawer');
  const chevron = document.getElementById('house-info-chevron');
  if (!drawer) return;
  const isHidden = drawer.style.display === 'none' || drawer.style.display === '';
  const shouldOpen = forceOpen !== undefined ? forceOpen : isHidden;
  drawer.style.display = shouldOpen ? 'block' : 'none';
  if (chevron) {
    chevron.style.transform = shouldOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

function updateHouseInfoBadge() {
  const summaryEl = document.getElementById('house-info-summary-text');
  const badgeEl = document.getElementById('house-info-badge-status');
  if (!summaryEl || !badgeEl) return;

  const parts = [];
  if (formState.houseNo) parts.push(formState.houseNo);
  if (formState.street) parts.push(formState.street);
  if (formState.ward) parts.push(formState.ward);
  if (formState.city) parts.push(formState.city);

  if (parts.length > 0) {
    summaryEl.textContent = parts.join(', ');
    badgeEl.textContent = '✓ Đã điền';
    badgeEl.className = 'house-badge-status filled';
  } else {
    summaryEl.textContent = 'Bấm để nhập số nhà, tên đường, thời gian hợp đồng...';
    badgeEl.textContent = 'Chưa điền';
    badgeEl.className = 'house-badge-status';
  }
}

// Giữ placeholder cho các hàm thanh toán cũ để tránh lỗi gọi hàm
function openAiVisionPaymentModal() {}
function closeAiPaymentModal() {}
function confirmPaidAndRunAiVision() {}
function copyAiPaymentText() {}

function initAiVisionUI() {
  const key = getStoredGeminiKey();
  const statusEl = document.getElementById('ai-vision-key-status');
  const inputEl = document.getElementById('gemini-api-key-input');
  if (statusEl) {
    if (key) {
      statusEl.textContent = '✓ Khóa API: Đã kết nối';
      statusEl.style.color = '#059669';
    } else {
      statusEl.textContent = 'Cài đặt Khóa API';
      statusEl.style.color = '#0284c7';
    }
  }
  if (inputEl && key) {
    inputEl.value = key;
  }
}

function toggleAiVisionKeyConfig(forceOpen) {
  const drawer = document.getElementById('ai-vision-key-drawer');
  if (!drawer) return;
  const isHidden = drawer.style.display === 'none' || drawer.style.display === '';
  const shouldOpen = forceOpen !== undefined ? forceOpen : isHidden;
  drawer.style.display = shouldOpen ? 'flex' : 'none';
  if (shouldOpen) {
    const inputEl = document.getElementById('gemini-api-key-input');
    if (inputEl) inputEl.focus();
  }
}

function saveGeminiApiKey() {
  const inputEl = document.getElementById('gemini-api-key-input');
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) {
    localStorage.removeItem(GEMINI_API_STORAGE_KEY);
    initAiVisionUI();
  updateCccdSideTabsUI();
    showToast('Đã xóa khóa Gemini API.', 'info');
    toggleAiVisionKeyConfig(false);
    return;
  }
  localStorage.setItem(GEMINI_API_STORAGE_KEY, val);
  initAiVisionUI();
  updateCccdSideTabsUI();
  toggleAiVisionKeyConfig(false);
  showToast('✓ Đã lưu Google Gemini API Key an toàn trong trình duyệt của bạn!');
}

function triggerAiVisionScan() {
  const videoEl = document.getElementById('qr-camera-video');
  // Nếu đang mở camera và chưa có ảnh chọn từ trước, tự động chụp khung hình camera hiện tại
  if (!uploadedQrImageObj && videoEl && cameraStream && videoEl.videoWidth > 0) {
    try {
      const snapCanvas = document.createElement('canvas');
      snapCanvas.width = videoEl.videoWidth;
      snapCanvas.height = videoEl.videoHeight;
      const sCtx = snapCanvas.getContext('2d');
      sCtx.drawImage(videoEl, 0, 0, snapCanvas.width, snapCanvas.height);
      uploadedQrImageObj = {
        element: snapCanvas,
        width: snapCanvas.width,
        height: snapCanvas.height
      };
      // Tạm dừng video để người dùng thấy ảnh đã được chụp
      stopQrCameraStream();
      const cameraViewport = document.getElementById('qr-camera-viewport');
      if (cameraViewport) cameraViewport.style.display = 'none';
      const cropPanel = document.getElementById('qr-crop-panel');
      if (cropPanel) cropPanel.hidden = false;
      const imgPreview = document.getElementById('qr-image-preview');
      if (imgPreview) {
        imgPreview.src = snapCanvas.toDataURL('image/jpeg', 0.9);
      }
      showToast('Đã chụp ảnh thẻ từ camera, đang phân tích thông tin...', 'info');
    } catch (camErr) {
      console.warn('Lỗi chụp từ camera stream:', camErr);
    }
  }

  if (!uploadedQrImageObj) {
    showToast('Vui lòng chọn ảnh CCCD hoặc bật camera trước khi kích hoạt AI.', 'info');
    const fileInput = document.getElementById('qr-file-input');
    if (fileInput) fileInput.click();
    return;
  }
  executeAiVisionOcr();
}

async function executeAiVisionOcr() {
  if (!uploadedQrImageObj) return;

  // Chặn click liên hồi
  if (isAiVisionScanBusy) {
    showToast('Hệ thống đang phân tích ảnh, vui lòng không bấm liên tục.', 'warn');
    return;
  }

  // Chặn khi đang trong thời gian Cooldown đếm ngược
  if (aiVisionCooldownTimer) {
    showToast('Vui lòng chờ hết thời gian đếm ngược trước khi quét tiếp.', 'warn');
    return;
  }

  // Kiểm tra hạn mức quét tối đa trong ngày
  const dailyUsed = getDailyAiScanCount();
  if (dailyUsed >= MAX_DAILY_AI_SCANS) {
    showToast(`Bạn đã đạt hạn mức tối đa ${MAX_DAILY_AI_SCANS} lượt quét AI trong ngày để chống spam. Vui lòng quay lại vào ngày mai!`, 'error');
    return;
  }

  const indicator = document.getElementById('ai-vision-status-indicator');
  const statusText = document.getElementById('ai-vision-status-text');
  const btnTrigger = document.getElementById('btn-trigger-ai-vision');
  const originalBtnHtml = btnTrigger ? btnTrigger.innerHTML : '';

  try {
    isAiVisionScanBusy = true;

    if (indicator) {
      indicator.style.display = 'flex';
      if (statusText) statusText.textContent = '🤖 Đang chuẩn bị hình ảnh và phân tích dữ liệu CCCD...';
    }
    if (btnTrigger) {
      btnTrigger.disabled = true;
      btnTrigger.innerHTML = '<span>⏳ Đang đọc CCCD...</span>';
    }

    // 1. Chuẩn bị ảnh Base64
    const region = cropRect ? cropRect : { left: 0, top: 0, width: 1, height: 1 };
    const sx = Math.round(uploadedQrImageObj.width * region.left);
    const sy = Math.round(uploadedQrImageObj.height * region.top);
    const sw = Math.max(1, Math.round(uploadedQrImageObj.width * region.width));
    const sh = Math.max(1, Math.round(uploadedQrImageObj.height * region.height));

    const maxDim = 1280;
    let targetW = sw;
    let targetH = sh;
    if (targetW > maxDim || targetH > maxDim) {
      if (targetW > targetH) {
        targetH = Math.round((targetH * maxDim) / targetW);
        targetW = maxDim;
      } else {
        targetW = Math.round((targetW * maxDim) / targetH);
        targetH = maxDim;
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(uploadedQrImageObj.element, sx, sy, sw, sh, 0, 0, targetW, targetH);

    const base64Jpeg = canvas.toDataURL('image/jpeg', 0.85);

    let parsedData = null;
    let scanMethodName = '';

    // BƯỚC 1: Quét mã QR trên khung ảnh tĩnh trước (nhanh nhất & 100% chuẩn xác)
    try {
      let qrRaw = null;
      if (typeof window.BarcodeDetector !== 'undefined') {
        const detector = new window.BarcodeDetector({ formats: ['qr_code'] });
        const barcodes = await detector.detect(canvas);
        if (barcodes && barcodes.length > 0 && barcodes[0].rawValue) {
          qrRaw = barcodes[0].rawValue;
        }
      }
      if (!qrRaw && typeof window.jsQR !== 'undefined') {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = window.jsQR(imgData.data, imgData.width, imgData.height, { inversionAttempts: 'attemptBoth' });
        if (code && code.data) {
          qrRaw = code.data;
        }
      }
      if (qrRaw) {
        const qrParsed = parseCccdQrPayload(qrRaw);
        if (qrParsed && (qrParsed.citizenId || qrParsed.fullName)) {
          parsedData = qrParsed;
          scanMethodName = 'Mã QR trên thẻ (Chuẩn 100%)';
        }
      }
    } catch (qrErr) {
      console.warn('QR check failed on still canvas:', qrErr);
    }

    // BƯỚC 2: Thử gọi Cloud AI Backend Proxy (/api/scan-cccd)
    if (!parsedData) {
      if (statusText) statusText.textContent = '🤖 Đang kết nối AI Vision để đọc chữ trên thẻ...';
      let backendUrl = '/api/scan-cccd';
      if (window.location.protocol === 'file:' || !window.location.host) {
        backendUrl = 'http://localhost:8000/api/scan-cccd';
      }

      try {
        const proxyResp = await fetch(backendUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64Jpeg })
        });

        if (proxyResp.ok) {
          const json = await proxyResp.json();
          if (json && json.ok && json.data) {
            parsedData = json.data;
            scanMethodName = 'Google AI Vision (Server)';
          }
        }
      } catch (proxyErr) {
        console.warn('Backend proxy call failed:', proxyErr.message);
      }
    }

    // BƯỚC 3: Thử gọi Google Gemini API trực tiếp (nếu có key lưu ở Client)
    if (!parsedData) {
      const apiKey = getStoredGeminiKey();
      if (apiKey) {
        try {
          if (statusText) statusText.textContent = '🤖 Đang kết nối Google Gemini API trực tiếp...';
          const base64Data = base64Jpeg.replace(/^data:image\/[a-z]+;base64,/, '');
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
                { inline_data: { mime_type: "image/jpeg", data: base64Data } }
              ]
            }],
            generationConfig: {
              response_mime_type: "application/json",
              temperature: 0.1
            }
          };

          const clientModels = ['gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-3-flash-preview', 'gemini-3.5-flash-lite', 'gemini-flash-latest'];
          let response = null;
          for (const cModel of clientModels) {
            try {
              response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${cModel}:generateContent?key=${encodeURIComponent(apiKey)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
              });
              if (response && response.ok) break;
            } catch (netErr) {}
          }
          if (response.ok) {
            const data = await response.json();
            const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            let cleanJson = rawText.trim();
            if (cleanJson.startsWith('```json')) cleanJson = cleanJson.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
            else if (cleanJson.startsWith('```')) cleanJson = cleanJson.replace(/^```\s*/, '').replace(/\s*```$/, '');
            parsedData = JSON.parse(cleanJson);
            scanMethodName = 'Google AI Vision (Trực tiếp)';
          }
        } catch (clientErr) {
          console.warn('Direct client Gemini failed:', clientErr);
        }
      }
    }

    // BƯỚC 4: Fallback OCR tích hợp chạy trên trình duyệt (Tesseract.js)
    // Hoàn toàn không cần API Key, không phụ thuộc server, chạy trực tiếp trên thiết bị!
    if (!parsedData && typeof window.Tesseract !== 'undefined') {
      try {
        if (statusText) statusText.textContent = '🔍 Đang đọc chữ trên CCCD bằng bộ đọc tích hợp (Tesseract)...';
        let ocrResult = null;
        try {
          ocrResult = await window.Tesseract.recognize(canvas, 'vie', {
            logger: m => {
              if (statusText && m.status === 'recognizing text') {
                const pct = Math.round((m.progress || 0) * 100);
                statusText.textContent = `🔍 Đang đọc chữ CCCD: ${pct}%...`;
              }
            }
          });
        } catch (tessVieErr) {
          console.warn('Tesseract vie failed, trying eng:', tessVieErr);
          ocrResult = await window.Tesseract.recognize(canvas, 'eng');
        }

        const ocrRawText = ocrResult?.data?.text || '';
        if (ocrRawText) {
          const ocrParsed = parseCccdOcrText(ocrRawText);
          if (ocrParsed && (ocrParsed.citizenId || ocrParsed.fullName)) {
            parsedData = ocrParsed;
            scanMethodName = 'Bộ đọc AI tích hợp (Trình duyệt)';
          }
        }
      } catch (tessErr) {
        console.warn('Client OCR error:', tessErr);
      }
    }

    if (!parsedData) {
      throw new Error('Chưa nhận diện được dữ liệu CCCD từ ảnh này. Vui lòng chụp rõ nét hơn hoặc nhập trực tiếp.');
    }

    // Chuẩn hóa dữ liệu nhận diện
    const cleanId = (parsedData.citizenId || '').replace(/\D/g, '');
    const cleanName = (parsedData.fullName || '').trim().toUpperCase();
    const cleanDob = (parsedData.birthDate || '').trim();
    const cleanGender = (parsedData.gender || '').trim();
    const cleanAddress = (parsedData.permanentAddress || parsedData.address || '').trim();
    const cleanIssue = (parsedData.issueDate || '').trim();

    if (!cleanId && !cleanName) {
      throw new Error('Không trích xuất được số CCCD hoặc Họ tên từ ảnh. Vui lòng chụp rõ hơn.');
    }

    const finalParsed = {
      citizenId: cleanId,
      fullName: cleanName,
      birthDate: cleanDob,
      gender: cleanGender || 'Nam',
      address: cleanAddress,
      issueDate: cleanIssue
    };

    startAiVisionCooldown(AI_COOLDOWN_SECONDS);
    setScannedQrResult(finalParsed);
    showToast(`✨ ${scanMethodName || 'AI'}: Đã nhận diện được ${finalParsed.fullName || finalParsed.citizenId}!`);
  } catch (err) {
    console.error('AI Vision OCR Error:', err);
    showToast(err.message || 'Không thể đọc được CCCD bằng AI. Vui lòng chụp lại ảnh rõ nét.', 'error');
  } finally {
    isAiVisionScanBusy = false;
    if (indicator) indicator.style.display = 'none';
    if (btnTrigger && originalBtnHtml && !aiVisionCooldownTimer) {
      btnTrigger.disabled = false;
      btnTrigger.innerHTML = originalBtnHtml;
    }
  }
}

function parseRawQrInput() {
  const input = document.getElementById('qr-raw-string-input');
  if (!input || !input.value.trim()) {
    showToast('Vui lòng dán chuỗi mã QR hoặc văn bản thông tin CCCD vào ô.', 'warn');
    return;
  }
  const parsed = parseCccdQrPayload(input.value.trim());
  if (!parsed) {
    showToast('Không nhận diện được định dạng CCCD (Hỗ trợ mã QR dạng | hoặc dạng văn bản: Số CCCD, Họ tên, Ngày sinh...).', 'error');
    return;
  }
  setScannedQrResult(parsed);
  showToast(`Đã nhận diện thông tin công dân: ${parsed.fullName}`);
}

function applySampleQrPreset(presetKey) {
  const raw = SAMPLE_QR_PRESETS[presetKey];
  if (!raw) return;
  const input = document.getElementById('qr-raw-string-input');
  if (input) input.value = raw;
  const parsed = parseCccdQrPayload(raw);
  if (parsed) {
    setScannedQrResult(parsed);
    showToast(`Đã nạp mẫu CCCD: ${parsed.fullName}`);
  }
}

function setScannedQrResult(parsed) {
  if (!parsed) return;
  scannedQrResult = parsed;
  setText('scanned-res-id', parsed.citizenId || '---');
  setText('scanned-res-name', parsed.fullName || '---');
  setText('scanned-res-dob', parsed.birthDate || '---');
  setText('scanned-res-gender', parsed.gender || '---');
  setText('scanned-res-address', parsed.address || '(Mặt trước không có địa chỉ - quét thêm mặt sau hoặc nhập tay)');

  const resultCard = document.getElementById('qr-scanned-result-card');
  const applyBtn = document.getElementById('btn-apply-qr-data');
  const cardApplyBtn = document.getElementById('btn-apply-qr-data-card');

  if (resultCard) {
    resultCard.hidden = false;
    setTimeout(() => {
      try {
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } catch (e) {}
    }, 80);
  }

  if (applyBtn) {
    applyBtn.disabled = false;
  }
  if (cardApplyBtn) {
    cardApplyBtn.disabled = false;
  }

  // Dừng camera và thu gọn khung camera để nhường không gian hiển thị kết quả & nút bấm
  stopQrCameraStream();
  const cameraViewport = document.getElementById('qr-camera-viewport');
  if (cameraViewport) {
    cameraViewport.style.display = 'none';
  }
}

function confirmApplyScannedQr() {
  if (!scannedQrResult) return;
  const t = scannedQrResult;

  if (qrScannerTarget === 'landlord') {
    formState.landlordName = t.fullName || formState.landlordName;
    formState.landlordBirthYear = t.birthDate || t.birthYear || formState.landlordBirthYear;
    formState.landlordId = t.citizenId || formState.landlordId;
    formState.landlordAddress = t.address || formState.landlordAddress;
    renderAllA4AndCards();
    showToast(`Đã tự động điền thông tin Chủ nhà (Bên A) từ CCCD của ${t.fullName}`);
  } else if (qrScannerTarget === 'tenant') {
    formState.fullName = t.fullName || formState.fullName;
    formState.birthDate = t.birthDate || formState.birthDate;
    formState.gender = t.gender || formState.gender;
    formState.citizenId = t.citizenId || formState.citizenId;
    formState.permanentAddress = t.address || formState.permanentAddress;
    renderAllA4AndCards();
    showToast(`Đã tự động điền thông tin Người kê khai (Bên B) từ CCCD của ${t.fullName}`);
  } else if (qrScannerTarget === 'member') {
    const memberModal = document.getElementById('member-modal');
    if (memberModal) memberModal.hidden = false;
    memberModalWasOpen = false;

    const nameEl = document.getElementById('member-fullName');
    const dobEl = document.getElementById('member-birthDate');
    const genderEl = document.getElementById('member-gender');
    const idEl = document.getElementById('member-citizenId');
    if (nameEl) nameEl.value = (t.fullName || '').toUpperCase();
    if (dobEl && t.birthDate) {
      const iso = convertDdMmYyyyToIso(t.birthDate) || t.birthDate;
      dobEl.value = iso;
    }
    if (genderEl && t.gender) genderEl.value = t.gender;
    if (idEl) idEl.value = t.citizenId || '';
    showToast(`Đã tự động nhận diện thành viên: ${t.fullName}`);
  } else if (qrScannerTarget === 'citizen-app') {
    citizenAppState.fullName = t.fullName || citizenAppState.fullName;
    citizenAppState.birthDate = convertDdMmYyyyToIso(t.birthDate) || citizenAppState.birthDate;
    citizenAppState.citizenId = t.citizenId || citizenAppState.citizenId;
    citizenAppState.permanentAddress = t.address || citizenAppState.permanentAddress;
    citizenAppState.issueDate = convertDdMmYyyyToIso(t.issueDate) || citizenAppState.issueDate;
    renderCitizenAppPreview();
    showToast(`Đã điền thông tin đơn từ CCCD của ${t.fullName}`);
  } else if (qrScannerTarget === 'batch-landlord') {
    batchState.landlord.fullName = t.fullName || batchState.landlord.fullName;
    batchState.landlord.birthYear = t.birthYear || extractBirthYearOnly(t.birthDate) || batchState.landlord.birthYear;
    batchState.landlord.citizenId = t.citizenId || batchState.landlord.citizenId;
    batchState.landlord.permanentAddress = t.address || batchState.landlord.permanentAddress;
    syncBatchLandlordInputs();
    showToast(`Đã tự động điền thông tin Chủ nhà (Bên A): ${t.fullName}`);
  } else if (qrScannerTarget.startsWith('batch-tenant-')) {
    const idx = parseInt(qrScannerTarget.replace('batch-tenant-', ''), 10);
    if (batchState.tenants && batchState.tenants[idx]) {
      const cur = batchState.tenants[idx];
      cur.fullName = t.fullName || cur.fullName;
      cur.birthDate = t.birthDate || cur.birthDate;
      cur.gender = t.gender || cur.gender;
      cur.citizenId = t.citizenId || cur.citizenId;
      cur.permanentAddress = t.address || cur.permanentAddress;
      renderBatchTenantsList();
      showToast(`Đã tự động điền thông tin người thuê #${idx + 1}: ${t.fullName}`);
    }
  }

  closeQrScannerModal();
}

// ============================================================================
// 9. FAMILY MEMBERS MODAL (MỤC 11 CT01)
// ============================================================================
let editingMemberId = null;

function openDirectMemberScan() {
  if (formState.members && formState.members.length >= 9) {
    showToast('Tối đa 9 thành viên trong bảng Mục 11.', 'warn');
    return;
  }
  openMemberModal(null);
  openQrScannerModal('member');
}

function openMemberModal(memberId = null) {
  editingMemberId = memberId;
  const modal = document.getElementById('member-modal');
  const title = document.getElementById('member-modal-title');
  const form = document.getElementById('member-form');
  if (!modal || !form) return;

  form.reset();
  if (memberId) {
    const existing = formState.members.find(m => m.id === memberId);
    if (existing) {
      if (title) title.textContent = 'Sửa thông tin thành viên';
      document.getElementById('member-fullName').value = existing.fullName || '';
      document.getElementById('member-birthDate').value = convertDdMmYyyyToIso(existing.birthDate);
      document.getElementById('member-gender').value = existing.gender || '';
      document.getElementById('member-citizenId').value = existing.citizenId || '';
      document.getElementById('member-relationship').value = existing.relationship || '';
    }
  } else {
    if (title) title.textContent = 'Thêm thành viên cùng thay đổi';
  }

  modal.hidden = false;
  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeMemberModal() {
  const modal = document.getElementById('member-modal');
  if (modal) modal.hidden = true;
}

function saveMemberForm(event) {
  event.preventDefault();
  if (!editingMemberId && formState.members.length >= 9) {
    showToast('Tối đa 9 thành viên trong bảng Mục 11.', 'warn');
    return;
  }

  const fullName = document.getElementById('member-fullName').value.trim();
  const isoDob = document.getElementById('member-birthDate').value;
  const gender = document.getElementById('member-gender').value;
  const citizenId = document.getElementById('member-citizenId').value.trim();
  const relationship = document.getElementById('member-relationship').value.trim();

  const [y, m, d] = isoDob.split('-');
  const formattedDob = y && m && d ? `${d}/${m}/${y}` : isoDob;

  const memberObj = {
    id: editingMemberId || `mem-${Date.now()}`,
    fullName,
    birthDate: formattedDob,
    gender,
    citizenId,
    relationship
  };

  if (editingMemberId) {
    formState.members = formState.members.map(item => (item.id === editingMemberId ? memberObj : item));
  } else {
    formState.members.push(memberObj);
  }

  renderAllA4AndCards();
  closeMemberModal();
  showToast('Đã lưu thành viên vào Mục 11 tờ khai CT01.');
}

function deleteMember(memberId) {
  formState.members = formState.members.filter(m => m.id !== memberId);
  renderAllA4AndCards();
}

// ============================================================================
// 10. QUICK DEMO DATA & RESET
// ============================================================================
function fillDemoData() {
  formState.landlordName = 'TRẦN VĂN HÙNG';
  formState.landlordBirthYear = '12/05/1975';
  formState.landlordId = '079075009876';
  formState.landlordAddress = 'Số 123/45 Đường Nguyễn Văn Nghi, Phường An Nhơn, TP. Hồ Chí Minh';

  formState.fullName = 'NGUYỄN VĂN AN';
  formState.birthDate = '15/08/1995';
  formState.gender = 'Nam';
  formState.citizenId = '079095012345';
  formState.phone = '0909 888 686';
  formState.email = 'nguyenvanan.dvc@gmail.com';
  formState.permanentAddress = '456 Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh';

  formState.requestContent = activeFormKey === 'ct04' ? 'Đăng ký thường trú' : 'Đăng ký tạm trú';
  const radioReg = document.getElementById('radio-req-register');
  const radioDel = document.getElementById('radio-req-delete');
  if (radioReg) radioReg.checked = true;
  if (radioDel) radioDel.checked = false;

  formState.houseNo = '123/45';
  formState.street = 'Đường Nguyễn Văn Nghi';
  formState.ward = 'Phường An Nhơn';
  formState.city = 'TP. Hồ Chí Minh';

  formState.members = [
    {
      id: 'demo-mem-1',
      fullName: 'LÊ THỊ NGỌC MAI',
      birthDate: '22/11/1998',
      gender: 'Nữ',
      citizenId: '048198006789',
      relationship: 'Vợ'
    },
    {
      id: 'demo-mem-2',
      fullName: 'NGUYỄN MINH KHÔI',
      birthDate: '10/06/2022',
      gender: 'Nam',
      citizenId: '079222004567',
      relationship: 'Con ruột'
    }
  ];

  renderAllA4AndCards();
  showToast('Đã điền bộ dữ liệu mẫu vào Tờ khai CT01 & Hợp đồng cư trú!');
}

function resetAllFormData() {
  const savedMoveIn = formState.moveInDate;
  formState = JSON.parse(JSON.stringify(INITIAL_FORM_STATE));
  formState.moveInDate = savedMoveIn;
  formState.requestContent = activeFormKey === 'ct04' ? 'Đăng ký thường trú' : 'Đăng ký tạm trú';
  const radioReg = document.getElementById('radio-req-register');
  const radioDel = document.getElementById('radio-req-delete');
  if (radioReg) radioReg.checked = true;
  if (radioDel) radioDel.checked = false;
  clearSignature('landlord');
  clearSignature('tenant');
  renderAllA4AndCards();
  showToast('Đã làm mới toàn bộ biểu mẫu.', 'warn');
}

// ============================================================================
// 11. EXPORT 2-PAGE A4 PDF & DUAL JPG (EXACT CAPAN.VN SPECIFICATION)
// ============================================================================
async function renderA4PagesToCanvases() {
  const pageIds = ['ct01-doc-page-print', 'contract-doc-page-print'];
  const elements = pageIds.map(id => {
    const el = document.getElementById(id);
    if (!el) throw new Error('Không tìm thấy bản xem trước A4');
    return el;
  });

  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (e) {}
  }

  const targetW = 1240;
  const targetH = 1754;
  const A4_SRC_W = 794;
  const A4_SRC_H = 1123;
  const exportScale = targetW / A4_SRC_W; // ~1.561713 -> exact 1240 x 1754

  const canvases = [];
  for (const el of elements) {
    const rawCanvas = await html2canvas(el, {
      backgroundColor: '#ffffff',
      scale: exportScale,
      windowWidth: 1240,
      windowHeight: 1800,
      width: A4_SRC_W,
      height: A4_SRC_H,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      logging: false,
      useCORS: true,
      allowTaint: true,
      onclone: (doc, clonedEl) => {
        // Force the iframe document to desktop width so no mobile media queries apply
        if (doc.documentElement) {
          doc.documentElement.style.width = '1240px';
          doc.documentElement.style.minWidth = '1240px';
          doc.documentElement.style.maxWidth = 'none';
          doc.documentElement.style.overflow = 'visible';
        }
        if (doc.body) {
          doc.body.style.width = '1240px';
          doc.body.style.minWidth = '1240px';
          doc.body.style.maxWidth = 'none';
          doc.body.style.margin = '0';
          doc.body.style.padding = '0';
          doc.body.style.overflow = 'visible';
        }

        // Reset transforms and bounds on all ancestors of clonedEl
        for (let p = clonedEl.parentElement; p; p = p.parentElement) {
          p.style.transform = 'none';
          p.style.webkitTransform = 'none';
          p.style.zoom = '1';
          p.style.overflow = 'visible';
          p.style.margin = '0';
          p.style.padding = '0';
          p.style.width = '1240px';
          p.style.minWidth = '1240px';
          p.style.maxWidth = 'none';
          p.style.opacity = '1';
          p.style.visibility = 'visible';
          p.style.position = 'static';
          p.style.left = '0';
          p.style.top = '0';
        }

        // Apply strict A4 dimensions to cloned element
        clonedEl.classList.add('a4-export-page');
        clonedEl.style.opacity = '1';
        clonedEl.style.visibility = 'visible';
        clonedEl.style.display = 'block';
        clonedEl.style.width = `${A4_SRC_W}px`;
        clonedEl.style.minWidth = `${A4_SRC_W}px`;
        clonedEl.style.maxWidth = `${A4_SRC_W}px`;
        clonedEl.style.height = `${A4_SRC_H}px`;
        clonedEl.style.minHeight = `${A4_SRC_H}px`;
        clonedEl.style.maxHeight = `${A4_SRC_H}px`;
        clonedEl.style.boxSizing = 'border-box';
        clonedEl.style.margin = '0';
        clonedEl.style.padding = '16mm 15mm 16mm 22mm';
        clonedEl.style.transform = 'none';
        clonedEl.style.webkitTransform = 'none';
        clonedEl.style.zoom = '1';
        clonedEl.style.boxShadow = 'none';
        clonedEl.style.overflow = 'hidden';

        // 1. Force CT01 4-column signature row horizontal
        const sigContainer = clonedEl.querySelector('.ct01-signatures-container');
        if (sigContainer) {
          sigContainer.style.setProperty('display', 'flex', 'important');
          sigContainer.style.setProperty('flex-direction', 'row', 'important');
          sigContainer.style.setProperty('flex-wrap', 'nowrap', 'important');
          sigContainer.style.setProperty('align-items', 'stretch', 'important');
          sigContainer.style.setProperty('width', '100%', 'important');
          sigContainer.style.setProperty('min-height', '185px', 'important');
          sigContainer.style.setProperty('border', 'none', 'important');
        }
        const sigCols = clonedEl.querySelectorAll('.ct01-sig-col');
        const colWidths = ['26.8%', '25.2%', '24.8%', '23.2%'];
        sigCols.forEach((col, idx) => {
          col.style.setProperty('display', 'flex', 'important');
          col.style.setProperty('flex-direction', 'column', 'important');
          col.style.setProperty('align-items', 'center', 'important');
          col.style.setProperty('flex', `0 0 ${colWidths[idx] || '25%'}`, 'important');
          col.style.setProperty('width', colWidths[idx] || '25%', 'important');
          col.style.setProperty('max-width', colWidths[idx] || '25%', 'important');
          col.style.setProperty('min-width', '0', 'important');
          col.style.setProperty('border', 'none', 'important');
        });

        // 2. Force Contract 2-column signature row horizontal
        const contractSigTable = clonedEl.querySelector('.contract-signature-table');
        if (contractSigTable) {
          contractSigTable.style.setProperty('display', 'flex', 'important');
          contractSigTable.style.setProperty('flex-direction', 'row', 'important');
          contractSigTable.style.setProperty('flex-wrap', 'nowrap', 'important');
          contractSigTable.style.setProperty('justify-content', 'space-between', 'important');
          contractSigTable.style.setProperty('width', '100%', 'important');
          contractSigTable.style.setProperty('padding', '0 35px', 'important');
        }
        const contractSigCells = clonedEl.querySelectorAll('.contract-sig-cell');
        contractSigCells.forEach(cell => {
          cell.style.setProperty('display', 'flex', 'important');
          cell.style.setProperty('flex-direction', 'column', 'important');
          cell.style.setProperty('align-items', 'center', 'important');
          cell.style.setProperty('flex', '0 0 220px', 'important');
          cell.style.setProperty('width', '220px', 'important');
        });

        // 3. Force flex horizontal on household and ID lines
        const householdLine = clonedEl.querySelector('.ct01-household-line');
        if (householdLine) {
          householdLine.style.setProperty('display', 'flex', 'important');
          householdLine.style.setProperty('flex-direction', 'row', 'important');
          householdLine.style.setProperty('flex-wrap', 'nowrap', 'important');
        }
        const idLine = clonedEl.querySelector('.ct01-id-line');
        if (idLine) {
          idLine.style.setProperty('display', 'flex', 'important');
          idLine.style.setProperty('flex-direction', 'row', 'important');
          idLine.style.setProperty('flex-wrap', 'nowrap', 'important');
        }
      }
    });

    const a4Canvas = document.createElement('canvas');
    a4Canvas.width = targetW;
    a4Canvas.height = targetH;
    const ctx = a4Canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetW, targetH);
    ctx.drawImage(rawCanvas, 0, 0, targetW, targetH);
    canvases.push(a4Canvas);
  }

  return canvases;
}

function buildMultiPagePdfBlob(canvases) {
  const chunks = [];
  const offsets = [0];
  let totalLen = 0;

  const pushBytes = (data) => {
    const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
    chunks.push(bytes);
    totalLen += bytes.length;
  };

  const objects = [];
  const addObject = (data) => {
    const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
    objects.push(bytes);
    return objects.length;
  };

  const concatUint8 = (...arrays) => {
    const total = arrays.reduce((acc, a) => acc + a.length, 0);
    const out = new Uint8Array(total);
    let pos = 0;
    arrays.forEach(a => {
      out.set(a, pos);
      pos += a.length;
    });
    return out;
  };

  const imgObjIndices = canvases.map(canvas => {
    const b64 = canvas.toDataURL('image/jpeg', 0.96).split(',')[1];
    const binStr = atob(b64);
    const jpegBytes = Uint8Array.from(binStr, c => c.charCodeAt(0));
    return addObject(
      concatUint8(
        new TextEncoder().encode(
          `<< /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`
        ),
        jpegBytes,
        new TextEncoder().encode('\nendstream')
      )
    );
  });

  const pageObjIndices = canvases.map((_, idx) => {
    const streamCmd = new TextEncoder().encode(`q\n595 0 0 842 0 0 cm\n/Im${idx + 1} Do\nQ\n`);
    const contentIdx = addObject(
      `<< /Length ${streamCmd.length} >>\nstream\n${new TextDecoder().decode(streamCmd)}endstream`
    );
    return addObject(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im${idx + 1} ${imgObjIndices[idx] + 2} 0 R >> >> /Contents ${contentIdx + 2} 0 R >>`
    );
  });

  objects.unshift(new TextEncoder().encode('<< /Type /Catalog /Pages 2 0 R >>'));
  objects.splice(
    1,
    0,
    new TextEncoder().encode(
      `<< /Type /Pages /Kids [${pageObjIndices.map(i => `${i + 2} 0 R`).join(' ')}] /Count ${pageObjIndices.length} >>`
    )
  );

  pushBytes('%PDF-1.4\n');
  objects.forEach((objBytes, idx) => {
    offsets[idx + 1] = totalLen;
    pushBytes(`${idx + 1} 0 obj\n`);
    pushBytes(objBytes);
    pushBytes('\nendobj\n');
  });

  const xrefOffset = totalLen;
  pushBytes(
    `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${objects
      .map((_, idx) => `${String(offsets[idx + 1]).padStart(10, '0')} 00000 n \n`)
      .join('')}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`
  );

  return new Blob(chunks, { type: 'application/pdf' });
}

function triggerBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

async function exportTwoPagePdf() {
  const btn = document.getElementById('btn-download-pdf');
  try {
    if (btn) btn.disabled = true;
    showToast('Đang xuất file PDF 2 trang A4 chất lượng cao...');
    const canvases = await renderA4PagesToCanvases();
    const pdfBlob = buildMultiPagePdfBlob(canvases);
    const cleanName = (formState.fullName || 'CongDan').trim().replace(/\s+/g, '_');
    triggerBlobDownload(pdfBlob, `HoSoCuTru_2Trang_A4_${cleanName}.pdf`);
    showToast('File PDF 2 trang A4 đã sẵn sàng để lưu!');
  } catch (err) {
    console.error(err);
    showToast('Có lỗi khi tạo file PDF A4.', 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}

function canvasToJpegBlob(canvas, quality = 0.95) {
  return new Promise(resolve => {
    try {
      canvas.toBlob(blob => {
        if (blob) {
          resolve(blob);
        } else {
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          const binStr = atob(dataUrl.split(',')[1]);
          const len = binStr.length;
          const u8 = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            u8[i] = binStr.charCodeAt(i);
          }
          resolve(new Blob([u8], { type: 'image/jpeg' }));
        }
      }, 'image/jpeg', quality);
    } catch (e) {
      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      const binStr = atob(dataUrl.split(',')[1]);
      const len = binStr.length;
      const u8 = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        u8[i] = binStr.charCodeAt(i);
      }
      resolve(new Blob([u8], { type: 'image/jpeg' }));
    }
  });
}

async function createTwoImagesZipBlob(blobs, cleanName) {
  if (typeof JSZip === 'undefined') {
    throw new Error('Thư viện JSZip chưa tải xong');
  }
  const zip = new JSZip();
  zip.file(`01_CT01_ToKhai_ThayDoi_ThongTin_CuTru_${cleanName}.jpg`, blobs[0]);
  zip.file(`02_HopDong_ChoThue_Muon_ONho_${cleanName}.jpg`, blobs[1]);
  return await zip.generateAsync({ type: 'blob' });
}

let currentExportUrls = [];

function openExportImagesModal() {
  const modal = document.getElementById('export-images-modal');
  if (modal) modal.hidden = false;
  if (window.lucide) lucide.createIcons();
}

function closeExportImagesModal() {
  const modal = document.getElementById('export-images-modal');
  if (modal) modal.hidden = true;
}

async function exportBothJpg() {
  const btn = document.getElementById('btn-download-jpg');
  try {
    if (btn) btn.disabled = true;
    showToast('Đang kết xuất 02 trang hồ sơ A4 sắc nét...');

    const canvases = await renderA4PagesToCanvases();
    const blobs = await Promise.all(
      canvases.map(c => canvasToJpegBlob(c, 0.96))
    );

    const cleanName = (formState.fullName || 'CongDan').trim().replace(/\s+/g, '_');
    const ct01Filename = `01_CT01_ToKhaiCuTru_${cleanName}.jpg`;
    const contractFilename = `02_HopDong_ChoONho_${cleanName}.jpg`;
    const zipFilename = `HoSoCuTru_2Trang_A4_${cleanName}.zip`;
    exportGeneratedBlobs = blobs;
    exportFilenames = { ct01: ct01Filename, contract: contractFilename, zip: zipFilename };

    // Revoke previous URLs to avoid memory leaks
    currentExportUrls.forEach(u => URL.revokeObjectURL(u));
    const url1 = URL.createObjectURL(blobs[0]);
    const url2 = URL.createObjectURL(blobs[1]);
    currentExportUrls = [url1, url2];

    // Cập nhật 02 Đường Link Tải File chính thức (Dành riêng cho iPhone & PC)
    const linkCt01 = document.getElementById('link-download-ct01');
    const linkContract = document.getElementById('link-download-contract');
    const linkViewCt01 = document.getElementById('link-view-ct01');
    const linkViewContract = document.getElementById('link-view-contract');
    const labelCt01 = document.getElementById('label-filename-ct01');
    const labelContract = document.getElementById('label-filename-contract');

    const handleDownloadDonation = () => {
    };

    if (linkCt01) {
      linkCt01.href = url1;
      linkCt01.download = ct01Filename;
      linkCt01.onclick = handleDownloadDonation;
    }
    if (linkContract) {
      linkContract.href = url2;
      linkContract.download = contractFilename;
      linkContract.onclick = handleDownloadDonation;
    }
    if (linkViewCt01) {
      linkViewCt01.href = url1;
    }
    if (linkViewContract) {
      linkViewContract.href = url2;
    }
    if (labelCt01) labelCt01.textContent = ct01Filename;
    if (labelContract) labelContract.textContent = contractFilename;

    // Cập nhật ảnh xem trước Preview & nút bấm trên từng thẻ
    const imgCt01 = document.getElementById('export-img-preview-ct01');
    const imgContract = document.getElementById('export-img-preview-contract');
    if (imgCt01) {
      imgCt01.src = url1;
      imgCt01.onclick = () => window.open(url1, '_blank');
    }
    if (imgContract) {
      imgContract.src = url2;
      imgContract.onclick = () => window.open(url2, '_blank');
    }

    const btnSaveCt01 = document.getElementById('btn-save-single-ct01');
    const btnSaveContract = document.getElementById('btn-save-single-contract');
    if (btnSaveCt01) {
      btnSaveCt01.href = url1;
      btnSaveCt01.download = ct01Filename;
    }
    if (btnSaveContract) {
      btnSaveContract.href = url2;
      btnSaveContract.download = contractFilename;
    }

    // Xử lý nút tải trọn bộ ZIP khi người dùng bấm
    const btnDlZip = document.getElementById('btn-download-both-zip');
    if (btnDlZip) {
      btnDlZip.onclick = async () => {
        try {
          showToast('Đang đóng gói file ZIP...');
          const zipBlob = await createTwoImagesZipBlob(blobs, cleanName);
          triggerBlobDownload(zipBlob, zipFilename);
          showToast('Đã tải tập tin ZIP chứa đủ 02 ảnh A4!');
        } catch (e) {
          triggerBlobDownload(blobs[0], ct01Filename);
        }
      };
    }

    // Gán hành động cho nút "Lưu vào album ảnh" trong hộp thoại tải ảnh
    const btnSaveAlbum = document.getElementById('btn-save-to-album');
    if (btnSaveAlbum) {
      btnSaveAlbum.onclick = handleSaveToAlbum;
    }

    // Mở cửa sổ hiển thị ảnh xem trước & tải file cho người dùng
    openExportImagesModal();
    showToast('Đã tạo xong 02 đường link tải file CT01 & Hợp đồng!');
  } catch (err) {
    console.error(err);
    showToast('Có lỗi khi tạo ảnh hồ sơ A4. Vui lòng thử lại.', 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}

// ============================================================================
// 12. CT02 (ĐƠN CỚ MẤT) & CT03 (ĐƠN XÁC NHẬN HẠNH KIỂM)
// ============================================================================
function syncCitizenAppFromMainState() {
  if (formState.fullName && !citizenAppState.fullName) citizenAppState.fullName = formState.fullName;
  if (formState.birthDate && !citizenAppState.birthDate) {
    citizenAppState.birthDate = convertDdMmYyyyToIso(formState.birthDate);
  }
  if (formState.citizenId && !citizenAppState.citizenId) citizenAppState.citizenId = formState.citizenId;
  if (formState.permanentAddress && !citizenAppState.permanentAddress) {
    citizenAppState.permanentAddress = formState.permanentAddress;
  }
  if (formState.phone && !citizenAppState.phone) citizenAppState.phone = formState.phone;
  const resAddr = buildResidenceAddressString();
  if (resAddr && !citizenAppState.currentAddress) citizenAppState.currentAddress = resAddr;
}

function formatIsoDateForDoc(isoStr) {
  if (!isoStr) return '...... / ...... / ........';
  const [y, m, d] = isoStr.split('-');
  if (!y || !m || !d) return isoStr;
  return `${d} / ${m} / ${y}`;
}

function renderCitizenAppPreview() {
  const isLoss = activeFormKey === 'ct02';
  const toolbarTitle = document.getElementById('citizen-app-toolbar-title');
  if (toolbarTitle) {
    toolbarTitle.textContent = isLoss ? 'Điền Đơn Cớ Mất' : 'Điền Xác Nhận Hạnh Kiểm';
  }

  const pageEl = document.getElementById('citizen-app-a4-page');
  if (!pageEl) return;

  const s = citizenAppState;
  const idLine = `${s.citizenId.trim() || '................................................'} cấp ngày: ${formatIsoDateForDoc(s.issueDate)} tại: ${s.issuePlace.trim() || '................................................'}.`;

  const paragraphs = isLoss
    ? [
        `Tôi tên là: ${s.fullName.trim() || '................................................'}`,
        `Sinh ngày: ${formatIsoDateForDoc(s.birthDate)}`,
        `CMND/CCCD số: ${idLine}`,
        `Địa chỉ thường trú: ${s.permanentAddress.trim() || '................................................'}`,
        `Điện thoại: ${s.phone.trim() || '................................................'}`,
        'Tôi làm đơn này trình bày với Quý cơ quan sự việc như sau:',
        `Vào ngày ${formatIsoDateForDoc(s.lossDate)}, tôi có làm mất: ${s.lostItems.trim() || '................................................'}.`,
        `Tại: ${s.lossLocation.trim() || '................................................'}`,
        `Lý do mất: ${s.lossReason.trim() || '................................................'}`,
        `Nay để phục vụ cho việc xin ${s.replacementPurpose.trim() || '................................................'}, tôi làm đơn này đề nghị Công an ${formState.ward || 'Phường An Nhơn'}, ${formState.city || 'TP. Hồ Chí Minh'} xác nhận cho tôi có đến trình báo với nội dung nêu trên.`,
        'Tôi xin cam đoan các giấy tờ nêu trên không cầm cố, thế chấp hoặc không bị cơ quan có thẩm quyền nào khác thu giữ.',
        'Tôi xin chân thành cảm ơn!'
      ]
    : [
        `Tôi tên là: ${s.fullName.trim() || '................................................'}`,
        `Ngày, tháng, năm sinh: ${formatIsoDateForDoc(s.birthDate)}`,
        `Nơi sinh: ${s.birthPlace.trim() || '................................................'}`,
        `Nguyên quán: ${s.hometown.trim() || '................................................'}. Dân tộc: ${s.ethnicity.trim() || '................................................'}`,
        `Địa chỉ thường trú: ${s.permanentAddress.trim() || '................................................'}`,
        `Địa chỉ tạm trú và nơi ở hiện tại: ${s.currentAddress.trim() || '................................................'}`,
        `Số CCCD/CMND/Hộ chiếu: ${idLine}`,
        `Kính mong Công an ${formState.ward || 'Phường An Nhơn'} xác nhận về hạnh kiểm của tôi: từ trước đến nay bản thân tôi không có vi phạm pháp luật, không có tiền án tiền sự, cũng như không có vi phạm về an ninh trật tự tại địa phương.`,
        `Lý do: ${s.applicationReason.trim() || '................................................'} tại: ${s.organization.trim() || '................................................'}. Địa chỉ: ${s.organizationAddress.trim() || '................................................'}.`
      ];

  const [sy, sm, sd] = (s.signingDate || '').split('-');

  pageEl.innerHTML = `
    <header class="ct01-national-header">
      <h3 class="national-country">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
      <h4 class="national-motto">Độc lập – Tự do – Hạnh phúc</h4>
      <div class="national-underline"></div>
    </header>
    <h2 class="ct01-main-title">${isLoss ? 'ĐƠN CỚ MẤT' : 'ĐƠN XIN XÁC NHẬN HẠNH KIỂM'}</h2>
    <p class="citizen-application-recipient">
      Kính gửi: <strong>CÔNG AN ${(formState.ward || 'PHƯỜNG AN NHƠN').toUpperCase()} – ${(formState.city || 'TP. HỒ CHÍ MINH').toUpperCase()}</strong>
    </p>
    ${paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
    <div class="citizen-application-signatures">
      <p>${isLoss ? '<strong>Xác nhận của cơ quan</strong>' : ''}</p>
      <p>${isLoss ? '................, ' : `${escapeHtml(s.signingLocation || '................')}, `}ngày ${sd || '......'} tháng ${sm || '......'} năm ${sy || '........'}</p>
      <strong>${isLoss ? 'Công an phường/xã/thị trấn' : 'Xác nhận của Công an phường'}</strong>
      <strong>Người làm đơn</strong>
      <div>
        <p class="citizen-application-signature-space"></p>
        <strong>${escapeHtml(s.fullName)}</strong>
      </div>
    </div>
  `;
}

function openCitizenAppModal() {
  const isLoss = activeFormKey === 'ct02';
  const modal = document.getElementById('citizen-app-modal');
  const title = document.getElementById('citizen-app-modal-title');
  const grid = document.getElementById('citizen-app-fields-grid');
  if (!modal || !grid) return;

  if (title) {
    title.textContent = isLoss ? 'Nhập thông tin Đơn Cớ Mất' : 'Nhập thông tin Xác Nhận Hạnh Kiểm';
  }

  const baseFields = [
    { name: 'fullName', label: 'Họ và tên' },
    { name: 'birthDate', label: 'Ngày sinh', type: 'date' },
    { name: 'citizenId', label: 'Số CCCD / CMND / Hộ chiếu' },
    { name: 'issueDate', label: 'Ngày cấp', type: 'date' },
    { name: 'issuePlace', label: 'Nơi cấp' },
    { name: 'permanentAddress', label: 'Địa chỉ thường trú' }
  ];

  const lossFields = [
    { name: 'phone', label: 'Điện thoại' },
    { name: 'lossDate', label: 'Ngày mất', type: 'date' },
    { name: 'lostItems', label: 'Giấy tờ / tài sản bị mất' },
    { name: 'lossLocation', label: 'Địa điểm mất' },
    { name: 'lossReason', label: 'Lý do mất' },
    { name: 'replacementPurpose', label: 'Mục đích xác nhận (VD: xin cấp lại giấy tờ)' },
    { name: 'signingDate', label: 'Ngày làm đơn', type: 'date' }
  ];

  const conductFields = [
    { name: 'birthPlace', label: 'Nơi sinh' },
    { name: 'hometown', label: 'Nguyên quán' },
    { name: 'ethnicity', label: 'Dân tộc' },
    { name: 'currentAddress', label: 'Địa chỉ tạm trú và nơi ở hiện tại' },
    { name: 'applicationReason', label: 'Lý do xin xác nhận' },
    { name: 'organization', label: 'Cơ quan / công ty nhận hồ sơ' },
    { name: 'organizationAddress', label: 'Địa chỉ cơ quan / công ty' },
    { name: 'signingLocation', label: 'Địa danh làm đơn' },
    { name: 'signingDate', label: 'Ngày làm đơn', type: 'date' }
  ];

  const fields = [...baseFields, ...(isLoss ? lossFields : conductFields)];
  grid.innerHTML = fields
    .map(
      f => `
      <div class="ct01-address-input-field">
        <label>${escapeHtml(f.label)}</label>
        <input
          type="${f.type || 'text'}"
          class="capan-input"
          value="${escapeHtml(citizenAppState[f.name] || '')}"
          oninput="citizenAppState['${f.name}'] = this.value; renderCitizenAppPreview();"
        />
      </div>
    `
    )
    .join('');

  modal.hidden = false;
}

function closeCitizenAppModal() {
  const modal = document.getElementById('citizen-app-modal');
  if (modal) modal.hidden = true;
}

function downloadCitizenAppWord() {
  const pageEl = document.getElementById('citizen-app-a4-page');
  if (!pageEl) return;
  const isLoss = activeFormKey === 'ct02';
  const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${isLoss ? 'Don Co Mat' : 'Xac Nhan Hanh Kiem'}</title>
    <style>body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.5; }</style>
    </head><body>${pageEl.innerHTML}</body></html>
  `;
  const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
  const cleanName = (citizenAppState.fullName || 'CongDan').trim().replace(/\s+/g, '_');
  triggerBlobDownload(blob, `${isLoss ? 'DonCoMat' : 'XacNhanHanhKiem'}_${cleanName}.doc`);
  showToast('Đã tải xuống file Word (.doc) thành công!');
}

// ============================================================================
// 13. TRA CỨU TIẾN ĐỘ HỒ SƠ & DANH BẠ 31 CSKV
// ============================================================================
function handleLookupSearch(silent = false) {
  const input = document.getElementById('lookup-code-input');
  const container = document.getElementById('lookup-result-container');
  if (!input || !container) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    if (!silent) showToast('Vui lòng nhập Mã hồ sơ hoặc Số CCCD để tra cứu.', 'warn');
    return;
  }

  const applicant = formState.fullName || 'NGUYỄN VĂN AN';
  container.innerHTML = `
    <div class="capan-lookup-result-box">
      <div class="capan-result-badge-row">
        <span class="capan-status-tag">● Đang thụ lý hồ sơ</span>
        <span style="font-size:13.5px;font-weight:800;color:#334155;">Mã HS: ${escapeHtml(code)}</span>
      </div>
      <div class="capan-result-grid">
        <div>
          <strong>Thủ tục đăng ký:</strong>
          <p>Đăng ký tạm trú / Xác nhận thông tin cư trú (Mẫu CT01)</p>
        </div>
        <div>
          <strong>Người nộp hồ sơ:</strong>
          <p>${escapeHtml(applicant)}</p>
        </div>
        <div>
          <strong>Thời gian nộp:</strong>
          <p>09:30 - Hôm nay</p>
        </div>
        <div>
          <strong>Dự kiến trả kết quả:</strong>
          <p>Trong 03 ngày làm việc</p>
        </div>
        <div>
          <strong>Cán bộ thụ lý hồ sơ:</strong>
          <p>Đại úy Lê Văn Cường - Cán bộ CSKV</p>
        </div>
      </div>
      <div>
        <h4 style="margin:0 0 12px;font-size:14.5px;color:#0f172a;">Tiến trình xử lý hồ sơ:</h4>
        <div style="display:flex;flex-direction:column;gap:10px;border-left:2px solid #cbd5e1;padding-left:14px;margin-left:6px;">
          <div>
            <strong style="color:#059669;font-size:13.5px;">✓ Nộp hồ sơ trực tuyến thành công</strong>
            <div style="color:#64748b;font-size:12.5px;">Hệ thống tự động cấp mã tiếp nhận điện tử</div>
          </div>
          <div>
            <strong style="color:#059669;font-size:13.5px;">✓ Bộ phận Một cửa tiếp nhận hồ sơ</strong>
            <div style="color:#64748b;font-size:12.5px;">Đầy đủ Tờ khai CT01 và Hợp đồng cư trú hợp lệ</div>
          </div>
          <div>
            <strong style="color:#dc2626;font-size:13.5px;">● Cán bộ Cảnh sát khu vực đang xác minh cư trú</strong>
            <div style="color:#64748b;font-size:12.5px;">Đang tiến hành kiểm tra thực tế địa bàn</div>
          </div>
        </div>
      </div>
    </div>
  `;
  if (!silent) showToast('Đã tìm thấy thông tin tiến độ hồ sơ!');
}

function normalizeText(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase();
}

function formatPhonePretty(phone) {
  const d = String(phone || '').replace(/\D/g, '');
  return d.length === 10 ? `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}` : phone;
}

function renderCskvDirectory() {
  const searchInput = document.getElementById('cskv-search-input');
  const areaInput = document.getElementById('cskv-area-input');
  const grid = document.getElementById('cskv-cards-grid');
  const matchBanner = document.getElementById('cskv-match-banner');
  if (!grid) return;

  const q = normalizeText(searchInput ? searchInput.value.trim() : '');
  const areaRaw = normalizeText(areaInput ? areaInput.value.trim() : '');

  let matchedAreaNum = null;
  if (areaRaw) {
    const m = areaRaw.match(/(?:khu\s*vuc|kv)?\s*0*(\d{1,2})\b/);
    if (m) {
      const n = Number(m[1]);
      if (n >= 1 && n <= CSKV_OFFICERS.length) matchedAreaNum = n;
    }
  }

  if (matchBanner) {
    if (areaRaw && matchedAreaNum) {
      const [officerName, officerPhone] = CSKV_OFFICERS[matchedAreaNum - 1];
      matchBanner.hidden = false;
      matchBanner.innerHTML = `
        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:10px 14px;display:flex;flex-wrap:wrap;align-items:center;gap:10px;font-size:13.5px;">
          <span>Kết quả tra cứu:</span>
          <span class="capan-officer-kv-badge">KV${matchedAreaNum}</span>
          <strong>${escapeHtml(officerName)}</strong>
          <span>SĐT: <a href="tel:${officerPhone}" style="color:#dc2626;font-weight:800;">${formatPhonePretty(officerPhone)}</a></span>
        </div>
      `;
    } else {
      matchBanner.hidden = true;
    }
  }

  const filtered = CSKV_OFFICERS.map(([name, phone], idx) => ({
    name,
    phone,
    area: idx + 1
  })).filter(item => {
    if (matchedAreaNum && item.area !== matchedAreaNum) return false;
    if (!q) return true;
    return normalizeText(`${item.name} ${item.phone} khu vuc ${item.area} kv${item.area}`).includes(q);
  });

  grid.innerHTML = filtered
    .map(item => {
      const isRevealed = revealedCskvAreas.has(item.area) || matchedAreaNum === item.area;
      return `
        <div class="capan-officer-card ${isRevealed ? 'is-revealed' : ''}" onclick="toggleRevealCskv(${item.area})">
          <div class="capan-officer-card-header">
            <div class="capan-officer-avatar-icon">👮</div>
            <div>
              <div class="capan-officer-name">${escapeHtml(item.name)}</div>
              <span class="capan-officer-kv-badge">KV${item.area}</span>
            </div>
          </div>
          ${
            isRevealed
              ? `
            <div class="capan-officer-revealed-box" onclick="event.stopPropagation()">
              <div class="capan-officer-phone-display">
                <span>📞</span>
                <a href="tel:${item.phone}" style="color:#dc2626;text-decoration:none;flex:1;">${formatPhonePretty(item.phone)}</a>
              </div>
              <div class="capan-officer-card-buttons">
                <a href="tel:${item.phone}" class="capan-card-btn capan-card-btn-call">Gọi ngay</a>
                <button type="button" class="capan-card-btn capan-card-btn-copy" onclick="copyCskvPhone('${item.phone}', ${item.area}, '${escapeHtml(item.name)}')">Sao chép</button>
              </div>
            </div>
          `
              : `<div style="margin-top:8px;font-size:11.5px;color:#64748b;">Chạm vào thẻ để hiện số điện thoại liên hệ</div>`
          }
        </div>
      `;
    })
    .join('');
}

function toggleRevealCskv(area) {
  if (revealedCskvAreas.has(area)) {
    revealedCskvAreas.delete(area);
  } else {
    revealedCskvAreas.add(area);
  }
  renderCskvDirectory();
}

function copyCskvPhone(phone, area, name) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(phone);
    showToast(`Đã sao chép SĐT CSKV KV${area} (${name})`);
  }
}

function submitQuickDeclaration() {
  const addr = document.getElementById('decl-address-input')?.value.trim();
  if (!formState.fullName || !formState.citizenId) {
    showToast('Vui lòng quét mã QR CCCD trước khi gửi khai báo cư trú.', 'warn');
    openQrScannerModal('tenant');
    return;
  }
  if (!addr) {
    showToast('Vui lòng nhập địa chỉ cư trú hiện tại.', 'warn');
    return;
  }
  showToast(`Đã ghi nhận khai báo cư trú của công dân ${formState.fullName}!`);
  switchMainTab('utilities', 'ct01');
}

// ============================================================================
// 14. UTILITY HELPERS
// ============================================================================
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function syncInputValueIfNotFocused(id, val) {
  const el = document.getElementById(id);
  if (el && document.activeElement !== el) {
    el.value = val || '';
  }
}

function convertDdMmYyyyToIso(str) {
  if (!str) return '';
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(str.trim());
  return m ? `${m[3]}-${m[2]}-${m[1]}` : str;
}

function extractBirthYearOnly(str) {
  if (!str) return '';
  const s = String(str).trim();
  const m = s.match(/\b(19\d{2}|20\d{2})\b/);
  return m ? m[1] : s;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ============================================================================
// 15. BATCH RESIDENCE REGISTRATION (ĐIỀN HỒ SƠ TẠM TRÚ THEO SỐ LƯỢNG)
// ============================================================================
function initBatchWorkspace() {
  if (!batchState.tenants || batchState.tenants.length === 0) {
    batchState.tenants = [];
    const initialCount = batchState.count || 3;
    for (let i = 0; i < initialCount; i++) {
      batchState.tenants.push(createDefaultBatchTenant(i));
    }
  }

  const countInput = document.getElementById('batch-tenant-count');
  if (countInput) countInput.value = batchState.tenants.length;

  // Update chip active states
  document.querySelectorAll('#batch-qty-chips .batch-chip-btn').forEach(btn => {
    const num = parseInt(btn.textContent) || 0;
    btn.classList.toggle('active', num === batchState.tenants.length);
  });

  if (!batchState.house.houseNo && formState.houseNo) batchState.house.houseNo = formState.houseNo;
  if (!batchState.house.street && formState.street) batchState.house.street = formState.street;
  if (formState.ward) batchState.house.ward = formState.ward;
  if (formState.city) batchState.house.city = formState.city;

  syncBatchLandlordInputs();
  syncBatchHouseInputs();
  initBatchLandlordPad();
  renderBatchTenantsList();
  updateBatchSignaturesSummary();
  setTimeout(() => {
    resizeSignatureCanvases();
  }, 60);
}

function createDefaultBatchTenant(index) {
  return {
    id: `batch-tenant-${Date.now()}-${index}`,
    fullName: '',
    birthDate: '',
    gender: 'Nam',
    citizenId: '',
    phone: '',
    email: '',
    permanentAddress: '',
    signatureDataUrl: '',
    signatureStrokes: []
  };
}

function syncBatchLandlordInputs() {
  const nameEl = document.getElementById('batch-landlord-name');
  const birthEl = document.getElementById('batch-landlord-birth');
  const idEl = document.getElementById('batch-landlord-id');
  const addrEl = document.getElementById('batch-landlord-address');
  if (nameEl && document.activeElement !== nameEl) nameEl.value = batchState.landlord.fullName || '';
  if (birthEl && document.activeElement !== birthEl) birthEl.value = batchState.landlord.birthYear || '';
  if (idEl && document.activeElement !== idEl) idEl.value = batchState.landlord.citizenId || '';
  if (addrEl && document.activeElement !== addrEl) addrEl.value = batchState.landlord.permanentAddress || '';
}

function syncBatchHouseInputs() {
  const houseNoEl = document.getElementById('batch-house-no');
  const streetEl = document.getElementById('batch-house-street');
  const wardEl = document.getElementById('batch-house-ward');
  const cityEl = document.getElementById('batch-house-city');
  if (houseNoEl && document.activeElement !== houseNoEl) houseNoEl.value = batchState.house.houseNo || '';
  if (streetEl && document.activeElement !== streetEl) streetEl.value = batchState.house.street || '';
  if (wardEl && document.activeElement !== wardEl) wardEl.value = batchState.house.ward || '';
  if (cityEl && document.activeElement !== cityEl) cityEl.value = batchState.house.city || '';
  const contractDatetimeEl = document.getElementById('batch-contract-datetime');
  if (contractDatetimeEl && document.activeElement !== contractDatetimeEl) {
    if (!batchState.house.contractDatetime) {
      if (formState.moveInDate) {
        batchState.house.contractDatetime = formState.moveInDate;
      } else {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        batchState.house.contractDatetime = `${yyyy}-${mm}-${dd}T10:00`;
      }
    }
    contractDatetimeEl.value = batchState.house.contractDatetime || '';
  }
}

function setBatchTenantCount(n) {
  const count = Math.max(1, Math.min(50, parseInt(n) || 1));
  batchState.count = count;

  const countInput = document.getElementById('batch-tenant-count');
  if (countInput) countInput.value = count;

  // Update chips
  document.querySelectorAll('#batch-qty-chips .batch-chip-btn').forEach(btn => {
    const num = parseInt(btn.textContent) || 0;
    btn.classList.toggle('active', num === count);
  });

  // Adjust tenants array length
  const curLen = batchState.tenants.length;
  if (curLen < count) {
    for (let i = curLen; i < count; i++) {
      batchState.tenants.push(createDefaultBatchTenant(i));
    }
  } else if (curLen > count) {
    batchState.tenants = batchState.tenants.slice(0, count);
  }

  renderBatchTenantsList();
}

function adjustBatchTenantCount(delta) {
  setBatchTenantCount((batchState.count || (batchState.tenants ? batchState.tenants.length : 1)) + delta);
}

function addNewBatchTenant() {
  setBatchTenantCount((batchState.tenants ? batchState.tenants.length : 0) + 1);
}

function removeBatchTenant(index) {
  if (batchState.tenants.length <= 1) {
    showToast('Danh sách người thuê tối thiểu 1 người.', 'warn');
    return;
  }
  batchState.tenants.splice(index, 1);
  batchState.count = batchState.tenants.length;
  const countInput = document.getElementById('batch-tenant-count');
  if (countInput) countInput.value = batchState.count;
  renderBatchTenantsList();
  showToast(`Đã xoá người thuê #${index + 1}.`);
}

function updateBatchLandlordField(field, val) {
  batchState.landlord[field] = val;
}

function updateBatchHouseField(field, val) {
  batchState.house[field] = val;
}

function updateBatchTenantField(index, field, val) {
  if (batchState.tenants[index]) {
    batchState.tenants[index][field] = val;
    updateTenantCardTitle(index);
  }
}

function fillBatchLandlordSample() {
  batchState.landlord = {
    ...batchState.landlord,
    fullName: 'TRẦN VĂN HÙNG',
    birthYear: '1975',
    citizenId: '079075009876',
    permanentAddress: 'Số 123/45 Đường Nguyễn Văn Nghi, Phường An Nhơn, TP. Hồ Chí Minh'
  };
  batchState.house = {
    houseNo: '123/45',
    street: 'Nguyễn Văn Nghi',
    ward: 'Phường An Nhơn',
    city: 'TP. Hồ Chí Minh'
  };
  syncBatchLandlordInputs();
  syncBatchHouseInputs();
  showToast('Đã nạp mẫu dữ liệu Chủ nhà & Căn nhà cho thuê!');
}

const SAMPLE_BATCH_TENANTS = [
  {
    fullName: 'NGUYỄN VĂN AN',
    birthDate: '15/08/1995',
    gender: 'Nam',
    citizenId: '079095012345',
    phone: '0909 888 686',
    email: 'nguyenvanan.dvc@gmail.com',
    permanentAddress: '456 Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh'
  },
  {
    fullName: 'LÊ THỊ NGỌC MAI',
    birthDate: '22/11/1998',
    gender: 'Nữ',
    citizenId: '048198006789',
    phone: '0918 234 567',
    email: 'lethimaingoc@gmail.com',
    permanentAddress: '78 Nguyễn Văn Linh, Quận Hải Châu, TP. Đà Nẵng'
  },
  {
    fullName: 'TRẦN THỊ BÍCH NGỌC',
    birthDate: '10/04/1997',
    gender: 'Nữ',
    citizenId: '079197003456',
    phone: '0987 654 321',
    email: 'bichngoc.tran@gmail.com',
    permanentAddress: '12 Phan Chu Trinh, TP. Huế, Thừa Thiên Huế'
  },
  {
    fullName: 'PHẠM HOÀNG ĐỨC',
    birthDate: '05/12/1992',
    gender: 'Nam',
    citizenId: '031092008765',
    phone: '0933 112 233',
    email: 'ducpham92@gmail.com',
    permanentAddress: '56 Trần Hưng Đạo, TP. Quy Nhơn, Bình Định'
  },
  {
    fullName: 'VŨ QUANG HUY',
    birthDate: '18/09/2000',
    gender: 'Nam',
    citizenId: '001200004321',
    phone: '0977 445 566',
    email: 'huyvu.k20@gmail.com',
    permanentAddress: '89 Phố Huế, Quận Hai Bà Trưng, TP. Hà Nội'
  }
];

function fillAllBatchTenantsSample() {
  const len = batchState.tenants.length;
  for (let i = 0; i < len; i++) {
    const preset = SAMPLE_BATCH_TENANTS[i % SAMPLE_BATCH_TENANTS.length];
    batchState.tenants[i] = {
      ...batchState.tenants[i],
      fullName: preset.fullName,
      birthDate: preset.birthDate,
      gender: preset.gender,
      citizenId: preset.citizenId,
      phone: preset.phone,
      email: preset.email,
      permanentAddress: preset.permanentAddress
    };
  }
  renderBatchTenantsList();
  showToast(`Đã nạp mẫu dữ liệu thử cho toàn bộ ${len} người thuê!`);
}

function toggleBatchTenantFields(idx, forceOpen) {
  const drawer = document.getElementById(`batch-tenant-fields-${idx}`);
  const chevron = document.getElementById(`batch-tenant-chevron-${idx}`);
  if (!drawer) return;
  const isHidden = drawer.style.display === 'none' || drawer.style.display === '';
  const shouldOpen = forceOpen !== undefined ? forceOpen : isHidden;
  drawer.style.display = shouldOpen ? 'block' : 'none';
  if (chevron) {
    chevron.style.transform = shouldOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

function updateTenantCardTitle(idx) {
  const card = document.getElementById(`batch-tenant-card-${idx}`);
  if (!card) return;
  const t = batchState.tenants[idx];
  if (!t) return;
  const nameEl = card.querySelector('.batch-tenant-name');
  if (nameEl) nameEl.textContent = t.fullName ? t.fullName : '(Chưa nhập họ tên)';
  const summaryEl = document.getElementById(`batch-tenant-summary-${idx}`);
  const statusEl = document.getElementById(`batch-tenant-status-${idx}`);
  if (summaryEl) {
    summaryEl.textContent = t.fullName ? (t.fullName + (t.citizenId ? ' • ' + t.citizenId : '')) : 'Bấm để nhập họ tên, ngày sinh, CCCD, địa chỉ...';
  }
  if (statusEl) {
    statusEl.textContent = t.fullName ? '✓ Đã điền' : 'Chưa điền';
    statusEl.style.background = t.fullName ? '#dcfce7' : '#f1f5f9';
    statusEl.style.color = t.fullName ? '#15803d' : '#64748b';
  }
}

function renderBatchTenantsList() {
  const container = document.getElementById('batch-tenants-list-container');
  if (!container) return;

  const html = batchState.tenants.map((t, idx) => `
    <div class="batch-tenant-card" id="batch-tenant-card-${idx}">
      <div class="batch-tenant-card-header">
        <div class="batch-tenant-title">
          <span class="batch-tenant-index">#${idx + 1}</span>
          <span class="batch-tenant-name">${t.fullName ? escapeHtml(t.fullName) : '(Chưa nhập họ tên)'}</span>
          ${t.citizenId ? `<span class="batch-tenant-id-badge">${escapeHtml(t.citizenId)}</span>` : ''}
        </div>
        <div class="batch-tenant-actions">
          <button type="button" class="capan-btn-outline batch-tenant-scan-btn" onclick="openQrScannerModal('batch-tenant-${idx}')" title="Quét QR hoặc tải ảnh chụp CCCD của người này">
            <i data-lucide="qr-code" style="width:14px;height:14px;color:#dc2626;"></i>
            <span>Quét / Tải CCCD</span>
          </button>
          <button type="button" class="batch-tenant-delete-btn" onclick="removeBatchTenant(${idx})" title="Xoá người này khỏi danh sách">
            <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
          </button>
        </div>
      </div>

      <div class="batch-tenant-card-body">
        <!-- Khối gộp: Điền thông tin người thuê (Bấm để mở rộng) -->
        <div style="margin-bottom:12px;">
          <button type="button" class="batch-tenant-collapse-btn" id="btn-toggle-tenant-${idx}" onclick="toggleBatchTenantFields(${idx})">
            <div style="text-align:left;">
              <strong style="font-size:13.5px;color:#0f172a;display:block;">Điền thông tin người thuê</strong>
              <span id="batch-tenant-summary-${idx}" style="font-size:11.5px;color:#64748b;">${t.fullName ? escapeHtml(t.fullName) + (t.citizenId ? ' • ' + escapeHtml(t.citizenId) : '') : 'Bấm để nhập họ tên, ngày sinh, CCCD, địa chỉ...'}</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="batch-tenant-status-pill" id="batch-tenant-status-${idx}" style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;background:${t.fullName ? '#dcfce7' : '#f1f5f9'};color:${t.fullName ? '#15803d' : '#64748b'};">
                ${t.fullName ? '✓ Đã điền' : 'Chưa điền'}
              </span>
              <i data-lucide="chevron-down" id="batch-tenant-chevron-${idx}" style="width:16px;height:16px;color:#64748b;transition:transform 0.2s ease;"></i>
            </div>
          </button>

          <div id="batch-tenant-fields-${idx}" class="batch-tenant-fields-drawer" style="display:none;margin-top:10px;padding:12px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;">
            <div class="batch-form-grid">
              <div class="ct01-address-input-field">
                <label>Họ và tên người thuê <span style="color:#dc2626;">*</span></label>
                <input type="text" class="capan-input text-uppercase" placeholder="VD: NGUYỄN VĂN AN" value="${escapeHtml(t.fullName || '')}" oninput="updateBatchTenantField(${idx}, 'fullName', this.value); updateTenantCardTitle(${idx});" />
              </div>
              <div class="ct01-address-input-field">
                <label>Ngày sinh (dd/mm/yyyy) <span style="color:#dc2626;">*</span></label>
                <input type="text" class="capan-input" placeholder="VD: 15/08/1995" value="${escapeHtml(t.birthDate || '')}" oninput="updateBatchTenantField(${idx}, 'birthDate', this.value)" />
              </div>
              <div class="ct01-address-input-field">
                <label>Giới tính <span style="color:#dc2626;">*</span></label>
                <select class="capan-select" onchange="updateBatchTenantField(${idx}, 'gender', this.value)">
                  <option value="Nam" ${t.gender === 'Nam' ? 'selected' : ''}>Nam</option>
                  <option value="Nữ" ${t.gender === 'Nữ' ? 'selected' : ''}>Nữ</option>
                </select>
              </div>
              <div class="ct01-address-input-field">
                <label>Số CCCD / Định danh (12 số) <span style="color:#dc2626;">*</span></label>
                <input type="text" class="capan-input" maxlength="12" placeholder="VD: 079095012345" value="${escapeHtml(t.citizenId || '')}" oninput="updateBatchTenantField(${idx}, 'citizenId', this.value); updateTenantCardTitle(${idx});" />
              </div>
              <div class="ct01-address-input-field">
                <label>Số điện thoại liên hệ</label>
                <input type="text" class="capan-input" placeholder="VD: 0909 888 686" value="${escapeHtml(t.phone || '')}" oninput="updateBatchTenantField(${idx}, 'phone', this.value)" />
              </div>
              <div class="ct01-address-input-field">
                <label>Email liên hệ</label>
                <input type="text" class="capan-input" placeholder="VD: email@gmail.com" value="${escapeHtml(t.email || '')}" oninput="updateBatchTenantField(${idx}, 'email', this.value)" />
              </div>
              <div class="ct01-address-input-field batch-grid-col-full">
                <label>Nơi thường trú (theo CCCD) <span style="color:#dc2626;">*</span></label>
                <input type="text" class="capan-input" placeholder="VD: 456 Lê Lợi, Phường Bến Thành, Quận 1, TP. HCM" value="${escapeHtml(t.permanentAddress || '')}" oninput="updateBatchTenantField(${idx}, 'permanentAddress', this.value)" />
              </div>
            </div>
          </div>
        </div>

        <!-- Chữ ký điện tử người thuê -->
        <div class="batch-tenant-sig-box">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px;">
            <div style="display:flex;align-items:center;gap:6px;">
              <i data-lucide="pen-tool" style="width:15px;height:15px;color:#0284c7;"></i>
              <strong style="font-size:13px;color:#0f172a;">Chữ ký Người thuê #${idx + 1}:</strong>
            </div>
            <span class="batch-tenant-sig-badge" id="batch-tenant-sig-badge-${idx}" style="font-size:11.5px;font-weight:700;color:${t.signatureDataUrl ? '#15803d' : '#64748b'};background:${t.signatureDataUrl ? '#dcfce7' : '#f1f5f9'};padding:3px 8px;border-radius:4px;">
              ${t.signatureDataUrl ? '✓ Đã ký' : 'Chưa ký'}
            </span>
          </div>

          <div class="sig-canvas-wrapper" id="batch-sig-wrapper-tenant-${idx}">
            <canvas id="batch-sig-canvas-tenant-${idx}"></canvas>
            <div class="sig-placeholder" id="batch-sig-placeholder-tenant-${idx}" style="display:${t.signatureDataUrl ? 'none' : 'flex'};">
              Ký tại đây
            </div>
          </div>

          <div style="margin-top:6px;display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;gap:6px;">
            <div style="display:flex;gap:6px;">
              <button type="button" class="sig-btn" id="btn-batch-undo-tenant-${idx}" onclick="undoBatchTenantSig(${idx})" ${t.signatureDataUrl ? '' : 'disabled'} style="height:30px;font-size:12px;padding:0 10px;">
                <i data-lucide="undo-2" style="width:13px;height:13px;"></i>
                <span>Hoàn tác</span>
              </button>
              <button type="button" class="sig-btn danger" id="btn-batch-clear-tenant-${idx}" onclick="clearBatchTenantSig(${idx})" ${t.signatureDataUrl ? '' : 'disabled'} style="height:30px;font-size:12px;padding:0 10px;">
                <i data-lucide="trash-2" style="width:13px;height:13px;"></i>
                <span>Ký lại</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `).join('');

  container.innerHTML = html;
  if (window.lucide) {
    lucide.createIcons();
  }

  initBatchTenantPads();
  updateBatchSignaturesSummary();
}

let batchLandlordPadInstance = null;
let batchTenantPadInstances = [];

function initBatchLandlordPad() {
  const canvas = document.getElementById('batch-sig-canvas-landlord');
  if (!canvas) return;

  // Pre-sync if single landlord signature exists and batch doesn't yet have one
  if (!batchState.landlord.signatureDataUrl && landlordSignatureDataUrl) {
    batchState.landlord.signatureDataUrl = landlordSignatureDataUrl;
    if (landlordPadInstance && landlordPadInstance.strokes && landlordPadInstance.strokes.length > 0) {
      batchState.landlord.signatureStrokes = [...landlordPadInstance.strokes];
    }
  }

  batchLandlordPadInstance = new SmoothSignaturePad(
    'batch-sig-canvas-landlord',
    'batch-sig-wrapper-landlord',
    'batch-sig-placeholder-landlord',
    'btn-batch-undo-landlord',
    'btn-batch-clear-landlord',
    (dataUrl) => {
      batchState.landlord.signatureDataUrl = dataUrl;
      if (batchLandlordPadInstance) {
        batchState.landlord.signatureStrokes = [...batchLandlordPadInstance.strokes];
      }
      if (!landlordSignatureDataUrl) {
        landlordSignatureDataUrl = dataUrl;
      }
      updateBatchLandlordSigBadge();
      updateBatchSignaturesSummary();
    }
  );

  if (batchState.landlord.signatureStrokes && batchState.landlord.signatureStrokes.length > 0) {
    batchLandlordPadInstance.strokes = [...batchState.landlord.signatureStrokes];
    batchLandlordPadInstance.redrawAll();
  }
  updateBatchLandlordSigBadge();
}

function updateBatchLandlordSigBadge() {
  const badge = document.getElementById('batch-landlord-sig-badge');
  if (!badge) return;
  const hasSig = !!batchState.landlord.signatureDataUrl;
  badge.style.background = hasSig ? '#dcfce7' : '#fee2e2';
  badge.style.color = hasSig ? '#15803d' : '#dc2626';
  badge.textContent = hasSig ? '✓ Đã ký' : 'Chưa ký';
}

function undoBatchLandlordSig() {
  if (batchLandlordPadInstance) {
    batchLandlordPadInstance.undo();
  }
}

function clearBatchLandlordSig() {
  if (batchLandlordPadInstance) {
    batchLandlordPadInstance.clear();
    batchState.landlord.signatureDataUrl = '';
    batchState.landlord.signatureStrokes = [];
    updateBatchLandlordSigBadge();
    updateBatchSignaturesSummary();
  }
}

function initBatchTenantPads() {
  batchTenantPadInstances = [];
  if (!batchState.tenants) return;

  batchState.tenants.forEach((tenant, idx) => {
    const canvas = document.getElementById(`batch-sig-canvas-tenant-${idx}`);
    if (!canvas) return;

    const pad = new SmoothSignaturePad(
      `batch-sig-canvas-tenant-${idx}`,
      `batch-sig-wrapper-tenant-${idx}`,
      `batch-sig-placeholder-tenant-${idx}`,
      `btn-batch-undo-tenant-${idx}`,
      `btn-batch-clear-tenant-${idx}`,
      (dataUrl) => {
        tenant.signatureDataUrl = dataUrl;
        tenant.signatureStrokes = [...pad.strokes];
        updateBatchTenantSigBadge(idx);
        updateBatchSignaturesSummary();
      }
    );

    if (tenant.signatureStrokes && tenant.signatureStrokes.length > 0) {
      pad.strokes = [...tenant.signatureStrokes];
      pad.redrawAll();
    }

    batchTenantPadInstances[idx] = pad;
    updateBatchTenantSigBadge(idx);
  });
}

function updateBatchTenantSigBadge(idx) {
  const badge = document.getElementById(`batch-tenant-sig-badge-${idx}`);
  if (!badge) return;
  const t = batchState.tenants && batchState.tenants[idx];
  if (!t) return;
  const hasSig = !!t.signatureDataUrl;
  badge.style.background = hasSig ? '#dcfce7' : '#f1f5f9';
  badge.style.color = hasSig ? '#15803d' : '#64748b';
  badge.textContent = hasSig ? '✓ Đã ký' : 'Chưa ký';
}

function undoBatchTenantSig(idx) {
  if (batchTenantPadInstances[idx]) {
    batchTenantPadInstances[idx].undo();
  }
}

function clearBatchTenantSig(idx) {
  if (batchTenantPadInstances[idx]) {
    batchTenantPadInstances[idx].clear();
    if (batchState.tenants && batchState.tenants[idx]) {
      batchState.tenants[idx].signatureDataUrl = '';
      batchState.tenants[idx].signatureStrokes = [];
    }
    updateBatchTenantSigBadge(idx);
    updateBatchSignaturesSummary();
  }
}

function updateBatchSignaturesSummary() {
  const landlordSum = document.getElementById('batch-summary-sig-landlord');
  const tenantsSum = document.getElementById('batch-summary-sig-tenants');
  if (landlordSum) {
    const hasLandlord = !!batchState.landlord.signatureDataUrl;
    landlordSum.style.background = hasLandlord ? '#dcfce7' : '#fef3c7';
    landlordSum.style.color = hasLandlord ? '#15803d' : '#92400e';
    landlordSum.textContent = hasLandlord ? 'Chủ nhà: Đã ký' : 'Chủ nhà: Chưa ký';
  }
  if (tenantsSum) {
    const total = batchState.tenants ? batchState.tenants.length : 0;
    const signed = batchState.tenants ? batchState.tenants.filter(t => !!t.signatureDataUrl).length : 0;
    tenantsSum.style.background = signed > 0 ? '#eff6ff' : '#f1f5f9';
    tenantsSum.style.color = signed > 0 ? '#1d4ed8' : '#475569';
    tenantsSum.textContent = `Người thuê: ${signed}/${total} đã ký`;
  }
}

let currentBatchExportUrls = [];
let currentBatchFilesForShare = [];

function openBatchExportModal() {
  const modal = document.getElementById('batch-export-modal');
  if (modal) modal.hidden = false;
  if (window.lucide) lucide.createIcons();
}

function closeBatchExportModal() {
  const modal = document.getElementById('batch-export-modal');
  if (modal) modal.hidden = true;
}

async function shareBatchFilesNative() {
  if (navigator.share && currentBatchFilesForShare.length > 0) {
    try {
      const shareData = {
        title: 'Hồ sơ tạm trú số lượng',
        text: 'Hồ sơ đăng ký tạm trú CT01 và hợp đồng',
        files: currentBatchFilesForShare.slice(0, 10)
      };
      if (navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        showToast('Đã mở menu chia sẻ / lưu ảnh thành công!');
        return;
      }
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.warn('Native share failed:', e);
      }
    }
  }
  showToast('Chạm vào nút "Tải file" hoặc "Mở" ở từng mục để tải hoặc lưu ảnh vào iPhone.', 'info');
}

function renderBatchExportResultsList(results) {
  const container = document.getElementById('batch-export-results-list');
  if (!container) return;

  container.innerHTML = results.map(r => `
    <div class="batch-result-tenant-card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;border-bottom:1px solid #f1f5f9;padding-bottom:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="width:26px;height:26px;border-radius:6px;background:#fee2e2;color:#dc2626;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;">#${r.index}</span>
          <strong style="font-size:14px;color:#0f172a;text-transform:uppercase;">${escapeHtml(r.displayName)}</strong>
          ${r.citizenId ? `<span style="font-size:12px;color:#64748b;font-family:monospace;background:#f1f5f9;padding:2px 8px;border-radius:4px;">${escapeHtml(r.citizenId)}</span>` : ''}
        </div>
        <span style="font-size:12px;color:#16a34a;font-weight:700;">✓ Sẵn sàng tải</span>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:10px;">
        <!-- Link 1: CT01 -->
        <div class="batch-result-file-item">
          <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1;">
            <i data-lucide="file-text" style="width:16px;height:16px;color:#dc2626;flex-shrink:0;"></i>
            <div style="min-width:0;">
              <div style="font-size:12.5px;font-weight:700;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(r.ct01Filename)}</div>
              <span style="font-size:11px;color:#64748b;">Tờ khai CT01 (.JPG)</span>
            </div>
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0;">
            <a href="${r.urlCt01}" download="${escapeHtml(r.ct01Filename)}" target="_blank" class="capan-btn-coral-large" style="text-decoration:none;height:34px;padding:0 12px;font-size:12px;display:inline-flex;align-items:center;gap:4px;">
              <i data-lucide="download" style="width:13px;height:13px;"></i>
              <span>Tải file</span>
            </a>
            <a href="${r.urlCt01}" target="_blank" class="capan-btn-outline" style="text-decoration:none;height:34px;padding:0 8px;font-size:11.5px;display:inline-flex;align-items:center;gap:3px;" title="Mở ảnh để chạm giữ Lưu vào Ảnh trên iPhone">
              <i data-lucide="external-link" style="width:13px;height:13px;"></i>
              <span>Mở</span>
            </a>
          </div>
        </div>

        <!-- Link 2: Hợp đồng -->
        <div class="batch-result-file-item">
          <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1;">
            <i data-lucide="file-check" style="width:16px;height:16px;color:#0284c7;flex-shrink:0;"></i>
            <div style="min-width:0;">
              <div style="font-size:12.5px;font-weight:700;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(r.contractFilename)}</div>
              <span style="font-size:11px;color:#64748b;">Hợp đồng cư trú (.JPG)</span>
            </div>
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0;">
            <a href="${r.urlContract}" download="${escapeHtml(r.contractFilename)}" target="_blank" class="capan-btn-coral-large" style="text-decoration:none;height:34px;padding:0 12px;font-size:12px;display:inline-flex;align-items:center;gap:4px;background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%);">
              <i data-lucide="download" style="width:13px;height:13px;"></i>
              <span>Tải file</span>
            </a>
            <a href="${r.urlContract}" target="_blank" class="capan-btn-outline" style="text-decoration:none;height:34px;padding:0 8px;font-size:11.5px;display:inline-flex;align-items:center;gap:3px;" title="Mở ảnh để chạm giữ Lưu vào Ảnh trên iPhone">
              <i data-lucide="external-link" style="width:13px;height:13px;"></i>
              <span>Mở</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

async function exportBatchZip() {
  if (typeof JSZip === 'undefined') {
    showToast('Thư viện tạo file ZIP (JSZip) chưa tải xong. Vui lòng thử lại sau vài giây.', 'error');
    return;
  }

  const tenants = batchState.tenants || [];
  if (tenants.length === 0) {
    showToast('Danh sách người thuê đang trống. Vui lòng chọn số lượng ít nhất 1 người.', 'warn');
    return;
  }

  // Warn if no landlord name
  if (!batchState.landlord.fullName) {
    showToast('Vui lòng nhập họ tên hoặc quét CCCD Chủ nhà ở Bước 2 trước khi xuất hồ sơ.', 'warn');
    const landlordNameInput = document.getElementById('batch-landlord-name');
    if (landlordNameInput) landlordNameInput.focus();
    return;
  }

  const btnExport = document.getElementById('btn-export-batch-zip');
  const btnLabel = document.getElementById('btn-export-batch-zip-label');
  const progressWrap = document.getElementById('batch-export-progress-wrap');
  const progressFill = document.getElementById('batch-progress-bar-fill');
  const progressText = document.getElementById('batch-progress-text');

  const updateProgress = (pct, text) => {
    if (progressWrap) progressWrap.hidden = false;
    if (progressFill) progressFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    if (progressText) progressText.textContent = text;
  };

  const wsCt01 = document.getElementById('form-workspace-ct01');
  const prevHidden = wsCt01 ? wsCt01.hidden : false;
  const prevStyle = wsCt01 ? wsCt01.getAttribute('style') || '' : '';

  try {
    if (btnExport) btnExport.disabled = true;
    if (btnLabel) btnLabel.textContent = 'Đang khởi tạo nén file ZIP...';
    updateProgress(5, 'Đang chuẩn bị dữ liệu xuất hồ sơ...');

    // Clean up previous blob URLs
    currentBatchExportUrls.forEach(u => URL.revokeObjectURL(u));
    currentBatchExportUrls = [];
    currentBatchFilesForShare = [];

    const zip = new JSZip();
    const originalFormState = JSON.parse(JSON.stringify(formState));
    const originalLandlordSig = landlordSignatureDataUrl;
    const originalTenantSig = tenantSignatureDataUrl;
    const batchResults = [];

    // Temporarily make wsCt01 visible off-screen so html2canvas can measure & render A4
    if (wsCt01) {
      wsCt01.hidden = false;
      wsCt01.style.position = 'fixed';
      wsCt01.style.left = '-9999px';
      wsCt01.style.top = '0';
      wsCt01.style.width = '1240px';
      wsCt01.style.zIndex = '-9999';
      wsCt01.style.opacity = '1';
      wsCt01.style.visibility = 'visible';
      wsCt01.style.pointerEvents = 'none';
    }

    const total = tenants.length;
    for (let i = 0; i < total; i++) {
      const tenant = tenants[i];
      const displayName = (tenant.fullName || `Nguoi_Thue_${i + 1}`).trim();
      const pct = Math.round(10 + (i / total) * 78);
      updateProgress(pct, `Đang kết xuất hồ sơ (${i + 1}/${total}): ${displayName}...`);

      // 1. Map batch landlord & house & tenant into formState
      formState.landlordName = batchState.landlord.fullName || '';
      formState.landlordBirthYear = batchState.landlord.birthYear || '';
      formState.landlordId = batchState.landlord.citizenId || '';
      formState.landlordAddress = batchState.landlord.permanentAddress || '';

      formState.houseNo = batchState.house.houseNo || '';
      formState.street = batchState.house.street || '';
      formState.quarter = '';
      formState.ward = batchState.house.ward || '';
      formState.city = batchState.house.city || '';

      formState.fullName = tenant.fullName || `Người thuê ${i + 1}`;
      formState.birthDate = tenant.birthDate || '';
      formState.gender = tenant.gender || 'Nam';
      formState.citizenId = tenant.citizenId || '';
      formState.phone = tenant.phone || '';
      formState.email = tenant.email || '';
      formState.permanentAddress = tenant.permanentAddress || '';
      formState.requestContent = 'Đăng ký tạm trú';
      formState.members = [];

      // Ensure valid contract moveInDate
      if (!formState.moveInDate) {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        formState.moveInDate = `${yyyy}-${mm}-${dd}T10:00`;
      }

      // Map signatures:
      // Landlord signs once (batchState.landlord.signatureDataUrl) or fallback to single workspace sig
      landlordSignatureDataUrl = batchState.landlord.signatureDataUrl || originalLandlordSig || '';
      // Each tenant has their own signature in tenant.signatureDataUrl
      tenantSignatureDataUrl = tenant.signatureDataUrl || '';

      renderAllA4AndCards();

      // Small pause for DOM update
      await new Promise(r => setTimeout(r, 60));

      // Render canvases
      const canvases = await renderA4PagesToCanvases();
      const blobCt01 = await canvasToJpegBlob(canvases[0], 0.96);
      const blobContract = await canvasToJpegBlob(canvases[1], 0.96);

      // Subfolder named after tenant: [Tên người thuê]
      const cleanTenantName = displayName.replace(/[\\/:*?"<>|]/g, '_');
      const folderName = `${cleanTenantName}${tenant.citizenId ? '_' + tenant.citizenId : ''}`;
      const ct01Filename = `01_CT01_${cleanTenantName}.jpg`;
      const contractFilename = `02_HopDongCuTru_${cleanTenantName}.jpg`;

      const tenantFolder = zip.folder(folderName);
      tenantFolder.file(ct01Filename, blobCt01);
      tenantFolder.file(contractFilename, blobContract);

      const urlCt01 = URL.createObjectURL(blobCt01);
      const urlContract = URL.createObjectURL(blobContract);
      currentBatchExportUrls.push(urlCt01, urlContract);

      try {
        currentBatchFilesForShare.push(new File([blobCt01], ct01Filename, { type: 'image/jpeg' }));
        currentBatchFilesForShare.push(new File([blobContract], contractFilename, { type: 'image/jpeg' }));
      } catch (e) {}

      batchResults.push({
        index: i + 1,
        displayName,
        citizenId: tenant.citizenId || '',
        urlCt01,
        urlContract,
        ct01Filename,
        contractFilename
      });
    }

    updateProgress(92, 'Đang đóng gói và nén tất cả hồ sơ thành file ZIP...');
    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });

    const nowStr = new Date().toISOString().slice(0, 10);
    const filename = `HoSoTamTru_SoLuong_${total}_Nguoi_${nowStr}.zip`;
    const zipUrl = URL.createObjectURL(zipBlob);
    currentBatchExportUrls.push(zipUrl);

    // Update modal controls
    const zipBtn = document.getElementById('btn-batch-download-zip');
    const zipLabel = document.getElementById('batch-zip-filename-label');
    const modalSubtitle = document.getElementById('batch-export-modal-subtitle');
    if (zipBtn) {
      zipBtn.href = zipUrl;
      zipBtn.download = filename;
    }
    if (zipLabel) zipLabel.textContent = filename;
    if (modalSubtitle) modalSubtitle.textContent = `Đã xuất thành công ${total} bộ hồ sơ (${total * 2} file ảnh JPG A4)`;

    // Render results into batch modal
    renderBatchExportResultsList(batchResults);

    // On non-iOS devices, attempt automatic download
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (!isIOS) {
      triggerBlobDownload(zipBlob, filename);
    }

    openBatchExportModal();

    updateProgress(100, `Hoàn tất! Đã xuất ${total} bộ hồ sơ.`);
    showToast(`Đã xuất thành công gói hồ sơ tạm trú cho ${total} người thuê!`);
  } catch (err) {
    console.error('Batch export error:', err);
    showToast('Có lỗi trong quá trình kết xuất và nén file ZIP.', 'error');
    if (progressText) progressText.textContent = 'Quá trình xuất bị gián đoạn. Vui lòng thử lại.';
  } finally {
    // Restore original state and signatures
    formState = originalFormState;
    landlordSignatureDataUrl = originalLandlordSig;
    tenantSignatureDataUrl = originalTenantSig;
    renderAllA4AndCards();

    if (wsCt01) {
      wsCt01.hidden = prevHidden;
      if (prevStyle) wsCt01.setAttribute('style', prevStyle);
      else wsCt01.removeAttribute('style');
    }
    if (btnExport) btnExport.disabled = false;
    if (btnLabel) btnLabel.textContent = 'Xuất & Tải về toàn bộ hồ sơ (.ZIP)';
    setTimeout(() => {
      if (progressWrap) progressWrap.hidden = true;
    }, 8000);
  }
}



// ============================================================================
// CAMERA ROLL DIRECT SAVE & NATIVE SHARE CONTROLLER
// ============================================================================
let exportGeneratedBlobs = [];
let exportFilenames = { ct01: '', contract: '', zip: '' };

async function handleSaveToAlbum() {
  if (!exportGeneratedBlobs || exportGeneratedBlobs.length < 2) {
    showToast('Chưa có file ảnh hồ sơ để lưu. Vui lòng bấm tạo ảnh trước.', 'warn');
    return;
  }
  const cleanName = (formState.fullName || 'CongDan').trim().replace(/\s+/g, '_');
  const ct01Name = exportFilenames.ct01 || `01_CT01_${cleanName}.jpg`;
  const contractName = exportFilenames.contract || `02_HopDong_${cleanName}.jpg`;

  const file1 = new File([exportGeneratedBlobs[0]], ct01Name, { type: 'image/jpeg' });
  const file2 = new File([exportGeneratedBlobs[1]], contractName, { type: 'image/jpeg' });

  // 1. Thử dùng Web Share API (Safari iOS / Android hỗ trợ "Lưu 2 hình ảnh" trực tiếp vào Album ảnh)
  if (navigator.canShare && navigator.canShare({ files: [file1, file2] })) {
    try {
      await navigator.share({
        files: [file1, file2],
        title: 'Lưu Hồ sơ Cư trú A4 vào Album ảnh',
        text: `02 trang hồ sơ cư trú của ${formState.fullName || 'Công dân'}`
      });
      showToast('Đã mở bảng lưu ảnh vào Album ảnh thiết bị.');
      return;
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.warn('Lỗi Share API, chuyển sang tải ảnh:', e);
      } else {
        return; // Người dùng chủ động bấm Hủy trên bảng Share của hệ điều hành
      }
    }
  }

  // 2. Fallback cho máy tính / trình duyệt không hỗ trợ multi-file share: Tự động tải tuần tự 2 ảnh về máy
  showToast('Đang tải đồng thời 02 ảnh hồ sơ về album/thiết bị...');
  triggerBlobDownload(exportGeneratedBlobs[0], ct01Name);
  setTimeout(() => {
    triggerBlobDownload(exportGeneratedBlobs[1], contractName);
  }, 500);
}

// Giữ tương thích ngược với các lệnh gọi cũ
window.handleSaveToAlbum = handleSaveToAlbum;
window.handleDirectCameraRollSave = handleSaveToAlbum;
window.handleNativeSharePrompt = handleSaveToAlbum;
