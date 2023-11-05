"use strict";
/*
let valor1 = Number(prompt("Ingrese un numero"));   //5                     5
let valor2 = Number(prompt("Ingrese otro numero")); //5                     8

let condicion = (valor1 == valor2);

if (condicion) {                                    //5 == 5? SI            5 == 8? NO
    alert("Ambos valores son iguales");             //ejecuta               no se ejecuta
} else {
    alert("Los valores son distintos");             //esto no se ejecuta    esto si se va a ejecutar
}

console.log(condicion);
*/

//console.log(1 == "1");
//console.log(1 === "1");
//console.log(1 != "1");
//console.log(1 !== "1");

let nom = prompt("Ingrese el nombre");      //wen
let app = prompt("Ingrese el apellido");    //mateos

     //true           true
        //  true && true
            //true
if ((nom != "") && (app != "")) {
    console.log("Buenos dias " + nom + " " + app); 
} else {
    console.log("Ingreso invalido"); 
}

if ((nom == "") || (app == "")) {
    console.log("Ingreso invalido"); 
} else {
    console.log("Buenos dias " + nom + " " + app); 
}