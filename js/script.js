(function(){
  'use strict';

  let menu = document.getElementById('js_menu');
  let menuBtn = document.getElementById('js_menuBtn');
  let state = false;

  function btn() {
    if (state === false) {
      menu.classList.remove('close');
      menu.classList.add('open');
      state = true;
    }
    else if (state === true) {
      menu.classList.remove('open');
      menu.classList.add('close');
      state = false;
    }
  };

  menuBtn.addEventListener('click', function() {
    btn();
  });
  
  
})();