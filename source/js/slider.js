import Swiper from './vendor/swiper/swiper-bundle';

new Swiper('.juri__slider', {
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 678px
    678: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  loop : true,
});

new Swiper('.reviews__swiper', {
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  loop : false,
  centeredSlides: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 60,
});
