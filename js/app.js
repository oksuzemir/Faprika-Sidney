window.addEventListener('load', function() {
    var selectedDiv = document.querySelector('.header');
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 100) {
        selectedDiv.classList.add('fixed');
      } else {
        selectedDiv.classList.remove('fixed');
      }
    });
  });
  