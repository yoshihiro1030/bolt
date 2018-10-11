(function(){
  'use strict';

  let menu = document.getElementById('js_menu');
  let menuBtn = document.getElementById('js_menuBtn');
  let state = close;

  function btn() {
    if (state === close) {
      menu.classList.remove('close');
      menu.classList.add('open');
      state = open;
    }
    else if (state === open) {
      menu.classList.remove('open');
      menu.classList.add('close');
      state = close;
    }
  };

  menuBtn.addEventListener('click', function() {
    btn();
  });
  
  
})();