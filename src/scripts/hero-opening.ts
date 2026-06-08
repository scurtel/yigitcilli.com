const STORAGE_KEY = 'yc-hero-opening-v1';

const hero = document.querySelector<HTMLElement>('[data-hero-opening]');
if (!hero) {
  /* Ana sayfa dışı */
} else {
  const header = document.querySelector<HTMLElement>('.header');
  const body = document.body;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const finish = () => {
    hero.classList.add('hero--sequence-complete');
    body.classList.add('hero-opening-ready');
    header?.classList.add('header--sequence-visible');
  };

  if (reduced || hero.dataset.opening === 'skip') {
    finish();
  } else {
    const isShort = hero.dataset.opening === 'short';
    const durationMs = isShort ? 520 : 1900;

    window.setTimeout(() => {
      finish();
      if (!isShort) {
        try {
          sessionStorage.setItem(STORAGE_KEY, '1');
        } catch {
          /* gizli mod */
        }
      }
    }, durationMs);
  }
}
