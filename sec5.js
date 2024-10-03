document.addEventListener('DOMContentLoaded', function() {
    // Select all the review containers
    const reviewContainers = document.querySelectorAll('.sec5 .container');

    // Select the people-page element
    const peoplePage = document.querySelector('.people-page');

    // Add click event listeners to all review containers
    reviewContainers.forEach(container => {
        container.addEventListener('click', () => {
            // Show the people-page section
            peoplePage.style.display = 'flex';
        });
    });
});