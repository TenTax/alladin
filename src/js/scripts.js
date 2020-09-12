const ROOT_MODAL = document.getElementById('modal');

const GalleryComponent = () => {
    return (`
        <div class="gallery-modal">
            <div class="gallery-modal__item">
                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/ytXolYNW_lZGN5gTgx711A/r556/d/54687699_2.jpg" alt=""  class="gallery-modal__img">
            </div>
            <div class="gallery-modal__item">
                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/AyDBgNBY_WwzcS4JxYLvUg/r556/d/54580154_2.jpg" alt=""  class="gallery-modal__img">
            </div>
            <div class="gallery-modal__item">
                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/cnbB2fFZdjv-WemZQ441Ng/r556/d/54159261_2.jpg" alt=""  class="gallery-modal__img">
            </div>
            <div class="gallery-modal__item">
                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/ytXolYNW_lZGN5gTgx711A/r556/d/54687699_2.jpg" alt=""  class="gallery-modal__img">
            </div>
            <div class="gallery-modal__item">
                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/ytXolYNW_lZGN5gTgx711A/r556/d/54687699_2.jpg" alt=""  class="gallery-modal__img">
            </div>
        </div>
    `);
}

const renderModal = (param, id) => {
    ROOT_MODAL.innerHTML = `
        <div class="modal__root">
            <div class="modal__close" onclick="closeModal()"><i class="fas fa-times"></i></div>
            <div class="modal__content">
                ${
                    param == 'gallery'
                    ? GalleryComponent()
                    : 'nobody'
                }
            </div>
        </div>
    `;

    $('.gallery-modal').slick({
        prevArrow: '<div class="gallery-modal__prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="gallery-modal__next"><i class="fas fa-chevron-right"></i></div>',
        centerMode: true,
        dots: false,
        arrows: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: id,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
}

const closeModal = () => {
    ROOT_MODAL.innerHTML = '';
}













// fade scroll
var skroll = new Skroll().add(".fade-in-up",{
    animation:"fadeInUp",
    delay: 50,
    duration: 600
}).init();

// slick
$(document).ready(function(){
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