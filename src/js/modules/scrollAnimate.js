const scrollAnimate = () => {

    let animItems = document.querySelectorAll('.animated');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            animItems.forEach(animItem => {
                const animItemHeight = animItem.offsetHeight,
                    animItemOffset = offset(animItem).top,
                    animStart = 3;

                if ((pageYOffset + window.innerHeight) > (animItemOffset + animItemHeight / animStart)) {
                    animItem.classList.remove('animated');
                }

            });
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }

        setTimeout(() => animOnScroll(), 300);
    }
};

export default scrollAnimate;