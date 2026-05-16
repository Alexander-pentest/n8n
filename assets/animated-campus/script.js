const belts = [
  { selector: '.belt-ab', name: 'ab', width: 240, count: 4, duration: 9.5, stagger: 2.2 },
  { selector: '.belt-bc', name: 'bc', width: 240, count: 4, duration: 9, stagger: 2 },
  { selector: '.belt-cs', name: 'cs', width: 260, count: 5, duration: 10, stagger: 1.8 }
];

function injectKeyframes() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes move-ab { from { transform: translate(-40px, 4px) translateZ(24px) skewX(-6deg);} to { transform: translate(240px, 4px) translateZ(24px) skewX(-6deg);} }
    @keyframes move-bc { from { transform: translate(-40px, 4px) translateZ(24px) skewX(-6deg);} to { transform: translate(240px, 4px) translateZ(24px) skewX(-6deg);} }
    @keyframes move-cs { from { transform: translate(-40px, 4px) translateZ(24px) skewX(-6deg);} to { transform: translate(260px, 4px) translateZ(24px) skewX(-6deg);} }
  `;
  document.head.appendChild(style);
}

function createPackages() {
  belts.forEach((belt) => {
    const container = document.querySelector(belt.selector);
    if (!container) return;

    for (let i = 0; i < belt.count; i += 1) {
      const pkg = document.createElement('div');
      pkg.className = 'package';
      pkg.innerHTML = `
        <div class="face top"></div>
        <div class="face front"></div>
        <div class="face side"></div>
        <div class="strap"></div>
      `;
      pkg.style.animation = `move-${belt.name} ${belt.duration}s linear infinite`;
      pkg.style.animationDelay = `${i * belt.stagger}s`;
      pkg.style.opacity = '0.9';
      container.appendChild(pkg);
    }
  });
}

function init() {
  injectKeyframes();
  createPackages();
}

document.addEventListener('DOMContentLoaded', init);
