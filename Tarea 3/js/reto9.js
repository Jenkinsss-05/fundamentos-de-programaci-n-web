document.getElementById("checkoutButton").addEventListener("click", function() {
    var selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (selectedPaymentMethod) {
        var paymentMethod = selectedPaymentMethod.value;
        alert("Ha seleccionado pagar con " + paymentMethod);
    } else {
        alert("Por favor, seleccione un método de pago antes de finalizar la compra.");
    }
});
