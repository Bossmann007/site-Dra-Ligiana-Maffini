const dialog = document.querySelector<HTMLDialogElement>('[data-first-visit-dialog]');

if (dialog) {
  const steps = Array.from(dialog.querySelectorAll<HTMLElement>('[data-first-visit-step]'));
  const next = dialog.querySelector<HTMLButtonElement>('[data-first-visit-next]')!;
  const back = dialog.querySelector<HTMLButtonElement>('[data-first-visit-back]')!;
  const area = dialog.querySelector<HTMLSelectElement>('[data-first-visit-area]')!;
  const areaLabel = dialog.querySelector<HTMLElement>('[data-first-visit-area-label]')!;
  const error = dialog.querySelector<HTMLElement>('[data-first-visit-error]')!;
  const preview = dialog.querySelector<HTMLElement>('[data-first-visit-preview]')!;
  const quick = dialog.querySelector<HTMLElement>('[data-first-visit-quick]')!;
  const progress = dialog.querySelector<HTMLElement>('[data-first-visit-progress]')!;
  const language = dialog.querySelector<HTMLSelectElement>('[data-first-visit-language]');
  const whatsapp = dialog.querySelector<HTMLAnchorElement>('[data-first-visit-whatsapp]')!;
  let activeStep = 0;

  const showStep = (index: number) => {
    activeStep = index;
    steps.forEach((step, stepIndex) => { step.hidden = stepIndex !== index; });
    back.hidden = index === 0;
    next.hidden = index === steps.length - 1;
    quick.hidden = index === steps.length - 1;
    progress.textContent = `${String(index + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`;
    steps[index]?.querySelector<HTMLElement>('[data-step-heading], select')?.focus();
  };

  const selectedPurpose = () => dialog.querySelector<HTMLInputElement>('[data-first-visit-purpose]:checked');
  dialog.querySelectorAll<HTMLInputElement>('[data-first-visit-purpose]').forEach((choice) => {
    choice.addEventListener('change', () => {
      const wantsArea = choice.value === 'area';
      area.hidden = !wantsArea;
      area.disabled = !wantsArea;
      areaLabel.hidden = !wantsArea;
      error.hidden = true;
    });
  });

  const updateMessage = () => {
    const purpose = selectedPurpose()?.value;
    const topic = area.selectedOptions[0]?.textContent?.trim() ?? '';
    const suffix = purpose === 'area' ? `${dialog.dataset.messageArea} ${topic}.` : dialog.dataset.messageAbout;
    const message = `${dialog.dataset.messageIntro} ${suffix}`;
    preview.textContent = message;
    whatsapp.href = `${dialog.dataset.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  const chosenLang = () => language?.selectedOptions[0]?.dataset.lang;
  next.addEventListener('click', () => {
    if (activeStep === 0 && language && chosenLang() !== dialog.dataset.locale) {
      window.location.href = language.value;
      return;
    }
    if (activeStep === 1 && (!selectedPurpose() || (selectedPurpose()?.value === 'area' && !area.value))) {
      error.textContent = selectedPurpose()?.value === 'area' ? area.options[0]?.textContent ?? '' : dialog.querySelector('h3')?.textContent ?? '';
      error.hidden = false;
      (selectedPurpose()?.value === 'area' ? area : dialog.querySelector<HTMLInputElement>('[data-first-visit-purpose]'))?.focus();
      return;
    }
    if (activeStep === 2) updateMessage();
    showStep(Math.min(activeStep + 1, steps.length - 1));
  });
  back.addEventListener('click', () => showStep(Math.max(activeStep - 1, 0)));
  dialog.querySelector<HTMLButtonElement>('[data-first-visit-close]')?.addEventListener('click', () => dialog.close());
  dialog.querySelector<HTMLSelectElement>('[data-first-visit-language]')?.addEventListener('change', (event) => {
    window.location.href = (event.currentTarget as HTMLSelectElement).value;
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (window.location.hash === '#primeira-consulta') history.replaceState(null, '', window.location.pathname + window.location.search);
  });
  dialog.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement;
    if (event.key === 'Enter' && !next.hidden && target.matches('input[type="radio"], select')) {
      event.preventDefault();
      next.click();
    }
  });
  const openDialog = (startStep = 0) => {
    if (dialog.open) return;
    showStep(startStep);
    if (language && document.documentElement.lang === 'pt-BR') language.selectedIndex = 0;
    dialog.showModal();
    if (startStep === 0) language?.focus();
  };
  document.querySelectorAll<HTMLAnchorElement>('[data-first-visit-open]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const next = new URL(window.location.href);
      next.hash = 'primeira-consulta';
      history.pushState(null, '', `${next.pathname}${next.search}${next.hash}`);
      openDialog();
    });
  });
  const openFromHash = () => {
    if (window.location.hash === '#primeira-consulta') openDialog();
  };
  window.addEventListener('hashchange', openFromHash);
  openFromHash();

  // First visit only: wait for the page to settle, skip crawlers/automation, remember the guide was shown.
  const seenKey = 'first-visit-seen';
  const seen = () => { try { return localStorage.getItem(seenKey) === '1'; } catch { return true; } };
  const markSeen = () => { try { localStorage.setItem(seenKey, '1'); } catch { /* private mode */ } };
  dialog.addEventListener('close', markSeen);
  const isBot = navigator.webdriver || /bot|crawl|spider|lighthouse|headless/i.test(navigator.userAgent);
  if (dialog.hasAttribute('data-auto-open') && !dialog.open && !isBot && !seen()) {
    window.setTimeout(() => {
      if (document.querySelector('dialog[open]')) return;
      markSeen();
      // Browser language differs from the page: open on the language step, preselected. Otherwise skip it.
      const browserLang = navigator.language.slice(0, 2).toLowerCase();
      const suggested = language?.querySelector<HTMLOptionElement>(`option[data-lang^="${browserLang}"]`);
      const differs = suggested && suggested.dataset.lang !== dialog.dataset.locale;
      openDialog(differs ? 0 : 1);
      if (differs) language!.value = suggested.value;
    }, 1500);
  }
}
