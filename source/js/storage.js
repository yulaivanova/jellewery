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
