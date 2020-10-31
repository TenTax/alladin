import $ from 'jquery';
import 'slick-carousel';
import slickGallery from './slick-sliders/slickGallery';
import slickGalleryModal from './slick-sliders/slickGalleryModal';
import slickPartners from './slick-sliders/slickPartners';
import slickTestimonials from './slick-sliders/slickTestimonials';

window.addEventListener('DOMContentLoaded', () => {
   slickGallery($);
   slickGalleryModal($);
   slickPartners($);
   slickTestimonials($);
});