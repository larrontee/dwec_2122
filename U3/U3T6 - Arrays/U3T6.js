// Ejercicio 1

// Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás crear un archivo arrays.js que incluya las siguientes funciones:
//     Mostrar el número de elementos del array.
//     Mostrar todos los elementos del array.
//     Muestra los elementos del array en sentido inverso.
//     Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
//     Añadir un elemento al principio del array.
//     Añadir un elemento al final del array.
//     Borrar un elemento al principio del array (y decir cuál se ha borrado).
//     Borrar un elemento al final del array (y decir cuál se ha borrado).
//     Muestra el elemento que se encuentra en una posición que el usuario indica.
//     Muestra la posición en la que se encuentra un elemento que le indica el usuario.
//     Muestra los elementos que se encuentran en un intervalo que el usuario indica.

// Ten en cuenta que el array será una variable global y que se pasará por parámetro en todas las funciones.
// Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt, no en la página) las opciones:
//     Mostrar número de países.
//     Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array,
//     del revés u ordenados alfabéticamente).
//     Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer
//     el valor inicio y fin).
//     Añadir un país (y le preguntará si quiere añadir al principio o al final).
//     Borrar un país (y le preguntará si quiere borrar al principio o al final).
//     Consultar un país (y le preguntará si quiere consultar por posición o por nombre).

// Todas las operaciones que se realicen se irán mostrando en la página con su título.

var paises = ["esp", "fra", "rus", "por"];
paisesinvertido = paises.reverse();

function longitud() {
    console.log(paises.length);
    document.getElementById("data").innerHTML += "<br\> número de países " + paises.length;
}

function mostrar() {
    console.log(paises);
    document.getElementById("data").innerHTML += "<br\> lista " + paises.toString();
}

function mostrarInver() {
    console.log(paisesinvertido);
    document.getElementById("data").innerHTML += "<br\> lista inversa " + paisesinvertido;
}

function mostrarOrden() {
    console.log(paises.sort());
    document.getElementById("data").innerHTML += "<br\> lista ordenada " + paises.sort().toString();
}

function anadirPrimero(paises, pais) {
    paises.unshift(pais);
}

