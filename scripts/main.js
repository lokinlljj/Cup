document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');

    heroSection.addEventListener('mousemove', (event) => {
        const { offsetX, offsetY } = event;
        const width = heroSection.offsetWidth;
        const height = heroSection.offsetHeight;

        const moveX = (offsetX / width) * 100;
        const moveY = (offsetY / height) * 100;

        heroSection.style.backgroundPosition = `${moveX}% ${moveY}%`;
    });
});
