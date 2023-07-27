function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
}

function onPageLoad() {
    animateOnScroll();
}

window.addEventListener('load', onPageLoad);
