$(document).ready(function () {

//Header Fixed Style Changes


    var selectHeader = $(".header");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 100) {
        selectHeader.addClass("fixed");
      } else {
        selectHeader.removeClass("fixed");
      }
    });

//Page Style Changes
  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
    $('.page-drawer').toggleClass('drawer-active');
    $('.main').toggleClass('drawer-active');
    $('.header').toggleClass('drawer-active');
    $('.page-overlay').toggleClass('drawer-active');
  });
  $(".page-overlay").click(function () {
    $(this).toggleClass("drawer-active");
    $('.page-drawer').toggleClass('drawer-active');
    $('.main').toggleClass('drawer-active');
    $('.header').toggleClass('drawer-active');
    $('#nav-icon3').toggleClass('open');
  });
});
