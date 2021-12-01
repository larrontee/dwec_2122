let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

nombre.addEventListener("blur", mayus, false);
apellido.addEventListener("blur", mayus, false);

function mayus() {
    nombre.value = nombre.value.toUpperCase();
}
