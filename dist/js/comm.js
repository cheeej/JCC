$(function () {
  $(".depth1").mouseover(function () {
    $(this).find(".depth2").stop().slideDown();
  });
  $(".depth1").mouseout(function () {
    $(this).find(".depth2").stop().slideUp();
  });
  // $(".depth1").click(function () {
  //   $(".depth2").show();
  // });
  // $(".depth1").click(function () {
  //   $(".depth2").hide();
  // });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
