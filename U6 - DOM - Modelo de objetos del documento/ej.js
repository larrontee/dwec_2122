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

    // tabla.style.color(color.value);
    tabla.style.border(grosor.value);



    if (header.checked) {
        let eHeader = document.createElement("tr");

        for (let i = 0; i < columnas.value; i++) {
            let td = document.createElement("td");
            let input = document.createElement("input");
            td.appendChild(input);
            eHeader.appendChild(td);
        }
        tabla.appendChild(eHeader);

        for (let i = 0; i < filas.value; i++) {
            let tr = document.createElement("tr");
            tabla.appendChild(tr);
            // tr.appendChild(document.createTextNode(texto.value));

            for (let j = 0; j < columnas.value; j++) {
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(texto.value));
                tr.appendChild(td);
            }
        }
    } else {
        for (let i = 0; i < filas.value; i++) {
            let tr = document.createElement("tr");
            tabla.appendChild(tr);
            // tr.appendChild(document.createTextNode(texto.value));

            for (let j = 0; j < columnas.value; j++) {
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(texto.value));
                tr.appendChild(td);
            }
        }
    }
}