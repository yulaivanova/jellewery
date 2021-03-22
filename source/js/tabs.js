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