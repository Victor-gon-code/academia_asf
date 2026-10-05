type MotionTarget = HTMLElement | null;

const clamp = (value: number, min = 0, max = 1): number => Math.min(max, Math.max(min, value));

function animateIn(
  target: MotionTarget,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
): void {
  if (!target) return;
  const animation = target.animate(keyframes, { fill: 'both', ...options });
  void animation.finished.then(() => animation.cancel()).catch(() => undefined);
}

function initSectionReveals(): void {
  if (!('IntersectionObserver' in window)) return;

  const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-block]'));
  const lists = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-list]'));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target as HTMLElement;
        if (target.dataset.revealed === 'true') {
          observer.unobserve(target);
          return;
        }

        target.dataset.revealed = 'true';

        if (target.matches('[data-reveal-list]')) {
          Array.from(target.children).forEach((child, index) => {
            animateIn(
              child as HTMLElement,
              [
                { opacity: 0, transform: 'translateY(18px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              {
                duration: 460,
                delay: Math.min(index * 55, 220),
                easing: 'cubic-bezier(.2,.75,.25,1)',
              },
            );
          });
        } else {
          animateIn(
            target,
            [
              { opacity: 0, transform: 'translateY(16px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 520, easing: 'cubic-bezier(.2,.75,.25,1)' },
          );
        }

        observer.unobserve(target);
      });
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
    },
  );

  [...blocks, ...lists].forEach((target) => revealObserver.observe(target));
}

export function initMotion(): void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const history = document.querySelector<HTMLElement>('[data-history]');

  if (!hero || !history || reducedMotion) return;

  const heroLines = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-line]'));
  const kicker = hero.querySelector<HTMLElement>('[data-hero-kicker]');
  const meta = hero.querySelector<HTMLElement>('[data-hero-meta]');
  const media = hero.querySelector<HTMLElement>('[data-hero-media]');
  const image = media?.querySelector<HTMLImageElement>('img') ?? null;
  const handoff = hero.querySelector<HTMLElement>('[data-hero-handoff]');
  const historyLine = history.querySelector<HTMLElement>('[data-history-line]');

  animateIn(
    kicker,
    [
      { opacity: 0, transform: 'translateY(10px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    { duration: 440, easing: 'cubic-bezier(.2,.75,.25,1)' },
  );

  heroLines.forEach((line, index) => {
    animateIn(
      line,
      [
        { transform: 'translateY(110%)' },
        { transform: 'translateY(0)' },
      ],
      {
        duration: 720,
        delay: 90 + index * 80,
        easing: 'cubic-bezier(.2,.75,.25,1)',
      },
    );
  });

  animateIn(
    media,
    [
      { opacity: 0, transform: 'translateY(18px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    { duration: 720, delay: 230, easing: 'cubic-bezier(.2,.75,.25,1)' },
  );

  animateIn(
    meta,
    [
      { opacity: 0, transform: 'translateY(10px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    { duration: 420, delay: 520, easing: 'cubic-bezier(.2,.75,.25,1)' },
  );

  initSectionReveals();

  let ticking = false;

  const updateScrollMotion = (): void => {
    const viewportHeight = window.innerHeight || 1;
    const heroRect = hero.getBoundingClientRect();
    const heroProgress = clamp(-heroRect.top / Math.max(heroRect.height, 1));

    if (image) {
      image.style.transform = `scale(${(1 + heroProgress * 0.03).toFixed(4)})`;
    }

    if (handoff) {
      const handoffProgress = clamp((heroProgress - 0.42) / 0.42);
      handoff.style.transform = `scaleX(${handoffProgress.toFixed(4)})`;
      handoff.style.transformOrigin = 'left center';
    }

    if (historyLine) {
      const historyRect = history.getBoundingClientRect();
      const start = viewportHeight * 0.86;
      const end = viewportHeight * 0.42;
      const historyProgress = clamp((start - historyRect.top) / Math.max(start - end, 1));
      historyLine.style.transform = `scaleX(${historyProgress.toFixed(4)})`;
      historyLine.style.transformOrigin = 'left center';
    }

    ticking = false;
  };

  const requestUpdate = (): void => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScrollMotion);
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  updateScrollMotion();
}
