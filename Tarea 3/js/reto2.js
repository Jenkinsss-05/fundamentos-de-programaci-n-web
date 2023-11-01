let items = [];

function agregarItem() {
    const nombreCliente = document.getElementById("nombreCliente").value;
    const articulo = document.getElementById("articulo").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);

    const subtotal = cantidad * precio;

    items.push({ articulo, cantidad, precio, subtotal });

    actualizarFactura();
}

function actualizarFactura() {
    const facturaTable = document.querySelector("#facturaTable tbody");
    facturaTable.innerHTML = "";

    let subtotal = 0;
    for (const item of items) {
        facturaTable.innerHTML += `
            <tr>
                <td>${item.articulo}</td>
                <td>${item.cantidad}</td>
                <td>${item.precio.toFixed(2)}</td>
                <td>${item.subtotal.toFixed(2)}</td>
            </tr>
        `;
        subtotal += item.subtotal;
    }

    const iva = subtotal * 0.13;
    const servicio = subtotal * 0.05;
    const total = subtotal + iva + servicio;

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("iva").textContent = iva.toFixed(2);
    document.getElementById("servicio").textContent = servicio.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}
