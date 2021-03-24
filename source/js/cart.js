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
  };

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