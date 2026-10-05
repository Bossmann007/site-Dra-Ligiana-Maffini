const dialog = document.querySelector<HTMLDialogElement>('[data-first-visit-dialog]');

if (dialog) {
  const steps = Array.from(dialog.querySelectorAll<HTMLElement>('[data-first-visit-step]'));
  const next = dialog.querySelector<HTMLButtonElement>('[data-first-visit-next]')!;
  const back = dialog.querySelector<HTMLButtonElement>('[data-first-visit-back]')!;
  const area = dialog.querySelector<HTMLSelectElement>('[data-first-visit-area]')!;
  const areaLabel = dialog.querySelector<HTMLElement>('[data-first-visit-area-label]')!;
  const error = dialog.querySelector<HTMLElement>('[data-first-visit-error]')!;
  const preview = dialog.querySelector<HTMLElement>('[data-first-visit-preview]')!;
  const whatsapp = dialog.querySelector<HTMLAnchorElement>('[data-first-visit-whatsapp]')!;
  let activeStep = 0;

  const showStep = (index: number) => {
    activeStep = index;
    steps.forEach((step, stepIndex) => { step.hidden = stepIndex !== index; });
    back.hidden = index === 0;
    next.hidden = index === steps.length - 1;
    const progress = dialog.querySelector('.eyebrow');
    if (progress) progress.textContent = `${String(index + 1).padStart(2, '0')} / 04`;
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

  next.addEventListener('click', () => {
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
  const openDialog = () => {
    if (dialog.open) return;
    showStep(0);
    const language = dialog.querySelector<HTMLSelectElement>('[data-first-visit-language]');
    if (language && document.documentElement.lang === 'pt-BR') language.selectedIndex = 0;
    dialog.showModal();
    language?.focus();
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
}
