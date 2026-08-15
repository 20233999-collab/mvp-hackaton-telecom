/* ==========================================================================
   MOVISTAR TELEMARKETING CRM ENGINE (SALESFORCE / DITO + CLUELY AI HUD)
   Perspectiva 100% Real de la Aplicación del Asesor (Carlos Alvarado)
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

class MovistarCrmWorkstationApp {
  constructor() {
    this.currentScreen = 1;
    this.isAutoPlaying = false;
    this.typewriterInterval = null;
    
    // Elementos de UI
    this.commissionLiveHeader = document.getElementById('commValLive');
    this.commissionOdometerVal = document.getElementById('odometerNumberLive');
    this.sidebarProgressFill = document.getElementById('shiftProgressFill');

    this.init();
  }

  init() {
    createIcons({ icons });
    this.bindInAppEvents();
    this.bindWorkflowController();
    this.renderScreen(1);
    console.log('🏢 Movistar Salesforce/DITO Workstation (Carlos View) initialized.');
  }

  bindInAppEvents() {
    document.getElementById('btnAnswerCallAction')?.addEventListener('click', () => {
      this.renderScreen(2);
    });

    document.getElementById('btnStartPitchCall')?.addEventListener('click', () => {
      this.renderScreen(3);
    });

    document.getElementById('btnTriggerObjection')?.addEventListener('click', () => {
      this.renderScreen(4);
    });

    document.getElementById('btnProceedToFormFill')?.addEventListener('click', () => {
      this.renderScreen(5);
    });

    document.getElementById('btnSubmitDitoSale')?.addEventListener('click', () => {
      this.renderScreen(6);
    });

    document.getElementById('btnResetShift')?.addEventListener('click', () => {
      this.renderScreen(1);
    });
  }

  bindWorkflowController() {
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`btnWorkflow${i}`)?.addEventListener('click', () => {
        this.renderScreen(i);
      });
    }

    document.getElementById('btnAutoPlayWorkflow')?.addEventListener('click', () => {
      this.startAutoPlay();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key >= '1' && e.key <= '6') {
        this.renderScreen(parseInt(e.key));
      } else if (e.key === ' ' || e.key === 'ArrowRight') {
        if (this.currentScreen < 6) this.renderScreen(this.currentScreen + 1);
        else this.renderScreen(1);
      }
    });
  }

  /* --- STREAMING TYPEWRITER HELPER --- */
  streamText(targetElem, text, speed = 22, cursorClass = '', callback = null) {
    if (!targetElem) return;
    if (this.typewriterInterval) clearInterval(this.typewriterInterval);

    targetElem.innerHTML = `<span class="typewriter-content"></span><span class="typewriter-cursor ${cursorClass}"></span>`;
    const contentSpan = targetElem.querySelector('.typewriter-content');
    const cursor = targetElem.querySelector('.typewriter-cursor');

    let charIndex = 0;
    this.typewriterInterval = setInterval(() => {
      if (charIndex < text.length) {
        contentSpan.innerText += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(this.typewriterInterval);
        this.typewriterInterval = null;
        if (cursor) cursor.style.display = 'none';
        if (callback) callback();
      }
    }, speed);
  }

  renderScreen(screenNum) {
    this.currentScreen = screenNum;
    if (this.typewriterInterval) clearInterval(this.typewriterInterval);
    console.log(`📍 Switching CRM Screen State: ${screenNum}`);

    document.querySelectorAll('.sfdc-screen-view').forEach(screen => {
      screen.classList.remove('active-screen');
    });
    document.getElementById(`screenView_${screenNum}`)?.classList.add('active-screen');

    for (let i = 1; i <= 6; i++) {
      const btn = document.getElementById(`btnWorkflow${i}`);
      if (btn) {
        if (i === screenNum) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    }

    // Lógica por Pantalla
    if (screenNum === 3) {
      this.renderScreen3Streaming();
    } else if (screenNum === 4) {
      this.renderScreen4Streaming();
    } else if (screenNum === 5) {
      this.animateDitoFormFill();
    } else if (screenNum === 6) {
      this.animateLiveCommissionIncrement();
    }

    createIcons({ icons });
  }

  /* --- PANTALLA 3: STREAMING DEL PITCH DE 12S EN CLUELY HUD --- */
  renderScreen3Streaming() {
    const transcriptBox = document.getElementById('meetingTranscriptBox3');
    const pitchBox = document.getElementById('cluelyPitchDisplayBox');

    if (transcriptBox) {
      transcriptBox.innerHTML = `<strong style="color: var(--aura-cyan);">Carlos (Asesor):</strong> <span id="carlosTransStreaming">Iniciando audio...</span>`;
    }

    const pitchText = `"Hola Miguel, veo que viajas seguido y terminas gastando de más comprando gigas. ¿Qué te parece si unificamos tu fibra de Lima y tu móvil en Movistar Total? Tendrás gigas ilimitados para tu laptop y ahorrarás S/ 40.00 fijos al mes."`;

    // Stream en el Cluely Copilot HUD
    this.streamText(pitchBox, pitchText, 20, '', () => {
      const carlosTrans = document.getElementById('carlosTransStreaming');
      if (carlosTrans) {
        carlosTrans.innerText = `"Hola Miguel, veo que viajas seguido... [Lectura de pitch en vivo]"`;
      }
    });
  }

  /* --- PANTALLA 4: DETECCIÓN DE OBJECIÓN & STREAMING DEL REBATE --- */
  renderScreen4Streaming() {
    const transcriptBox = document.getElementById('meetingTranscriptBox4');
    const rebateBox = document.getElementById('cluelyRebateDisplayBox');

    if (transcriptBox) {
      transcriptBox.innerHTML = `<strong style="color: #FFA726;">Miguel (Cliente):</strong> "Carlos, me interesa el ahorro pero tengo miedo de que me cobren doble o que el <span style="background: #FDE68A; color: #78350F; padding: 1px 6px; border-radius: 4px; font-weight: 800;">prorrateo</span> venga inflado..."`;
    }

    const rebateText = `"Miguel, no te preocupes por el prorrateo: en tu primer recibo solo se incluirán S/ 15.00 correspondientes a los días proporcionales de transición. A partir del segundo mes pagarás tus S/ 139.90 netos fijos sin sorpresas."`;

    // Stream en el Cluely HUD con cursor ámbar
    this.streamText(rebateBox, rebateText, 20, 'orange');
  }

  /* --- PANTALLA 5: FORM-FILL AUTOMÁTICO EN DITO CRM --- */
  animateDitoFormFill() {
    const fields = [
      { id: 'ditoFldProduct', val: 'Movistar Total 300M Fibra + Móvil' },
      { id: 'ditoFldPrice', val: 'S/ 139.90 / mes' },
      { id: 'ditoFldAddress', val: 'Av. Cayma 402, Dpto 501, Arequipa' },
      { id: 'ditoFldPayment', val: 'Débito Automático BCP' },
      { id: 'ditoFldHash', val: 'SHA256: 8f7e2a9b4c10... [AUDIO VERIFICADO]' }
    ];

    fields.forEach((f, idx) => {
      setTimeout(() => {
        const input = document.getElementById(f.id);
        if (input) {
          input.value = f.val;
          input.classList.add('auto-filled-active');
        }
      }, idx * 250);
    });
  }

  /* --- PANTALLA 6: ACTUALIZACIÓN DE COMISIONES EN VIVO (ODÓMETRO) --- */
  animateLiveCommissionIncrement() {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });

    const startVal = 2450;
    const endVal = 2570;
    const obj = { val: startVal };

    gsap.to(obj, {
      val: endVal,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        const currentFormatted = `S/ ${Math.round(obj.val).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        if (this.commissionLiveHeader) this.commissionLiveHeader.innerText = currentFormatted;
        if (this.commissionOdometerVal) this.commissionOdometerVal.innerHTML = `${currentFormatted} <span style="font-size: 18px; color: #00C853; font-weight: 800;">(+S/ 120.00)</span>`;
      }
    });

    if (this.sidebarProgressFill) {
      this.sidebarProgressFill.style.width = '92%';
    }
  }

  startAutoPlay() {
    if (this.isAutoPlaying) return;
    this.isAutoPlaying = true;
    console.log('▶ Starting CRM Workflow Auto-Play...');

    let current = 1;
    this.renderScreen(1);

    const stepInterval = setInterval(() => {
      if (!this.isAutoPlaying || current >= 6) {
        clearInterval(stepInterval);
        this.isAutoPlaying = false;
        return;
      }
      current++;
      this.renderScreen(current);
    }, 4800);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MovistarCrmWorkstationApp();
});
