var muestra=document.getElementById("muestra");
var cabecera=document.getElementById("cabecera");
var parrafo=document.getElementById("parrafo");

let color_fondo = document.getElementById("color_fondo");

let color_cabecera = document.getElementById("color_cabecera");
let fuente_cabecera = document.getElementById("fuente_cabecera");
let aliniacion_cabecera=document.getElementById("aliniacion_cabecera");
let tamano_cabecera=document.getElementById("tamano_cabecera");

let color_parrafo = document.getElementById("color_parrafo");
let fuente_parrafo=document.getElementById("fuente_parrafo");
let aliniacion_parrafo=document.getElementById("aliniacion_parrafo");
let tamano_parrafo=document.getElementById("tamano_parrafo");

// ------------------------BOTONES-----------------------------

let aplicar=document.getElementById("");

// document.getElementById("crear_cookie").addEventListener("click", crear_cookie);

window.onload=inicio();
function inicio(){
    color_fondo.addEventListener("click",cambiarFondo,false);
    color_cabecera.addEventListener("click",cambiarColorCabecera,false);
    fuente_cabecera.addEventListener("click",cambiarEstiloCabecera,false);
    aliniacion_cabecera.addEventListener("click",cambiarAlingCabecera,false);
    tamano_cabecera.addEventListener("click",cambiarTamCabecera,false);


    color_parrafo.addEventListener("click",cambiarColorParrafo,false);
    fuente_parrafo.addEventListener("click",cambiarEstiloParrafo,false);
    aliniacion_parrafo.addEventListener("click",cambiarAlingParrafo,false);
    tamano_parrafo.addEventListener("click",cambiarTamParrafo,false);






}



function cambiarFondo(){
    muestra.style.backgroundColor=color_fondo.value;
    return muestra.style.backgroundColor;
}



function cambiarColorCabecera(){
    cabecera.style.color=color_cabecera.value;
    return cabecera.style.color;
}

function cambiarEstiloCabecera() {
    cabecera.style.fontFamily=fuente_cabecera.value;
    return cabecera.style.fontFamily;
}

function cambiarAlingCabecera() {
    cabecera.style.textAlign=aliniacion_cabecera.value;
    return cabecera.style.textAlign;
}

function cambiarTamCabecera() {
    cabecera.style.fontSize=tamano_cabecera.value;
    return cabecera.style.fontSize;
}

function cambiarColorParrafo(){
    parrafo.style.color=color_parrafo.value;
    return parrafo.style.color;
}

function cambiarEstiloParrafo() {
    parrafo.fontFamily=fuente_parrafo.value;
    return parrafo.fontFamily;
}

function cambiarAlingParrafo() {
    parrafo.style.textAlign=aliniacion_parrafo.value;
    return parrafo.style.textAlign;
}

function cambiarTamParrafo() {
    parrafo.style.fontSize=tamano_parrafo.value;
    return parrafo.style.fontSize;
}

function guardar_cookie() {
    let expiracion=prompt("Cuantos dias quieres que dure la cookie?")
    set_cookie(expiracion,cambiarFondo(),cambiarColorCabecera(),cambiarEstiloCabecera(),cambiarAlingCabecera(),cambiarTamCabecera(),cambiarColorParrafo(),cambiarEstiloParrafo(),cambiarAlingParrafo(),cambiarTamCParrafo());
    ver_cookies();
  }

function set_cookie(expiracion,colorFondo,colorCabecera,estiloCabecera,alineacionCabecera,tamanoCabecera,colorParrafo,estiloParrafo,alineacionParrafo,tamanoParrafo){
    let d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + d.toUTCString();
    document.cookie ="Color Fondo= "+colorFondo + expiracion + ";path=/";
    document.cookie = "Color Cabecera= "+colorCabecera+";" + expiracion + ";path=/";
    document.cookie = "Fuente Cabecera= "+estiloCabecera+";" + expiracion + ";path=/";
    document.cookie = "Aliniación Cabecera= "+alineacionCabecera+";" + expiracion + ";path=/";
    document.cookie = "Tamaño Cabecera= "+tamanoCabecera+";" + expiracion + ";path=/";
    document.cookie = "Color Parrafo= "+colorParrafo+";" + expiracion + ";path=/";
    document.cookie = "Fuente Parrafo= "+estiloParrafo+";" + expiracion + ";path=/";
    document.cookie = "Aliniación Parrafo= "+alineacionParrafo+";" + expiracion + ";path=/";
    document.cookie = "Tamaño Parrafo= "+tamanoParrafo+";" + expiracion + ";path=/";
  }

  function get_cookie(nombre) {
    let nom = nombre + "=";
    let array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
      let c = array[i];
      console.log(c);
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(nom) == 0) {
        return c.substring(nom.length);
      }
    }
    return "";
  }

  function leer_cookie() {
    let nombre = prompt("Introduzca el nombre de la cookie a consultar");
    let resultado = get_cookie(nombre);
    alert(resultado);
  }
  function ver_cookies() {
    alert("Cookies actuales:\n" + document.cookie);
  }


  function guardarSession(){
    let color= document.getElementById("color_fondo");
    let colorC = document.getElementById("color_cabecera");
    let fuenteC = document.getElementById("fuente_cabecera");
    let alingC = document.getElementById("aliniacion_cabecera");
    let tamanoC = document.getElementById("tamano_cabecera");
    let colorP = document.getElementById("color_parrafo");
    let fuenteP = document.getElementById("fuente_parrafo");
    let alingP = document.getElementById("aliniacion_parrafo");
    let tamanoP = document.getElementById("tamano_parrafo");

    localStorage.setItem("Color Fondo", color.value);
    localStorage.setItem("Color Cabecera", colorC.value);
    localStorage.setItem("Fuente Cabecera", fuenteC.value);
    localStorage.setItem("Alineación Cabecera", alingC.value);
    localStorage.setItem("Tamaño Cabecera", tamanoC.value);

    localStorage.setItem("Color Parrafo", colorP.value);
    localStorage.setItem("Fuente Parrafo", fuenteP.value);
    localStorage.setItem("Alineación Parrafo", alingP.value);
    localStorage.setItem("Tamaño Parrafo", tamanoP.value);


    }