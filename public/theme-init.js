(function () {
  var key = 'sitelili-theme';
  var stored = null;
  try { stored = localStorage.getItem(key); } catch (e) { /* storage blocked */ }
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
})();
