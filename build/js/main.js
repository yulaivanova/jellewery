/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {

  const NAV_MAIN = document.querySelector('.site-nav');
  const NAV_TOGGLE = document.querySelector('.site-nav__toggle');
  const HEADER = document.querySelector('.header');

  NAV_MAIN.classList.remove('site-nav--nojs');
  closeMenu();

  function closeMenu() {
    NAV_MAIN.classList.add('site-nav--closed');
    NAV_MAIN.classList.remove('site-nav--opened');
    HEADER.classList.remove('header--opened');
  }

  function openMenu() {
    NAV_MAIN.classList.remove('site-nav--closed');
    NAV_MAIN.classList.add('site-nav--opened');
    HEADER.classList.add('header--opened');
  }

  NAV_TOGGLE.addEventListener('click', function () {
    if (NAV_MAIN.classList.contains('site-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  window.menu = {
    close: closeMenu,
  };
})();

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

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  const TABS = document.querySelectorAll('.tabs__item');
  const TABS_LIST = document.querySelector('.tabs');
  const questions = document.querySelector('.questions');

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
    TABS_LIST.classList.remove('tabs--nojs');
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
  let isStorageSupport = true;
  let storageEmail = '';

  try {
    storageEmail = localStorage.getItem('userEmail');
  } catch (err) {
    isStorageSupport = false;
  }

  window.storage = {
    isSupport: isStorageSupport,
    email: storageEmail,
  };
})();

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  const ESC_KEY = 'Escape';

  const FILTER_OVERLAY = document.querySelector('.catalog__filter');
  const POPUP_LOGIN = document.querySelector('.popup--login');
  const POPUP_CART = document.querySelector('.popup--cart');
  const LOGIN_FORM = document.querySelector('.popup--login form');
  const FILTER_LINK = document.querySelector('.filter__link');
  const LOGIN_LINK = document.querySelector('.user-link__item--login');
  const LOGIN_LINK_NAV = document.querySelector('.site-nav__link--login');
  const PRODUCT_BTN = document.querySelector('.product__button');
  const USER_EMAIL = document.querySelector('#email');

  const closePopup = function () {
    if (FILTER_OVERLAY) {
      FILTER_OVERLAY.classList.remove('filter--opened');
    }

    if (POPUP_CART) {
      POPUP_CART.classList.remove('popup--opened');
    }

    POPUP_LOGIN.classList.remove('popup--opened');
    window.menu.close();
    document.body.style.overflow = 'scroll';
  };

  const openFilterPopup = function () {
    FILTER_OVERLAY.classList.add('filter--opened');
    document.body.style.overflow = 'hidden';
  };

  const openCartPopup = function () {
    POPUP_CART.classList.add('popup--opened');
    document.body.style.overflow = 'hidden';
  };

  const openLoginPopup = function () {
    POPUP_LOGIN.classList.add('popup--opened');
    document.body.style.overflow = 'hidden';
    USER_EMAIL.focus();
    if (USER_EMAIL) {
      USER_EMAIL.value = window.storage.email;
    }
  };

  const onLoginLinkClick = function (evt) {
    evt.preventDefault();
    document.addEventListener('keydown', onEscPress);
    openLoginPopup();
  };

  const onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  const onOverlayClick = function (event) {
    const target = event.target;
    if (target.classList.contains('filter--opened') || target.classList.contains('popup--opened')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };


  const onToggleClick = function (event) {
    const target = event.target;
    if (target.classList.contains('popup__toggle')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };

  if (FILTER_OVERLAY) {
    FILTER_OVERLAY.addEventListener('click', onOverlayClick);
    FILTER_OVERLAY.addEventListener('click', onToggleClick);
    FILTER_LINK.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.addEventListener('keydown', onEscPress);
      openFilterPopup();
    });
  }

  LOGIN_LINK.addEventListener('click', onLoginLinkClick);
  LOGIN_LINK_NAV.addEventListener('click', onLoginLinkClick);

  POPUP_LOGIN.addEventListener('click', onOverlayClick);
  POPUP_LOGIN.addEventListener('click', onToggleClick);

  if (POPUP_CART) {
    POPUP_CART.addEventListener('click', onOverlayClick);
    POPUP_CART.addEventListener('click', onToggleClick);

    PRODUCT_BTN.addEventListener('click', function (evt) {
      evt.preventDefault();
      PRODUCT_BTN.blur();
      document.addEventListener('keydown', onEscPress);
      openCartPopup();
    });
  }

  LOGIN_FORM.addEventListener('submit', function (evt) {
    if (window.storage.isSupport) {
      localStorage.setItem('userEmail', USER_EMAIL.value);
    }

    evt.preventDefault();
    closePopup();
  });

})();

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {
  /*  eslint no-var: "error"  */
  /*  eslint-env es6  */

  'use strict';

  (function () {

    const ENTER_KEY = 13;
    const TAB_NAV = document.querySelectorAll('.tabs-nav__item');
    const TABS = document.querySelector('.product__info');
    const TAB_CONTENT = document.querySelectorAll('.product__content');
    let tabName;

    const onTabsClick = function () {
      TAB_NAV.forEach(item => {
        item.addEventListener('click', selectTabNav);
        item.addEventListener('keydown', function (evt) {
          tabName = this.getAttribute('data-tab-name');
          if (evt.keyCode === ENTER_KEY) {
            selectTabNavOnEnter(tabName);
          }
        });
      });

      function selectTabNavOnEnter() {
        TAB_NAV.forEach(item => {
          item.dataset.tabName === tabName ? item.classList.add('tabs-nav__item--is-active') : item.classList.remove('tabs-nav__item--is-active')
        });
        selectTabContent(tabName);
      }

      function selectTabNav() {
        TAB_NAV.forEach(item => {
          item.classList.remove('tabs-nav__item--is-active');
        });
        this.classList.add('tabs-nav__item--is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
      }

      function selectTabContent(tabName) {
        TAB_CONTENT.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('product__content--is-active') : item.classList.remove('product__content--is-active');
        })
      }
    };

    if (TABS) {
      onTabsClick();
    }
  })();
})();

/*  eslint no-var: 'error'  */
/*  eslint-env es6  */

'use strict';
(function () {

  const PLUS = document.querySelector('[name=plus-item]');
  const MINUS = document.querySelector('[name=minus-item]');
  const COUNTER = document.querySelector('[name=amount-of-items]');
  const PRICE = document.querySelector('.cart__price span');
  const TOTAL = document.querySelector('.cart__subtotal span');
  const TOTAL_COUNT = document.querySelector('.cart__total-count span');
  const COUNTER_INPUT = document.querySelector('.cart__counter input');
  const POPUP = document.querySelector('.popup--cart');

  function calculateСost() {
    let priceValue = +PRICE.textContent;
    TOTAL_COUNT.textContent = COUNTER.value;
    if (COUNTER.value >= 0) {
      let sum = 0;
      sum = COUNTER.value * priceValue;
      TOTAL.textContent = sum;
    }
  }

  if (POPUP) {
    COUNTER_INPUT.addEventListener('change', () => {
      calculateСost();
    });

    PLUS.addEventListener('click', function (evt) {
      evt.preventDefault();
      COUNTER.value++;
      calculateСost();
    });

    MINUS.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (COUNTER.value > 0) {
        COUNTER.value = COUNTER.value - 1;
        calculateСost();
      }
    });
  }

})();
