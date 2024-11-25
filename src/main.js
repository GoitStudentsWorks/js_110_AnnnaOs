
  // Получаем чекбокс и элемент body
  const themeSwitch = document.getElementById('switch');
  const body = document.body;

  // Проверяем, есть ли сохранённая тема в localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.checked = true; // Ставим чекбокс в положение "включено"
  } else {
    body.classList.add('light-theme');
  }

  // Добавляем обработчик событий для чекбокса
  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark'); // Сохраняем выбранную тему
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light'); // Сохраняем выбранную тему
    }
  });

 
document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.js-menu-container');
    const openMenuButton = document.querySelector('.js-open-menu');
    const closeMenuButton = document.querySelector('.js-close-menu');
  
    if (!menuContainer || !openMenuButton || !closeMenuButton) {
      console.error('Элементы управления меню не найдены!');
      return;
    }
  
    // Открытие меню
    openMenuButton.addEventListener('click', () => {
      menuContainer.classList.add('active');
      console.log('Меню открыто'); 
    });
  
    // Закрытие меню
    closeMenuButton.addEventListener('click', () => {
      menuContainer.classList.remove('active');
      console.log('Меню закрыто'); 
    });
  
    // Закрытие меню при клике вне области меню
    menuContainer.addEventListener('click', (event) => {
      if (event.target === menuContainer) {
        menuContainer.classList.remove('active');
        console.log('Клик вне меню, меню закрыто'); 
      }
    });
  });