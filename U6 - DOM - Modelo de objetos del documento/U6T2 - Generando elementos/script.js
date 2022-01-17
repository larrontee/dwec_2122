// Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
// Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.
// Una vez cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.
// Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando pulses el primer botón borre el
// primer elemento de la lista y cuando pulses el último borre el último elemento de la lista.

let ul = document.getElementById("ul");
let anadir = document.getElementById("botonAnadir");
let borrarUlt = document.getElementById("botonUlt");
let borrarPri = document.getElementById("botonPri");

anadir.addEventListener("click", crearLi);
borrarPri.addEventListener("click", borrarPrimero);
borrarUlt.addEventListener("click", borrarUltimo);



function crearLi() {
    let text = prompt("introduce el texto");
    let li = document.createElement("li");
    let textoUsu = document.createTextNode(text);
    li.appendChild(textoUsu);
    ul.appendChild(li);
}

function borrarPrimero() {
    ul.removeChild(ul.firstChild);
}
function borrarUltimo() {
    ul.removeChild(ul.lastChild);
}