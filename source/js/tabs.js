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