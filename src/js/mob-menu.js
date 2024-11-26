  document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.js-menu-container');
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