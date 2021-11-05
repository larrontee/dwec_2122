// Realiza un script que pida una cadena de texto (mediante input o prompt)
// y la muestre en un elemento HTML (p o div, como quieras).
// En otro elemento HTML deberá mostrarla cambiando las vocales a "lenguaje l33t" según la siguiente conversión:
// a -> 4
// e -> 3
// i -> 1
// o -> 0
// u -> |_|

let cadena = prompt("introduce una cadena");
let vocales = ["a", "e", "i", "o", "u"];
let aux = "";
let data = document.getElementById("data");

data.innerHTML = cadena + " / ";
for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == ("a") || cadena[i] == ("e") || cadena[i] == ("i") || cadena[i] == ("o") || cadena[i] == ("u")) {
        if (cadena[i] === "a") {
            aux += "4"
        } else if (cadena[i] === "e") {
            aux += "3"
        } else if (cadena[i] === "i") {
            aux += "1"
        } else if (cadena[i] === "o") {
            aux += "0"
        } else {
            aux += "|_|"
        }
    } else {
        aux += cadena[i]
    }
}
cadena = aux;
data.innerHTML += cadena;

