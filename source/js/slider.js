'use strict';
(function () {

  const CATALOG = document.querySelector('.catalog');
  const INDEX_SLIDER = document.querySelector('.slider--index');

  function initSwiper() {
    let swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.slider__button--next',
        prevEl: '.slider__button--prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },
        },
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return current + ' of ' + total;
            },
          },
        },
      },
    });
  };

  function initCatalogSwiper() {
    let swiper = new Swiper('.catalog__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        nextEl: '.catalog__button--next',
        prevEl: '.catalog__button--prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  };

  if (CATALOG) {
    initCatalogSwiper();
  }
  
  if (INDEX_SLIDER) {
    initSwiper();
  }
  

})();

