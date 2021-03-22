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