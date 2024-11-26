  const menuLink = document.querySelectorAll('.header-mobile-navigation a');
  const menuContainer = document.querySelector('.js-menu-container');

document.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.js-close-menu');
  if (!menuContainer || !openMenuButton || !closeMenuButton) {
    console.error('Элементы управления меню не найдены!');
    return;
  }

  // Добавляем класс 'dark-theme' к body после загрузки DOM
  // document.body.classList.add('dark-theme');
  // console.log("Класс 'dark-theme' добавлен после загрузки DOM.");

  // Открытие меню
  openMenuButton.addEventListener('click', () => {
    menuContainer.classList.add('active');
    // document.body.classList.toggle('no-scroll');

    console.log('Меню открыто');
  });

  // Закрытие меню
  closeMenuButton.addEventListener('click', () => {
    menuContainer.classList.remove('active');
    console.log('Меню закрыто');
  });

  // Закрытие меню при клике вне области меню
  menuContainer.addEventListener('click', event => {
    if (event.target === menuContainer) {
      menuContainer.classList.remove('active');
      console.log('Клик вне меню, меню закрыто');
    }
  });
  
});
menuLink.forEach(link => {
    
    link.addEventListener('click', e => {
      e.preventDefault(); // Забороняємо стандартну поведінку браузера
      const targetId = link.getAttribute('href').substring(1); // Отримуємо ID цільового елемента
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Плавний скрол до секції
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Закриваємо меню після переходу
        menuContainer.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });