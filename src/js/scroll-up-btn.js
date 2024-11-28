const scrollUpBtn = document.querySelector('.scroll-up-btn');
const scrollDownBtn = document.querySelector('.scroll-down-btn');
let lastScrollTop = 0; //Запамʼятовуємо останню позицію прокрутки
let isScrollingUp = true; //Перевірка напрямку прокрутки

//Обробник позиції прокрутки
window.addEventListener('scroll', () => {
  let currentTop = window.scrollY;

  //Показуємо кнопки, тільки якщо сторінка прокручена
  if (currentTop > 0) {
    //Сторінка прокручена, кнопки повинні бути видимі
    scrollUpBtn.classList.add('is-active-scroll');
    scrollDownBtn.classList.add('is-active-scroll');
  } else {
    scrollUpBtn.classList.remove('is-active-scroll');
    scrollDownBtn.classList.remove('is-active-scroll');
  }

  //Логіка приховання/відображення кнопки "Вгору"
  if (currentTop < lastScrollTop && isScrollingUp) {
    scrollUpBtn.classList.add('is-active-scroll');
    isScrollingUp = false;
  } else if (currentTop > lastScrollTop && !isScrollingUp) {
    scrollUpBtn.classList.remove('is-active-scroll');
    isScrollingUp = true;
  }

  //Логіка приховання кнопки "Вниз" з нижньої частини сторінки
  if (currentTop + window.innerHeight >= document.body.scrollHeight) {
    scrollDownBtn.classList.remove('is-active-scroll'); //Приховуємо кнопку, якщо ми в самому низу
  }

  //Логіка приховання кнопки "Вверх" з нижньої та верхньої частин сторінки
  if (
    currentTop === 0 ||
    currentTop + window.innerHeight >= document.body.scrollHeight
  ) {
    scrollUpBtn.classList.remove('is-active-scroll'); //Приховуємо кнопку, якщо ми в самому низу або вгорі
  }

  lastScrollTop = currentTop <= 0 ? 0 : currentTop;
});

//Скрол вгору при кліку на кнопку
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  scrollUpBtn.classList.remove('is-active-scroll');
});

//Скрол вниз при кліку на кнопку
scrollDownBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
  scrollDownBtn.classList.remove('is-active-scroll');
});
