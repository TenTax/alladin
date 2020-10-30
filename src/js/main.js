import $ from 'jquery';
import 'slick-carousel';
import openGallery from './modules/openGallery';
import slickGallery from './slick-sliders/slickGallery';

window.addEventListener('DOMContentLoaded', () => {
   slickGallery($);
   openGallery();
});