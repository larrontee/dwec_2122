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
            resultado.innerHTML = peticion_http.responseText;
            if (peticion_http.responseText == "SI") {
                resultado.style.color = "green";
            } else {
                resultado.style.color = "red";
            }
        }
    }
}


function descargaArchivo() {
    let localidad = document.getElementById("localidad").value;
    let url = `/U7 - Utilización de mecanismos de comunicación asíncrona/U7T2 - Localidad/localidad.php?localidad=${localidad}`;
    cargaContenido(url, "GET");
}

window.onload = inicio;
function inicio() {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", descargaArchivo);
}