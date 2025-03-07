const theme = localStorage.getItem('colorTheme') || 'light';
document.body.className = theme; 

function swapTheme(theme) {
  document.body.className = theme;
}

setTimeout(() => {
  let theme = localStorage.getItem('colorTheme') || 'light';
  swapTheme(theme);
$('#theme-toggle').click(function() {
    if (theme === 'light') { newTheme = 'dark'; }
    else { newTheme = 'light'; }
    swapTheme(newTheme);
    localStorage.setItem('colorTheme', newTheme);
    theme = newTheme;
  });
}, 0);