/* ==========================================================================
   PERSPECTIVA DEL CLIENTE (MIGUEL MENDOZA) - LÓGICA INTERACTIVA
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import gsap from 'gsap';

class MiguelClienteFlowApp {
  constructor() {
    this.currentScreen = 1;
    this.callActive = false;
    this.callSeconds = 0;
    this.callTimerInterval = null;

    this.init();
  }

  init() {
    createIcons({ icons });
    this.bindEvents();
    this.renderScreen(1);
    console.log('📱 Miguel Customer Journey (Mi Movistar & Call Flow) initialized.');
  }

  bindEvents() {
    // Pantalla 1: Botón en la App Mi Movistar para pasar a la llamada
    document.getElementById('btnRequestAdviceFromApp')?.addEventListener('click', () => {
      this.renderScreen(2);
    });

    // Pantalla 2: Contestar Llamada
    document.getElementById('btnAcceptCallMiguel')?.addEventListener('click', () => {
      this.startActiveCall();
    });

    // Pantalla 2: Colgar / Volver a App
    document.getElementById('btnHangupCallMiguel')?.addEventListener('click', () => {
      this.endActiveCall();
      this.renderScreen(1);
    });

    // Director Bar Controls
    document.getElementById('btnClientScreen1')?.addEventListener('click', () => this.renderScreen(1));
    document.getElementById('btnClientScreen2')?.addEventListener('click', () => this.renderScreen(2));
    
    document.getElementById('btnClientAutoPlay')?.addEventListener('click', () => {
      this.startAutoPlay();
    });

    // Keyboard Shortcuts (1, 2, Space)
    document.addEventListener('keydown', (e) => {
      if (e.key === '1') this.renderScreen(1);
      if (e.key === '2') this.renderScreen(2);
      if (e.key === ' ' || e.key === 'ArrowRight') {
        if (this.currentScreen === 1) this.renderScreen(2);
        else this.renderScreen(1);
      }
    });
  }

  renderScreen(screenNum) {
    this.currentScreen = screenNum;
    console.log(`📱 Switching Customer Screen: ${screenNum}`);

    document.querySelectorAll('.client-screen-view').forEach(s => s.classList.remove('active-screen'));
    document.getElementById(`clientScreen_${screenNum}`)?.classList.add('active-screen');

    document.getElementById('btnClientScreen1')?.classList.toggle('active', screenNum === 1);
    document.getElementById('btnClientScreen2')?.classList.toggle('active', screenNum === 2);

    if (screenNum === 2) {
      this.resetIncomingCallState();
    } else {
      this.endActiveCall();
    }

    createIcons({ icons });
  }

  resetIncomingCallState() {
    const ringingView = document.getElementById('incomingRingingView');
    const inCallView = document.getElementById('activeCallView');
    if (ringingView) ringingView.style.display = 'flex';
    if (inCallView) inCallView.style.display = 'none';
  }

  startActiveCall() {
    this.callActive = true;
    this.callSeconds = 0;

    const ringingView = document.getElementById('incomingRingingView');
    const inCallView = document.getElementById('activeCallView');
    if (ringingView) ringingView.style.display = 'none';
    if (inCallView) inCallView.style.display = 'flex';

    if (this.callTimerInterval) clearInterval(this.callTimerInterval);
    this.callTimerInterval = setInterval(() => {
      this.callSeconds++;
      const mins = Math.floor(this.callSeconds / 60).toString().padStart(2, '0');
      const secs = (this.callSeconds % 60).toString().padStart(2, '0');
      const timerElem = document.getElementById('activeCallTimerVal');
      if (timerElem) timerElem.innerText = `${mins}:${secs}`;
    }, 1000);

    createIcons({ icons });
  }

  endActiveCall() {
    this.callActive = false;
    if (this.callTimerInterval) clearInterval(this.callTimerInterval);
    this.callTimerInterval = null;
  }

  startAutoPlay() {
    this.renderScreen(1);
    setTimeout(() => {
      this.renderScreen(2);
      setTimeout(() => {
        this.startActiveCall();
      }, 2000);
    }, 4000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MiguelClienteFlowApp();
});
