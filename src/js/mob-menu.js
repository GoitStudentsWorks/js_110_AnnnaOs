const menuLink = document.querySelectorAll('.header-mobile-navigation a');
const menuContainer = document.querySelector('.js-menu-container');
const body=document.body;

document.addEventListener('DOMContentLoaded', () => {
const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
if (!menuContainer || !openMenuButton || !closeMenuButton) {
  // console.error('Элементы управления меню не найдены!');
  return;
}

// Добавляем класс 'dark-theme' к body после загрузки DOM

// Открытие меню
openMenuButton.addEventListener('click', () => {
  menuContainer.classList.add('active');
  
  body.classList.add('no-scroll');

  // console.log('Меню открыто');
});

// Закрытие меню
closeMenuButton.addEventListener('click', () => {
  menuContainer.classList.remove('active');
  body.classList.remove('no-scroll');

  // console.log('Меню закрыто');
});

// Закрытие меню при клике вне области меню
menuContainer.addEventListener('click', event => {
  if (event.target === menuContainer) {
    menuContainer.classList.remove('active');
    body.classList.remove('no-scroll');

    // console.log('Клик вне меню, меню закрыто');
  }
});

});
menuLink.forEach(link => {
  
  link.addEventListener('click', e => {
          body.classList.remove('no-scroll');

    e.preventDefault(); // Забороняємо стандартну поведінку браузера
    const targetId = link.getAttribute('href').substring(1); // Отримуємо ID цільового елемента
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      
      // Плавний скрол до секції
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Закриваємо меню після переходу
      menuContainer.classList.remove('active');
    }
  });
});