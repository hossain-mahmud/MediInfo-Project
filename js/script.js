// ===== banner review number counter start
$('.review_count').counterUp({
    delay: 10,
    time: 3000
});
//----- banner review number counter end
// ===== app screenshot slider part start
$('.screenshot_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow:false,
  nextArrow:false,
  dots:true,
  centerMode:false,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  // ----- app screenshot slider part end
                