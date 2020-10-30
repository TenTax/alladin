const sliderGallery = ($) => {
    $('.gallery__slider').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '150px',
        speed: 300,
        dots: true,
        appendArrows: $('.gallery__arrows'),
        appendDots: $('.gallery__dots'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '80px'
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
};

export default sliderGallery;