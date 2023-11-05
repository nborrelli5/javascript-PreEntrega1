"use strict";
/*
let posicion;

// posicion = posicion + 1
// posicion += 1
// posicion++
// ambos 3 son equivalentes

for (posicion = 0; posicion <= 5; posicion++) {
    console.log(posicion);
}
*/
/*
 posicion = 0
 0 <= 5? si
 consologuea 0
 posicion = 1
 1 <= 5? si
 consologueamos 1
 posicion = 2
 2 <= 5? si
 consologueamos 2
 posicion = 3
 3 <= 5? si
 consologueamos 3
 posicion = 4
 4 <= 5? si
 consologueamos 4
 posicion = 5
 5 <= 5? si
 consologueamos 5
 posicion = 6
 6 <= 5? no
 salimos del ciclo
*/

//Tablas
/*
let numero = Number(
    prompt("Ingrese un numero para averiguar las tablas del 0 al 10")
);

let tabla;*/
/*
for (tabla = 0; tabla <= 10; tabla++) {
    if (tabla == 5) {
        continue; //salteo la ejecucion del i = 5 y contunua con la siguiente
    }
    console.log(tabla + " X " + numero + " = " + tabla * numero);
}
*/
/*
for (tabla = 0; tabla <= 10; tabla++) {
    if (tabla == 5) {
        break; //salteo la ejecucion del i = 5 y contunua con la siguiente
    }
    console.log(tabla + " X " + numero + " = " + tabla * numero);
}

*/

//Un promedio se calcula como la sumatoria de una serie de elementos, dividido la canitidad de elementos
/*
let cantAlumnos = Number(prompt("Ingrese la cantidad de alumnos"));

let i;
let acumulador = 0;

for (alumno = 1; alumno <= cantAlumnos; alumno++) {
    let nota = Number(prompt("Ingrese una nota (0 - 10) para el alumno numero " + alumno));
    acumulador = acumulador + nota;
}

let promedio = acumulador / cantAlumnos;

alert("El promedio es " + promedio);
*/
/*
let cantAlumnos = 0;
let acumulador = 0;

let condicion = prompt("desea ingresar alumnos? ('no' para salir)");
while (condicion != "no") {
    cantAlumnos++;
    let nota = Number(prompt("Ingrese una nota (0 - 10)"));
    acumulador = acumulador + nota;
    condicion = prompt("desea ingresar otro alumno? ('no' para salir)");
}

let promedio = acumulador / cantAlumnos;
alert("El promedio es " + promedio);
*/
/*
let cantAlumnos = 0;
let acumulador = 0;
let condicion
do {
    cantAlumnos++;
    let nota = Number(prompt("Ingrese una nota (0 - 10)"));
    acumulador = acumulador + nota;

    condicion = prompt("desea ingresar otro alumno? ('no' para salir)");
} while (condicion != "no")

let promedio = acumulador / cantAlumnos;
alert("El promedio es " + promedio);
*/
/*
let numero = 8;

switch (numero) {
    case 5:
        console.log("El numero es 5");
        break;
    case 8:
        console.log("El numero es 8");
        break;
    case 20:
        console.log("El numero es 20");
        break;
    default:
        console.log("El numero no es ni 5 ni 8 ni 20");
        break;
}
*/

// juego de adivinanzas: adivinar un numero preseteado, tenes 10 intentos, si lo adivinas antes de 5 intentos ganas

let secreto = 8;
let vidas = 5;
let numeroIngresado;
do {
    alert("vidas: " + vidas);
    vidas--;
    numeroIngresado = Number(prompt("ingrese un numero"));
} while (numeroIngresado != secreto && vidas > 0);

//                  true                    true         = true
//                  true                    false        = false
//                  false                   true         = falso
//                  false                   flase        = falso

if (numeroIngresado == secreto) {
    alert("Ganaste!!!");
} else {
    alert("Agotaste los 5 intentos!");
}
