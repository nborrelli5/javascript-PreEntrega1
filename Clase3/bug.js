// isNaN() evalua si lo que hay adentro es NaN o no

let num1;
let num2;
let opcion = prompt("ingrese la opcion deseada: +, -, *, /; 0 para finalizar");
while (opcion == "0") {
    // Validacion para que lo que tengamos siempre sea un numero
    num1 = Number(prompt("Ingrese el primer numero"));
    while (isNaN(num1)) {
        num1 = Number(
            prompt(
                "Lo ingresado no es un numero, por favor ingrese el primer numero"
            )
        );
    }
    num2 = Number(prompt("Ingrese el segundo numero"));
    while (isNaN(num2)) {
        num2 = Number(
            prompt(
                "Lo ingresado no es un numero, por favor ingrese el segundo numero"
            )
        );
    }

    switch (opcion) {
        case "+":
            alert("El resultado de la suma es: " + num1 + num2);
            break;
        case "-":
            alert("El resultado de la resta es: "(num1 - num2));
            break;
        case "*":
            alert("Opcion incorrecta");
        case "/":
            if (num1 == 0 && num2 == 0) {
                alert("El resultado es indeterminado");
            } else {
                alert("El resultado de la division es: " + num1 / num2);
            }
            break;
        case "0":
            alert("Adios!");
            break;
        default:
            alert("El resultado de la multiplicacion es: " + num1 * num2);
            break;
    }
}
