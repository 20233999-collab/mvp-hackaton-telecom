/* ==========================================================================
   ATENCIÓN 104 & EXPLICACIÓN CSR-RAG • ENGINE FASE 3 (DUAL CX vs. EX)
   Directivas: DESIGN.md • GSAP Animations • Confetti • Real-Time TMO Tracking
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

class PostVentaDualEngine {
  constructor() {
    this.currentStep = 1;
    this.isAutoPlaying = false;
    this.autoPlayInterval = null;

    // DOM Elements
    this.cxChannelBadge = document.getElementById('cxChannelBadge');
    this.sentimentPill = document.getElementById('sentimentPill');
    this.caseStatusTag = document.getElementById('caseStatusTag');
    this.traceLogLines = document.getElementById('traceLogLines');
    this.tmoSavedCounter = document.getElementById('tmoSavedCounter');
    this.crossSellingFlagPill = document.getElementById('crossSellingFlagPill');
    this.exCallStatusBadge = document.getElementById('exCallStatusBadge');

    this.init();
  }

  init() {
    createIcons({ icons });
    this.bindEvents();
    this.goToStep(1);
    console.log('🎧 Post-Venta & 104 Cockpit Engine (Phase 3) initialized.');
  }

  bindEvents() {
    // Stepper header clicks
    document.getElementById('stepPvNode1')?.addEventListener('click', () => this.goToStep(1));
    document.getElementById('stepPvNode2')?.addEventListener('click', () => this.goToStep(2));
    document.getElementById('stepPvNode3')?.addEventListener('click', () => this.goToStep(3));
    document.getElementById('stepPvNode4')?.addEventListener('click', () => this.goToStep(4));

    // Bottom director buttons
    document.getElementById('btnPvStep1')?.addEventListener('click', () => this.goToStep(1));
    document.getElementById('btnPvStep2')?.addEventListener('click', () => this.goToStep(2));
    document.getElementById('btnPvStep3')?.addEventListener('click', () => this.goToStep(3));
    document.getElementById('btnPvStep4')?.addEventListener('click', () => this.goToStep(4));
    document.getElementById('btnPvAutoSequence')?.addEventListener('click', () => this.toggleAutoPlay());

    // In-Screen Interactive Action Buttons
    document.getElementById('btnAskBotWhatsapp')?.addEventListener('click', () => {
      this.goToStep(2);
      setTimeout(() => this.goToStep(3), 800);
    });

    document.getElementById('btnPayYape1Touch')?.addEventListener('click', () => {
      this.goToStep(4);
    });

    // Keyboard Shortcuts (1, 2, 3, 4, Space, Arrow keys)
    document.addEventListener('keydown', (e) => {
      if (e.key === '1') this.goToStep(1);
      if (e.key === '2') this.goToStep(2);
      if (e.key === '3') this.goToStep(3);
      if (e.key === '4') this.goToStep(4);
      if (e.key === ' ' || e.key === 'ArrowRight') {
        if (this.currentStep < 4) this.goToStep(this.currentStep + 1);
        else this.goToStep(1);
      }
      if (e.key === 'ArrowLeft') {
        if (this.currentStep > 1) this.goToStep(this.currentStep - 1);
      }
    });
  }

  goToStep(stepNum) {
    this.currentStep = stepNum;
    this.updateActiveStepUI(stepNum);

    // CX Views switching
    const cxViews = ['cxView1BillShock', 'cxView2ChatGraph', 'cxView4PaidSuccess'];
    const viewMap = { 1: 0, 2: 1, 3: 1, 4: 2 };
    
    cxViews.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el) {
        if (idx === viewMap[stepNum]) el.classList.add('active');
        else el.classList.remove('active');
      }
    });

    if (stepNum === 1) this.renderStep1();
    if (stepNum === 2) this.renderStep2();
    if (stepNum === 3) this.renderStep3();
    if (stepNum === 4) this.renderStep4();

    createIcons({ icons });
  }

  updateActiveStepUI(stepNum) {
    for (let i = 1; i <= 4; i++) {
      const stepNode = document.getElementById(`stepPvNode${i}`);
      const btnDirector = document.getElementById(`btnPvStep${i}`);

      if (stepNode) {
        if (i === stepNum) stepNode.classList.add('active');
        else stepNode.classList.remove('active');
      }

      if (btnDirector) {
        if (i === stepNum) btnDirector.classList.add('active');
        else btnDirector.classList.remove('active');
      }
    }
  }

  /* ========================================================================
     PASO 1: BILL SHOCK EN APP & JORGE EN ESPERA TMO
     ======================================================================== */
  renderStep1() {
    if (this.cxChannelBadge) this.cxChannelBadge.innerText = 'App Mi Movistar';
    if (this.exCallStatusBadge) this.exCallStatusBadge.innerText = 'Terminal en Espera';

    if (this.sentimentPill) {
      this.sentimentPill.className = 'sentiment-indicator-pill';
      this.sentimentPill.innerText = 'Semáforo: Neutro';
    }

    if (this.caseStatusTag) {
      this.caseStatusTag.innerText = 'Sin Casos Asignados';
    }

    this.setTraceLog(`
      <div>[14:05:00] Ingesta SGA: Factura emitida B_t = S/ 154.90.</div>
      <div>[14:05:01] Monitor BrainyBill: Desvío +S/ 15.00 detectado (Flag Bill Shock).</div>
      <div style="color: #64748B;">[14:05:02] Esperando consulta de cliente en canales digitales...</div>
    `);

    if (this.tmoSavedCounter) this.tmoSavedCounter.innerText = '⏱️ 0 Segundos';
    if (this.crossSellingFlagPill) {
      this.crossSellingFlagPill.className = 'cross-selling-flag-pill';
      this.crossSellingFlagPill.innerHTML = '<i data-lucide="lock" style="width: 14px;"></i> <span>Cross-Selling Restrictivo: <strong>Bloqueado (Esperando Conformidad)</strong></span>';
    }
  }

  /* ========================================================================
     PASO 2: CONSULTA EN WHATSAPP & ASIGNACIÓN SILENCIOSA L2 (WARM HAND-OFF)
     ======================================================================== */
  renderStep2() {
    this.renderStep1();

    if (this.cxChannelBadge) this.cxChannelBadge.innerText = 'WhatsApp Oficial';
    if (this.exCallStatusBadge) this.exCallStatusBadge.innerText = 'L2 Standby (Warm Hand-Off)';

    if (this.sentimentPill) {
      this.sentimentPill.className = 'sentiment-indicator-pill amber';
      this.sentimentPill.innerText = 'Semáforo: Ámbar (Riesgo Reclamo)';
    }

    if (this.caseStatusTag) {
      this.caseStatusTag.innerText = 'Aura Interceptando Chat';
    }

    this.setTraceLog(`
      <div>[14:05:10] NLP Trigger: Duda de Facturación "¿Por qué vino más caro?".</div>
      <div>[14:05:11] Asignación Silenciosa: Caso transferido a terminal Jorge (L2 Standby).</div>
      <div style="color: #FACC15;">[14:05:12] Semáforo Ámbar: Riesgo de escalamiento a OSIPTEL. Activando CSR-RAG.</div>
    `);
  }

  /* ========================================================================
     PASO 3: EXPLICACIÓN DIDÁCTICA CSR-RAG (GRÁFICO 3 BARRAS)
     ======================================================================== */
  renderStep3() {
    this.renderStep2();

    if (this.sentimentPill) {
      this.sentimentPill.className = 'sentiment-indicator-pill green';
      this.sentimentPill.innerText = 'Semáforo: Verde (Conformidad)';
    }

    if (this.caseStatusTag) {
      this.caseStatusTag.innerText = 'Autogestión Exitosa (0% Error)';
    }

    this.setTraceLog(`
      <div>[14:05:15] Motor Simbólico: Prorrateo P = 139.90 * (20/30) = S/ 15.00.</div>
      <div>[14:05:16] Cargo Fijo Adelantado: S = S/ 139.90 | Total = S/ 154.90.</div>
      <div style="color: #4ADE80;">[14:05:17] Traza CSR-RAG: 0% Alucinación. Gráfico 3 barras renderizado en chat.</div>
    `);

    // Highlight 3-bar card with GSAP
    const graphCard = document.querySelector('.csr-rag-3bar-card');
    if (graphCard) {
      gsap.fromTo(graphCard, { scale: 0.96 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' });
    }
  }

  /* ========================================================================
     PASO 4: PAGO CON YAPE, TMO AHORRADO & DESBLOQUEO DE CROSS-SELLING
     ======================================================================== */
  renderStep4() {
    this.renderStep3();

    if (this.cxChannelBadge) this.cxChannelBadge.innerText = 'Pago Exitoso (Yape)';
    if (this.exCallStatusBadge) this.exCallStatusBadge.innerText = 'Llamada Evitada (Tasa de Silencio)';

    if (this.tmoSavedCounter) {
      this.tmoSavedCounter.innerHTML = '⏱️ 360 Segundos <span style="font-size: 13px; color: #00C853; font-weight: 800;">(6 MINUTOS AHORRADOS)</span>';
      gsap.fromTo(this.tmoSavedCounter, { scale: 0.8 }, { scale: 1.05, duration: 0.4, ease: 'back.out(2)' });
    }

    if (this.crossSellingFlagPill) {
      this.crossSellingFlagPill.className = 'cross-selling-flag-pill unlocked';
      this.crossSellingFlagPill.innerHTML = '<i data-lucide="unlock" style="width: 14px; color: #00C853;"></i> <span>Cross-Selling Restrictivo: <strong>🟢 Habilitado en CRM (BSS)</strong></span>';
    }

    this.setTraceLog(`
      <div>[14:05:30] Webhook Yape: Abono S/ 154.90 recibido y conciliado.</div>
      <div>[14:05:31] Tasa de Silencio: 100% Satisfacción sin derivación humana al 104.</div>
      <div style="color: #4ADE80;">[14:05:32] Orquestador M.O.V.I.: Bucle cerrado ➔ Miguel apta para ofertas Fase 1.</div>
    `);

    // Confetti celebration
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#019DF4', '#00D4FF', '#00C853', '#8E24AA']
    });
  }

  setTraceLog(html) {
    if (this.traceLogLines) this.traceLogLines.innerHTML = html;
  }

  /* --- AUTO PLAY SECUENCIA PITCH (45 SEGUNDOS) --- */
  toggleAutoPlay() {
    if (this.isAutoPlaying) {
      clearInterval(this.autoPlayInterval);
      this.isAutoPlaying = false;
      document.getElementById('btnPvAutoSequence').innerHTML = '<i data-lucide="play" style="width: 12px;"></i> Auto Pitch';
    } else {
      this.isAutoPlaying = true;
      document.getElementById('btnPvAutoSequence').innerHTML = '<i data-lucide="pause" style="width: 12px;"></i> Pausar';
      this.goToStep(1);

      let step = 1;
      this.autoPlayInterval = setInterval(() => {
        step++;
        if (step > 4) {
          clearInterval(this.autoPlayInterval);
          this.isAutoPlaying = false;
          document.getElementById('btnPvAutoSequence').innerHTML = '<i data-lucide="play" style="width: 12px;"></i> Auto Pitch';
        } else {
          this.goToStep(step);
        }
      }, 4500); // 4.5 segundos por paso
    }
    createIcons({ icons });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PostVentaDualEngine();
});
