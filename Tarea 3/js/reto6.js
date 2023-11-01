
const colorButtons = document.querySelectorAll('.color-button');
const carImages = document.querySelectorAll('#car-display img');

colorButtons.forEach(button => {
    button.addEventListener('click', function () {
        const selectedColor = this.getAttribute('data-color');
        
        carImages.forEach(image => {
            image.style.display = 'none';
        });

        const selectedCarImage = document.querySelector(`#car-display img[data-color="${selectedColor}"]`);
        if (selectedCarImage) {
            selectedCarImage.style.display = 'block';
        }
    });
});
