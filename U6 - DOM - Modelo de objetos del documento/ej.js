let columnas = document.getElementById("columnas");
let filas = document.getElementById("filas");
let header = document.getElementById("header");
let texto = document.getElementById("texto");
let grosor = document.getElementById("grosor");
let colorBorde = document.getElementById("colorBorde");
let boton = document.getElementById("boton");

window.onload = inicio();
function inicio() {
    boton.addEventListener("click", generar);
}

function generar() {
    let tabla = document.createElement("table");
    let muestra = document.getElementById("muestra");
    muestra.appendChild(tabla);

    tabla.style.color(color.value);
    // tabla.style.borderWidth(grosor.value);


    for (let i = 0; i < filas.value; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        // tr.appendChild(document.createTextNode(texto.value));

        for (let j = 0; j < columnas.value; j++) {
            tr.appendChild(document.createElement("th").appendChild(document.createTextNode("|" + texto.value + "|")));
        }

    }




}