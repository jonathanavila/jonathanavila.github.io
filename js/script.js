(function($) {
  "use strict"; // start of use strict
  

  // smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 64)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // close tabs
    $(".tab-close" ).click(function() {
      $(".tab-pane").removeClass("active");
      $(".btn-pill").removeClass("active");
      $(".tab-pane").removeClass("show");
      $(".btn-pill").removeClass("show");
    })
  // closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // end of use strict