"use strict";

var ROOT_TIME = document.getElementById("time");
var ROOT_MODAL = document.getElementById("modal");

var renderTime = function renderTime(days, hours, minutes, secounds) {
  ROOT_TIME.innerHTML = '\n    <div class="timeout__item">\n        <div class="timeout__booble">'
    .concat(
      days,
      '</div>\n        <div class="timeout__subbooble">\u0414\u043D\u0435\u0439</div>\n    </div>\n    <div class="timeout__item">\n        <div class="timeout__booble">'
    )
    .concat(
      hours,
      '</div>\n        <div class="timeout__subbooble">\u0427\u0430\u0441\u043E\u0432</div>\n    </div>\n    <div class="timeout__item">\n        <div class="timeout__booble">'
    )
    .concat(
      minutes,
      '</div>\n        <div class="timeout__subbooble">\u041C\u0438\u043D\u0443\u0442</div>\n    </div>\n    <div class="timeout__item">\n        <div class="timeout__booble">'
    )
    .concat(
      secounds,
      '</div>\n        <div class="timeout__subbooble">\u0421\u0435\u043A\u0443\u043D\u0434</div>\n    </div>\n    '
    );
};

setInterval(function () {
  var date = new Date();
  renderTime(
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}, 1000);

var GalleryComponent = function GalleryComponent() {
  return '\n        <div class="gallery-modal">\n            <div class="gallery-modal__item">\n                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/ytXolYNW_lZGN5gTgx711A/r556/d/54687699_2.jpg" alt=""  class="gallery-modal__img">\n            </div>\n            <div class="gallery-modal__item">\n                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/AyDBgNBY_WwzcS4JxYLvUg/r556/d/54580154_2.jpg" alt=""  class="gallery-modal__img">\n            </div>\n            <div class="gallery-modal__item">\n                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/cnbB2fFZdjv-WemZQ441Ng/r556/d/54159261_2.jpg" alt=""  class="gallery-modal__img">\n            </div>\n            <div class="gallery-modal__item">\n                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/ytXolYNW_lZGN5gTgx711A/r556/d/54687699_2.jpg" alt=""  class="gallery-modal__img">\n            </div>\n            <div class="gallery-modal__item">\n                <img src="http://lp3-stylish-curtains.oml.ru/thumb/2/ytXolYNW_lZGN5gTgx711A/r556/d/54687699_2.jpg" alt=""  class="gallery-modal__img">\n            </div>\n        </div>\n    ';
};

var renderModal = function renderModal(param, id) {
  ROOT_MODAL.innerHTML = '\n        <div class="modal__root">\n            <div class="modal__close" onclick="closeModal()"><i class="fas fa-times"></i></div>\n            <div class="modal__content">\n                '.concat(
    param == "gallery" ? GalleryComponent() : "nobody",
    "\n            </div>\n        </div>\n    "
  );
  $(".gallery-modal").slick({
    prevArrow:
      '<div class="gallery-modal__prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="gallery-modal__next"><i class="fas fa-chevron-right"></i></div>',
    centerMode: true,
    dots: false,
    arrows: true,
    centerPadding: "0px",
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
};

var closeModal = function closeModal() {
  ROOT_MODAL.innerHTML = "";
};












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