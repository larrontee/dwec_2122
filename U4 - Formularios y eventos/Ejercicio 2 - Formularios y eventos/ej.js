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

cHomer = 0;
cLisa = 0;
cMaggie = 0;
cBart = 0;
cMarge = 0;
cFlanders = 0;
contador = 0;


lisaTexto = document.getElementById("lisaTexto");
lisaImg = document.getElementById("lisaImg");
function mostrarImagen(elemento) {
    console.log(elemento.childNodes[1]);
    //elemento.childNodes[1].src = "01_lisa.png";
    if (elemento.childNodes[1].id === "lisaImg") {
        elemento.childNodes[1].src = "01_lisa.png";
        cLisa++;
        contador++;
    }
    if (cLisa === 2 && contador === 2) {
        elemento.childNodes[1].src = "01_lisa.png";
    } else {
        elemento.childNodes[1].src = "";
    }






}
lisaTexto.value = "1";