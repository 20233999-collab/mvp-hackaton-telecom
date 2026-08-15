document.addEventListener('DOMContentLoaded', () => {
  // Find any element whose class contains "-director-bar" OR is the sfdc-workflow-bottom-bar
  const bars = document.querySelectorAll('[class*="-director-bar"], .sfdc-workflow-bottom-bar');
  
  bars.forEach(bar => {
    // Create the toggle button inside the bar
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('director-collapse-btn');
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
    toggleBtn.title = "Contraer Barra";
    toggleBtn.style.cssText = `
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      color: white;
      cursor: pointer;
      padding: 6px;
      border-radius: 8px;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s, transform 0.2s;
    `;
    
    toggleBtn.onmouseover = () => toggleBtn.style.background = 'rgba(255,255,255,0.25)';
    toggleBtn.onmouseout = () => toggleBtn.style.background = 'rgba(255,255,255,0.1)';
    toggleBtn.onmousedown = () => toggleBtn.style.transform = 'scale(0.9)';
    toggleBtn.onmouseup = () => toggleBtn.style.transform = 'scale(1)';

    bar.appendChild(toggleBtn);
    bar.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s, visibility 0.4s';

    // Create the floating ball
    const floatingBall = document.createElement('div');
    floatingBall.classList.add('director-floating-ball');
    floatingBall.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
    floatingBall.title = "Expandir Barra";
    floatingBall.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #019DF4, #00548F);
      box-shadow: 0 4px 15px rgba(1, 157, 244, 0.5);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9999;
      opacity: 0;
      transform: scale(0) translateY(20px);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      pointer-events: none;
    `;
    document.body.appendChild(floatingBall);

    // Hover effect for the ball
    floatingBall.onmouseover = () => floatingBall.style.boxShadow = '0 6px 20px rgba(1, 157, 244, 0.8)';
    floatingBall.onmouseout = () => floatingBall.style.boxShadow = '0 4px 15px rgba(1, 157, 244, 0.5)';

    toggleBtn.addEventListener('click', () => {
      // Collapse the bar: scale it down slightly and hide it
      bar.style.opacity = '0';
      bar.style.visibility = 'hidden';
      // To prevent transform conflicts, we just use opacity and visibility
      
      // Show the floating ball
      floatingBall.style.opacity = '1';
      floatingBall.style.transform = 'scale(1) translateY(0)';
      floatingBall.style.pointerEvents = 'auto';
    });

    floatingBall.addEventListener('click', () => {
      // Hide the floating ball
      floatingBall.style.opacity = '0';
      floatingBall.style.transform = 'scale(0) translateY(20px)';
      floatingBall.style.pointerEvents = 'none';

      // Expand the bar
      bar.style.visibility = 'visible';
      bar.style.transform = ''; // Remove inline transform to restore CSS default (like translateX(-50%))
      bar.style.opacity = '1';
    });
  });
});

// Add global mobile-only hide style
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
  @media (max-width: 576px) {
    [class*="-director-bar"],
    .sfdc-workflow-bottom-bar,
    .director-collapse-btn,
    .director-floating-ball {
      display: none !important;
    }
  }
`;
document.head.appendChild(mobileStyle);
