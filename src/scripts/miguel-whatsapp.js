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

  /* --- PASO 1: OFERTA PROACTIVA DE AURA (Fase 1 NBO) --- */
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

      <!-- Mensaje 1: Detección y Propuesta NBO -->
      <div class="wa-bubble incoming">
        <p>Hola <strong>Miguel</strong> <i data-lucide="map-pin" style="width: 13px; display: inline-block; color: #019DF4; vertical-align: -1px;"></i>. Notamos que agotaste tus 20 GB en tu viaje a Arequipa y llevas gastando <strong>S/ 179.80</strong> en paquetes adicionales este mes.</p>
        
        <div class="wa-offer-card">
          <div class="wa-offer-head">
            <span style="font-family: var(--font-heading); font-size: 13px; font-weight: 700; color: #019DF4; display: flex; align-items: center; gap: 5px;">
              <i data-lucide="sparkles" style="width: 14px;"></i> Movistar Total
            </span>
            <span class="wa-offer-badge-save">Ahorras S/ 40.00/mes</span>
          </div>

          <div class="wa-offer-price-grid">
            <div>
              <div style="font-size: 9px; color: #64748B; text-transform: uppercase;">Gasto Actual</div>
              <div class="wa-price-old">S/ 179.80</div>
            </div>
            <i data-lucide="arrow-right" style="width: 14px; color: #019DF4;"></i>
            <div>
              <div style="font-size: 9px; color: #64748B; text-transform: uppercase;">Tarifa Plana</div>
              <div class="wa-price-new">S/ 139.90</div>
            </div>
          </div>

          <div class="wa-offer-features">
            • 300 Mbps Fibra Óptica Simétrica en tu casa.<br>
            • Gigas Ilimitados en tu móvil para viajar sin límites.
          </div>

          <button class="wa-btn-1touch" id="btnAcceptOfferWA">
            <i data-lucide="zap" style="width: 14px;"></i> Aceptar Movistar Total (1-Touch)
          </button>
        </div>

        <div class="wa-bubble-time">14:02</div>
      </div>
    `;

    this.bindChatInteractions();
  }

  /* --- PASO 2: DUDA DE MIGUEL (Pregunta de Prorrateo) --- */
  renderStep2() {
    this.renderStep1();
    
    // Inyectar duda de Miguel
    const userMsg = document.createElement('div');
    userMsg.className = 'wa-bubble outgoing';
    userMsg.innerHTML = `
      <p>Me interesa bastante el ahorro de 40 soles, pero... ¿Mi próximo recibo vendrá con cobros raros de prorrateo? Tengo miedo de que me cobren doble. <i data-lucide="help-circle" style="width: 13px; display: inline-block; color: #64748B; vertical-align: -1px;"></i></p>
      <div class="wa-bubble-time">14:03 <i data-lucide="check-check" class="wa-ticks-blue"></i></div>
    `;
    this.chatBody.appendChild(userMsg);
  }

  /* --- PASO 3: EXPLICACIÓN DIDÁCTICA Y HAND-OFF (Live Whisper & Gráfico 3 Barras) --- */
  renderStep3() {
    this.renderStep2();

    // Inyectar respuesta transparente con gráfico
    const botResponse = document.createElement('div');
    botResponse.className = 'wa-bubble incoming';
    botResponse.innerHTML = `
      <p>¡Para nada Miguel! En Movistar somos 100% transparentes. Aquí tienes el desglose exacto de tu transición:</p>
      
      <!-- Gráfico de 3 Barras CSR-RAG -->
      <div style="background: #F8FAFC; border-radius: 12px; padding: 10px; margin: 8px 0; border: 1px solid rgba(1,157,244,0.2);">
        <div style="font-size: 11px; font-weight: 700; color: #0B192C; margin-bottom: 6px; display: flex; align-items: center; gap: 4px;">
          <i data-lucide="bar-chart-3" style="width: 12px; color: #019DF4;"></i> Desglose Matemático (0% Sorpresas):
        </div>

        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 11px;">
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1px;">
              <span style="color: #64748B;">Plan Anterior (3 días de uso):</span>
              <strong>S/ 5.00</strong>
            </div>
            <div style="width: 100%; height: 5px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
              <div style="width: 15%; height: 100%; background: #94A3B8;"></div>
            </div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1px;">
              <span style="color: #64748B;">Prorrateo Movistar Total (10 días):</span>
              <strong style="color: #019DF4;">S/ 15.00</strong>
            </div>
            <div style="width: 100%; height: 5px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
              <div style="width: 30%; height: 100%; background: #00D4FF;"></div>
            </div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1px;">
              <span style="color: #64748B;">Renta Fija Regular:</span>
              <strong>S/ 139.90</strong>
            </div>
            <div style="width: 100%; height: 5px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
              <div style="width: 100%; height: 100%; background: #019DF4;"></div>
            </div>
          </div>

          <div style="border-top: 1px dashed #CBD5E1; padding-top: 4px; display: flex; justify-content: space-between; font-weight: 800; color: #0B192C;">
            <span>Primer Recibo de Transición:</span>
            <span style="color: #019DF4; font-size: 12.5px;">S/ 154.90</span>
          </div>
        </div>
      </div>

      <p style="font-size: 11px; color: #334155; margin-bottom: 6px;">
        A partir del segundo mes, tu tarifa será siempre <strong>S/ 139.90 planos</strong>.
      </p>

      <button class="wa-btn-1touch" id="btnAcceptAfterExpl" style="background: linear-gradient(135deg, #00C853, #009624);">
        <i data-lucide="check-circle-2" style="width: 14px;"></i> Confirmar Alta Movistar Total (1-Touch)
      </button>

      <div class="wa-bubble-time">14:04</div>
    `;
    this.chatBody.appendChild(botResponse);
    this.bindChatInteractions();
  }

  /* --- PASO 4: CONFIRMACIÓN EXITOSA & CÓDIGO TMF622 --- */
  renderStep4() {
    this.renderStep3();

    // Confirmación de Miguel
    const userConfirm = document.createElement('div');
    userConfirm.className = 'wa-bubble outgoing';
    userConfirm.innerHTML = `
      <p>¡Quedó clarísimo! Acepto el cambio a Movistar Total. <i data-lucide="thumbs-up" style="width: 13px; display: inline-block; color: #019DF4; vertical-align: -1px;"></i></p>
      <div class="wa-bubble-time">14:05 <i data-lucide="check-check" class="wa-ticks-blue"></i></div>
    `;
    this.chatBody.appendChild(userConfirm);

    // Mensaje de éxito de Aura con Key de orden
    const botSuccess = document.createElement('div');
    botSuccess.className = 'wa-bubble incoming';
    botSuccess.innerHTML = `
      <p>🎉 <strong>¡Felicitaciones Miguel!</strong> Tu plan Movistar Total ya está activo en tu línea móvil y tu orden de fibra ha sido emitida al back-office.</p>
      
      <div style="background: rgba(0,200,83,0.08); border: 1px solid rgba(0,200,83,0.3); border-radius: 10px; padding: 8px 12px; margin-top: 6px; font-family: var(--font-mono); font-size: 11px;">
        <div><strong>Key de Seguimiento E2E:</strong></div>
        <div style="color: #019DF4; font-weight: 700;">TMF622-ORD-2026-8842</div>
        <div style="font-size: 9.5px; color: #64748B; margin-top: 2px;">Rappi-Track: Fase 1 [COMPLETADA]</div>
      </div>

      <div class="wa-bubble-time">14:05</div>
    `;
    this.chatBody.appendChild(botSuccess);

    // Disparar confeti
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
