$(function () {
  $(".depth1").mouseover(function () {
    $(this).find(".depth2").stop().slideDown();
  });
  $(".depth1").mouseout(function () {
    $(this).find(".depth2").stop().slideUp();
  });
});
