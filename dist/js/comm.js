// var swiper = new Swiper(".slide-intro", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

//Slick - Carousel Double
$(document).ready(function () {
  //Text Portion
  var $status = $(".pagingInfo");
  var $slickElement = $(".carousel-double--txt");

  $slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + "/" + slick.slideCount);
    }
  );

  //Text Portion - Options
  $slickElement.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".carousel-double--img",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });

  //Image Portion
  $(".carousel-double--img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".carousel-double--txt",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    nextArrow: ".carousel-double--next",
    prevArrow: ".carousel-double--prev",
  });
});
