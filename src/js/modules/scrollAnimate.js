const scrollAnimate = (selector) => {
    const blocks = document.querySelectorAll(selector);

    window.addEventListener('scroll', windowScroll);

    function windowScroll() {
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const scrollBottom = scrollTop + clientHeight;

        blocks.forEach((block) => {
            const blockHeight = block.scrollHeight;
            const blockTop = block.offsetTop;
            const blockIndex = blockTop + blockHeight / 4;

            if (scrollBottom > blockIndex) {
                block.classList.remove('fade-in', 'fade-in-up', 'fade-in-down', 'fade-in-right', 'fade-in-left');
            }
        });
    }

    windowScroll();
};

export default scrollAnimate;