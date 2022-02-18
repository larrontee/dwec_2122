

window.onload = inicio;
function inicio() {
    let button = document.getElementById("enviar");
    button.addEventListener("click", enviar);

}



function enviar() {
    let muestra = document.getElementById("muestra");
    let titulo = document.getElementById("Titulo").value;
    let direction = document.getElementById("Director").value;
    let cadena = document.getElementById("Cadena").value;
    let anyo = document.getElementById("Anyo").value;
    let terminada = document.getElementById("Terminada").value;

    let objeto = {
        titulo: titulo,
        director: direction,
        cadena: cadena,
        anyo: parseInt(anyo),
        terminada: terminada
    }

    let elementos = JSON.stringify(objeto);
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "create_serie.php");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(elementos);
    console.log("hola");
    console.log(xhr.responseText.innerHTML);

    muestra = xhr.responseText();
}

