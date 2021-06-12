import './sass/main.scss';
import menu from './menu.json';
import itemsTemplate from './templates/menu-template.hbs';
import {onSwitch} from './js/changeTheme.js'

const bestMenu = itemsTemplate(menu);


const menuGallery = document.querySelector('.js-menu');
const onCheckBox = document.querySelector('#theme-switch-toggle');
menuGallery.insertAdjacentHTML('beforeend', bestMenu);



onCheckBox.addEventListener('change', onSwitch);

menuSavedTheme();

function menuSavedTheme() {
  const saveTheme = localStorage.getItem('Theme');
  const onBody = document.querySelector('body');
  if (saveTheme) {
    onBody.classList.add(saveTheme);
    if (saveTheme === 'dark-theme') {
      onCheckBox.checked = true;
    };
  };
}




