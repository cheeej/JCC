$(function () {
  $(".depth1 .pp").on("click", function () {
    $(this).next(".depth2").stop().slideToggle();
  });
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
