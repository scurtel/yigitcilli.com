const parallax = document.querySelector<HTMLElement>('[data-hero-parallax]');

if (parallax) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const narrow = window.matchMedia('(max-width: 768px)').matches;

  if (!reduced && !coarse && !narrow) {
    const rate = 0.1;
    let ticking = false;

    const apply = () => {
      parallax.style.transform = `translate3d(0, ${window.scrollY * rate}px, 0)`;
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(apply);
        }
      },
      { passive: true },
    );

    apply();
  }
}
