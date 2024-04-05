function calcularDescuento(monto) {
    if (monto > 100) {
        return monto * 0.1;
    } else {
        return monto * 0.02;
    }
}

function calcularYMostrarDescuento() {
    var monto = parseFloat(prompt("Ingrese el monto:"));
    if (!monto) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }
    var descuento = calcularDescuento(monto);
    var montoConDescuento = monto - descuento;
    alert("El monto con descuento es: $" + montoConDescuento);
}

calcularYMostrarDescuento();
