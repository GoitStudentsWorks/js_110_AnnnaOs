// Вибираємо всі елементи FAQ
const faqItems = document.querySelectorAll('.faq-item');

// Додаємо обробник події на клік для кожного елемента
faqItems.forEach(item => {
  const button = item.querySelector('.accordion-btn'); // Кнопка для цього елементу
  const answer = item.querySelector('.faq-answer'); // Відповідь цього елементу
  const icon = button.querySelector('.accordion-icon use'); // Іконка стрілки

  // Додаємо подію на клік
  button.addEventListener('click', () => {
    // Спочатку закриваємо всі інші відповіді
    faqItems.forEach(innerItem => {
      if (innerItem !== item) {
        innerItem.classList.remove('active');
        // Змінюємо іконки всіх інших елементів на стрілку вниз
        const innerIcon = innerItem.querySelector('.accordion-icon use');
        innerIcon.setAttribute('href', '/img/icons.svg#down');
      }
    });

    // Перемикаємо активний стан для поточного елементу
    item.classList.toggle('active');

    // Змінюємо іконку на стрілку вгору для розгорнутого елементу
    if (item.classList.contains('active')) {
      icon.setAttribute('href', '/img/icons.svg#up'); // Заміна на стрілку вгору
    } else {
      icon.setAttribute('href', '/img/icons.svg#down'); // Заміна на стрілку вниз
    }
  });
});

// Додаємо клас "active" до першого елемента списку для його автоматичного розгортання
faqItems[0].classList.add('active');

// Змінюємо іконку на стрілку вгору для першого елемента
const firstIcon = faqItems[0].querySelector('.accordion-icon use');
firstIcon.setAttribute('href', '/img/icons.svg#up');
