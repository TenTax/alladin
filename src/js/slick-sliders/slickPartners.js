const slickPartners = ($) => {
    $('.partners__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 300,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
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

export default slickPartners;