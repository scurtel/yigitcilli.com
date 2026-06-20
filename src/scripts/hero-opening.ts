const STORAGE_KEY = 'yc-hero-opening-v1';
const STAGGER_MS = 90;
const REVEAL_MS = 700;
const STEPS = 4;

const hero = document.querySelector<HTMLElement>('[data-hero-opening]');
if (hero) {
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
    const stagger = isShort ? STAGGER_MS / 2 : STAGGER_MS;
    const duration = isShort ? 450 : REVEAL_MS;
    const totalMs = (STEPS - 1) * stagger + duration + 80;

    window.setTimeout(() => {
      finish();
      if (!isShort) {
        try {
          sessionStorage.setItem(STORAGE_KEY, '1');
        } catch {
          /* gizli mod */
        }
      }
    }, totalMs);
  }
}
