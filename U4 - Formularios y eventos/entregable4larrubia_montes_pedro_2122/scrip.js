let infantil = document.getElementById("infantil");
let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");
infantil.checked = false;
etiquetas.disabled = true;

let errores = document.getElementById("errores");

let date = new Date();

function invalido(e) {
    e.className = "inputinvalido";
    e.focus();
}

function valido(e) {
    e.className = "inputvalido";
}

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
    document.getElementById("limpiar").addEventListener("click", limpiar, false);
}

function cambiaDateHora() {
    date.hora = document.getElementById("hora").value;
}
function cambiaDateFecha() {
    date.fecha = document.getElementById("fecha").value;
}

fecha.addEventListener("change", cambiaDateFecha, false);
hora.addEventListener("change", cambiaDateHora, false);
infantil.addEventListener("change", activarEtiqueta, false);
descripcion.addEventListener("change", activarEtiqueta, false);


function validar(evento) {
    if (vTitulo() && vPassword() && vDescription() && confirm("¿Quieres enviar?")) {
        return true;
    } else {
        evento.preventDefault();
        return false;
    }
}


function vTitulo() {
    let titulo = document.getElementById("titulo").value;
    let elemento = document.getElementById("titulo");
    if (/^\w+$/.test(titulo)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        return false;
    }
}

function vDescription() {
    let descripcion = document.getElementById("descripcion").value;
    let elemento = document.getElementById("descripcion");
    let errores = document.getElementById("errores");
    if (descripcion.length >= 50 && descripcion.length <= 400) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML += "\n descripcion  \n";
        return false;
    }
}

function vEtiqueta() {
    let etiquetas = document.getElementById("etiquetas");
    let contador = 0;
    if (/^\w{3,500}$/.test(elemento)) {
        valido(elemento);
        return true;
    }
    invalido(elemento);
    return false;
}

function vPassword() {
    // 123€pedrola26#AbC
    let password = document.getElementById("password").value;
    let errores = document.getElementById("errores");
    let elemento = document.getElementById("password");
    if (/^\d{3}€[A-Za-z]{4,14}[2-6]{2}[^A-Za-z0-9][A-Z][a-z][A-Z]$/.test(password)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML += " Password"
        return false;
    }
}


function activarEtiqueta() {
    if (infantil.checked === true) {
        document.getElementById("etiquetas").disabled = false;
    } else {
        document.getElementById("etiquetas").disabled = true;
    }
}


function limpiar() {
    elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        elements[i].className = ""
    }

}
