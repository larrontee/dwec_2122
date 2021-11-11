

// El primer grupo de cuatro no pueden contener Citosina en ningún caso.
// El segundo grupo solamente puede contener dos bases diferentes, cualesquiera, en cualquier orden y repetición. 
// Por ejemplo ACCA, TTGG, TATA
// El tercer grupo SIEMPRE empieza por Timina y el resto la combinación que sea.


let cadena = prompt("introduce una cadena")
let adn = cadena.split("-");

window.onload = function () {
    Comprobar(adn);
}

function Comprobar(array) {
    let data = document.getElementById("cadena")
    let resultado = document.getElementById("resultado")
    data.innerHTML = cadena;
    let v1 = true;
    let v2 = true;
    let v3 = true;
    let bases = "ACGT";
    contadorA = 0;
    contadorC = 0;
    contadorG = 0;
    contadorT = 0;


    for (let i = 0; i < array[0].length; i++) {
        if (array[0][i] === bases[1]) {
            v1 = false;
        }
    }
    for (let i = 0; i < array[1].length; i++) {
        if (array[1][i] === bases[0]) {
            contadorA++;
        } else if (array[1][i] === bases[2]) {
            contadorC++;

        } else if (array[1][i] === bases[3]) {
            contadorG++;
        } else {
            contadorT++;
        }
    }
    if ((contadorA === 2 && contadorC === 2) || (contadorA === 2 && contadorG === 2) || (contadorA === 2 && contadorT === 2) || (contadorC === 2 && contadorG === 2) || (contadorC === 2 && contadorT === 2) || (contadorG === 2 && contadorT === 2)) {
        v2 = true;
    } else {
        v2 = false;
    }
    if (array[2][0] != bases[3]) {
        v3 = false;
    }

    if (v1 && v2 && v3) {
        resultado.innerHTML = "Es una combinación válida";
    } else {
        resultado.innerHTML = "No es una combinación válida";
    }
}

