let READY_STATE_LOADING = 1;
let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

let peticion_http;
let botonXML;
let botonFetch;
let minimo;
let maximo;
let eps = [];
let personajes = [];
let enlace;
let resultado;
let select;
let cargar;
let estado;


function descargaArchivo(url) {
    cargaContenido(url, "GET");
    console.log("descargaArchivo");
}

window.onload = inicio;
function inicio() {
    select = document.getElementById("select");
    estado = document.getElementById("estado");
    cargar = document.getElementById("cargar");
    resultado = document.getElementById("resultado");
    console.log("inicio");
    botonXML = document.getElementById("xml");
    botonFetch = document.getElementById("fetch");
    botonXML.addEventListener("click", procesarPeticion);
    botonFetch.addEventListener("click", procesarPeticionFetch);
    cargar.addEventListener("click", porcesarEpisodios);
}

function procesarPeticionFetch() {
    console.log("procesar peticion fetch");
    minimo = document.getElementById("minimo").value;
    maximo = document.getElementById("maximo").value;
    console.log(minimo);
    console.log(maximo);

    for (let i = minimo; i <= maximo; i++) {
        enlace = `https://rickandmortyapi.com/api/character/${i}`
        console.log(enlace);
        obtenerDatosFetch(enlace);
    }
}

function obtenerDatosFetch(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
            personajes.push(data);
            ficha(data)
        })
        .catch((err) => console.log(err));
}


function ficha(person) {
    estado.innerHTML += person.name + "se ha cargado. <br>"
    let img = person.image;
    let nombre = person.name;
    let especie = person.species;
    let localizacion = person.location.name;
    let creacion = person.created;

    let imgs = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");


    imgs.src = img;
    p1.appendChild(document.createTextNode(nombre));
    p2.appendChild(document.createTextNode(especie));
    p3.appendChild(document.createTextNode(localizacion));
    p4.appendChild(document.createTextNode(creacion));

    let div = document.createElement("div");
    div.appendChild(document.createElement("hr"));
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(imgs);
    div.appendChild(document.createElement("hr"));

    resultado.appendChild(div);

    crearSelect(person);
}



function crearSelect(person) {
    let option = document.createElement("option");
    option.value = person.id;
    option.appendChild(document.createTextNode(person.name))
    console.log(person.name);
    select.appendChild(option);
}

function porcesarEpisodios() {
    for (let i = 0; i < personajes.length; i++) {
        if (select.value == personajes[i].id) {
            console.log("gola")
            for (let j = 0; j < personajes[i].episode.length; j++) {
                console.log(personajes[i].episode[j]);
                eps.push(personajes[i].episode[j]);
                peticionEpisodios(personajes[i].episode[j]);
            }
        }
    }
}

function peticionEpisodios(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            insertarBD(data)
        })
        .catch((err) => console.log(err));
}

function insertarBD(dato) {
    fetch("guardar_episodio_rm.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dato),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
            estado.innerHTML += data.resultado + "<br>";
        })
        .catch((err) => console.log(err));
}

function procesarPeticion() {
    console.log("procesar peticion");
    minimo = document.getElementById("minimo").value;
    maximo = document.getElementById("maximo").value;
    console.log(minimo);
    console.log(maximo);

    for (let i = minimo; i <= maximo; i++) {
        enlace = `https://rickandmortyapi.com/api/character/${i}`
        console.log(enlace);
        descargaArchivo(enlace);
    }
}

function cargaContenido(url, metodo) {
    console.log("cargarContenido");
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
    console.log("muestraContenido");
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        console.log("primer if");
        console.log(HTTP_STATUS_OK);
        console.log(peticion_http.status);
        if (peticion_http.status === HTTP_STATUS_OK) {
            console.log("segundo if");
            personaje = JSON.parse(peticion_http.responseText);
            console.log(personaje);
            personajes.push(JSON.parse(peticion_http.responseText));
            console.log("array", personajes);
        }
    }
}