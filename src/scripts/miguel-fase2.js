/* ==========================================================================
   WHATSAPP SIMULATOR ENGINE - MIGUEL MENDOZA (TAP-TO-ADVANCE IMMERSIVE)
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

class WhatsAppMiguelSimulator {
  constructor() {
    this.chatBody = document.getElementById('waChatBody');
    this.contactStatus = document.getElementById('waContactStatus');
    this.auraOrbHeader = document.getElementById('auraOrbHeader');
    this.currentStep = 1;
    this.isAutoPlaying = false;

    this.init();
  }

  init() {
    createIcons({ icons });
    this.bindControls();
    this.bindChatInteractions();
    this.bindTapToAdvance();
    this.renderStep1();
    console.log('📱 WhatsApp Miguel Simulator (Tap-to-Advance) initialized.');
  }

  bindControls() {
    document.getElementById('btnStep1')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(1); });
    document.getElementById('btnStep2')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(2); });
    document.getElementById('btnStep3')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(3); });
    document.getElementById('btnStep4')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(4); });
    document.getElementById('btnAutoSequence')?.addEventListener('click', (e) => { e.stopPropagation(); this.startAutoPlay(); });
    document.getElementById('btnToggleFrame')?.addEventListener('click', (e) => { e.stopPropagation(); this.toggleFullViewport(); });
  }

  /* --- TAP-TO-ADVANCE (Tocar la pantalla para pasar de paso) --- */
  bindTapToAdvance() {
    // Al hacer tap o click en el cuerpo del chat, avanzar al siguiente paso
    this.chatBody?.addEventListener('click', (e) => {
      // Si hizo click en un botón interactivo específico, no disparar el tap genérico
      if (e.target.closest('button')) return;

      if (this.currentStep < 4) {
        this.nextStep();
      } else {
        this.goToStep(1); // Reiniciar en bucle
      }
    });

    // Tecla Espacio o Flecha Derecha para avanzar
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'ArrowRight') {
        this.nextStep();
      } else if (e.key === 'ArrowLeft') {
        this.prevStep();
      }
    });
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.goToStep(this.currentStep + 1);
    } else {
      this.goToStep(1);
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.goToStep(this.currentStep - 1);
    }
  }

  toggleFullViewport() {
    document.body.classList.toggle('full-viewport-mode');
  }

  setTyping(isTyping, customText = 'escribiendo...') {
    if (isTyping) {
      this.contactStatus.innerText = customText;
      this.contactStatus.classList.add('typing');
      this.auraOrbHeader?.classList.add('state-thinking');
    } else {
      this.contactStatus.innerText = 'Cuenta oficial de empresa';
      this.contactStatus.classList.remove('typing');
      this.auraOrbHeader?.classList.remove('state-thinking');
    }
  }

  scrollToBottom() {
    if (this.chatBody) {
      setTimeout(() => {
        this.chatBody.scrollTo({
          top: this.chatBody.scrollHeight,
          behavior: 'smooth'
        });
      }, 50);
    }
  }

  goToStep(stepNum) {
    this.currentStep = stepNum;
    this.updateActiveBtn(stepNum);
    this.updateStorySegments(stepNum);

    if (stepNum === 1) this.renderStep1();
    if (stepNum === 2) this.renderStep2();
    if (stepNum === 3) this.renderStep3();
    if (stepNum === 4) this.renderStep4();

    createIcons({ icons });
    this.scrollToBottom();
  }

  updateActiveBtn(stepNum) {
    [1, 2, 3, 4].forEach(num => {
      const btn = document.getElementById(`btnStep${num}`);
      if (btn) {
        if (num === stepNum) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    });
  }

  updateStorySegments(stepNum) {
    for (let i = 1; i <= 4; i++) {
      const seg = document.getElementById(`storySeg${i}`);
      if (seg) {
        seg.classList.remove('active', 'completed');
        if (i < stepNum) seg.classList.add('completed');
        else if (i === stepNum) seg.classList.add('active');
      }
    }
  }

  
  /* --- PASO 1: ALERTA MORA --- */
  renderStep1() {
    this.setTyping(false);
    this.chatBody.innerHTML = `
      <div class="tap-hint-pill">
        <i data-lucide="hand" style="width: 13px;"></i>
        <span>Toca la pantalla para avanzar en el pitch (Paso 1 de 4)</span>
      </div>

      <div class="wa-encryption-pill">
        <i data-lucide="lock" style="width: 12px; flex-shrink: 0;"></i>
        <span>Los mensajes están cifrados de extremo a extremo. Nadie fuera de este chat puede leerlos.</span>
      </div>

      <div class="wa-date-divider">Hoy</div>

      <div class="wa-bubble incoming">
        <p>Hola <strong>Miguel</strong> <i data-lucide="alert-circle" style="width: 13px; display: inline-block; color: #EAB308; vertical-align: -1px;"></i>. Notamos que tienes un recibo pendiente por <strong>S/ 297.99</strong> con 42 días de retraso.</p>
        <div class="wa-bubble-time">14:02</div>
      </div>
    `;

    this.bindChatInteractions();
  }

  /* --- PASO 2: MODO MANTENIMIENTO Y FRACCIONAMIENTO --- */
  renderStep2() {
    this.renderStep1();

    const botMsg2 = document.createElement('div');
    botMsg2.className = 'wa-bubble incoming';
    botMsg2.innerHTML = `
      <p>Sabemos lo importante que es tu conexión para tu trabajo. Por eso, <strong>no hemos cortado tu servicio</strong>. En su lugar, activamos el <strong>Modo Mantenimiento</strong> (15 Mbps) para que sigas conectado. 🛡️</p>
      
      <div class="wa-offer-card" style="border-color: #019DF4; background: #F0F9FF;">
        <div class="wa-offer-head">
          <span style="font-family: var(--font-heading); font-size: 13px; font-weight: 700; color: #019DF4; display: flex; align-items: center; gap: 5px;">
            <i data-lucide="calendar" style="width: 14px;"></i> Fraccionamiento a 3 meses
          </span>
          <span class="wa-offer-badge-save" style="background: #E0F2FE; color: #0284C7;">0% Interés</span>
        </div>

        <div class="wa-offer-price-grid">
          <div>
            <div style="font-size: 9px; color: #64748B; text-transform: uppercase;">Deuda Total</div>
            <div class="wa-price-old" style="color: #64748B; text-decoration: none;">S/ 297.99</div>
          </div>
          <i data-lucide="arrow-right" style="width: 14px; color: #019DF4;"></i>
          <div>
            <div style="font-size: 9px; color: #64748B; text-transform: uppercase;">Cuota Mensual</div>
            <div class="wa-price-new" style="color: #019DF4;">S/ 99.33</div>
          </div>
        </div>

        <button class="wa-btn-1touch" id="btnAcceptOfferWA" style="background: linear-gradient(135deg, #019DF4, #00D4FF);">
          <i data-lucide="credit-card" style="width: 14px;"></i> Pagar Cuota 1 (S/ 99.33)
        </button>
      </div>

      <div class="wa-bubble-time">14:03</div>
    `;
    this.chatBody.appendChild(botMsg2);
    this.bindChatInteractions();
  }

  /* --- PASO 3: PAGO DE CUOTA --- */
  renderStep3() {
    this.renderStep2();

    const userConfirm = document.createElement('div');
    userConfirm.className = 'wa-bubble outgoing';
    userConfirm.innerHTML = `
      <p>¡Uf, gracias! Me salvan la vida. Pago la primera cuota ahora mismo. <i data-lucide="thumbs-up" style="width: 13px; display: inline-block; color: #019DF4; vertical-align: -1px;"></i></p>
      
      <div style="background: rgba(1, 157, 244, 0.08); border: 1px solid rgba(1, 157, 244, 0.3); border-radius: 10px; padding: 8px 12px; margin-top: 6px;">
        <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; color: #019DF4;">
          <i data-lucide="check-circle" style="width: 14px;"></i> Pago con Yape / BCP
        </div>
        <div style="font-size: 11px; color: #64748B; margin-top: 2px;">Monto: S/ 99.33 completado.</div>
      </div>
      <div class="wa-bubble-time">14:04 <i data-lucide="check-check" class="wa-ticks-blue"></i></div>
    `;
    this.chatBody.appendChild(userConfirm);
  }

  /* --- PASO 4: CONFIRMACIÓN Y RECONEXIÓN --- */
  renderStep4() {
    this.renderStep3();

    const botSuccess = document.createElement('div');
    botSuccess.className = 'wa-bubble incoming';
    botSuccess.innerHTML = `
      <p>🎉 <strong>¡Pago procesado con éxito!</strong> Tu fibra óptica se restablecerá a su velocidad normal (300 Mbps) en los próximos 5 minutos.</p>
      
      <div style="background: rgba(0,200,83,0.08); border: 1px solid rgba(0,200,83,0.3); border-radius: 10px; padding: 8px 12px; margin-top: 6px; font-family: var(--font-mono); font-size: 11px;">
        <div><strong>Reconexión E2E:</strong></div>
        <div style="color: #019DF4; font-weight: 700;">TMF622-REC-2026-9901</div>
        <div style="font-size: 9.5px; color: #64748B; margin-top: 2px;">Rappi-Track: Fase 2 [COMPLETADA]</div>
      </div>

      <div class="wa-bubble-time">14:05</div>
    `;
    this.chatBody.appendChild(botSuccess);

    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 }
    });

    this.auraOrbHeader?.classList.add('state-success');
  }

  bindChatInteractions() {
    const btn1 = document.getElementById('btnAcceptOfferWA');
    const btn2 = document.getElementById('btnAcceptAfterExpl');

    btn1?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.goToStep(4);
    });

    btn2?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.goToStep(4);
    });
  }

  startAutoPlay() {
    if (this.isAutoPlaying) return;
    this.isAutoPlaying = true;
    console.log('▶ Starting Auto-Play sequence for Pitch Video...');

    this.goToStep(1);

    setTimeout(() => {
      this.setTyping(true, 'Miguel está escribiendo...');
      setTimeout(() => {
        this.goToStep(2);
        this.setTyping(true, 'Aura está procesando cálculo CSR-RAG...');
        setTimeout(() => {
          this.goToStep(3);
          setTimeout(() => {
            this.goToStep(4);
            this.isAutoPlaying = false;
          }, 3500);
        }, 3000);
      }, 2500);
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WhatsAppMiguelSimulator();
});
