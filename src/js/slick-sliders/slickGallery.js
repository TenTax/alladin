const sliderGallery = ($) => {
    $('.gallery__slider').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        touchMove: false,
        dots: true,
        appendArrows: $('.gallery__arrows'),
        appendDots: $('.gallery__dots'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
};

export default sliderGallery;