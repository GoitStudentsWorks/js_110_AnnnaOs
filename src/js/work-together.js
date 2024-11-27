import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

const form = document.querySelector('.form');
const inputEmail = document.querySelector('.form-input');
const userComment = document.querySelector('.form-message');
const successIcon = document.querySelector('.form-icon-success');
const errorInput = document.querySelector('.form-input-error');
const errorMsg = document.querySelector('.form-input-error-msg');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalTitle = document.querySelector('.modal-text-main');
const modalMessage = document.querySelector('.modal-text-second');

// Функція для обробки події Escape
const handleEscapeKey = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

// Функція відкриття модального вікна
const openModal = () => {
  modalOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // Блокуємо прокрутку сторінки
  window.addEventListener('keydown', handleEscapeKey); // Додаємо слухач клавіатури
};

// Функція закриття модального вікна
const closeModal = () => {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = 'auto'; // Відновлюємо прокрутку сторінки
  window.removeEventListener('keydown', handleEscapeKey); // Видаляємо слухач клавіатури
};

// Закриття модального вікна при натисканні кнопки закриття
modalCloseBtn.addEventListener('click', closeModal);

// Закриття модального вікна при кліку на overlay
modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) closeModal();
});

// Валідація email
const validateEmail = () => {
  if (inputEmail.validity.valid) {
    // Пошта валідна
    inputEmail.classList.add('valid');
    inputEmail.classList.remove('invalid');
    successIcon.style.display = 'block';
    errorInput.style.display = 'none';
    return true;
  } else {
    // Пошта некоректна
    inputEmail.classList.remove('valid');
    inputEmail.classList.add('invalid');
    successIcon.style.display = 'none';
    errorInput.style.display = 'block';
    errorInput.textContent = 'Invalid email, try again';
    return false;
  }
};

// Відслідковування змін в полі вводу
inputEmail.addEventListener('input', validateEmail);

// Обробка форми
form.addEventListener('submit', async event => {
  event.preventDefault();

  if (inputEmail.value.trim() === '') {
    errorInput.style.display = 'block';
    errorInput.textContent = 'All fields must be filled';
    return;
  }

  if (userComment.value.trim() === '') {
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'All fields must be filled';
    return;
  } else {
    errorMsg.style.display = 'none';
  }

  if (validateEmail()) {
    const formData = {
      email: inputEmail.value.trim(),
      comment: userComment.value.trim(),
    };

    try {
      const response = await axios.post(BASE_URL, formData);

      if (response.status === 201) {
        openModal();

        modalTitle.textContent = response.data.title;
        modalMessage.textContent = response.data.message;

        form.reset();
        successIcon.style.display = 'none';
        inputEmail.classList.remove('valid', 'invalid'); // Видалення класів після успішного відправлення
      }
    } catch (error) {
      iziToast.error({
        message: error.message,
        title: 'Error',
        position: 'center',
      });
    }
  }
});
