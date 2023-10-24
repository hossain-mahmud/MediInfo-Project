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
    prevArrow: false,
    nextArrow: false,
    dots: true,
    centerMode: false,
    responsive: [{
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
// ===== counter slider part start
$('.count').counterUp({
    delay: 10,
    time: 2000
});
// ----- counter slider part end
// ===== testimonial part start
$('.testimonial_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fa-solid next_arrrow fa-chevron-right"></i>',
    prevArrow: '<i class="fa-solid pree_arrow fa-chevron-left"></i>',
    dots: true,
});
// ----- testimonial slider part end   
// ===== video part start
function playVideo() {
    var thumbnail = document.querySelector('.thumbnail');
    var iframe = document.querySelector('iframe');
    var playButton = document.querySelector('.playButton');
    thumbnail.style.display = 'none';
    iframe.style.display = 'block';
    playButton.style.display = 'none';
    iframe.src = "https://www.youtube.com/embed/oXFAhv3LbwE?autoplay=1";
}
// ----- video slider part end
