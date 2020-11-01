import { bodyLock, bodyUnLock } from "../modules/bodyLock";

const slickGalleryModal = ($) => {
    const slider = $('.modal-gallery__slider'),
        counter = document.querySelector('.modal-gallery__counter'),
        close = document.querySelector('.modal-gallery__close'),
        modal = document.querySelector('.modal-gallery'),
        images = document.querySelectorAll('.gallery__img');

    slider.slick({
        slidesToShow: 1,
        speed: 300,
    });

    slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        counter.textContent = `${currentSlide + 1} / ${slick.slideCount}`;
    });

    close.addEventListener('click', () => {
        bodyUnLock();
        modal.classList.remove('modal-gallery--show');
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            const slick = slider.slick('getSlick');
            slick.goTo(+image.getAttribute('data-gallery') - 1, true);
            counter.textContent = `${slick.currentSlide + 1} / ${slick.slideCount}`;

            bodyLock();
            modal.classList.add('modal-gallery--show');
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('modal-gallery__wrapper')) {
            bodyUnLock();
            modal.classList.remove('modal-gallery--show');
        }
    });
};

export default slickGalleryModal;