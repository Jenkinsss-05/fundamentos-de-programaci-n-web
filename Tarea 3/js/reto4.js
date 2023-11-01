// JavaScript para mostrar la imagen y el texto según la opción seleccionada
const select = document.getElementById('select-option');
const imageAndDescription = document.getElementById('image-and-description');
const selectedImage = document.getElementById('selected-image');
const description = document.getElementById('description');

select.addEventListener('change', () => {
    const selectedOption = select.value;

    const images = {
        opcion0: 'imagenes/placeholder.jpg',
        opcion1: 'imagenes/honda.png',
        opcion2: 'imagenes/supra.png',
        opcion3: 'imagenes/evo.png',
        opcion4: 'imagenes/eclipse.png',
    };

    const descriptions = {
        opcion0: 'Seleccione una opción para obtener información sobre un auto deportivo.',
        opcion1: 'Descripción: Un Honda Civic deportivo es una variante del popular automóvil compacto Honda Civic diseñada para brindar un aspecto y rendimiento más deportivo. Estas versiones suelen incluir características como un estilo más agresivo, motores potentes, transmisiones manuales, suspensiones deportivas, asientos deportivos, llantas y ruedas deportivas, sistemas de escape deportivos, interiores con detalles deportivos y colores llamativos. Los Honda Civic deportivos ofrecen una experiencia de conducción más emocionante y ágil, ideal para aquellos que buscan un vehículo con un toque deportivo en su conducción diaria.',
        opcion2: 'Descripción: El Supra es un legendario automóvil deportivo con una historia rica en rendimiento. Con un motor potente y un diseño aerodinámico, el Supra es conocido por ofrecer emociones fuertes en la carretera.',
        opcion3: 'Descripción: El Evo es un automóvil deportivo conocido por su rendimiento y su capacidad de conducción en carreteras difíciles. Equipado con tracción en las cuatro ruedas y un motor potente, el Evo es una opción emocionante para los amantes de la conducción deportiva.',
        opcion4: 'Descripción: El Eclipse es un modelo deportivo conocido por su estilo distintivo y su rendimiento emocionante. Este automóvil suele incluir características como un diseño aerodinámico, un motor potente y una suspensión deportiva que brinda una experiencia de conducción emocionante y ágil.',
    };

    selectedImage.src = images[selectedOption];
    description.textContent = descriptions[selectedOption];
    imageAndDescription.style.display = 'block';
});
