// Realiza una página que contenga una función JavaScript para hacer estadísticas sobre una cadena de texto que se le pase, contando el número de veces que aparece cada letra.
// Se deberá mostrar un listado con las letras del abcedario con el número de veces que aparece cada letra en la cadena que se la pasa.
// Utilizar un Array para almacenar la información estadística. No se tendrán en cuenta que pudiera haber tildes, así que consideraremos que no existen.

let cadena = prompt("introduce una cadena", "hola pedro");
let abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let resultados = [];
const final = [];
contador = 0;



for (let i = 0; i < abecedario.length; i++) {
    for (let j = 0; j < cadena.length; j++) {
        if (abecedario[i] === cadena[j]) {
            contador++;
        }
    }
    resultados.push(contador);
    final.push(abecedario[i] + ": " + contador);
    contador = 0;
}
console.log(final);