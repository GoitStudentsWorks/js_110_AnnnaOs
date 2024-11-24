
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


//   Модальное окно
  document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.js-menu-container');
    const openMenuButton = document.querySelector('.js-open-menu'); // кнопка для открытия меню
    const closeMenuButton = document.querySelector('.js-close-menu'); // кнопка для закрытия меню
  
    // Открытие меню
    openMenuButton.addEventListener('click', () => {
      menuContainer.classList.add('active');
    });
  
    // Закрытие меню
    closeMenuButton.addEventListener('click', () => {
      menuContainer.classList.remove('active');
    });
  
    // Закрытие меню при клике вне меню
    menuContainer.addEventListener('click', (event) => {
      if (event.target === menuContainer) {
        menuContainer.classList.remove('active');
      }
    });
  });
  