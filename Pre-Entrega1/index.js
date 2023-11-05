

function datoTexto(ingresoTexto) {
    let texto = prompt(ingresoTexto);
    while (texto == "") {
        texto=prompt("El valor es inválido o vacío, por favor " + ingresoTexto);        
    }
    return texto;
}

function datoNum(ingresoNum){
    let num= Number(prompt(ingresoNum))
    while (isNaN(num)){
        num=Number(prompt("Debe ingresar sólo números, por favor " + ingresoNum))
    }
    return num
}

let reingresar

do{let nombre = datoTexto("Ingrese su nombre");
let apellido = datoTexto("Ingrese su Apellido");
let correo = datoTexto ("Ingrese una dirección de E-Mail");
let tel= datoNum("Ingrese un número de teléfono sin \"-\"(Opcional)");
if (tel==""){
    tel = "No Ingresado";
}
let comentario = datoTexto("Dejanos tu comentario");

reingresar = prompt("Verifique si los datos ingresados son correctos:" + "\n" + "Nombre: " + nombre + "\n" 
+ "Apellido: " + apellido + "\n"+ "Correo: " +correo + "\n" + "Teléfono: " + tel +"\n"+ "Comentario: "+ comentario 
+ "\n" + "\n" + "Si desea volver a ingresar los datos ingrese \"x\"");

}
while (reingresar == "x");



alert("¡El mensaje ha sido enviado, contestaremos a la brevedad!")