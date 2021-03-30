/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {

  const NAV_MAIN = document.querySelector('.site-nav');
  const NAV_TOGGLE = document.querySelector('.site-nav__toggle');
  const HEADER = document.querySelector('.header');

  NAV_MAIN.classList.remove('site-nav--nojs');
  HEADER.classList.remove('header--nojs');
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
