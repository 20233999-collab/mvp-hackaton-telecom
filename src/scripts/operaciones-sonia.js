/* ==========================================================================
   CONSOLA TABLET SON-IA • ENGINE FASE 2 (INTERACTIVIDAD TÁCTIL PANTALLA POR PANTALLA)
   Directivas: DESIGN.md • GSAP Animations • Confetti • Tablet Step Flow
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

class SoniaTabletOperationsEngine {
  constructor() {
    this.currentStep = 0; // 0: Login, 1: Scoring, 2: BCP, 3: SGA, 4: OLT
    this.isAutoPlaying = false;
    this.autoPlayInterval = null;

    // DOM Elements
    this.tabletScreenSubTitle = document.getElementById('tabletScreenSubTitle');
    this.bcpEventFeedTablet = document.getElementById('bcpEventFeedTablet');
    this.oltTerminalTablet = document.getElementById('oltTerminalTablet');
    this.portJuanTablet = document.getElementById('portJuanTablet');

    this.init();
  }

  init() {
    createIcons({ icons });
    this.bindEvents();
    this.goToStep(0);
    console.log('📱 Tablet SON-IA Operations Engine (Phase 2) initialized.');
  }

  bindEvents() {
    // Screen 0: Biometric Login Actions
    document.getElementById('biometricTouchBtn')?.addEventListener('click', () => {
      this.triggerBiometricLogin();
    });

    document.getElementById('btnEnterConsole')?.addEventListener('click', () => {
      this.triggerBiometricLogin();
    });

    // Step Transition Next Action Buttons
    document.getElementById('btnGoToStep2')?.addEventListener('click', () => this.goToStep(2));
    document.getElementById('btnGoToStep3')?.addEventListener('click', () => this.goToStep(3));
    document.getElementById('btnGoToStep4')?.addEventListener('click', () => this.goToStep(4));
    document.getElementById('btnRestartFlow')?.addEventListener('click', () => this.goToStep(0));

    // Interactive In-Screen Buttons
    document.getElementById('btnTouchBcpPay')?.addEventListener('click', () => {
      this.triggerBcpPayInScreen();
    });

    document.getElementById('btnHitlGiantApprove')?.addEventListener('click', () => {
      this.triggerHitlApprovalInScreen();
    });

    // Bottom Thumb Bar Buttons
    document.getElementById('btnThumb0')?.addEventListener('click', () => this.goToStep(0));
    document.getElementById('btnThumb1')?.addEventListener('click', () => this.goToStep(1));
    document.getElementById('btnThumb2')?.addEventListener('click', () => this.goToStep(2));
    document.getElementById('btnThumb3')?.addEventListener('click', () => this.goToStep(3));
    document.getElementById('btnThumb4')?.addEventListener('click', () => this.goToStep(4));
    document.getElementById('btnAutoPlayTablet')?.addEventListener('click', () => this.toggleAutoPlay());

    // Keyboard Shortcuts (0, 1, 2, 3, 4, Space, Arrow keys)
    document.addEventListener('keydown', (e) => {
      if (e.key === '0') this.goToStep(0);
      if (e.key === '1') this.goToStep(1);
      if (e.key === '2') this.goToStep(2);
      if (e.key === '3') this.goToStep(3);
      if (e.key === '4') this.goToStep(4);
      if (e.key === ' ' || e.key === 'ArrowRight') {
        if (this.currentStep < 4) this.goToStep(this.currentStep + 1);
        else this.goToStep(0);
      }
      if (e.key === 'ArrowLeft') {
        if (this.currentStep > 0) this.goToStep(this.currentStep - 1);
      }
    });
  }

  goToStep(stepNum) {
    this.currentStep = stepNum;
    this.updateActiveStepUI(stepNum);

    // Hide all screens
    const screens = ['screen0Login', 'screen1Scoring', 'screen2Bcp', 'screen3Sga', 'screen4Olt'];
    screens.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el) {
        if (idx === stepNum) el.classList.add('active-view');
        else el.classList.remove('active-view');
      }
    });

    if (stepNum === 0) this.renderScreen0();
    if (stepNum === 1) this.renderScreen1();
    if (stepNum === 2) this.renderScreen2();
    if (stepNum === 3) this.renderScreen3();
    if (stepNum === 4) this.renderScreen4();

    createIcons({ icons });
  }

  updateActiveStepUI(stepNum) {
    // Update Stories progress segments (0 to 4)
    for (let i = 0; i <= 4; i++) {
      const seg = document.getElementById(`storySeg${i}`);
      const btnThumb = document.getElementById(`btnThumb${i}`);

      if (seg) {
        seg.classList.remove('active', 'completed');
        if (i < stepNum) seg.classList.add('completed');
        else if (i === stepNum) seg.classList.add('active');
      }

      if (btnThumb) {
        if (i === stepNum) btnThumb.classList.add('active');
        else btnThumb.classList.remove('active');
      }
    }
  }

  /* --- PANTALLA 0: LOGIN --- */
  renderScreen0() {
    if (this.tabletScreenSubTitle) {
      this.tabletScreenSubTitle.innerText = 'Acceso Biométrico • Estación de Trabajo Ana';
    }
  }

  triggerBiometricLogin() {
    const laser = document.querySelector('.biometric-scanning-laser');
    if (laser) {
      gsap.to(laser, { backgroundColor: '#00C853', boxShadow: '0 0 14px #00C853', duration: 0.3 });
    }
    setTimeout(() => {
      this.goToStep(1);
    }, 450);
  }

  /* --- PANTALLA 1: SCORING & SOFT-LOCK --- */
  renderScreen1() {
    if (this.tabletScreenSubTitle) {
      this.tabletScreenSubTitle.innerText = 'Paso 1: Clasificación de Deuda & Modo Mantenimiento';
    }

    const needle = document.getElementById('tachNeedle1');
    if (needle) {
      gsap.fromTo(needle, 
        { attr: { x2: 100, y2: 20 } },
        { attr: { x2: 45, y2: 55 }, duration: 0.8, ease: 'power2.out' }
      );
    }
  }

  /* --- PANTALLA 2: DISPERSIÓN BCP --- */
  renderScreen2() {
    if (this.tabletScreenSubTitle) {
      this.tabletScreenSubTitle.innerText = 'Paso 2: Sincronización con Portal de Recaudo BCP';
    }
  }

  triggerBcpPayInScreen() {
    const btn = document.getElementById('btnTouchBcpPay');
    if (btn) {
      btn.innerHTML = '<i data-lucide="check-circle-2" style="width: 20px;"></i> <span>¡Abono Procesado con Éxito!</span>';
      btn.style.background = '#00C853';
    }
    if (this.bcpEventFeedTablet) {
      this.bcpEventFeedTablet.innerHTML = `
        <div class="feed-row" style="color: #4ADE80;">
          <span class="feed-time">[14:20:10]</span>
          <span class="feed-txt">HTTP 200 OK: Abono de S/ 99.33 recibido del BCP. Notificando a M.O.V.I...</span>
        </div>
      `;
    }
    createIcons({ icons });

    setTimeout(() => {
      this.goToStep(3);
    }, 900);
  }

  /* --- PANTALLA 3: AUDITORÍA SGA & HITL --- */
  renderScreen3() {
    if (this.tabletScreenSubTitle) {
      this.tabletScreenSubTitle.innerText = 'Paso 3: Conciliación SGA y Validación Humana (HITL)';
    }
  }

  triggerHitlApprovalInScreen() {
    const btn = document.getElementById('btnHitlGiantApprove');
    if (btn) {
      btn.innerHTML = '<i data-lucide="check" style="width: 22px;"></i> <span>¡Conciliación Aprobada por Ana!</span>';
      btn.style.background = '#047857';
    }
    createIcons({ icons });

    setTimeout(() => {
      this.goToStep(4);
    }, 700);
  }

  /* --- PANTALLA 4: OLT GPON & RESULTADOS --- */
  renderScreen4() {
    if (this.tabletScreenSubTitle) {
      this.tabletScreenSubTitle.innerText = 'Paso 4: Despacho SON-IA & Reconexión GPON en 4.2 Segundos';
    }

    if (this.portJuanTablet) {
      gsap.fromTo(this.portJuanTablet, { scale: 0.8 }, { scale: 1.25, yoyo: true, repeat: 3, duration: 0.2 });
    }

    const timer = document.getElementById('timerBigNum');
    if (timer) {
      gsap.fromTo(timer, { scale: 0.8 }, { scale: 1.05, duration: 0.5, ease: 'back.out(2)' });
    }

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#019DF4', '#00D4FF', '#00C853']
    });
  }

  /* --- AUTO PLAY TABLET PITCH (45 SEGUNDOS) --- */
  toggleAutoPlay() {
    if (this.isAutoPlaying) {
      clearInterval(this.autoPlayInterval);
      this.isAutoPlaying = false;
      document.getElementById('btnAutoPlayTablet').innerHTML = '<i data-lucide="play" style="width: 14px;"></i> Auto Pitch';
    } else {
      this.isAutoPlaying = true;
      document.getElementById('btnAutoPlayTablet').innerHTML = '<i data-lucide="pause" style="width: 14px;"></i> Pausar';
      this.goToStep(0);

      let step = 0;
      this.autoPlayInterval = setInterval(() => {
        step++;
        if (step > 4) {
          clearInterval(this.autoPlayInterval);
          this.isAutoPlaying = false;
          document.getElementById('btnAutoPlayTablet').innerHTML = '<i data-lucide="play" style="width: 14px;"></i> Auto Pitch';
        } else {
          this.goToStep(step);
        }
      }, 4000); // 4 segundos por pantalla
    }
    createIcons({ icons });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SoniaTabletOperationsEngine();
});
