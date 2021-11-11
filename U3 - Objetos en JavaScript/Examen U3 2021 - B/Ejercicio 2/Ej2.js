let cadena = prompt("introduce una cadena", "Si queiere vivir, venga conmigo");
let aux = "";
original = document.getElementById("original");
modificado = document.getElementById("modificado");

window.onload=function(){
    modificarCadena(cadena);
}


function modificarCadena(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        // console.log(Math.floor(Math.random()*(2)))
        caraocruz = Math.floor(Math.random() * (2));
        if(cadena[i]=" "){
            aux+=""
        }
        if (caraocruz === 1) {
            aux += cadena[i].toUpperCase();
            // console.log(cadena[i].toUpperCase())
        } else {
            aux += cadena[i].toLowerCase();
            // console.log(cadena[i].toLowerCase());
        }
        if ( i<cadena.length -1) {
            aux +="-";
        }
    }
    console.log(aux);
    original.innerHTML += cadena;
    modificado.innerHTML += aux;
}

