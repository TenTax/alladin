import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
    $('.gallery__photos').slick({
        prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right"></i></div>',
        appendDots: $('.gallery__nav'),
        centerMode: true,
        dots: true,
        focusOnSelect: true,
        pauseOnHover: false,
        arrows: true,
        centerPadding: '80px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerPadding: '60px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.carousel__box').slick({
        prevArrow: '<div class="carousel__prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel__next"><i class="fas fa-chevron-right"></i></div>',
        appendDots: $('.carousel__dots'),
        centerMode: true,
        dots: true,
        arrows: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});