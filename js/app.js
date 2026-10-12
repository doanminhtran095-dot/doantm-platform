/**
 * DOANTM Platform - Main Application Controller
 * Handles:
 * - Dynamic Text Rotation Carousel
 * - Modal and Drawer Orchestration
 * - Search Dialog (Ctrl+K)
 * - Sign Up / Auth Modal
 * - Guides, Drone R&D, and Tour modals
 * - Toast Notifications
 * - Intersection Observer Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Initialize 3D Drone Engine
  let droneInstance = null;
  if (document.getElementById('drone-canvas-container') && window.Drone3DEngine) {
    droneInstance = new Drone3DEngine('drone-canvas-container');
    window.droneEngine = droneInstance;
  }

  // 2. Initialize DVC Form Engine
  let formEngineInstance = null;
  if (window.DVCFormEngine) {
    formEngineInstance = new DVCFormEngine();
    window.dvcFormEngine = formEngineInstance;
  }

  // 3. Dynamic Text Rotation Carousel
  initHeroTextCarousel();

  // 4. Modal Handlers
  setupModalHandlers(formEngineInstance, droneInstance);

  // 5. Global Search (Ctrl + K)
  setupGlobalSearch();

  // 6. Scroll Animations & Navigation
  setupScrollEffects();

  // 7. QR Scanner Simulator & Presets
  setupQRSimulator(formEngineInstance);

  // 8. Ambient Web Mini Drones Controller
  initWebMiniDrones();
});

// ==========================================
// 1. DYNAMIC TEXT ROTATION CAROUSEL
// ==========================================
function initHeroTextCarousel() {
  const targetEl = document.getElementById('hero-rotating-text');
  if (!targetEl) return;

  const phrases = [
    "Chào mình là Đoàn !",
    "Tool Điền mẫu điện tử nhanh chóng",
    "Nghiên cứu Drone",
    "Làm việc nhanh hơn nhờ AI"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeCycle() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      targetEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      targetEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at full text
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeCycle, typingSpeed);
  }

  typeCycle();
}

// ==========================================
// 2. MODAL & DRAWER ORCHESTRATION
// ==========================================
function setupModalHandlers(formEngine, droneEngine) {
  // Helper to open/close modal
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Refresh icons inside modal
    if (window.lucide) lucide.createIcons();

    // If opening form modal, refresh canvas sizes
    if (modalId === 'modal-dvc-tool' && formEngine) {
      setTimeout(() => {
        formEngine.setupSignaturePads();
      }, 150);
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  // Close modals on backdrop click or ESC key
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop:not(.hidden)').forEach(modal => {
        modal.classList.add('hidden');
      });
      document.body.style.overflow = '';
    }
  });

  // Drone Controls in Hero
  const btnBarrel = document.getElementById('btn-drone-barrel');
  const btnTurbo = document.getElementById('btn-drone-turbo');
  const btnRadar = document.getElementById('btn-drone-radar');

  if (btnBarrel && droneEngine) {
    btnBarrel.addEventListener('click', () => {
      droneEngine.triggerStunt('barrel-roll');
      showToast('Kích hoạt thao tác lộn 360° Barrel Roll!', 'info');
    });
  }

  if (btnTurbo && droneEngine) {
    btnTurbo.addEventListener('click', () => {
      const isTurbo = droneEngine.flightMode === 'turbo';
      droneEngine.setFlightMode(isTurbo ? 'hover' : 'turbo');
      btnTurbo.classList.toggle('bg-red-600', !isTurbo);
      btnTurbo.classList.toggle('text-white', !isTurbo);
      showToast(!isTurbo ? 'Chế độ Turbo Boost: Động cơ tăng tốc 300%' : 'Chế độ Bay Cân bằng (Hover)', 'success');
    });
  }

  if (btnRadar && droneEngine) {
    btnRadar.addEventListener('click', () => {
      const isRadar = droneEngine.flightMode === 'radar';
      droneEngine.setFlightMode(isRadar ? 'hover' : 'radar');
      btnRadar.classList.toggle('bg-cyan-600', !isRadar);
      btnRadar.classList.toggle('text-white', !isRadar);
      showToast(!isRadar ? 'Kích hoạt Cảm biến Radar Quét 3D' : 'Đã tắt Radar', 'info');
    });
  }

  // DVC Form Document Tabs (CT01 vs Contract)
  const tabBtnCT01 = document.getElementById('tab-btn-ct01');
  const tabBtnContract = document.getElementById('tab-btn-contract');
  const docCT01Preview = document.getElementById('doc-ct01-preview');
  const docContractPreview = document.getElementById('doc-contract-preview');

  if (tabBtnCT01 && tabBtnContract) {
    tabBtnCT01.addEventListener('click', () => {
      tabBtnCT01.classList.add('border-red-600', 'text-red-600', 'font-bold');
      tabBtnCT01.classList.remove('border-transparent', 'text-gray-500');
      tabBtnContract.classList.remove('border-red-600', 'text-red-600', 'font-bold');
      tabBtnContract.classList.add('border-transparent', 'text-gray-500');

      docCT01Preview.classList.remove('hidden');
      docContractPreview.classList.add('hidden');
      if (formEngine) formEngine.activeTab = 'ct01';
    });

    tabBtnContract.addEventListener('click', () => {
      tabBtnContract.classList.add('border-red-600', 'text-red-600', 'font-bold');
      tabBtnContract.classList.remove('border-transparent', 'text-gray-500');
      tabBtnCT01.classList.remove('border-red-600', 'text-red-600', 'font-bold');
      tabBtnCT01.classList.add('border-transparent', 'text-gray-500');

      docContractPreview.classList.remove('hidden');
      docCT01Preview.classList.add('hidden');
      if (formEngine) formEngine.activeTab = 'contract';
    });
  }

  // Export Buttons
  const btnExportPdf = document.getElementById('btn-export-pdf');
  const btnPrintDoc = document.getElementById('btn-print-doc');

  if (btnExportPdf && formEngine) {
    btnExportPdf.addEventListener('click', async () => {
      showToast('Đang kết xuất tài liệu PDF chất lượng cao...', 'info');
      const success = await formEngine.exportCurrentDocumentPDF();
      if (success) {
        showToast('Tải về tài liệu PDF thành công!', 'success');
      }
    });
  }

  if (btnPrintDoc && formEngine) {
    btnPrintDoc.addEventListener('click', () => {
      formEngine.printCurrentDocument();
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('hidden');
    });
  }
}

// ==========================================
// 3. QR CODE SCANNER SIMULATOR & PRESETS
// ==========================================
function setupQRSimulator(formEngine) {
  // Preset Buttons
  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const presetKey = btn.getAttribute('data-preset');
      if (formEngine && formEngine.applyPreset(presetKey)) {
        showToast(`Đã nạp dữ liệu mẫu: ${btn.textContent.trim()}`, 'success');
      }
    });
  });

  // QR String Input apply
  const btnApplyQRText = document.getElementById('btn-apply-qr-text');
  const inputQRRaw = document.getElementById('input-qr-raw');
  if (btnApplyQRText && inputQRRaw && formEngine) {
    btnApplyQRText.addEventListener('click', () => {
      const text = inputQRRaw.value.trim();
      if (!text) {
        showToast('Vui lòng dán chuỗi mã QR CCCD gắn chip!', 'warning');
        return;
      }
      const ok = formEngine.parseCCCDQRString(text);
      if (ok) {
        showToast('Phân tích và tự động điền mẫu thành công!', 'success');
      } else {
        showToast('Định dạng mã QR không khớp chuẩn CCCD (12 số|CMND|Họ tên|Ngày sinh|Giới tính|Địa chỉ)', 'error');
      }
    });
  }

  // Simulated Camera Scanner Trigger
  const btnStartScanner = document.getElementById('btn-simulate-scan');
  const scanOverlay = document.getElementById('camera-scan-simulation');
  if (btnStartScanner && scanOverlay) {
    btnStartScanner.addEventListener('click', () => {
      scanOverlay.classList.remove('hidden');
      showToast('Khởi động camera AI quét mã QR CCCD...', 'info');

      // Simulate AI detection after 2.2 seconds
      setTimeout(() => {
        scanOverlay.classList.add('hidden');
        if (formEngine) {
          formEngine.applyPreset('preset1');
          showToast('Nhận diện thành công QR CCCD: NGUYỄN VĂN AN', 'success');
        }
      }, 2400);
    });
  }

  // Close scanner simulator
  const btnCloseScan = document.getElementById('btn-close-scanner');
  if (btnCloseScan && scanOverlay) {
    btnCloseScan.addEventListener('click', () => {
      scanOverlay.classList.add('hidden');
    });
  }

  // File Upload QR Input
  const fileInput = document.getElementById('upload-qr-file');
  if (fileInput && formEngine) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        showToast(`Đang đọc tệp tin: ${file.name}...`, 'info');
        setTimeout(() => {
          formEngine.applyPreset('preset2');
          showToast('Đã trích xuất thông tin từ ảnh QR thành công!', 'success');
        }, 1200);
      }
    });
  }
}

// ==========================================
// 4. GLOBAL SEARCH (Ctrl + K)
// ==========================================
function setupGlobalSearch() {
  const searchModal = document.getElementById('modal-search');
  const searchInput = document.getElementById('search-dialog-input');
  const searchResults = document.getElementById('search-results-list');
  const searchTriggers = document.querySelectorAll('.trigger-search-modal');

  const searchableItems = [
    {
      title: "Tool Điền Mẫu CT01 - Cư Trú",
      category: "Dịch Vụ Công",
      desc: "Tự động điền tờ khai thay đổi thông tin cư trú từ QR CCCD gắn chip",
      action: () => openModal('modal-dvc-tool')
    },
    {
      title: "Hợp Đồng Thuê Nhà Ở Chuẩn Pháp Lý",
      category: "Hành Chính & Pháp Lý",
      desc: "Tạo hợp đồng thuê trọ/căn hộ có chữ ký điện tử hai bên chuẩn Bộ luật Dân sự",
      action: () => {
        openModal('modal-dvc-tool');
        const tab = document.getElementById('tab-btn-contract');
        if (tab) tab.click();
      }
    },
    {
      title: "Nghiên Cứu Drone Nông Nghiệp Thông Minh",
      category: "R&D Drone",
      desc: "Hệ thống phun thuốc tự động & phân tích bản đồ dinh dưỡng cây trồng",
      action: () => openModal('modal-drone-rd')
    },
    {
      title: "Trắc Địa 3D & Bản Đồ Địa Hình LiDAR",
      category: "R&D Drone",
      desc: "Khảo sát địa chất, mô hình hóa bề mặt 3D độ chính xác cao bằng máy bay không người lái",
      action: () => openModal('modal-drone-rd')
    },
    {
      title: "Hướng Dẫn Đăng Ký Tạm Trú Trực Tuyến",
      category: "Cẩm Nang",
      desc: "Quy trình từng bước nộp hồ sơ tạm trú trên Cổng DVC Bộ Công An & VNeID",
      action: () => openModal('modal-dvc-guides')
    },
    {
      title: "Cấp Đổi Hộ Chiếu Phổ Thông Online",
      category: "Cẩm Nang",
      desc: "Hướng dẫn làm hộ chiếu online nhận kết quả tại nhà trong 8 ngày làm việc",
      action: () => openModal('modal-dvc-guides')
    },
    {
      title: "Đổi Giấy Phép Lái Xe Trực Tuyến Toàn Trình",
      category: "Cẩm Nang",
      desc: "Các bước nộp hồ sơ đổi bằng lái xe ô tô, xe máy qua Cổng Dịch Vụ Công Quốc Gia",
      action: () => openModal('modal-dvc-guides')
    },
    {
      title: "Tour Săn Mây Tà Xùa & Trải Nghiệm Flycam FPV",
      category: "Du Lịch & Drone",
      desc: "Hành trình 3 ngày 2 đêm khám phá Tây Bắc và khóa học bay flycam thực chiến",
      action: () => openModal('modal-tours')
    },
    {
      title: "Tour Chinh Phục Đèo Mã Pí Lèng - Hà Giang",
      category: "Du Lịch & Drone",
      desc: "Quay phim điện ảnh 4K bằng Drone FPV tại cung đường đèo hùng vĩ nhất Việt Nam",
      action: () => openModal('modal-tours')
    }
  ];

  function openSearch() {
    if (searchModal) {
      searchModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        renderResults(searchableItems);
      }
    }
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));

  // Shortcut Ctrl + K or Cmd + K or /
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    }
  });

  function renderResults(items) {
    if (!searchResults) return;
    if (items.length === 0) {
      searchResults.innerHTML = `
        <div class="p-8 text-center text-gray-400">
          <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-2 text-gray-500"></i>
          <p class="text-sm">Không tìm thấy kết quả phù hợp.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    searchResults.innerHTML = items.map((item, idx) => `
      <div class="search-result-item p-3.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition flex items-center justify-between border-b border-gray-100 dark:border-zinc-800/80 last:border-0" data-idx="${idx}">
        <div class="flex-1 pr-4">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs px-2 py-0.5 rounded font-medium bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400">${item.category}</span>
            <h4 class="font-semibold text-sm text-gray-900 dark:text-white">${item.title}</h4>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400">${item.desc}</p>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400 flex-shrink-0"></i>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();

    // Click handler on results
    searchResults.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-idx'), 10);
        closeModal('modal-search');
        items[idx].action();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderResults(searchableItems);
        return;
      }
      const filtered = searchableItems.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
      renderResults(filtered);
    });
  }
}

// ==========================================
// 5. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const typeStyles = {
    success: 'bg-emerald-900/90 border-emerald-500/50 text-emerald-100',
    error: 'bg-red-950/90 border-red-500/50 text-red-100',
    warning: 'bg-amber-950/90 border-amber-500/50 text-amber-100',
    info: 'bg-zinc-900/95 border-zinc-700 text-zinc-100'
  };

  const icons = {
    success: 'check-circle',
    error: 'alert-circle',
    warning: 'alert-triangle',
    info: 'info'
  };

  toast.className = `flex items-center gap-2 px-4 py-3 rounded-lg shadow-xl border text-sm backdrop-blur-md transition-all duration-300 transform translate-y-2 opacity-0 ${typeStyles[type] || typeStyles.info}`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'info'}" class="w-4 h-4 flex-shrink-0"></i>
    <span class="font-medium">${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
window.showToast = showToast;

// ==========================================
// 6. SCROLL ANIMATIONS
// ==========================================
function setupScrollEffects() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
    observer.observe(el);
  });
}

// ==========================================
// 7. AMBIENT WEB MINI DRONES FLIGHT CONTROLLER
// ==========================================
function initWebMiniDrones() {
  const droneAlpha = document.getElementById('web-drone-alpha');
  const droneBeta = document.getElementById('web-drone-beta');

  if (!droneAlpha && !droneBeta) return;

  let isHoveredAlpha = false;
  let isHoveredBeta = false;
  let isRollingAlpha = false;
  let isRollingBeta = false;

  if (droneAlpha) {
    droneAlpha.addEventListener('mouseenter', () => { isHoveredAlpha = true; });
    droneAlpha.addEventListener('mouseleave', () => { isHoveredAlpha = false; });
    droneAlpha.addEventListener('click', () => {
      if (isRollingAlpha) return;
      isRollingAlpha = true;
      droneAlpha.style.transition = 'transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)';
      droneAlpha.style.transform = `${droneAlpha.dataset.baseTransform || ''} rotate(360deg) scale(1.25)`;
      setTimeout(() => {
        droneAlpha.style.transition = 'transform 0.1s linear';
        isRollingAlpha = false;
      }, 850);
    });
  }

  if (droneBeta) {
    droneBeta.addEventListener('mouseenter', () => { isHoveredBeta = true; });
    droneBeta.addEventListener('mouseleave', () => { isHoveredBeta = false; });
    droneBeta.addEventListener('click', () => {
      if (isRollingBeta) return;
      isRollingBeta = true;
      droneBeta.style.transition = 'transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)';
      droneBeta.style.transform = `${droneBeta.dataset.baseTransform || ''} rotate(-360deg) scale(1.25)`;
      setTimeout(() => {
        droneBeta.style.transition = 'transform 0.1s linear';
        isRollingBeta = false;
      }, 850);
    });
  }

  let startTime = performance.now();

  function animateMiniDrones(now) {
    const elapsed = (now - startTime) / 1000;

    // Flight physics for UAV Alpha (Cruising left & upper areas)
    if (droneAlpha && !isRollingAlpha) {
      const speedFactor = isHoveredAlpha ? 0.2 : 1.0;
      const t = elapsed * speedFactor;
      // Lissajous curve displacement
      const dx = Math.sin(t * 0.5) * 45 + Math.cos(t * 0.25) * 20;
      const dy = Math.cos(t * 0.6) * 30 + Math.sin(t * 0.3) * 15;
      const banking = Math.cos(t * 0.5) * 8; // gentle roll angle
      const floatBob = Math.sin(t * 2.0) * 4;

      droneAlpha.dataset.baseTransform = `translate3d(${dx.toFixed(1)}px, ${(dy + floatBob).toFixed(1)}px, 0px) rotate(${banking.toFixed(1)}deg)`;
      droneAlpha.style.transform = droneAlpha.dataset.baseTransform;
    }

    // Flight physics for UAV Beta (Patrolling right & lower ambient areas)
    if (droneBeta && !isRollingBeta) {
      const speedFactor = isHoveredBeta ? 0.2 : 1.0;
      const t = (elapsed + 12) * speedFactor;
      // Complementary harmonic curve displacement
      const dx = Math.cos(t * 0.45) * 50 + Math.sin(t * 0.2) * 25;
      const dy = Math.sin(t * 0.55) * 35 + Math.cos(t * 0.35) * 18;
      const banking = -Math.sin(t * 0.45) * 8;
      const floatBob = Math.cos(t * 2.2) * 4;

      droneBeta.dataset.baseTransform = `translate3d(${dx.toFixed(1)}px, ${(dy + floatBob).toFixed(1)}px, 0px) rotate(${banking.toFixed(1)}deg)`;
      droneBeta.style.transform = droneBeta.dataset.baseTransform;
    }

    requestAnimationFrame(animateMiniDrones);
  }

  requestAnimationFrame(animateMiniDrones);
}
