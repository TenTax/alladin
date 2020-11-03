import $ from 'jquery';
import 'slick-carousel';
import bindModal from './modules/bindModal';
import timer from './modules/timer';
import forms from './modules/forms';
import slickGallery from './slick-sliders/slickGallery';
import slickGalleryModal from './slick-sliders/slickGalleryModal';
import slickPartners from './slick-sliders/slickPartners';
import slickTestimonials from './slick-sliders/slickTestimonials';
import catalogAjax from './modules/catalogAjax';
import scrollAnimate from './modules/scrollAnimate';

window.addEventListener('DOMContentLoaded', () => {
   timer('#timer', '2021-11-03');
   forms();
   catalogAjax();
   slickGallery($);
   slickGalleryModal($);
   slickPartners($);
   slickTestimonials($);
   bindModal('.accent__button, .about__button', '.modal-callback', '.modal-callback__close', 'modal-callback--show');
   bindModal('.cart__button', '.modal-product', '.modal-product__close', 'modal-product--show');
   scrollAnimate('.animated');
});