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

function initFaq() {
  document.querySelectorAll('[data-faq-accordion]').forEach((accordion) => {
    const triggers = [...accordion.querySelectorAll<HTMLButtonElement>('[data-faq-trigger]')];
    triggers.forEach((trigger) => {
      const item = trigger.closest('[data-faq-item]');
      const panel = item?.querySelector<HTMLElement>('[data-faq-panel]');
      const icon = trigger.querySelector<HTMLElement>('[data-faq-icon]');
      if (!panel) return;

      const setOpen = (open: boolean) => {
        trigger.setAttribute('aria-expanded', String(open));
        panel.hidden = !open;
        if (icon) icon.textContent = open ? '−' : '+';
      };

      trigger.addEventListener('click', () => {
        const open = trigger.getAttribute('aria-expanded') === 'true';
        triggers.forEach((other) => {
          if (other === trigger) return;
          const otherPanel = other.closest('[data-faq-item]')?.querySelector<HTMLElement>('[data-faq-panel]');
          const otherIcon = other.querySelector<HTMLElement>('[data-faq-icon]');
          other.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.hidden = true;
          if (otherIcon) otherIcon.textContent = '+';
        });
        setOpen(!open);
      });

      trigger.addEventListener('keydown', (event) => {
        const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const index = triggers.indexOf(trigger);
        let next = index;
        if (event.key === 'ArrowDown') next = (index + 1) % triggers.length;
        if (event.key === 'ArrowUp') next = (index - 1 + triggers.length) % triggers.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = triggers.length - 1;
        triggers[next]?.focus();
      });
    });
  });
}

function initFormation() {
  const root = document.querySelector('[data-formation-timeline]');
  if (!root) return;
  const items = [...root.querySelectorAll<HTMLElement>('[data-formation-item]')];
  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('[data-formation-trigger]');
    const panel = item.querySelector<HTMLElement>('[data-formation-panel]');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') === 'true';
      items.forEach((other) => {
        const otherTrigger = other.querySelector<HTMLButtonElement>('[data-formation-trigger]');
        const otherPanel = other.querySelector<HTMLElement>('[data-formation-panel]');
        if (!otherTrigger || !otherPanel) return;
        const isCurrent = other === item && !open;
        otherTrigger.setAttribute('aria-expanded', String(isCurrent));
        otherPanel.hidden = !isCurrent;
      });
    });
  });
}

initGalleryPause();
initFaq();
initFormation();
