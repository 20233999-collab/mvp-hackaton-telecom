/* ==========================================================================
   MINIMALIST LIVING MOCKUP • ENGINE
   ========================================================================== */

import confetti from 'canvas-confetti';
import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnRechargeMinimal');
  const dataVal = document.getElementById('dataValue');
  const speedVal = document.getElementById('speedValue');
  const statusTag = document.getElementById('statusTag');
  const subText = document.getElementById('minimalSubText');

  let isRecharged = false;

  if (btn) {
    btn.addEventListener('click', () => {
      if (isRecharged) return;
      isRecharged = true;

      // Animate Numbers with GSAP
      const counter = { val: 0 };
      gsap.to(counter, {
        val: 2.0,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => {
          if (dataVal) {
            dataVal.innerText = `${counter.val.toFixed(2)} GB`;
          }
        },
        onComplete: () => {
          if (dataVal) {
            dataVal.className = 't-val green';
          }
        }
      });

      // Update Speed
      if (speedVal) {
        speedVal.innerText = '300 Mbps';
        speedVal.className = 't-val green';
      }

      // Update Tag
      if (statusTag) {
        statusTag.innerText = 'DATOS ACTIVOS';
        statusTag.className = 'nav-tag green';
      }

      // Update Subtext
      if (subText) {
        subText.innerText = '¡Navegación de alta velocidad restaurada!';
        subText.style.color = '#10B981';
      }

      // Update Button
      btn.innerHTML = '<span>✓ 2 GB de Emergencia Activos</span>';
      btn.style.background = '#10B981';

      // Confetti burst
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#019DF4', '#00D4FF', '#10B981']
      });
    });
  }

  console.log('✨ Minimal Living Mockup initialized.');
});
