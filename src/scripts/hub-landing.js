/* ==========================================================================
   PORTAL PRINCIPAL / MASTER LAUNCHPAD - CONTROL & KEYBOARD SHORTCUTS
   ========================================================================== */

import { createIcons, icons } from 'lucide';

document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons });

  // Atajos de Teclado Globales desde el Portal Principal
  document.addEventListener('keydown', (e) => {
    if (e.key === '1') {
      window.location.href = './cliente.html';
    } else if (e.key === '2') {
      window.location.href = './operador.html';
    } else if (e.key === '3') {
      window.location.href = './mi-movistar.html';
    } else if (e.key === '4') {
      window.location.href = './valeria.html';
    }
  });

  console.log('🚀 Movistar Journey Tracker - Master Portal Launchpad Initialized.');
});
