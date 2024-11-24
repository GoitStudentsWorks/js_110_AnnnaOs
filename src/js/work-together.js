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

modalCloseBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

modalOverlay.addEventListener('click', event => {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }
});

const validateEmail = () => {
  if (inputEmail.validity.valid) {
    successIcon.style.display = 'block';
    errorInput.style.display = 'none';
    return true;
  } else {
    successIcon.style.display = 'none';
    errorInput.style.display = 'block';
    errorInput.textContent = 'Invalid email, try again';
    return false;
  }
};

inputEmail.addEventListener('input', validateEmail);

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
        modalOverlay.classList.add('is-open');

        modalTitle.textContent = response.data.title;
        modalMessage.textContent = response.data.message;

        //   errorInput.style.display = 'none';

        form.reset();
        successIcon.style.display = 'none';
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