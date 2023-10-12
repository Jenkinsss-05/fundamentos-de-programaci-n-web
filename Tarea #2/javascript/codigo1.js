document.addEventListener("DOMContentLoaded", function () {
    var titulo = document.getElementById("titulo");
    var verButton = document.getElementById("verButton");

    titulo.addEventListener("click", function () {
        alert("Bienvenido profesor :)");
    });

    verButton.addEventListener("click", function () {
        alert("Botón 'Ver' clicado");
    });
});
