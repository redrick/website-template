$(document).ready(function() {
  $('.homeSlide').height(window.innerHeight - 100);

  $(window).resize(function() {
    $('.homeSlide').height(window.innerHeight - 100);
  });
});
