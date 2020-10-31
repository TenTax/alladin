const slickTestimonials = ($) => {
    $('.testimonials__slider').slick({
        slidesToShow: 1,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        appendArrows: $('.testimonials__arrows')
    });
};

export default slickTestimonials;