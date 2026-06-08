const hero = document.querySelector<HTMLElement>('[data-hero]');
const spotlight = document.querySelector<HTMLElement>('[data-hero-spotlight]');

if (hero && spotlight) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const mobile = window.matchMedia('(max-width: 768px)').matches;

  if (!reduced && !coarse && !mobile) {
    let frame = 0;
    let targetX = 50;
    let targetY = 40;
    let currentX = targetX;
    let currentY = targetY;

    const update = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      spotlight.style.setProperty('--spot-x', `${currentX}%`);
      spotlight.style.setProperty('--spot-y', `${currentY}%`);
      frame = requestAnimationFrame(update);
    };

    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width) * 100;
      targetY = ((event.clientY - rect.top) / rect.height) * 100;
    });

    hero.addEventListener('pointerleave', () => {
      targetX = 50;
      targetY = 40;
    });

    update();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else update();
    });
  } else {
    spotlight.hidden = true;
  }
}
