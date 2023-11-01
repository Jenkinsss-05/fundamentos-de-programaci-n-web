
const empleados = {
    "123456789": {
        nombre: "Juan Pérez", //CEDULA 123456789
        foto: "imagenes/persona1.png.jpg" 
    },
    "987654321": {
        nombre: "María Rodríguez", //CEDULA 987654321
        foto: "imagenes/persona2.png"
    },
    "150505": {
        nombre: "Steven Jenkins", //CEDULA 150505
        foto: "imagenes/persona3.png"
    },
    "654321": {
        nombre: "Jason Montoya", //CEDULA 654321 
        foto: "imagenes/persona4.png"
    },
    "23456789": {
        nombre: "David Barboza", //CEDULA 23456789
        foto: "imagenes/persona5.png"
    }
};

function buscarEmpleado() {
    const cedula = document.getElementById("cedula").value;
    const resultado = document.getElementById("resultado");

    if (empleados[cedula]) {
        const empleado = empleados[cedula];
        resultado.innerHTML = `<p>Empleado: ${empleado.nombre}</p><img src="${empleado.foto}" alt="${empleado.nombre}" />`;
    } else {
        resultado.innerHTML = "<p>Usuario no existe</p>";
    }
}

function limpiarCampos() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}
