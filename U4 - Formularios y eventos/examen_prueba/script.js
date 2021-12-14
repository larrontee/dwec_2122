window.onload = iniciar;

// Evento para validar.
function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
  document.getElementById("limpiar").addEventListener("click", resetear, false);
}

// Objeto para Fecha y Hora.
let date = new Date();

// Función para Título de la Grabación.
function v_titulo() {
  let elemento = document.getElementById("titulo");
  limpiarError(elemento);
  if (elemento.value === "") {
    document.getElementById("errores").innerHTML =
      "Campo -Título de la Grabación- vacío.";
    error(elemento);
    return false;
  }
  acierto(elemento);
  return true;
}

// Función para Fecha de Grabación
function v_fecha() {
  let elemento = document.getElementById("fecha");
  limpiarError(elemento);
  if (
    !/^((20\d\d)_(0[1-9]|1[012])_(0[1-9]|1\d|2\d|3[01])|(20\d\d)(ENE|FEB|MAR|ABR|MAY|JUN|JUL|AGO|SEP|OCT|NOV|DIC)(0[1-9]|1\d|2\d|3[01]))$/.test(
      elemento.value
    )
  ) {
    document.getElementById("errores").innerHTML =
      "Campo -Fecha- incorrecto o vacío (yyyy_mm_dd|yyyyNNNdd).";
    error(elemento);
    return false;
  }
  acierto(elemento);
  return true;
}

// Función para Código de la Grabación.
function v_codigo() {
  let elemento = document.getElementById("codigo");
  limpiarError(elemento);
  if (!/^(BC_67|FR_56|DE_33|DF_77)$/.test(elemento.value)) {
    document.getElementById("errores").innerHTML =
      "Campo -Código de la Grabación- incorrecto o vacío (BC_67 FR_56 DE_33 DF_77).";
    error(elemento);
    return false;
  }
  acierto(elemento);
  return true;
}

// Función para Referencia de la Cámara.
function v_referencia() {
  let elemento = document.getElementById("referencia");
  limpiarError(elemento);
  if (
    !/^[A-Z][a-z]-(p|P|x|X|f|F|g|G){2}([5-8]\d{3}|9[0-6]\d{2}|9700)gJ$/.test(
      elemento.value
    )
  ) {
    document.getElementById("errores").innerHTML =
      "Campo -Referencia de la Cámara- incorrecto o vacío (Aj-PX9700gJ).";
    error(elemento);
    return false;
  }
  acierto(elemento);
  return true;
}

// Función para comprobar el password.
function v_pass() {
  let elemento = document.getElementById("pass");
  limpiarError(elemento);
  if (
    !/^[A-Z]@[a-zA-Z]{6,12}-[^a-zA-Z0-9%](2|5|1|8){4}$/.test(elemento.value)
  ) {
    document.getElementById("errores").innerHTML =
      "Campo -Password- incorrecto o vacío (A@palabra-$2582).";
    error(elemento);
    return false;
  }
  acierto(elemento);
  return true;
}

// Función para validar Formulario.
function validar(evento) {
  if (
    v_titulo() &&
    v_fecha() &&
    v_codigo() &&
    v_referencia() &&
    v_pass() &&
    confirm("Pulsa aceptar si deseas enviar el formulario.")
  ) {
    // Envíamos Fecha en el campo oculto.
    document.getElementById("fecha_publicacion").value = date;
    return true;
  } else {
    evento.preventDefault();
    return false;
  }
}

// Función Limpiar.
function resetear() {
  let elemento = document.getElementById("titulo");
  limpiarError(elemento);

  elemento = document.getElementById("fecha");
  limpiarError(elemento);

  elemento = document.getElementById("codigo");
  limpiarError(elemento);

  elemento = document.getElementById("referencia");
  limpiarError(elemento);

  elemento = document.getElementById("pass");
  limpiarError(elemento);

  elemento = document.getElementById("errores").innerHTML = "";
}

// Funciones para Errores o Aciertos.
function error(elemento) {
  elemento.className = "error";
  elemento.focus();
}
function limpiarError(elemento) {
  elemento.className = "";
}

function acierto(elemento) {
  elemento.className = "acierto";
}
