(() => {
  try {
    const theme = localStorage.getItem('hiitun-site-theme');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.dataset.theme = theme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f4f7fb' : '#070b16');
      document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme);
    }
  } catch {
    // The dark default remains available when storage is unavailable.
  }
})();
