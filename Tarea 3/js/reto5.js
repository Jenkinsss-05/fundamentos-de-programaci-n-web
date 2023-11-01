const carModelSelect = document.getElementById("car-model");
const selectButton = document.getElementById("select-button");
const carDetails = document.getElementById("car-details");
const carImage = document.getElementById("car-image");
const carName = document.getElementById("car-name");
const carPrice = document.getElementById("car-price");
const carFeatures = document.getElementById("car-features");

const carData = {
    nissan1: {
        name: "Nissan GT-R",
        price: "$236,000",
        image: "imagenes/nissan1.png",
        features: ["Motor Potente: El Nissan GT-R está equipado con un motor V6 twin-turbo de 3.8 litros que produce una potencia impresionante. Dependiendo de la versión, el GT-R puede generar más de 550 caballos de fuerza, lo que le permite acelerar de 0 a 100 km/h en poco tiempo.", "Sistema de Tracción Integral: El GT-R utiliza un sistema de tracción integral que proporciona una tracción excepcional en una variedad de condiciones de manejo. Este sistema garantiza que la potencia del motor se distribuya de manera efectiva a las cuatro ruedas, lo que contribuye a su rendimiento excepcional en carreteras y pistas", "Tecnología Avanzada: El Nissan GT-R cuenta con una amplia gama de tecnologías avanzadas, incluyendo un sistema de control de tracción, suspensión ajustable, un sistema de dirección de cuatro ruedas y una pantalla táctil en el interior que permite a los conductores personalizar el rendimiento del automóvil"]
    },
    nissan2: {
        name: "Nissan Skyline",
        price: "$25,000",
        image: "imagenes/skyline.png",
        features: ["Historia y Legado: El Nissan Skyline tiene una larga y venerable historia en el mundo de los automóviles deportivos. A lo largo de los años, ha evolucionado y ha sido elogiado por su rendimiento y estilo distintivo. Su linaje incluye modelos legendarios como el Skyline GT-R, que ha ganado fama en competencias como el automovilismo de turismos y carreras de resistencia", "Rendimiento Deportivo: El Skyline ha sido ampliamente reconocido por su rendimiento deportivo. Dependiendo de la versión y el año, el Skyline puede estar equipado con motores potentes, sistemas de tracción integral y tecnología de suspensión avanzada, lo que le permite ofrecer una experiencia de conducción ágil y emocionante", "Tecnología Avanzada: Los modelos más recientes de Skyline a menudo incluyen características tecnológicas avanzadas, como sistemas de infoentretenimiento de vanguardia, asistencia al conductor y tecnología de seguridad. Estas características brindan comodidad y seguridad a los conductores, además de su enfoque en el rendimiento"]
    },
    nissan3: {
        name: "Nissan Navara",
        price: "$40,000",
        image: "imagenes/Navara.pmg.jpg",
        features: ["Capacidad de Carga y Remolque: La Nissan Navara es conocida por su impresionante capacidad de carga y remolque. Dependiendo de la versión y la configuración, puede transportar una carga útil considerable en su caja de carga y remolcar cargas pesadas. Esta versatilidad la hace ideal para trabajos de construcción, actividades al aire libre y tareas de transporte", "Tracción Integral: Muchas versiones de la Navara vienen con un sistema de tracción en las cuatro ruedas, lo que le brinda una excelente capacidad para enfrentar terrenos difíciles, como caminos sin pavimentar o superficies resbaladizas. Esto la convierte en una opción popular para quienes buscan una camioneta pickup versátil que pueda funcionar tanto en la ciudad como fuera de ella.", "Tecnología y Confort: La Navara suele estar equipada con características de comodidad y tecnología, como sistemas de infoentretenimiento modernos, asientos cómodos y tecnología de asistencia al conductor, que incluye características de seguridad avanzadas como frenado de emergencia y control de crucero adaptativo"]
    }
};

selectButton.addEventListener("click", () => {
    const selectedModel = carModelSelect.value;

    if (selectedModel) {
        carName.textContent = carData[selectedModel].name;
        carPrice.textContent = "Precio: " + carData[selectedModel].price;
        carImage.src = carData[selectedModel].image;

        carFeatures.innerHTML = "";
        carData[selectedModel].features.forEach((feature) => {
            const featureItem = document.createElement("li");
            featureItem.textContent = feature;
            carFeatures.appendChild(featureItem);
        });

        carDetails.style.display = "block";
    } else {
        carDetails.style.display = "none";
    }
});
