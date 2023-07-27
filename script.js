// Function to animate elements on scroll
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

// Function to check if the page has finished loading
function onPageLoad() {
    animateOnScroll();
}

// Add an event listener to call the onPageLoad function when the page has finished loading
window.addEventListener('load', onPageLoad);
