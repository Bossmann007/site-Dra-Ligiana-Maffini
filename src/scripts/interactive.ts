function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initGalleryPause() {
  const tracks = document.querySelectorAll<HTMLElement>('[data-motion-track]');
  if (prefersReducedMotion()) {
    tracks.forEach((track) => {
      track.style.animationPlayState = 'paused';
    });
  } else {
    tracks.forEach((track) => {
      track.addEventListener('pointerenter', () => {
        track.style.animationPlayState = 'paused';
      });
      track.addEventListener('pointerleave', () => {
        if (track.dataset.paused !== 'true') track.style.animationPlayState = 'running';
      });
    });
  }

  document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((button) => {
    const track = document.getElementById(button.getAttribute('aria-controls') ?? '');
    if (!track || button.dataset.motionBound === 'true') return;
    button.dataset.motionBound = 'true';
    button.addEventListener('click', () => {
      const paused = track.dataset.paused !== 'true';
      track.dataset.paused = String(paused);
      track.style.animationPlayState = paused || prefersReducedMotion() ? 'paused' : 'running';
      button.textContent = paused ? 'Retomar galeria' : 'Pausar galeria';
    });
  });
}

function initNavMenus() {
  const menus = [...document.querySelectorAll<HTMLDetailsElement>('[data-site-header] details')];
  document.addEventListener('click', (event) => {
    menus.forEach((menu) => {
      if (menu.open && !menu.contains(event.target as Node)) menu.open = false;
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const open = menus.find((menu) => menu.open);
    if (!open) return;
    open.open = false;
    open.querySelector('summary')?.focus();
  });
  menus.forEach((menu) => {
    menu.addEventListener('toggle', () => {
      if (menu.open) menus.forEach((other) => { if (other !== menu) other.open = false; });
    });
  });
}

initGalleryPause();
initNavMenus();
