// Vas a crear un juego (el memory) que consiste en encontrar parejas en 12 cartas con 6 parejas de los personajes de los Simpson. El juego consistirá en lo siguiente:
// La aplicación deberá tener una tabla con 3 filas y cuatro columnas de un color (rojo). Además habrá un cuadro de texto con el valor 0 pero no modificable.
// Cuando el usuario haga clic sobre una celda, se mostrará una imagen.
// Cuando el usuario haga clic sobre otra celda, se mostrará otra imagen.
// Si las dos imágenes son iguales, se dejará de mostrar la imagen, se cambiará el color de las celdas a verde y se añadirá 1 al cuadro de texto.
// Si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el color inicial.
// En primer lugar, crea un esquema en una hoja con el arbol DOM del documento html y en otra indica los métodos que vas a crear asociados a qué evento.
// Trata de utilizar el menor número de variables posibles: utiliza las propiedades de los elementos para cambiar su comportamiento.
// Las imágenes son demasiado grandes, así que o bien la redimensionas o bien las muestras redimensionadas.
// Deberás utilizar un código .css para los colores (y tamaño si así lo quieres) que puedes incustrar el mismo html o poner en un fichero aparte.
// Puedes utilizar la siguiente función para permitir un "delay" (tiempo de espera) entre que se muestran las imágenes y se ocultan:
// setTimeout(() => {
// Código a ejecutar después de que pase...
//}, 1000); // ... el número de milisegundos que aquí se especifique, en este caso, 1 segundo.



function sumar_puntos(elemento) {
    array = [];
    array.push(elemento.childNodes[1].id);
    if (array.length = 2) {
        if (array[0] === array[1]) {

        }
    }
    else if (array.length > 2) {
        for (let i = 0; i < array.length; i++) {
            array.shift();
        }
    }
}

lista_imagens = ["01_lisa.png", "01_lisa.png", "02_bart.png", "02_bart.png", "03_homer.png", "03_homer.png", "04_marge.png", "04_marge.png", "05_maggie.png", "05_maggie.png", "06_flanders.png", "06_flanders.png"];

function mostrar_imagen(elemento) {
    let casilla = elemento.id.split('_')[1];
    console.log(casilla);
    elemento.src = lista_imagens[casilla];
}

lisaTexto.value = "1";
let array_cartas = document.getElementsByClassName("card");
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", mostrar_imagen, false);
}