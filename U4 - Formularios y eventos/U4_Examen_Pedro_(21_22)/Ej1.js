window.onload = inicio();
var errores = document.getElementById("errores");
var ultima_tirada = document.getElementById("ultima_tirada");
function inicio() {
    document.getElementById("reset").addEventListener("click", resetear, false);
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validar(evento) {
    if (vNombre() && vFecha() && vHabilidades() && vTiradaAtaque() && vRol() && vPassword()) {
        lanzamiento();
        errores.innerHTML = "";
        return true;
    } else {
        evento.preventDefault();
    }
}


function vNombre() {
    elemento = document.getElementById("nombre");
    if (/\w+$/.test(elemento.value)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML = "Campo nombre vacio"
        return false;
    }
}
function vFecha() {
    elemento = document.getElementById("anyo");
    if (/^([7-9][0-9][0-9]$|[1-7][0-9][0-9][0-9]$)|([8][0][0][0])$/.test(elemento.value)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML = "La fecha esta fuera del rango 700-8000 o esta vacia"
        return false;
    }
}
function vHabilidades() {
    // M WS BS S T W A Ld Sv
    elemento = document.getElementById("habilidades");
    if (/^((M)|(WS)|(BS)|(S)|(T)|(W)|(A)|(Ld)|(Sv))$/.test(elemento.value)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML = "La habilidad introducida no se encuentra entre las siguientes:  M WS BS S T W A Ld Sv. O esta vacia"
        return false;
    }
}
function vTiradaAtaque() {
    elemento = document.getElementById("tiradaAtaque");
    if (/^F(x2|>|=|<)R[0-9][0-9]$/.test(elemento.value)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML = "La tirada no cumple con las caracteristicas necesarias o esta vacio"
        return false;
    }
}

function vRol() {
    elemento = document.getElementById("rol");
    if (!/^$/.test(elemento.value)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML = "Selecciona un Rol"
        return false;
    }
}

function vPassword() {
    elemento = document.getElementById("password");
    if (/^[a-z][a-z]\W\w\w\w\w\w\w\w\w+\#\d{2}$/.test(elemento.value)) {
        valido(elemento);
        return true;
    } else {
        invalido(elemento);
        errores.innerHTML = "El password no cumple con las caracteristicas necesarias o esta vacio"
        return false;
    }
}

function lanzamiento() {
    tirada = Math.floor(Math.random() * (7 - 1) + 1);
    elemento = document.getElementById("tirada");
    elemento.type = "text"
    elemento.value = tirada;
    ultima_tirada.innerHTML = tirada;
}
function invalido(e) {
    e.className = "invalido";
    e.focus();
}
function valido(e) {
    e.className = "valido";
}

function resetear() {
    elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        elements[i].className = ""
    }
}
