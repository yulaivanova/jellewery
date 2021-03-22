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


/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  const TABS = document.querySelectorAll('.tabs__item');
  const TABS_LIST = document.querySelector('.tabs');
  const questions = document.querySelector('.questions');

  TABS_LIST.classList.remove('tabs--nojs');

  TABS.forEach(elem => {
    if (elem.children[1].classList.contains('tabs__item--active')) {
      elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
    }
  });

  const openTabs = (button, dropDown) => {
    closeAllDrops();
    dropDown.style.height = dropDown.scrolHeight + 'px';
    button.classList.add('tabs__btn--active');
    dropDown.classList.add('tabs__content--active');
  };

  const closeTabs = (button, dropDown) => {
    button.classList.remove('tabs__btn--active');
    dropDown.classList.remove('tabs__content--active');
    dropDown.style.height = '';
  };

  const closeAllDrops = (button, dropDown) => {
    if (questions) {
      TABS.forEach((elem) => {
        if (elem.children[0] !== button && elem.children[1] !== dropDown) {
          closeTabs(elem.children[0], elem.children[1]);
        }
      });
    }
  };
  if (TABS_LIST) { 
    TABS_LIST.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('tabs__btn')) {
        const parent = target.closest('.tabs__item');
        const content = parent.querySelector('.tabs__content');
        content.classList.contains('tabs__content--active') ? closeTabs(target, content) : openTabs(target, content);
      }
    });
  }

})();
/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  const ESC_KEY = 'Escape';

  const FILTER__OVERLAY = document.querySelector('.catalog__filter');
  const FILTER_LINK = document.querySelector('.filter__link');

  const closePopup = function () {
    FILTER__OVERLAY.classList.remove('filter--opened');
    document.body.style.overflow = 'scroll';
  };

  const openPopup = function () {
    FILTER__OVERLAY.classList.add('filter--opened');
    document.body.style.overflow = 'hidden';
  };

  const onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  const onOverlayClick = function (event) {
    const target = event.target;
    if (target.classList.contains('filter--opened')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };


  const onToggleClick = function (event) {
    const target = event.target;
    if (target.classList.contains('filter__close-toggle')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };

  if (FILTER__OVERLAY) {
    FILTER__OVERLAY.addEventListener('click', onOverlayClick);
    FILTER__OVERLAY.addEventListener('click', onToggleClick);
    FILTER_LINK.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.addEventListener('keydown', onEscPress);
      openPopup();
    });
  }


})();