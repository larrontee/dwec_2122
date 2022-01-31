let READY_STATE_LOADING = 1;
let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

let peticion_http;

let url = "localhost:8090/U7 - Utilización de mecanismos de comunicación asíncrona/U7T2 - Localidad/localidad.php";
let metodo = "";

function cargaContenido(url, metodo) {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
    }

    if (peticion_http) {
        peticion_http.onreadystatechange = muestraContenido;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
    }
}

function muestraContenido() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
            alert(peticion_http.responseText);
            area.value = peticion_http.responseText;
        }
    }
}



function descargaArchivo(url) {
    cargaContenido("localhost:8090/U7 - Utilización de mecanismos de comunicación asíncrona/U7T2 - Localidad/index.html", "GET");
    let url = document.getElementById("localidad");
    let submit = document.getElementById("submit");
}

window.onload = descargaArchivo;