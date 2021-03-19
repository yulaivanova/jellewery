/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {

  const NAV_MAIN = document.querySelector('.site-nav');
  const NAV_TOGGLE = document.querySelector('.site-nav__toggle');
  const HEADER = document.querySelector('.header');

  NAV_MAIN.classList.remove('site-nav--nojs');
  NAV_MAIN.classList.remove('site-nav--opened');
  NAV_MAIN.classList.add('site-nav--closed');
  HEADER.classList.remove('header--opened');

  NAV_TOGGLE.addEventListener('click', function () {
    if (NAV_MAIN.classList.contains('site-nav--closed')) {
      NAV_MAIN.classList.remove('site-nav--closed');
      NAV_MAIN.classList.add('site-nav--opened');
      HEADER.classList.toggle('header--opened');
    } else {
      NAV_MAIN.classList.add('site-nav--closed');
      NAV_MAIN.classList.remove('site-nav--opened');
      HEADER.classList.toggle('header--opened');
    }
  });

})();
'use strict';
(function () {

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

  initSwiper();

})();


/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  const TABS = document.querySelectorAll('.questions__item');
  const TABS_LIST = document.querySelector('.questions__list');

  TABS.forEach(elem => {
    if (elem.children[1].classList.contains('questions__item--active')) {
      elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
    }
  });

  const openTabs = (button, dropDown) => {
    closeAllDrops();
    dropDown.style.height = dropDown.scrolHeight + 'px';
    button.classList.add('questions__title--active');
    dropDown.classList.add('questions__content--active');
  };

  const closeTabs = (button, dropDown) => {
    button.classList.remove('questions__title--active');
    dropDown.classList.remove('questions__content--active');
    dropDown.style.height = '';
  };

  const closeAllDrops = (button, dropDown) => {
    TABS.forEach((elem) => {
      if (elem.children[0] !== button && elem.children[1] !== dropDown) {
        closeTabs(elem.children[0], elem.children[1]);
      }
    });
  };

  TABS_LIST.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('questions__title')) {
      const parent = target.closest('.questions__item');
      const content = parent.querySelector('.questions__content');
      content.classList.contains('questions__content--active') ? closeTabs(target, content) : openTabs(target, content);
    }
  });

})();