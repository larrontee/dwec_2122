let READY_STATE_LOADING = 1;
let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

let resultado = document.getElementById("resultado");
let peticion_http;

function descargaArchivo() {
    let url = `/U7 - Utilización de mecanismos de comunicación asíncrona/U7T4 - JSON/series.json`;

    cargaContenido(url, "GET");
}

window.onload = descargaArchivo;

function cargaContenido(url, metodo) {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
    } if (peticion_http) {
        peticion_http.onreadystatechange = muestraContenido;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
    }
}

function muestraContenido() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
            let Json = peticion_http.responseText;
            generarTabla(Json);
        }
    }
}


function generarTabla(objJson) {
    let series = objJson.serie;
    let datos = [];
    console.log(objJson["serie"]);
    //    for (let i = 0; i < series.length; i++) {
    //        for (let j = 1; j < series[i].childNodes.length; j = j + 2) {
    //            datos.push(series[i].childNodes[j].innerHTML);
    //        }
    //    }
    //    console.log(datos);
    //    generar(datos);
}





function generar(data) {
    let tabla = document.createElement("table");
    let resultado = document.getElementById("resultado");
    let titulos = ["titulo", "cadena", "director", "año", "terminada"]

    // tabla.style.color(color.value);

    let eHeader = document.createElement("tr");
    let contador = 0;
    for (let i = 0; i < titulos.length; i++) {
        let td = document.createElement("td");
        let tit = document.createTextNode(titulos[i]);
        td.appendChild(tit);
        eHeader.appendChild(td);
    }
    tabla.appendChild(eHeader);

    for (let i = 0; i < data.length / 5; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        for (let j = 0; j < titulos.length; j++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(data[contador]));
            console.log(data)
            if (data[contador] == "Si" || data[contador] == "no") {
                if (data[contador] === "Si") {
                    let img = document.createElement("img");
                    img.src = "tic.png";
                    tr.appendChild(img);
                } else {
                    let img = document.createElement("img");
                    img.src = "x.png";
                    tr.appendChild(img);
                }
            } else {
                tr.appendChild(td);
            }
            contador += 1;
        }
        resultado.appendChild(tabla);
    }
}