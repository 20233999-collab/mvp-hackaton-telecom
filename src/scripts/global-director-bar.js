document.addEventListener('DOMContentLoaded', () => {
  // Find any element whose class ends with "-director-bar"
  const bars = document.querySelectorAll('[class$="-director-bar"]');
  
  bars.forEach(bar => {
    // Create the toggle button
    const toggleBtn = document.createElement('button');
    // Default SVG: Chevron Down
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
    
    // Add hover effect to button
    toggleBtn.onmouseover = () => toggleBtn.style.background = 'rgba(255,255,255,0.25)';
    toggleBtn.onmouseout = () => toggleBtn.style.background = 'rgba(255,255,255,0.1)';
    toggleBtn.onmousedown = () => toggleBtn.style.transform = 'scale(0.9)';
    toggleBtn.onmouseup = () => toggleBtn.style.transform = 'scale(1)';

    bar.appendChild(toggleBtn);
    bar.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s';

    let isCollapsed = false;

    toggleBtn.addEventListener('click', () => {
      if (!isCollapsed) {
        // Collapse: Move down completely, but leave 45px visible so it can be clicked again
        const barHeight = bar.offsetHeight;
        bar.style.transform = `translateY(${barHeight - 45}px)`;
        // Change to Chevron Up
        toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
        toggleBtn.title = "Expandir Barra";
        bar.style.opacity = '0.3';
      } else {
        // Expand: Move back to original position
        bar.style.transform = 'translateY(0)';
        // Change to Chevron Down
        toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
        toggleBtn.title = "Contraer Barra";
        bar.style.opacity = '1';
      }
      isCollapsed = !isCollapsed;
    });

    // When collapsed, make it more visible if the user hovers over the remaining tab
    bar.addEventListener('mouseenter', () => {
      if (isCollapsed) {
        bar.style.opacity = '0.9';
      }
    });
    bar.addEventListener('mouseleave', () => {
      if (isCollapsed) {
        bar.style.opacity = '0.3';
      }
    });
  });
});
