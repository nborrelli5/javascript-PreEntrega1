"use strict";
/*
function saludo(mensaje) {
    alert(mensaje);
}

saludo("Pepe");
saludo("Hola");
saludo("borderlands");*/
/*
function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(resultado);
}

sumar(5, 8);
sumar(10, 2);
*/

//NaN = Not a Number => no es un numero
//isNaN(numero) => dice si es NaN o no

/*let ambiente1 = "hola, soy ambiente 1 (global)";
console.log("estamos en global");
console.log(ambiente1);*/
//console.log(ambiente2);
//console.log(ambiente3);
/*
function ingresarNumero() {
   /* let ambiente2 = "hola, soy ambiente 2(function)";
    console.log("estamos en funcion");
    console.log(ambiente1);
    console.log(ambiente2);*/
//console.log(ambiente3);
/*
    let numero = Number(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
        /*let ambiente3 = "hola, soy ambiente 3 (while)";
        console.log("estamos en while");
        console.log(ambiente1);
        console.log(ambiente2);
        console.log(ambiente3);
*/ /*
        numero = Number(prompt("Ingrese un numero"));
    }

    return numero;
}

let num1 = ingresarNumero();
let num2 = ingresarNumero();

console.log(num1 + num2);
*/

/*
const suma = function (a, b) {
    return a + b;
};


const resta = function (a, b) {
    return a - b;
};
*/
/*
const suma = (a, b) => {
    return a + b;
};

const resta = (a, b) => {
    return a - b;
};

*/

//solo si el return tiene una sola sentencia
const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

console.log(suma(15, 20));
console.log(resta(15, 5));
