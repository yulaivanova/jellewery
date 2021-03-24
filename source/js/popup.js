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

    if (USER_EMAIL) {
      USER_EMAIL.focus();
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
  LOGIN_LINK_NAV.addEventListener('click', onLoginLinkClick)

  POPUP_LOGIN.addEventListener('click', onOverlayClick);
  POPUP_LOGIN.addEventListener('click', onToggleClick);

  if (POPUP_CART) {
    POPUP_CART.addEventListener('click', onOverlayClick);
    POPUP_CART.addEventListener('click', onToggleClick);

    PRODUCT_BTN.addEventListener('click', function (evt) {
      evt.preventDefault();
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