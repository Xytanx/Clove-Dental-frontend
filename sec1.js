let currentIndex = 0;
const slides = document.querySelector('.slides');
// const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
    currentIndex++;
    let totalSlides = 2;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 50}%)`;
    // console.log(currentIndex);
}

// Automatically switch slides every 3 seconds
setInterval(showNextSlide, 5000);
