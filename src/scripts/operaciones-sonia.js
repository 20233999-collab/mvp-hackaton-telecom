import { createIcons, icons } from 'lucide';
import gsap from 'gsap';
import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons });

  // Referencias a DOM
  const screen0Login = document.getElementById('screen0Login');
  const screen1Dashboard = document.getElementById('screen1Dashboard');
  
  const biometricBtn = document.getElementById('biometricTouchBtn');
  const bankCard = document.querySelector('.bank-card');
  const sgaCard = document.querySelector('.sga-card');
  const btnApprove = document.getElementById('btnApproveRecon');
  const connectorLine = document.getElementById('connectorLine');
  const successCheckMark = document.getElementById('successCheckMark');
  const badgeTMF = document.getElementById('badgeTMF');
  
  const tachNeedle = document.getElementById('tachNeedle');
  const tachSpeedText = document.getElementById('tachSpeedText');
  const networkStatusBox = document.getElementById('networkStatusBox');

  // Estado Inicial
  let currentPhase = 0;
  
  // Ocultar elementos iniciales para que entren por fase
  gsap.set(bankCard, { opacity: 0, x: -30 });
  gsap.set(btnApprove, { opacity: 0, scale: 0.8, pointerEvents: 'none' });
  gsap.set(sgaCard, { opacity: 0, x: 30 });
  
  // =========================================================
  // FASE 0: LOGIN BIOMÉTRICO
  // =========================================================
  biometricBtn.addEventListener('click', () => {
    // Escaneo verde
    gsap.to('.biometric-finger-icon', { color: '#00C853', duration: 0.3 });
    gsap.to('.biometric-scanning-laser', { backgroundColor: '#00C853', boxShadow: '0 0 10px #00C853', duration: 0.3 });
    
    setTimeout(() => {
      screen0Login.classList.remove('active-view');
      screen1Dashboard.classList.add('active-view');
      
      // Iniciar Fase 1 automáticamente al entrar
      setTimeout(() => advancePhase(1), 500);
    }, 800);
  });

  // =========================================================
  // CONTROLADOR DE FASES (Cronológico)
  // =========================================================
  function advancePhase(phase) {
    if (phase === currentPhase) return;
    currentPhase = phase;

    if (currentPhase === 1) {
      // FASE 1: Se muestra el panel SGA (M.O.V.I.) esperando el pago
      gsap.to(sgaCard, { opacity: 1, x: 0, duration: 0.5, ease: 'back.out(1.2)' });
    }
    
    else if (currentPhase === 2) {
      // FASE 2: Llega el pago por Yape (simulando la acción de Miguel en su celular)
      gsap.to(bankCard, { opacity: 1, x: 0, duration: 0.5, ease: 'back.out(1.2)' });
      
      // Activar el botón de 1 clic
      setTimeout(() => {
        gsap.to(btnApprove, { opacity: 1, scale: 1, pointerEvents: 'auto', duration: 0.4, ease: 'back.out(1.5)' });
      }, 300);
    }

    else if (currentPhase === 3) {
      // FASE 3: Ana da el clic, Conciliación Automática
      // Ocultar botón, mostrar checkmark
      gsap.to(btnApprove, { opacity: 0, scale: 0.5, duration: 0.2, onComplete: () => {
        btnApprove.style.display = 'none';
        successCheckMark.style.display = 'flex';
        gsap.from(successCheckMark, { scale: 0, duration: 0.5, ease: 'back.out(2)' });
      }});

      // Conector se pone verde
      connectorLine.classList.add('connected');
      bankCard.classList.add('success');
      sgaCard.classList.add('success');
      
      // Confetti de celebración interna
      setTimeout(() => {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } });
      }, 300);
    }

    else if (currentPhase === 4) {
      // FASE 4: Activación TMF622 y Reconexión GPON
      // 1. Badge TMF
      badgeTMF.classList.add('active-tmf');
      badgeTMF.innerHTML = '<i data-lucide="zap" style="width: 14px;"></i> <span>API TMF622: EJECUTADA (RESTORE GPON)</span>';
      createIcons({ icons });

      // 2. Tacómetro sube a 300M (Ángulo para 180 es 180 en el path, calcularemos aprox)
      // Original: 15M -> aguja en x2=45, y2=55
      // Destino: 300M -> aguja a la derecha (x2=155, y2=55) o similar
      gsap.to(tachNeedle, {
        attr: { x2: 155, y2: 55 },
        stroke: '#00D4FF',
        duration: 1.5,
        ease: 'power3.out'
      });
      
      gsap.to(tachSpeedText, { color: '#00D4FF', duration: 0.5 });
      
      // Animar el contador de 15 a 300
      let dummy = { val: 15 };
      gsap.to(dummy, {
        val: 300,
        duration: 1.5,
        ease: 'power3.out',
        onUpdate: () => {
          tachSpeedText.innerText = Math.round(dummy.val) + ' Mbps';
        }
      });

      // 3. Status Box a full
      networkStatusBox.classList.add('status-full');
      networkStatusBox.innerHTML = `
        <i data-lucide="zap" style="color: #00D4FF;"></i>
        <div>
          <strong>Conexión Restablecida (300 Mbps)</strong>
          <span>Fibra óptica operando a máxima capacidad.</span>
        </div>
      `;
      createIcons({ icons });
    }
  }

  // Interacción: Clic en el botón mágico
  btnApprove.addEventListener('click', () => {
    advancePhase(3);
    // Después de conciliar, a los 1.5 segundos se dispara la reconexión de red automáticamente
    setTimeout(() => advancePhase(4), 1500);
  });

  // Interacción global: Barra espaciadora o clic en el body avanza las fases ocultas
  // Para que el presentador pueda controlar la llegada del pago de Yape (Fase 2)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && currentPhase === 1) {
      e.preventDefault();
      advancePhase(2);
    }
  });

  // Tap-to-advance oculto en el dashboard para móvil/tablet
  screen1Dashboard.addEventListener('click', (e) => {
    // Si hace clic en el botón de aprobar, no avanzar por tap global
    if (e.target.closest('#btnApproveRecon')) return;
    
    if (currentPhase === 1) {
      advancePhase(2);
    }
  });
});
