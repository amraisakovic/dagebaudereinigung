document.addEventListener('DOMContentLoaded', () => {
    console.log('DA Gebaudereinigung is loaded');
});

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);
