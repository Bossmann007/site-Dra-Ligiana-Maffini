const STORAGE_KEY = 'sitelili-theme';

export type Theme = 'light' | 'dark';

export function getStoredTheme(): Theme | null {
  let value: string | null = null;
  try { value = localStorage.getItem(STORAGE_KEY); } catch { /* storage blocked */ }
  return value === 'light' || value === 'dark' ? value : null;
}

export function getPreferredTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
}

export function setTheme(theme: Theme) {
  applyTheme(theme);
  try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* storage blocked */ }
}

export function initThemeToggle() {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  button.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

initThemeToggle();
