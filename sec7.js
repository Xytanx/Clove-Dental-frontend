    const btnCarousel = document.getElementById('btn-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const slideWidth = document.querySelector('.btn-carousel-slide').offsetWidth; // Width of one slide

    // Move the carousel to the right (next slide)
    nextBtn.addEventListener('click', () => {
        console.log('left');
        btnCarousel.scrollBy({
            left: slideWidth,  // Move by the width of one slide
            behavior: 'smooth'  // Smooth scroll
        });
    });

    // Move the carousel to the left (previous slide)
    prevBtn.addEventListener('click', () => {
        console.log('right');
        btnCarousel.scrollBy({
            left: -slideWidth,  // Move by the width of one slide in the opposite direction
            behavior: 'smooth'  // Smooth scroll
        });
    });
