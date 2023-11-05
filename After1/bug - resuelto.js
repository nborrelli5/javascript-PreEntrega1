"use strict";

// isNaN() evalua si lo que hay adentro es NaN o no

                //"Ingrese un numero"
function ingresaNumero(mensaje) {
                    //"Ingrese un numero"
    let numero = Number(prompt(mensaje));
    while (isNaN(numero)) {
                                                            //"Ingrese un numero"
        numero = Number(prompt("Lo ingresado no es un numero. " + mensaje));
                                //"Lo ingresado no es un numero. " + "Ingrese un numero"
                                //Lo ingresado no es un numero. Ingrese un numero
    }
    return numero;
}

let opcion = prompt("ingrese la opcion deseada: +, -, *, /; 0 para finalizar");
while (opcion != "0") {
    // Validacion para que lo que tengamos siempre sea un numero
    let num1 = ingresaNumero("Ingrese un numero");
    let num2 = ingresaNumero("Ingrese un numero");

    switch (opcion) {
        case "+":
            alert("El resultado de la suma es: " + (num1 + num2));
            break;
        case "-":
            alert("El resultado de la resta es: " + (num1 - num2));
            break;
        case "*":
            alert("El resultado de la multiplicacion es: " + num1 * num2);
            break;
        case "/":
            if (num1 == 0 && num2 == 0) {
                alert("El resultado es indeterminado");
            } else {
                alert("El resultado de la division es: " + num1 / num2);
            }
            break;

        default:
            alert("Opcion incorrecta");
            break;
    }
    opcion = prompt("ingrese la opcion deseada: +, -, *, /; 0 para finalizar");
}
