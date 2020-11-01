import $ from 'jquery';
import 'slick-carousel';
import bindModal from './modules/bindModal';
import timer from './modules/timer';
import slickGallery from './slick-sliders/slickGallery';
import slickGalleryModal from './slick-sliders/slickGalleryModal';
import slickPartners from './slick-sliders/slickPartners';
import slickTestimonials from './slick-sliders/slickTestimonials';

window.addEventListener('DOMContentLoaded', () => {
   timer('#timer', '2020-11-03');
   slickGallery($);
   slickGalleryModal($);
   slickPartners($);
   slickTestimonials($);
   bindModal('.accent__button, .about__button', '.modal-callback', '.modal-callback__close', 'modal-callback--show');
});