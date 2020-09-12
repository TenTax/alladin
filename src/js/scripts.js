var ROOT_TIME = document.getElementById('time');
var ROOT_MODAL = document.getElementById('modal');

function renderTime ({ days, hours, minutes, seconds }) {
    ROOT_TIME.innerHTML = `
    <div class="timeout__item">
        <div class="timeout__booble">${ days }</div>
        <div class="timeout__subbooble">${ padDate(days, 'days') }</div>
    </div>
    <div class="timeout__item">
        <div class="timeout__booble">${ hours }</div>
        <div class="timeout__subbooble">${ padDate(hours, 'hours') }</div>
    </div>
    <div class="timeout__item">
        <div class="timeout__booble">${ minutes }</div>
        <div class="timeout__subbooble">${ padDate(minutes, 'minutes') }</div>
    </div>
    <div class="timeout__item">
        <div class="timeout__booble">${ seconds }</div>
        <div class="timeout__subbooble">${ padDate(seconds, 'seconds') }</div>
    </div>
    `;
}

var target_date = new Date(2020, 8, 29).getTime();
var days, hours, minutes, seconds; // переменные для единиц времени
 
setInterval(function () { renderTime(getCountdown()) }, 1000);
 
function getCountdown(){
 
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
          
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
           
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );
 
    return {days, hours, minutes, seconds};
}
 
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

function padDate(n, param) {
    params = {
        days: [ 'дней', 'дня', 'день' ],
        hours: [ 'часов', 'часа', 'час' ],
        minutes: [ 'минут', 'минуты', 'минут' ],
        seconds: [ 'секунд', 'секунды', 'секунд' ]
    };

    switch(param) {
        case 'days':
            var currentParam = params.days;
            break;
        case 'hours':
            var currentParam = params.hours;
            break;
        case 'minutes':
            var currentParam = params.minutes;
            break;
        case 'seconds':
            var currentParam = params.seconds;
            break;
        default:
            var currentParam = ['', '', ''];
    }
    
    if ((n % 10 >= 5 && n % 10 <= 9) || n % 10 == 0 || (n >= 11 && n <=19)) return currentParam[0];
    else if (n % 10 >= 2 && n % 10 <= 4) return currentParam[1];
    else if(n == 1 || n % 10 == 1) return currentParam[2];
}





function GalleryComponent() {
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

function renderModal(param, id) {
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

function closeModal() {
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