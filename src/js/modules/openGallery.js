const openGallery = () => {
    const images = document.querySelectorAll('[data-gallery]');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            console.log(image.getAttribute('data-gallery'));
        });
    });
};

export default openGallery;