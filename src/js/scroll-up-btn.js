'use strict';

// Кнопки прокрутки
const scrollUpBtn = document.querySelector('.scroll-up-btn');
const scrollDownBtn = document.querySelector('.scroll-down-btn');
let lastScrollTop = 0;  // Запоминаем последнюю позицию прокрутки
let isScrollingUp = true; // Проверка направления прокрутки

// Обработчик прокрутки страницы
window.addEventListener('scroll', () => {
    let currentTop = window.scrollY;

    // Показываем кнопки только если страница прокручена
    if (currentTop > 0) { // Страница прокручена, кнопки должны быть видимы
        scrollUpBtn.classList.add('is-active-scroll');
        scrollDownBtn.classList.add('is-active-scroll');
    } else {
        scrollUpBtn.classList.remove('is-active-scroll');
        scrollDownBtn.classList.remove('is-active-scroll');
    }

    // Логика скрытия/отображения кнопки "Вверх"
    if (currentTop < lastScrollTop && isScrollingUp) {
        scrollUpBtn.classList.add('is-active-scroll');
        isScrollingUp = false;
    } else if (currentTop > lastScrollTop && !isScrollingUp) {
        scrollUpBtn.classList.remove('is-active-scroll');
        isScrollingUp = true;
    }

    // Логика скрытия кнопки "Вниз" на нижней части страницы
    if (currentTop + window.innerHeight >= document.body.scrollHeight) {
        scrollDownBtn.classList.remove('is-active-scroll'); // Скрываем кнопку, если мы на самом низу
    }

    // Логика скрытия кнопки "Вверх" на верхней и нижней части страницы
    if (currentTop === 0 || currentTop + window.innerHeight >= document.body.scrollHeight) {
        scrollUpBtn.classList.remove('is-active-scroll'); // Скрываем кнопку, если мы на самом верху или внизу
    }

    lastScrollTop = currentTop <= 0 ? 0 : currentTop;
});

// Скролл вверх при клике на кнопку
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    scrollUpBtn.classList.remove('is-active-scroll');
});

// Скролл вниз при клике на кнопку
scrollDownBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    scrollDownBtn.classList.remove('is-active-scroll');
});
