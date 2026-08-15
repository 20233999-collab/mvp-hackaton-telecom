/* ==========================================================================
   WHATSAPP LIVING MOCKUP • TAP-TO-RECEIVE ANIMATED ENGINE
   ========================================================================== */

import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons });

  const tapPrompt = document.getElementById('waTapPrompt');
  const officialBubble = document.getElementById('officialMovistarBubble');
  const contactStatus = document.getElementById('waContactStatus');
  const btnActivate = document.getElementById('btnActivate2GB');
  const dynamicContainer = document.getElementById('waDynamicResponses');
  const chatCanvas = document.getElementById('waMessagesCanvas');
  const btnSend = document.getElementById('btnSendWa');
  const inputText = document.getElementById('waInputText');
  const btnReset = document.getElementById('btnResetChat');
  const msgTime1 = document.getElementById('msgTime1');

  let hasReceived = false;
  let isActivated = false;

  function getCurrentTimeStr() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    return `${hrs}:${mins}`;
  }

  // 1. DISPARAR LLEGADA DEL MENSAJE (AUTO-RECEIVE SIMULANDO ENTRADA AL CHAT)
  function autoReceiveMessage() {
    if (hasReceived) return;
    hasReceived = true;

    if (tapPrompt) tapPrompt.style.display = 'none';

    // Wait 1 second before Movistar starts typing (realistic push delay)
    setTimeout(() => {
      // Status: escribiendo...
      if (contactStatus) {
        contactStatus.innerText = 'escribiendo...';
        contactStatus.style.color = '#00A884';
        contactStatus.style.fontWeight = '600';
      }

      // Typing duration: 1.5 seconds
      setTimeout(() => {
        if (contactStatus) {
          contactStatus.innerText = 'en línea';
          contactStatus.style.color = '#667781';
          contactStatus.style.fontWeight = '400';
        }

        if (msgTime1) {
          msgTime1.innerText = getCurrentTimeStr();
        }

        if (officialBubble) {
          officialBubble.style.display = 'flex';
          officialBubble.classList.add('pop-in');
        }

        if (inputText) {
          inputText.value = '⛔ Comprar 2 GB Extra';
        }

        setTimeout(() => {
          if (chatCanvas) chatCanvas.scrollTo({ top: chatCanvas.scrollHeight, behavior: 'smooth' });
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 150);
      }, 1500);
    }, 1000);
  }

  // No se dispara automáticamente al cargar, espera el tap manual
  // autoReceiveMessage();

  const shell = document.getElementById('waShell');
  if (shell) {
    shell.addEventListener('click', (e) => {
      // Ignorar si el clic fue en un botón
      if (e.target.closest('button') || e.target.closest('a')) return;
      if (!hasReceived) autoReceiveMessage();
    });
  }

  // 2. DISPARAR RESPUESTA Y ACTIVACIÓN
  function triggerActivation() {
    if (!hasReceived || isActivated) return;
    isActivated = true;

    const timeNow = getCurrentTimeStr();

    // Inyectar mensaje saliente del usuario
    const userMsg = document.createElement('div');
    userMsg.className = 'wa-msg-bubble outgoing pop-in';
    userMsg.innerHTML = `
      <div class="wa-bubble-card-outgoing">
        <p>⛔ Comprar 2 GB Extra (S/ 15.00)</p>
        <div class="wa-meta-row-outgoing">
          <span class="wa-msg-time">${timeNow}</span>
          <span class="wa-check-blue">✓✓</span>
        </div>
      </div>
    `;
    dynamicContainer.appendChild(userMsg);
    
    setTimeout(() => {
      if (chatCanvas) chatCanvas.scrollTo({ top: chatCanvas.scrollHeight, behavior: 'smooth' });
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 150);

    if (inputText) inputText.value = '';

    // Status: escribiendo...
    if (contactStatus) {
      contactStatus.innerText = 'escribiendo...';
      contactStatus.style.color = '#00A884';
      contactStatus.style.fontWeight = '600';
    }

    // Respuesta de dolor
    setTimeout(() => {
      if (contactStatus) {
        contactStatus.innerText = 'en línea';
        contactStatus.style.color = '#667781';
        contactStatus.style.fontWeight = '400';
      }

      // Pain overlay
      const overlayTop = window.scrollY + (window.innerHeight / 2);
      const painOverlay = document.createElement('div');
      painOverlay.className = 'pain-overlay';
      painOverlay.innerHTML = `
        <div class="pain-content" style="top: ${overlayTop}px;">
          <i data-lucide="x-circle" style="width: 100px; height: 100px; color: #ffffff;"></i>
          <h2>¡Gasto Excesivo!</h2>
          <p>Has acumulado este mes:</p>
          <strong>S/ 179.80 al mes</strong>
        </div>
      `;
      const shell = document.getElementById('waShell');
      if (shell) {
        shell.appendChild(painOverlay);
      } else {
        document.body.appendChild(painOverlay);
      }
      createIcons({ icons });

      setTimeout(() => {
        if (chatCanvas) chatCanvas.scrollTo({ top: chatCanvas.scrollHeight, behavior: 'smooth' });
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 150);

    }, 650);
  }

  // 3. REINICIAR CHAT (PARA MÚLTIPLES TOMAS DE GRABACIÓN)
  function resetChat() {
    hasReceived = false;
    isActivated = false;

    if (tapPrompt) tapPrompt.style.display = 'flex';
    if (officialBubble) {
      officialBubble.style.display = 'none';
      officialBubble.classList.remove('pop-in');
    }
    if (dynamicContainer) dynamicContainer.innerHTML = '';
    if (inputText) inputText.value = '';
    if (contactStatus) {
      contactStatus.innerText = 'en línea';
      contactStatus.style.color = '#667781';
      contactStatus.style.fontWeight = '400';
    }
    // Remove pain overlay if exists
    const overlay = document.querySelector('.pain-overlay');
    if (overlay) overlay.remove();
  }

  // Event Listeners (Removed tap-to-receive listeners as it's now auto)

  if (btnActivate) btnActivate.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerActivation();
  });

  if (btnSend) btnSend.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!hasReceived) autoReceiveMessage();
    else triggerActivation();
  });

  if (btnReset) btnReset.addEventListener('click', (e) => {
    e.stopPropagation();
    resetChat();
  });

  // Atajos de teclado para video: Barra espaciadora / Tecla 1 para recibir, Tecla 2 para activar, Tecla R para reiniciar
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === '1') {
      if (!hasReceived) autoReceiveMessage();
    } else if (e.key === '2' || e.key === 'Enter') {
      if (!hasReceived) autoReceiveMessage();
      else triggerActivation();
    } else if (e.key.toLowerCase() === 'r') {
      resetChat();
    }
  });

  console.log('💬 WhatsApp Tap-to-Receive Animated Mockup Initialized.');
});
