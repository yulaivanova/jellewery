/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  const ENTER_KEY = 'Enter';

  const CATALOG = document.querySelector('.catalog');
  const CATALOG_SLIDER = document.querySelector('.catalog__slider');
  const SLIDER = document.querySelector('.slider');
  const PRODUCT = document.querySelector('.product__photos');
  const GALLERY_ITEM = document.querySelectorAll('.photos__gallery label');

  function initSwiper() {
    let swiper = new Swiper('.slider__wrapper', {
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
              return '<span class="' + className + '">' + (index + 1) + '</span>' + '&nbsp';
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
              return current + ' &nbsp of &nbsp' + total;
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
          return '<span class="' + className + '">' + (index + 1) + '</span>' +'&nbsp';
        },
      },
      breakpoints: {
        320: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>' + '&nbsp &nbsp';
            },
          },
        },
      },
    });
  };

  function initProductSwiper() {
    let swiper = new Swiper('.photos__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: '.photos__pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + ' of ' + total;
        },
      },
    });
  };


  if (CATALOG) {
    CATALOG_SLIDER.classList.remove('catalog__slider--nojs')
    initCatalogSwiper();
  }

  if (SLIDER) {
    SLIDER.classList.remove('slider--nojs');
    initSwiper();
  }

  if (PRODUCT) {
    initProductSwiper();
  }

  GALLERY_ITEM.forEach(item => {
    item.addEventListener('keydown', function (evt) {
      let target = evt.target.closest('label');
      let inputId = target.getAttribute('for');
      let input = document.getElementById(inputId);

      if (evt.key === ENTER_KEY) {
        input.checked = true;
      }
    });
  });
})();
