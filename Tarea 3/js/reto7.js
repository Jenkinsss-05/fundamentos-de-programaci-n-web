const areas = document.querySelectorAll('area');
const descriptionContainer = document.getElementById('description-container');
const description = document.getElementById('description');

areas.forEach(area => {
    area.addEventListener('click', function (event) {
        event.preventDefault();
        const areaDescription = this.getAttribute('data-description');
        description.innerHTML = areaDescription;
        description.style.display = 'block';
    });
});

descriptionContainer.addEventListener('click', function () {
    description.style.display = 'none';
});
