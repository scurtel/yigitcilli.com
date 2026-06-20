const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.documentElement.classList.add('reveal-js');

function revealIfInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < viewportHeight * 0.85 && rect.bottom > 0) {
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
        threshold: 0.15,
        rootMargin: '0px 0px -4% 0px',
      },
    );

    for (const el of pending) {
      observer.observe(el);
    }
  }
}
