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

  // 1. DISPARAR LLEGADA DEL MENSAJE (TAP-TO-RECEIVE)
  function receiveIncomingMessage() {
    if (hasReceived) return;
    hasReceived = true;

    if (tapPrompt) tapPrompt.style.display = 'none';

    // Status: escribiendo...
    if (contactStatus) {
      contactStatus.innerText = 'escribiendo...';
      contactStatus.style.color = '#00A884';
      contactStatus.style.fontWeight = '600';
    }

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
        inputText.value = '⚡ Activar 2 GB de Emergencia';
      }

      chatCanvas.scrollTop = chatCanvas.scrollHeight;
    }, 450);
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
        <p>⚡ Activar 2 GB de Emergencia (S/ 5.00)</p>
        <div class="wa-meta-row-outgoing">
          <span class="wa-msg-time">${timeNow}</span>
          <span class="wa-check-blue">✓✓</span>
        </div>
      </div>
    `;
    dynamicContainer.appendChild(userMsg);
    chatCanvas.scrollTop = chatCanvas.scrollHeight;

    if (inputText) inputText.value = '';

    // Status: escribiendo...
    if (contactStatus) {
      contactStatus.innerText = 'escribiendo...';
      contactStatus.style.color = '#00A884';
      contactStatus.style.fontWeight = '600';
    }

    // Respuesta oficial de Movistar en 650ms
    setTimeout(() => {
      if (contactStatus) {
        contactStatus.innerText = 'en línea';
        contactStatus.style.color = '#667781';
        contactStatus.style.fontWeight = '400';
      }

      const movistarReply = document.createElement('div');
      movistarReply.className = 'wa-msg-bubble incoming pop-in';
      movistarReply.innerHTML = `
        <div class="wa-bubble-card-content" style="border-left: 3.5px solid #008738;">
          <p class="wa-msg-body">
            ¡Listo <strong>Miguel</strong>! 🎉 Hemos activado <strong>2 GB de Emergencia</strong> en tu línea por S/ 5.00.
          </p>
          <div class="wa-mode-highlight-card" style="background: #F0FDF4; border-color: #BBF7D0;">
            <div class="mode-icon-box" style="background: #DCFCE7;">
              <i data-lucide="check-circle" style="width: 16px; color: #008738;"></i>
            </div>
            <div class="mode-info">
              <strong style="color: #166534;">Velocidad Restaurada</strong>
              <span style="color: #15803D;">Navegación 300 Mbps Alta Velocidad.</span>
            </div>
          </div>
          <p class="wa-msg-body-sub">
            El cargo se incluirá en tu próximo recibo. ¡Gracias por confiar en Movistar!
          </p>
          <div class="wa-meta-row">
            <span class="wa-msg-time">${timeNow}</span>
          </div>
        </div>
      `;
      dynamicContainer.appendChild(movistarReply);
      createIcons({ icons });
      chatCanvas.scrollTop = chatCanvas.scrollHeight;

      // Confetti burst
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#019DF4', '#00D4FF', '#008738', '#25D366']
      });
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
  }

  // Event Listeners
  if (tapPrompt) tapPrompt.addEventListener('click', receiveIncomingMessage);
  if (chatCanvas) {
    chatCanvas.addEventListener('click', (e) => {
      if (!hasReceived) receiveIncomingMessage();
    });
  }

  if (btnActivate) btnActivate.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerActivation();
  });

  if (btnSend) btnSend.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!hasReceived) receiveIncomingMessage();
    else triggerActivation();
  });

  if (btnReset) btnReset.addEventListener('click', (e) => {
    e.stopPropagation();
    resetChat();
  });

  // Atajos de teclado para video: Barra espaciadora / Tecla 1 para recibir, Tecla 2 para activar, Tecla R para reiniciar
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === '1') {
      if (!hasReceived) receiveIncomingMessage();
    } else if (e.key === '2' || e.key === 'Enter') {
      if (!hasReceived) receiveIncomingMessage();
      else triggerActivation();
    } else if (e.key.toLowerCase() === 'r') {
      resetChat();
    }
  });

  console.log('💬 WhatsApp Tap-to-Receive Animated Mockup Initialized.');
});
