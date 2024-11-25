// import Swiper JS
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import axios from 'axios';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },

  spaceBetween: 32,
});

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function loadReviewsFromBackend() {
  try {
    const response = await axios.get('/reviews');
    return response.data;
  } catch (error) {
    console.error('Failed to load reviews:', error);
    return [];
  }
}

const createReviewsMarkup = reviews => {
  return reviews
    .map(
      review => `<li class="reviews-item swiper-slide">
        <p class="reviews-text">${review.review}</p>
        <div class="reviewer-data">
          <img
            src="${review.avatar_url}"
            alt="Natalia Shevchenko"
            loading="lazy"
            width="40"
            height="40"
            class="reviews-foto"
          />
          <p class="reviewer-name">${review.author}</p>
        </div>
      </li>`
    )
    .join('');
};

const addReviews = async () => {
  const reviewsListEL = document.querySelector('.reviews-list');
  try {
    const reviews = await loadReviewsFromBackend();

    if (reviews.length === 0) {
      reviewsListEL.innerHTML = '<p class="not-found">Not found</p>';
      return;
    }
    const markupReviews = createReviewsMarkup(reviews);

    reviewsListEL.innerHTML = markupReviews;

    swiper.update();
  } catch (error) {
    console.log(error);
    alert('Failed to load reviews. Please try again later.');
  }
};

window.addEventListener('load', addReviews);