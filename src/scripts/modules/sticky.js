const sticky = (() => {
    const element = document.querySelector('.blog__nav');

    const scrollSpy = () => {
        const elementOffsetTop = element.getBoundingClientRect().top + pageYOffset;
        window.addEventListener('scroll', () => {
            if (elementOffsetTop - 20 <= pageYOffset) {
                element.classList.add('sticky');
            } else {
                element.classList.remove('sticky');
            } 
        }); 
    };
    const stickyInit = () => {
        if (element) {
            scrollSpy();
        }
    };
    return {
        init: stickyInit,
    };
})();


module.exports = sticky.init;
