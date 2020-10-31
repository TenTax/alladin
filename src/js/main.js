import $ from 'jquery';
import 'slick-carousel';
import openGallery from './modules/openGallery';
import slickGallery from './slick-sliders/slickGallery';
import slickTestimonials from './slick-sliders/slickTestimonials';

window.addEventListener('DOMContentLoaded', () => {
   slickGallery($);
   slickTestimonials($);
   openGallery();
});