const MOBILE_QUERY = '(max-width: 43.99rem), (max-width: 55.99rem) and (orientation: portrait)';

export function initNavigation(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const navigation = document.querySelector<HTMLElement>('[data-primary-nav]');
  const label = document.querySelector<HTMLElement>('[data-menu-label]');
  const brand = document.querySelector<HTMLElement>('.brand');
  const main = document.querySelector<HTMLElement>('main');
  const footer = document.querySelector<HTMLElement>('footer');

  if (!toggle || !navigation || !label) return;

  const mobileMedia = window.matchMedia(MOBILE_QUERY);
  const navLinks = Array.from(navigation.querySelectorAll<HTMLAnchorElement>('a'));

  const setBackgroundInert = (inert: boolean): void => {
    if (brand) brand.inert = inert;
    if (main) main.inert = inert;
    if (footer) footer.inert = inert;
  };

  const setMenu = (open: boolean, restoreFocus = false): void => {
    const canOpen = mobileMedia.matches;
    const nextOpen = canOpen && open;

    toggle.setAttribute('aria-expanded', String(nextOpen));
    navigation.dataset.open = String(nextOpen);
    label.textContent = nextOpen ? 'Fechar' : 'Menu';
    document.body.classList.toggle('menu-open', nextOpen);
    setBackgroundInert(nextOpen);

    if (nextOpen) {
      window.requestAnimationFrame(() => navLinks[0]?.focus());
    } else if (restoreFocus) {
      toggle.focus({ preventScroll: true });
    }
  };

  const focusInternalTarget = (link: HTMLAnchorElement): void => {
    if (!link.hash) return;

    const section = document.querySelector<HTMLElement>(link.hash);
    const target = section?.querySelector<HTMLElement>('h1, h2, h3') ?? section;

    if (!target) return;

    target.classList.add('nav-focus-target');
    target.tabIndex = -1;

    window.requestAnimationFrame(() => {
      target.focus({ preventScroll: true });
    });
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMedia.matches) return;
      setMenu(false);

      if (link.hash) {
        focusInternalTarget(link);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;

    if (event.key === 'Escape') {
      setMenu(false, true);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = [toggle, ...navLinks].filter((element) => !element.inert);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  mobileMedia.addEventListener('change', () => setMenu(false));

  setMenu(false);
}
