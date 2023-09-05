

  $(function(){
    $(".Accordion > ul > li").mouseover(function(){
      $(".Accordion > ul > li > ul").stop().slideDown();
    })
  });

// //Slick - Carousel Double
// $(document).ready(function () {
//   //Text Portion
//   var $status = $(".pagingInfo");
//   var $slickElement = $(".carousel-double--txt");

//   $slickElement.on(
//     "init reInit afterChange",
//     function (event, slick, currentSlide, nextSlide) {
//       var i = (currentSlide ? currentSlide : 0) + 1;
//       $status.text(i + "/" + slick.slideCount);
//     }
//   );

// });


