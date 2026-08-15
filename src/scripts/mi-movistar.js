/* ==========================================================================
   MI MOVISTAR AI CONCIERGE ENGINE (AURA ROBOT - TAP-TO-ADVANCE)
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

class MiMovistarAuraApp {
  constructor() {
    this.mainStage = document.getElementById('mainStageContainer');
    this.chatFeed = document.getElementById('chatFeedStream');
    this.voiceWaves = document.getElementById('voiceWaves');
    this.mascotEmotionBadge = document.getElementById('mascotEmotionBadge');
    this.promptInput = document.getElementById('promptInputBox');
    this.btnSend = document.getElementById('btnSendPrompt');
    this.currentStep = 0;

    this.init();
  }

  init() {
    createIcons({ icons });
    this.bindQuickPrompts();
    this.bindDirectorControls();
    this.bindInputSend();
    this.bindTapToAdvance();
    console.log('🤖 Mi Movistar Aura Robot Concierge (Tap-to-Advance) initialized.');
  }

  bindTapToAdvance() {
    // Al tocar la pantalla en el escenario principal, avanzar al siguiente paso
    this.mainStage?.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('.prompt-card') || e.target.closest('input')) return;
      this.nextStep();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'ArrowRight') {
        this.nextStep();
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

  goToStep(stepNum) {
    this.currentStep = stepNum;
    this.updateStorySegments(stepNum);

    if (stepNum === 1) this.handleAction('nbo-offer');
    if (stepNum === 2) this.handleAction('bill-shock-doubt');
    if (stepNum === 3) this.handleAction('bill-shock-expl');
    if (stepNum === 4) this.handleAction('confirm-total');
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

  bindQuickPrompts() {
    const promptCards = document.querySelectorAll('.prompt-card');
    promptCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = card.dataset.action;
        this.handleAction(action);
      });
    });
  }

  bindDirectorControls() {
    document.getElementById('btnDirScene1')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(1); });
    document.getElementById('btnDirScene2')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(2); });
    document.getElementById('btnDirScene3')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(3); });
    document.getElementById('btnDirScene4')?.addEventListener('click', (e) => { e.stopPropagation(); this.goToStep(4); });
    document.getElementById('btnDirAuto')?.addEventListener('click', (e) => { e.stopPropagation(); this.startAutoPlay(); });
  }

  bindInputSend() {
    this.btnSend?.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = this.promptInput?.value.trim();
      if (text) {
        this.addUserMessage(text);
        this.promptInput.value = '';
        setTimeout(() => {
          this.handleAction('nbo-offer');
        }, 800);
      }
    });

    this.promptInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.btnSend?.click();
      }
    });
  }

  setSpeaking(isSpeaking, emotionText = 'Aura Respondiendo...') {
    if (isSpeaking) {
      this.voiceWaves?.classList.add('speaking');
      if (this.mascotEmotionBadge) {
        this.mascotEmotionBadge.innerText = emotionText;
        this.mascotEmotionBadge.style.color = '#00D4FF';
      }
    } else {
      this.voiceWaves?.classList.remove('speaking');
      if (this.mascotEmotionBadge) {
        this.mascotEmotionBadge.innerText = 'Concierge Digital en Línea';
        this.mascotEmotionBadge.style.color = '#64748B';
      }
    }
  }

  addUserMessage(text) {
    const userItem = document.createElement('div');
    userItem.className = 'feed-item user';
    userItem.innerHTML = `
      <div class="feed-avatar-box">VM</div>
      <div class="feed-bubble-content">
        <p>${text}</p>
      </div>
    `;
    this.chatFeed?.appendChild(userItem);
    this.scrollToBottom();
  }

  addBotMessage(contentHtml) {
    this.setSpeaking(true);
    const botItem = document.createElement('div');
    botItem.className = 'feed-item bot';
    botItem.innerHTML = `
      <div class="feed-avatar-box">
        <div class="aura-orb" style="width: 28px; height: 28px;">
          <div class="aura-orb-rings"></div>
          <div class="aura-orb-core" style="width: 8px; height: 8px;"></div>
        </div>
      </div>
      <div class="feed-bubble-content">
        ${contentHtml}
      </div>
    `;
    this.chatFeed?.appendChild(botItem);
    createIcons({ icons });
    this.scrollToBottom();

    setTimeout(() => {
      this.setSpeaking(false);
    }, 1800);
  }

  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  handleAction(actionKey) {
    console.log(`⚡ Action triggered: ${actionKey}`);

    switch (actionKey) {
      case 'nbo-offer':
        this.updateStorySegments(1);
        this.addUserMessage('¿Cómo puedo optimizar mi gasto actual de gigas en Arequipa?');
        setTimeout(() => {
          this.addBotMessage(`
            <p>Hola <strong>Valerio</strong>. Analicé tus consumos en tiempo real: este mes has realizado 3 recargas adicionales sumando <strong>S/ 179.80</strong>.</p>
            
            <div style="background: #FFFFFF; border: 1.5px solid #019DF4; border-radius: 16px; padding: 14px; margin: 12px 0; box-shadow: 0 4px 18px rgba(1, 157, 244, 0.12);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-family: var(--font-heading); font-weight: 700; font-size: 14.5px; color: #019DF4; display: flex; align-items: center; gap: 6px;">
                  <i data-lucide="sparkles" style="width: 15px;"></i> Propuesta Movistar Total
                </span>
                <span style="font-family: var(--font-mono); font-size: 10.5px; font-weight: 700; background: rgba(0, 200, 83, 0.12); color: #008738; padding: 3px 8px; border-radius: 12px; border: 1px solid rgba(0, 200, 83, 0.3);">
                  Ahorro: S/ 40.00/mes
                </span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; background: #F8FAFC; padding: 8px 12px; border-radius: 12px; margin-bottom: 12px; text-align: center;">
                <div>
                  <div style="font-size: 9.5px; color: #64748B; text-transform: uppercase;">Gasto Disperso</div>
                  <div style="font-size: 13.5px; color: #EF4444; text-decoration: line-through; font-weight: 700;">S/ 179.80</div>
                </div>
                <i data-lucide="arrow-right" style="width: 14px; color: #019DF4;"></i>
                <div>
                  <div style="font-size: 9.5px; color: #64748B; text-transform: uppercase;">Tarifa Plana Total</div>
                  <div style="font-family: var(--font-heading); font-size: 17px; color: #019DF4; font-weight: 800;">S/ 139.90</div>
                </div>
              </div>

              <p style="font-size: 11.5px; color: #334155; margin-bottom: 10px;">
                ✓ <strong>Fibra Óptica 300 Mbps</strong> simétrica en tu hogar.<br>
                ✓ <strong>Gigas Ilimitados</strong> en tu línea móvil para viajar sin límites.
              </p>

              <button class="offer-btn-accept" id="btnAcceptMascotOffer" style="width: 100%; padding: 11px; font-size: 13px; border-radius: 12px;">
                <i data-lucide="zap" style="width: 15px;"></i> Aceptar Movistar Total en 1-Touch
              </button>
            </div>
          `);

          document.getElementById('btnAcceptMascotOffer')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleAction('confirm-total');
          });
        }, 1000);
        break;

      case 'bill-shock-doubt':
        this.updateStorySegments(2);
        this.addUserMessage('¿Mi próximo recibo vendrá con cobros dobles o sorpresas de prorrateo?');
        setTimeout(() => {
          this.handleAction('bill-shock-expl');
        }, 800);
        break;

      case 'bill-shock-expl':
        this.updateStorySegments(3);
        this.setSpeaking(true, 'Aura: Ejecutando Motor CSR-RAG 0% Error...');
        setTimeout(() => {
          this.addBotMessage(`
            <p>¡Tranquila Valerio! Nuestra arquitectura <strong>CSR-RAG</strong> valida matemáticamente cada céntimo. No hay cobros duplicados:</p>
            
            <div style="background: #FFFFFF; border-radius: 14px; padding: 12px; margin: 10px 0; border: 1px solid rgba(1, 157, 244, 0.25); box-shadow: 0 4px 16px rgba(1, 157, 244, 0.08);">
              <div style="font-size: 11.5px; font-weight: 700; color: #0B192C; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                <i data-lucide="bar-chart-3" style="width: 13px; color: #019DF4;"></i> Desglose Proporcional (Divulgación Progresiva):
              </div>

              <div style="display: flex; flex-direction: column; gap: 6px; font-size: 11.5px;">
                <div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #64748B;">Plan Anterior (3 días):</span>
                    <strong>S/ 5.00</strong>
                  </div>
                  <div style="width: 100%; height: 6px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
                    <div style="width: 15%; height: 100%; background: #94A3B8;"></div>
                  </div>
                </div>

                <div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #64748B;">Prorrateo Movistar Total (10 días):</span>
                    <strong style="color: #019DF4;">S/ 15.00</strong>
                  </div>
                  <div style="width: 100%; height: 6px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
                    <div style="width: 30%; height: 100%; background: #00D4FF;"></div>
                  </div>
                </div>

                <div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #64748B;">Renta Adelantada Fija:</span>
                    <strong>S/ 139.90</strong>
                  </div>
                  <div style="width: 100%; height: 6px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
                    <div style="width: 100%; height: 100%; background: #019DF4;"></div>
                  </div>
                </div>

                <div style="border-top: 1px dashed #CBD5E1; padding-top: 6px; margin-top: 2px; display: flex; justify-content: space-between; font-weight: 800; color: #0B192C;">
                  <span>Primer Recibo de Transición:</span>
                  <span style="color: #019DF4; font-size: 14px; font-family: var(--font-heading);">S/ 154.90</span>
                </div>
              </div>
            </div>

            <button class="offer-btn-accept" id="btnPayYapeApp" style="width: 100%; background: linear-gradient(135deg, #702670, #9C27B0); padding: 11px; border-radius: 12px; font-size: 13px;">
              <i data-lucide="smartphone" style="width: 15px;"></i> Pagar Recibo con Yape (S/ 154.90)
            </button>
          `);

          document.getElementById('btnPayYapeApp')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleAction('confirm-total');
          });
        }, 1000);
        break;

      case 'confirm-total':
        this.updateStorySegments(4);
        confetti({
          particleCount: 80,
          spread: 75,
          origin: { y: 0.6 }
        });

        this.addBotMessage(`
          <div style="background: rgba(0, 200, 83, 0.08); border: 1px solid rgba(0, 200, 83, 0.3); border-radius: 14px; padding: 12px;">
            <div style="font-family: var(--font-heading); font-size: 15px; font-weight: 700; color: #008738; margin-bottom: 5px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="check-circle-2" style="width: 17px;"></i> ¡Operación Confirmada con Éxito!
            </div>
            <p style="font-size: 11.5px; color: #334155; margin-bottom: 6px;">
              Tu cambio a <strong>Movistar Total</strong> ha sido procesado mediante la API abierta <strong>TMF622</strong> y sincronizado con el back-office.
            </p>
            <div style="font-family: var(--font-mono); font-size: 10.5px; background: #FFFFFF; padding: 6px 10px; border-radius: 8px; border: 1px solid rgba(0, 200, 83, 0.2);">
              Key de Seguimiento: <span style="color: #019DF4; font-weight: 700;">TMF622-ORD-2026-8842</span>
            </div>
          </div>
        `);
        break;
    }
  }

  startAutoPlay() {
    console.log('▶ Starting Mi Movistar Auto-Play...');
    this.goToStep(1);

    setTimeout(() => {
      this.goToStep(2);
      setTimeout(() => {
        this.goToStep(4);
      }, 4500);
    }, 4000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MiMovistarAuraApp();
});
