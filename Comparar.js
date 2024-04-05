function leerNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

function compararNumeros() {
    var num1 = leerNumero("Introduce el primer número:");
    var num2 = leerNumero("Introduce el segundo número:");

    if (num1 === num2) {
        alert("Los números son iguales");
    }
    else if (num1 > num2) {
        alert("La suma de los dos números es: " + (num1 + num2));
    }
    else {
        var resultado = Math.pow(num1, 2) + Math.pow(num2, 2);
        alert("El resultado de elevar al cuadrado cada número y sumarlos es: " + resultado);
    }
}
compararNumeros();