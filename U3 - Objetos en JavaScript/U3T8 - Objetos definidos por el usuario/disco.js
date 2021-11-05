// Necesitamos almacenar en un programa todos los discos de música que tenemos en casa.
// Ahora que sabemos crear nuestros propios objetos es el mejor modo de guardar esta información.
// Crea un objeto “disco” que almacene la siguiente información:
//     Nombre del disco.
//     Grupo de música o cantante.
//     Año de publicación.
//     Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”).
//     Localización: almacenará un número de estantería.
//     Prestado: almacenará un valor booleano. Por defecto será false.
// Además tendrá los siguientes métodos:
//     Un “constructor” sin parámetros (las 4 primeras propiedades serán cadenas vacías, la localización será 0 por  
//     defecto y prestado estará a false).
//     Un método que permita incluir las cinco primeras propiedades; la propiedad prestado seguirá a false.
//     Un método que permitirá cambiar el número de estantería en la localización.
//     Un método que permitirá cambiar la propiedad Prestado.
//     Un método que muestre toda la información de un disco.
// Guarda todo el código en un archivo llamado disco.js

function tipoMusica() { }

function Disco() {
    this.nombre = "";
    this.autor = "";
    this.publicado = "";
    this.genero = "";
    this.localizacion = 0;
    this.prestado = false;


    this.rellenardatos = function (nom, aut, fecha, gen) {
        this.nombre = nom;
        this.autor = aut;
        this.publicado = fecha;
        this.genero = gen;
    }
}


let disco1 = new Disco();

disco1.rellenardatos("caca", "los mojinos", "1234", "rock");
console.log(disco1);

// Parte 2
// Carga en tu página el archivo de arrays que hicimos en la práctica anterior.
// Crea un array vacío para almacenar los discos.
// Cuando el usuario cargue la página, se cargarán las opciones:
//     Mostrar número de discos.
//     Mostrar listado de discos(y le preguntará si quiere mostrarlos en el orden que se  encuentran en el array, del revés u ordenados alfabéticamente).
//     Mostrar un intervalo de discos(y le pedirá que introduzca el intervalo en formato  inicio-fin; luego deberás extraer el valor inicio y fin).
//     Añadir un disco (y le preguntará si quiere añadir al principio o al final).
//     Borrar un disco (y le preguntará si quiere borrar al principio o al final).
//     Consultar un disco (y le preguntará si quiere consultar por posición o por nombre).
// Todas las operaciones que se realicen se irán mostrando en la página con su título.
// REUTILIZA EL CÓDIGO DE LA PARTE 1 Y DEL EJERCICIO DE ARRAYS.

let discos = [];


let op = prompt("Introduce una opcion <\n " +
    "1 Mostrar número de discos  <\n " +
    "2 Mostrar listado de discos(y le preguntará si quiere mostrarlos en el orden que se  encuentran en el array, del revés u ordenados alfabéticamente)  <\n " +
    "3 Mostrar un intervalo de discos(y le pedirá que introduzca el intervalo en formato  inicio-fin; luego deberás extraer el valor inicio y fin)  <\n " +
    "4 Añadir un disco (y le preguntará si quiere añadir al principio o al final)  <\n " +
    "5 Borrar un disco (y le preguntará si quiere borrar al principio o al final)  <\n " +
    "6 Consultar un disco (y le preguntará si quiere consultar por posición o por nombre) ")



















    