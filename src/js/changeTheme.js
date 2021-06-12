const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeBodyTheme = document.querySelector('body');

function onSwitch(event) {
    if (event.target.checked) {
        changeBodyTheme.classList.add(Theme.DARK);
        changeBodyTheme.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
    } else if (!event.target.checked) {
        changeBodyTheme.classList.add(Theme.LIGHT);
        changeBodyTheme.classList.remove(Theme.DARK);

        localStorage.setItem('Theme', Theme.LIGHT);
    }
}

export { onSwitch };