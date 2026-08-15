import { createIcons, icons } from 'lucide';
import { ViewManager } from './view-manager.js';

document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons });

  // Inicializar el manejador de escenas y vistas
  const viewManager = new ViewManager();

  // Control del Temporizador y Auto-Play Pitch (180s)
  const btnAutoPlay = document.getElementById('btnAutoPlay');
  const pitchTimerBadge = document.getElementById('pitchTimer');

  let timerInterval = null;
  let currentSeconds = 0;
  let isPlaying = false;

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs} / 3:00`;
  }

  function startAutoPlay() {
    isPlaying = true;
    currentSeconds = 0;
    btnAutoPlay.innerHTML = '<i data-lucide="pause" style="width: 14px;"></i> Pausar Pitch';
    btnAutoPlay.style.background = 'linear-gradient(135deg, #FF9100, #FF3D00)';
    viewManager.setPhase(1);
    createIcons({ icons });

    timerInterval = setInterval(() => {
      currentSeconds++;
      pitchTimerBadge.innerText = formatTime(currentSeconds);

      // En el segundo 45 (0:45) o 75 (1:15), pasar a Fase 2
      if (currentSeconds === 45 || currentSeconds === 75) {
        viewManager.setPhase(2);
      }
      // En el segundo 120 (2:00), pasar a Fase 3
      if (currentSeconds === 120) {
        viewManager.setPhase(3);
      }
      // En el segundo 180 (3:00), finalizar
      if (currentSeconds >= 180) {
        clearInterval(timerInterval);
        isPlaying = false;
        btnAutoPlay.innerHTML = '<i data-lucide="play" style="width: 14px;"></i> Auto-Play (180s)';
        btnAutoPlay.style.background = 'linear-gradient(135deg, var(--movistar-blue), var(--aura-cyan))';
        createIcons({ icons });
      }
    }, 1000);
  }

  function pauseAutoPlay() {
    isPlaying = false;
    clearInterval(timerInterval);
    btnAutoPlay.innerHTML = '<i data-lucide="play" style="width: 14px;"></i> Reanudar';
    btnAutoPlay.style.background = 'linear-gradient(135deg, var(--movistar-blue), var(--aura-cyan))';
    createIcons({ icons });
  }

  btnAutoPlay?.addEventListener('click', () => {
    if (isPlaying) {
      pauseAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  console.log('🚀 M.O.V.I. Studio & Scene Selector ready. Press [H] to toggle scene selector.');
});
