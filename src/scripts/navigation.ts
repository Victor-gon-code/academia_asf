const MOBILE_QUERY = '(max-width: 43.99rem), (max-width: 55.99rem) and (orientation: portrait)';

export function initNavigation(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const navigation = document.querySelector<HTMLElement>('[data-primary-nav]');
  const label = document.querySelector<HTMLElement>('[data-menu-label]');

  if (!toggle || !navigation || !label) return;

  const mobileMedia = window.matchMedia(MOBILE_QUERY);
  const navLinks = Array.from(navigation.querySelectorAll<HTMLAnchorElement>('a'));

  const setMenu = (open: boolean, restoreFocus = false): void => {
    const canOpen = mobileMedia.matches;
    const nextOpen = canOpen && open;

    toggle.setAttribute('aria-expanded', String(nextOpen));
    navigation.dataset.open = String(nextOpen);
    label.textContent = nextOpen ? 'Fechar' : 'Menu';
    document.body.classList.toggle('menu-open', nextOpen);

    if (nextOpen) {
      window.requestAnimationFrame(() => navLinks[0]?.focus());
    } else if (restoreFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false, true);
    }
  });

  mobileMedia.addEventListener('change', () => setMenu(false));

  setMenu(false);
}
