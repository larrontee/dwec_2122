// Ejercicio 3 (Ej3.html y Ej3.js)
// Los datos de jugadores del Among Us online en España vienen en un formato extraño que decidió la compañía.
// Se pretende crear un programa en JavaScript que obtenga los datos por separado para procesarlo y posteriormente
//  presentarlos de manera estructurada. Los datos se presentan siguiente el siguiente formato:
// nombre,apellido1,apellido2@provincia:domicilio:cod_postal@id_jugador
// Donde nombre es el nombre del jugador, apellido1 su primer apellido y apellido2 el segundo. Y provincia
// domicilio y cod_postal son datos que pueden ser opcionales, aunque los separadores correspondientes (es decir, 
// los dos puntos :) sí que aparecen.
// Elabora el código en JavaScript para obtener por separado el nombre,el nombre, y los apellidos
// (los dos juntos y en una única línea). Si los datos opcionales no aparecen, no deben presentarse. El id_jugador 
// se componen de 2 cifras iniciales que indican el área de cobertura, y deberá presentarse por separado de las 4 
// cifras siguientes, que representa la máquina asignada, y las 3 últimas que representa el ID de ese jugador dentro
// de la máquina. Cada uno de los elementos debe presentarse en un elemento (p o div, como quieras) de HTML.

// nombre,apellido1,apellido2@provincia:domicilio:cod_postal@id_jugador


let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let provincia = document.getElementById("provincia");
let domicilio = document.getElementById("domicilio");
let cod_postal = document.getElementById("cod_postal");
let id_jugador = document.getElementById("id_jugador");
let area_cobertura = document.getElementById("area_cobertura");
let maquina = document.getElementById("maquina");
let id = document.getElementById("id");

// console.log(cadena_partida_porcoma);



window.onload = function () {
    let datos = prompt("introduzca los datos en el siguiente formato nombre,apellido1,apellido2@provincia:domicilio:cod_postal@id_jugador", "pedro,larrubia,montes@tomares:casa:41940@123456789")
    mostrar(datos);
};

function mostrar(cadena) {
    let cadena_partida_porcoma = cadena.split(",");
    let datosPersonales = cadena_partida_porcoma[2].split("@");
    nombre.innerHTML += "Nombre: " + cadena_partida_porcoma[0];
    apellidos.innerHTML += "Apellidos: " + cadena_partida_porcoma[1];
    apellidos.innerHTML += " " + datosPersonales[0];
    let otrosDatos = datosPersonales[1].split(":");

    for (let i = 0; i < otrosDatos.length; i++) {
        if (otrosDatos[i] != null) {
            provincia.innerHTML = "Provincia: " + otrosDatos[0];
            domicilio.innerHTML = "Domicilio: " + otrosDatos[1];
            cod_postal.innerHTML = "Codigo postal: " + otrosDatos[2];
        }
    }
    if (datosPersonales[2] != null) {
        id_jugador.innerHTML = "Id usuario:" + datosPersonales[2];
        area_cobertura.innerHTML = "area_cobertura:" + datosPersonales[2].substring(0, 2);
        maquina.innerHTML = "maquina:" + datosPersonales[2].substring(2, 6);
        id.innerHTML = "id:" + datosPersonales[2].substring(6);
    }
}