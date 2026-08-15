/* ==========================================================================
   VIEW & SCENE MANAGER - M.O.V.I. STUDIO
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

export class ViewManager {
  constructor() {
    this.currentPhase = 1;
    this.currentViewMode = 'split'; // 'split', 'solo-cx', 'solo-ex'
    this.isHubOpen = false;

    this.initDOMElements();
    this.bindEvents();
  }

  initDOMElements() {
    this.hubModal = document.getElementById('directorHubModal');
    this.cockpitGrid = document.getElementById('cockpitGrid');

    // Botones de Apertura de Hub
    this.btnOpenHubTop = document.getElementById('btnOpenHubTop');
    this.btnOpenHubBottom = document.getElementById('btnOpenHubBottom');
    this.btnCloseHub = document.getElementById('btnCloseHub');

    // Botones de Modo de Vista (Split / Solo CX / Solo EX)
    this.btnViewSplit = document.getElementById('btnViewSplit');
    this.btnViewSoloCX = document.getElementById('btnViewSoloCX');
    this.btnViewSoloEX = document.getElementById('btnViewSoloEX');

    // Stepper Nodes
    this.nodePhase1 = document.getElementById('nodePhase1');
    this.nodePhase2 = document.getElementById('nodePhase2');
    this.nodePhase3 = document.getElementById('nodePhase3');
    this.divPhase1_2 = document.getElementById('divPhase1_2');
    this.divPhase2_3 = document.getElementById('divPhase2_3');

    // Toolbar Phase Buttons
    this.btnPhase1 = document.getElementById('btnPhase1');
    this.btnPhase2 = document.getElementById('btnPhase2');
    this.btnPhase3 = document.getElementById('btnPhase3');
    this.btnResetAll = document.getElementById('btnResetAll');

    // CX Elements
    this.cxBadgeTitle = document.getElementById('cxBadgeTitle');
    this.cxBadgeSub = document.getElementById('cxBadgeSub');
    this.cxAvatarThumb = document.getElementById('cxAvatarThumb');
    this.chatArea = document.getElementById('chatArea');
    this.auraOrbHeader = document.getElementById('auraOrbHeader');

    // EX Elements
    this.advisorAvatar = document.getElementById('advisorAvatar');
    this.advisorName = document.getElementById('advisorName');
    this.advisorRole = document.getElementById('advisorRole');
    this.customer360Title = document.getElementById('customer360Title');
    this.customer360Badge = document.getElementById('customer360Badge');
    this.customerStatsGrid = document.getElementById('customerStatsGrid');
    this.upliftMeterBox = document.getElementById('upliftMeterBox');
    this.whisperHeader = document.getElementById('whisperHeader');
    this.whisperSpeech = document.getElementById('whisperSpeech');
    this.orderFormTitle = document.getElementById('orderFormTitle');
    this.orderFormBadge = document.getElementById('orderFormBadge');
    this.formFieldsGrid = document.getElementById('formFieldsGrid');
    this.btnEmitOrder = document.getElementById('btnEmitOrder');
  }

  bindEvents() {
    // Abrir/Cerrar Hub Modal
    this.btnOpenHubTop?.addEventListener('click', () => this.openHub());
    this.btnOpenHubBottom?.addEventListener('click', () => this.openHub());
    this.btnCloseHub?.addEventListener('click', () => this.closeHub());

    // Tecla ESC para cerrar hub, H para abrir/cerrar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isHubOpen) {
        this.closeHub();
      } else if ((e.key === 'h' || e.key === 'H') && !e.target.matches('input, textarea')) {
        this.toggleHub();
      } else if (e.key === '1') {
        this.setPhase(1);
      } else if (e.key === '2') {
        this.setPhase(2);
      } else if (e.key === '3') {
        this.setPhase(3);
      }
    });

    // Modos de Vista
    this.btnViewSplit?.addEventListener('click', () => this.setViewMode('split'));
    this.btnViewSoloCX?.addEventListener('click', () => this.setViewMode('solo-cx'));
    this.btnViewSoloEX?.addEventListener('click', () => this.setViewMode('solo-ex'));

    // Botones de Fase en Toolbar
    this.btnPhase1?.addEventListener('click', () => this.setPhase(1));
    this.btnPhase2?.addEventListener('click', () => this.setPhase(2));
    this.btnPhase3?.addEventListener('click', () => this.setPhase(3));

    // Stepper click directo
    this.nodePhase1?.addEventListener('click', () => this.setPhase(1));
    this.nodePhase2?.addEventListener('click', () => this.setPhase(2));
    this.nodePhase3?.addEventListener('click', () => this.setPhase(3));

    // Tarjetas de Escena del Hub
    const sceneCards = document.querySelectorAll('.scene-card');
    sceneCards.forEach(card => {
      card.addEventListener('click', () => {
        const scene = card.dataset.scene;
        this.launchScene(scene);
      });
    });

    // Reset All
    this.btnResetAll?.addEventListener('click', () => this.resetMockup());
  }

  openHub() {
    this.hubModal?.classList.add('active');
    this.isHubOpen = true;
    createIcons({ icons });
  }

  closeHub() {
    this.hubModal?.classList.remove('active');
    this.isHubOpen = false;
  }

  toggleHub() {
    if (this.isHubOpen) {
      this.closeHub();
    } else {
      this.openHub();
    }
  }

  setViewMode(mode) {
    this.currentViewMode = mode;
    this.cockpitGrid.classList.remove('view-split', 'view-solo-cx', 'view-solo-ex');
    this.cockpitGrid.classList.add(`view-${mode}`);

    // Actualizar botones de toolbar
    [this.btnViewSplit, this.btnViewSoloCX, this.btnViewSoloEX].forEach(btn => btn?.classList.remove('active'));
    if (mode === 'split') this.btnViewSplit?.classList.add('active');
    if (mode === 'solo-cx') this.btnViewSoloCX?.classList.add('active');
    if (mode === 'solo-ex') this.btnViewSoloEX?.classList.add('active');
  }

  launchScene(sceneKey) {
    console.log(`🎬 Launching scene: ${sceneKey}`);
    this.closeHub();

    switch (sceneKey) {
      case 'f1-split':
        this.setPhase(1);
        this.setViewMode('split');
        break;
      case 'f1-cx':
        this.setPhase(1);
        this.setViewMode('solo-cx');
        break;
      case 'f1-ex':
        this.setPhase(1);
        this.setViewMode('solo-ex');
        break;

      case 'f2-split':
        this.setPhase(2);
        this.setViewMode('split');
        break;
      case 'f2-cx':
        this.setPhase(2);
        this.setViewMode('solo-cx');
        break;
      case 'f2-ex':
        this.setPhase(2);
        this.setViewMode('solo-ex');
        break;

      case 'f3-split':
        this.setPhase(3);
        this.setViewMode('split');
        break;
      case 'f3-cx':
        this.setPhase(3);
        this.setViewMode('solo-cx');
        break;
      case 'f3-ex':
        this.setPhase(3);
        this.setViewMode('solo-ex');
        break;
    }
  }

  setPhase(phaseNum) {
    this.currentPhase = phaseNum;
    console.log(`📍 Switched to Phase ${phaseNum}`);

    // Actualizar Stepper Nodes
    [this.nodePhase1, this.nodePhase2, this.nodePhase3].forEach(node => node?.classList.remove('active'));
    [this.btnPhase1, this.btnPhase2, this.btnPhase3].forEach(btn => btn?.classList.remove('active'));

    if (phaseNum === 1) {
      this.nodePhase1?.classList.add('active');
      this.btnPhase1?.classList.add('active');
      this.renderPhase1();
    } else if (phaseNum === 2) {
      this.nodePhase1?.classList.add('completed');
      this.divPhase1_2?.classList.add('active');
      this.nodePhase2?.classList.add('active');
      this.btnPhase2?.classList.add('active');
      this.renderPhase2();
    } else if (phaseNum === 3) {
      this.nodePhase1?.classList.add('completed');
      this.nodePhase2?.classList.add('completed');
      this.divPhase1_2?.classList.add('active');
      this.divPhase2_3?.classList.add('active');
      this.nodePhase3?.classList.add('active');
      this.btnPhase3?.classList.add('active');
      this.renderPhase3();
    }

    createIcons({ icons });
  }

  /* --- RENDERIZADO DE FASE 1: PROPULSIÓN COMERCIAL --- */
  renderPhase1() {
    // CX Panel (Valerio)
    this.cxBadgeTitle.innerText = 'Valerio Mendoza (Cliente)';
    this.cxBadgeSub.innerText = 'Viajando en Arequipa • App / WhatsApp';
    this.cxAvatarThumb.innerText = 'VM';
    this.cxAvatarThumb.style.background = 'linear-gradient(135deg, #019DF4, #00D4FF)';

    this.chatArea.innerHTML = `
      <div class="chat-bubble bot fade-in" id="msg1_bot">
        <p>Hola <strong>Valerio</strong> <i data-lucide="map-pin" style="width: 13px; display: inline-block; color: var(--movistar-blue); vertical-align: -1px;"></i>. Notamos que agotaste tus 20 GB en tu viaje a Arequipa y llevas gastando <strong>S/ 179.80</strong> en paquetes sueltos.</p>
        <div class="offer-interactive-card" id="cardMovistarTotal">
          <div class="offer-card-header">
            <div class="offer-title"><i data-lucide="sparkles" style="width: 14px;"></i> Movistar Total</div>
            <span class="offer-gap-badge">Ahorro: S/ 40.00/mes</span>
          </div>
          <div class="offer-comparison-row">
            <div class="comp-box">
              <span class="comp-label">Gasto Actual</span>
              <div class="comp-price old">S/ 179.80</div>
            </div>
            <i data-lucide="arrow-right" style="width: 14px; color: var(--movistar-blue);"></i>
            <div class="comp-box">
              <span class="comp-label">Tarifa Plana</span>
              <div class="comp-price new">S/ 139.90</div>
            </div>
          </div>
          <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 8px;">
            Fibra 300 Mbps + Gigas Ilimitados en tu móvil unificados.
          </p>
          <button class="offer-btn-accept" id="btnAcceptOffer">
            <i data-lucide="zap" style="width: 14px;"></i> Aceptar Movistar Total (1-Touch)
          </button>
        </div>
        <div class="chat-time">14:02 <i data-lucide="check-check" style="width: 13px; color: var(--movistar-blue);"></i></div>
      </div>
    `;

    // EX Panel (Carlos)
    this.advisorAvatar.innerText = 'CA';
    this.advisorName.innerText = 'Carlos Alvarado (Asesor Comercial)';
    this.advisorRole.innerText = 'Telemarketing Atento • Línea Inbound/Outbound';

    this.customer360Title.innerHTML = `<i data-lucide="user-check" style="width: 18px; color: var(--movistar-blue);"></i> Ficha Inteligente Customer 360`;
    this.customer360Badge.innerText = 'API TMF683 • Interaction Management';

    this.customerStatsGrid.innerHTML = `
      <div class="stat-item">
        <span class="stat-label">Cliente</span>
        <span class="stat-value">Valerio Mendoza</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Gasto Mensual Disperso</span>
        <span class="stat-value highlight">S/ 179.80</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Gap Radar Detectado</span>
        <span class="stat-value" style="color: var(--accent-green);">+ S/ 40.00 Ahorro</span>
      </div>
    `;

    this.upliftMeterBox.style.display = 'block';
    this.whisperHeader.innerHTML = `<i data-lucide="headphones" style="width: 16px;"></i> M.O.V.I. Live Whisper (Speech Sugerido en Vivo)`;
    this.whisperSpeech.innerText = `"Valerio, no te preocupes por el prorrateo: en tu primer recibo solo se incluirán S/ 15.00 correspondientes a los días de transición y luego pagarás tus S/ 139.90 fijos netos."`;

    this.orderFormTitle.innerHTML = `<i data-lucide="file-text" style="width: 18px; color: var(--movistar-blue);"></i> Emisión de Orden Comercial (Form-Fill Activo)`;
    this.orderFormBadge.innerText = 'API TMF622 • Product Ordering';

    this.formFieldsGrid.innerHTML = `
      <div class="form-group">
        <label class="form-label">Producto Convergente</label>
        <input type="text" class="form-input-simulated" id="fieldProduct" value="Movistar Total 300M Fibra + Móvil" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Tarifa Mensual Neta</label>
        <input type="text" class="form-input-simulated" id="fieldPrice" value="S/ 139.90" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Key de Seguimiento E2E</label>
        <input type="text" class="form-input-simulated" id="fieldKey" value="TMF622-ORD-2026-8842" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Estado de Transcripción</label>
        <input type="text" class="form-input-simulated" id="fieldStatus" value="100% Acordado por Voz" readonly>
      </div>
    `;

    this.btnEmitOrder.innerHTML = `<i data-lucide="check-circle-2" style="width: 18px;"></i> Emitir Orden Comercial a Back-Office (TMF622)`;
    this.btnEmitOrder.style.background = 'linear-gradient(135deg, var(--movistar-blue), #0066CC)';

    this.bindPhase1Actions();
  }

  /* --- RENDERIZADO DE FASE 2: SON-IA BACK-OFFICE --- */
  renderPhase2() {
    // CX Panel (Juan Carlos Quispe)
    this.cxBadgeTitle.innerText = 'Juan Carlos Quispe (Cliente)';
    this.cxBadgeSub.innerText = '42 días de mora • Modo Mantenimiento 15M';
    this.cxAvatarThumb.innerText = 'JQ';
    this.cxAvatarThumb.style.background = 'linear-gradient(135deg, #F59E0B, #EF4444)';

    this.chatArea.innerHTML = `
      <div class="chat-bubble bot fade-in">
        <p>Hola <strong>Juan Carlos</strong> <i data-lucide="shield-alert" style="width: 13px; display: inline-block; color: var(--accent-amber); vertical-align: -1px;"></i>. Notamos que tu plan de fibra tiene un saldo pendiente de <strong>S/ 298.00</strong>.</p>
        <p style="font-size: 11px; margin-top: 4px; color: var(--accent-amber);">
          <i data-lucide="activity" style="width: 12px; display: inline-block; vertical-align: -1px;"></i> <strong>Modo Mantenimiento Activo:</strong> Mantenemos 15 Mbps de seguridad para que sigas teletrabajando.
        </p>
        <div class="offer-interactive-card" style="border-color: var(--accent-amber);">
          <div class="offer-card-header">
            <div class="offer-title" style="color: var(--accent-amber);"><i data-lucide="shield-check" style="width: 14px;"></i> Cobranza Empática</div>
            <span class="offer-gap-badge" style="background: rgba(245,158,11,0.12); color: #D97706; border-color: rgba(245,158,11,0.3);">0% Intereses</span>
          </div>
          <div style="background: var(--surface-ground); padding: 10px 12px; border-radius: 12px; margin-bottom: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: var(--deep-indigo); margin-bottom: 2px;">Fraccionamiento en 3 Cuotas:</div>
            <div style="font-size: 15px; font-weight: 800; color: var(--movistar-blue); font-family: var(--font-heading);">3 cuotas fijas de S/ 99.33</div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Sin reporte a INFOCORP • Reactivación en 5 minutos</div>
          </div>
          <button class="offer-btn-accept" id="btnPayInstallment" style="background: linear-gradient(135deg, #00C853, #009624);">
            <i data-lucide="credit-card" style="width: 14px;"></i> Pagar Cuota 1 (S/ 99.33 con BCP/Yape)
          </button>
        </div>
        <div class="chat-time">14:15 <i data-lucide="check-check" style="width: 13px; color: var(--movistar-blue);"></i></div>
      </div>
    `;

    // EX Panel (Ana - Back-Office)
    this.advisorAvatar.innerText = 'AN';
    this.advisorName.innerText = 'Ana Morales (Analista Contable Back-Office)';
    this.advisorRole.innerText = 'Consola SON-IA • Conciliación & Auditoría P×Q';

    this.customer360Title.innerHTML = `<i data-lucide="check-square" style="width: 18px; color: var(--movistar-blue);"></i> Control del Ciclo de Ingresos (Zero-Excel)`;
    this.customer360Badge.innerText = 'API TMF666 / TMF676';

    this.customerStatsGrid.innerHTML = `
      <div class="stat-item">
        <span class="stat-label">Métrica DSO</span>
        <span class="stat-value" style="color: var(--accent-green);">31 Días (Meta: &lt;30)</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Auditoría P×Q</span>
        <span class="stat-value" style="color: var(--movistar-blue);">100% Cuadrado</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Alucinaciones Prev.</span>
        <span class="stat-value" style="color: var(--accent-green);">0% (VeNRA Engine)</span>
      </div>
    `;

    this.upliftMeterBox.style.display = 'none';

    this.whisperHeader.innerHTML = `<i data-lucide="cpu" style="width: 16px;"></i> Monitor de Red BSS/OSS Link (Amdocs OSS)`;
    this.whisperSpeech.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 11px; line-height: 1.5; color: #0084D1;">
        [14:20:05] Webhook BCP_Tesora: Payment Received S/ 99.33 [MATCH]<br>
        [14:20:06] M.O.V.I.: Balance Settled in SGA (API TMF676)<br>
        [14:20:07] OSS Command -> OLT Fiber Port RESTORED to 300 Mbps<br>
        [14:20:08] Status: SERVICE ACTIVE. Reconnection in 7 seconds.
      </div>
    `;

    this.orderFormTitle.innerHTML = `<i data-lucide="check-circle" style="width: 18px; color: var(--accent-green);"></i> Aprobación Contable Human-in-the-Loop (HITL)`;
    this.orderFormBadge.innerText = 'TMF676 • Payment Posting';

    this.formFieldsGrid.innerHTML = `
      <div class="form-group">
        <label class="form-label">Cliente / ID</label>
        <input type="text" class="form-input-simulated" value="Juan Carlos Quispe (SGA-7762)" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Monto Conciliado</label>
        <input type="text" class="form-input-simulated" value="S/ 99.33 (Cuota 1 de 3)" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Pasarela Bancaria</label>
        <input type="text" class="form-input-simulated" value="BCP Tesora Webhook Real-Time" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Estado de Red OSS</label>
        <input type="text" class="form-input-simulated" id="fieldOssState" value="Modo Mantenimiento (15M)" style="color: var(--accent-amber); font-weight: 700;" readonly>
      </div>
    `;

    this.btnEmitOrder.innerHTML = `<i data-lucide="zap" style="width: 18px;"></i> Validar Conciliación y Reconectar Fibra en 5 Min (HITL)`;
    this.btnEmitOrder.style.background = 'linear-gradient(135deg, var(--movistar-blue), #0066CC)';

    this.bindPhase2Actions();
  }

  /* --- RENDERIZADO DE FASE 3: POST-VENTA & BILL SHOCK --- */
  renderPhase3() {
    // CX Panel (Valerio - Recibo Inteligente)
    this.cxBadgeTitle.innerText = 'Valerio Mendoza (Cliente)';
    this.cxBadgeSub.innerText = 'Fin de mes • Recibo con Prorrateo';
    this.cxAvatarThumb.innerText = 'VM';
    this.cxAvatarThumb.style.background = 'linear-gradient(135deg, #019DF4, #00D4FF)';

    this.chatArea.innerHTML = `
      <div class="chat-bubble user fade-in">
        <p>Aura, mi recibo llegó por <strong>S/ 154.90</strong> cuando pactamos S/ 139.90. ¿Por qué me cobran 15 soles más? <i data-lucide="help-circle" style="width: 13px; display: inline-block; color: var(--accent-red); vertical-align: -1px;"></i></p>
        <div class="chat-time">10:30 <i data-lucide="check-check" style="width: 13px; color: var(--movistar-blue);"></i></div>
      </div>

      <div class="chat-bubble bot fade-in" style="margin-top: 6px;">
        <p>¡Hola <strong>Valerio</strong>! No te preocupes, no es un cobro indebido. Tu tarifa fija es <strong>S/ 139.90</strong>. Los <strong>S/ 15.00</strong> son únicamente los días proporcionales de transición antes de tu corte.</p>
        
        <!-- Gráfico CSR-RAG de 3 Barras -->
        <div style="background: #FFFFFF; border-radius: 14px; padding: 12px; margin: 10px 0; border: 1px solid rgba(1,157,244,0.2); box-shadow: var(--shadow-sm);">
          <div style="font-size: 11px; font-weight: 700; color: var(--deep-indigo); margin-bottom: 8px; display: flex; align-items: center; gap: 5px;">
            <i data-lucide="bar-chart-3" style="width: 13px; color: var(--movistar-blue);"></i> Desglose Transparente (CSR-RAG):
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 11px;">
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                <span style="color: var(--text-muted);">Plan Anterior (3 días):</span>
                <strong style="font-family: var(--font-heading);">S/ 5.00</strong>
              </div>
              <div style="width: 100%; height: 6px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
                <div style="width: 15%; height: 100%; background: #94A3B8;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                <span style="color: var(--text-muted);">Prorrateo Movistar Total (10 días):</span>
                <strong style="font-family: var(--font-heading);">S/ 15.00</strong>
              </div>
              <div style="width: 100%; height: 6px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
                <div style="width: 30%; height: 100%; background: var(--aura-cyan);"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                <span style="color: var(--text-muted);">Renta Adelantada Fija:</span>
                <strong style="font-family: var(--font-heading);">S/ 139.90</strong>
              </div>
              <div style="width: 100%; height: 6px; background: #E2E8F0; border-radius: 3px; overflow: hidden;">
                <div style="width: 100%; height: 100%; background: var(--movistar-blue);"></div>
              </div>
            </div>

            <div style="border-top: 1px dashed #CBD5E1; padding-top: 6px; display: flex; justify-content: space-between; font-weight: 800; color: var(--deep-indigo);">
              <span>Total Liquidado:</span>
              <span style="color: var(--movistar-blue); font-size: 13px; font-family: var(--font-heading);">S/ 154.90</span>
            </div>
          </div>
        </div>

        <button class="offer-btn-accept" id="btnPayYape" style="background: linear-gradient(135deg, #702670, #9C27B0);">
          <i data-lucide="smartphone" style="width: 14px;"></i> Pagar con Yape (S/ 154.90)
        </button>
        <div class="chat-time">10:31 <i data-lucide="check-check" style="width: 13px; color: var(--movistar-blue);"></i></div>
      </div>
    `;

    // EX Panel (Jorge - Asesor del 104)
    this.advisorAvatar.innerText = 'JO';
    this.advisorName.innerText = 'Jorge Salazar (Asesor de Atención 104)';
    this.advisorRole.innerText = 'Cockpit de Contención • Semáforo NLP & Warm Hand-off';

    this.customer360Title.innerHTML = `<i data-lucide="activity" style="width: 18px; color: var(--movistar-blue);"></i> Cockpit de Atención 104 (Semáforo NLP)`;
    this.customer360Badge.innerText = 'TMF683 • Customer Experience';

    this.customerStatsGrid.innerHTML = `
      <div class="stat-item">
        <span class="stat-label">Sentimiento NLP</span>
        <span class="stat-value" style="color: var(--accent-green);">Verde (Contenido)</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">TMO Ahorrado</span>
        <span class="stat-value" style="color: var(--movistar-blue);">180 Segundos</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Llamadas Evitadas</span>
        <span class="stat-value" style="color: var(--accent-green);">-15% al 104</span>
      </div>
    `;

    this.upliftMeterBox.style.display = 'none';

    this.whisperHeader.innerHTML = `<i data-lucide="info" style="width: 16px;"></i> Warm Hand-off Inteligente (Resumen en 3 Líneas)`;
    this.whisperSpeech.innerHTML = `
      <strong>Cliente:</strong> Valerio Mendoza • <strong>Motivo:</strong> Consulta de Prorrateo (+S/15.00).<br>
      <strong>Estado:</strong> Desglose CSR-RAG proyectado y aceptado en WhatsApp.<br>
      <strong>Acción recomendada:</strong> Validar conformidad y confirmar pago con Yape.
    `;

    this.orderFormTitle.innerHTML = `<i data-lucide="repeat" style="width: 18px; color: var(--accent-green);"></i> Bucle E2E: Tasa de Silencio & Cross-Selling`;
    this.orderFormBadge.innerText = 'Bucle Infinito Orquestado';

    this.formFieldsGrid.innerHTML = `
      <div class="form-group">
        <label class="form-label">Tasa de Silencio (72h)</label>
        <input type="text" class="form-input-simulated" value="100% Sin Reclamos Posteriores" style="color: var(--accent-green); font-weight: 700;" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Impacto OSIPTEL</label>
        <input type="text" class="form-input-simulated" value="0 Riesgo Regulatorio" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">NPS Transaccional</label>
        <input type="text" class="form-input-simulated" value="+10 Puntos de Confianza" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Cross-Selling Restrictivo</label>
        <input type="text" class="form-input-simulated" value="Habilitado para Fase 1" style="color: var(--movistar-blue); font-weight: 700;" readonly>
      </div>
    `;

    this.btnEmitOrder.innerHTML = `<i data-lucide="check-check" style="width: 18px;"></i> Registrar Conformidad y Cerrar Bucle E2E`;
    this.btnEmitOrder.style.background = 'linear-gradient(135deg, #00C853, #009624)';

    this.bindPhase3Actions();
  }

  /* --- BIND ACTIONS POR FASE --- */
  bindPhase1Actions() {
    const btnAccept = document.getElementById('btnAcceptOffer');
    btnAccept?.addEventListener('click', () => {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8, x: 0.25 },
        colors: ['#019DF4', '#00D4FF', '#00C853']
      });

      btnAccept.innerHTML = '✓ Oferta Aceptada (1-Touch)';
      btnAccept.style.background = 'var(--accent-green)';
      this.auraOrbHeader?.classList.add('state-success');

      document.querySelectorAll('.form-input-simulated').forEach(input => {
        input.classList.add('auto-typing');
      });

      gsap.to(this.btnEmitOrder, {
        scale: 1.03,
        repeat: 3,
        yoyo: true,
        duration: 0.25
      });
    });

    this.btnEmitOrder?.addEventListener('click', () => {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7, x: 0.75 },
        colors: ['#019DF4', '#00D4FF', '#00C853', '#E6007E']
      });

      this.btnEmitOrder.innerHTML = '✓ Orden TMF622 Emitida al Back-Office';
      this.btnEmitOrder.style.background = 'linear-gradient(135deg, #00C853, #009624)';
      this.nodePhase1?.classList.add('completed');
      this.divPhase1_2?.classList.add('active');
    });
  }

  bindPhase2Actions() {
    const btnPay = document.getElementById('btnPayInstallment');
    btnPay?.addEventListener('click', () => {
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.8, x: 0.25 },
        colors: ['#00C853', '#019DF4', '#FF9100']
      });

      btnPay.innerHTML = '✓ Cuota 1 Pagada con BCP';
      btnPay.style.background = 'var(--accent-green)';

      const fieldOss = document.getElementById('fieldOssState');
      if (fieldOss) {
        fieldOss.value = '✓ Fibra 300 Mbps RESTABLECIDA (<5 min)';
        fieldOss.style.color = 'var(--accent-green)';
      }
    });

    this.btnEmitOrder?.addEventListener('click', () => {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7, x: 0.75 },
        colors: ['#019DF4', '#00C853', '#00D4FF']
      });

      this.btnEmitOrder.innerHTML = '✓ Conciliación y Reconexión en Central OLT Confirmada';
      this.btnEmitOrder.style.background = 'linear-gradient(135deg, #00C853, #009624)';
      this.nodePhase2?.classList.add('completed');
      this.divPhase2_3?.classList.add('active');
    });
  }

  bindPhase3Actions() {
    const btnPayYape = document.getElementById('btnPayYape');
    btnPayYape?.addEventListener('click', () => {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.8, x: 0.25 },
        colors: ['#702670', '#00C853', '#00D4FF']
      });

      btnPayYape.innerHTML = '✓ Recibo Pagado con Yape (S/ 154.90)';
      btnPayYape.style.background = 'var(--accent-green)';
      this.auraOrbHeader?.classList.add('state-success');
    });

    this.btnEmitOrder?.addEventListener('click', () => {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.7, x: 0.5 },
        colors: ['#019DF4', '#00D4FF', '#00C853', '#E6007E']
      });

      this.btnEmitOrder.innerHTML = '✓ Bucle M.O.V.I. E2E Cerrado con Éxito';
      this.nodePhase3?.classList.add('completed');
    });
  }

  resetMockup() {
    console.log('🔄 Resetting mockup state...');
    [this.nodePhase1, this.nodePhase2, this.nodePhase3].forEach(node => node?.classList.remove('completed', 'active'));
    [this.divPhase1_2, this.divPhase2_3].forEach(div => div?.classList.remove('active'));
    this.auraOrbHeader?.classList.remove('state-success', 'state-alert');
    this.setPhase(1);
    this.setViewMode('split');
  }
}
