const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 768px)').matches;

function revealIfInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
    el.classList.add('is-visible');
    return true;
  }
  return false;
}

const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (prefersReduced) {
  for (const el of elements) {
    el.classList.add('is-visible');
  }
} else if (elements.length) {
  const pending: HTMLElement[] = [];

  for (const el of elements) {
    if (!revealIfInView(el)) {
      pending.push(el);
    }
  }

  if (pending.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: isMobile ? 0.06 : 0.1,
        rootMargin: isMobile ? '0px 0px -2% 0px' : '0px 0px -5% 0px',
      },
    );

    for (const el of pending) {
      observer.observe(el);
    }
  }
}
