const imageContainers = document.querySelectorAll('.image-container');
const modals = document.querySelectorAll('.modal');

imageContainers.forEach((container, index) => {
    const modal = modals[index];

    container.addEventListener('mouseover', () => {
        modal.style.display = 'block';
    });

    container.addEventListener('mouseout', () => {
        modal.style.display = 'none';
    });
});