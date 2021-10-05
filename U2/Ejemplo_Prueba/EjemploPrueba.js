// La página calculará un número del 1 al 100.
// Luego preguntará al usuario por el número mediante un prompt.
// Si el usuario escribe algo que no es un número se indica el error y se vuelve a pedir el número.
// Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.
// Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.
// Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
// Al final, si se ha finalizado correctamente el juego se indica el número de intentos.
// Se permite volver a jugar al usuario mediante un cuadro de confirmación


let n = Math.floor(Math.random() * 101); +
    alert(n)
var num = prompt("Introduce un numero entero porfavor");
var contador = 1;

if (n == num) {
    alert("acertaste");
    alert("intentos " + contador);
} else if (num === null) {
    final = prompt("¿quieres acabar el juego?");
    if (final == null || final.localeCompare("si")) {
        alert("fin se cancelo el juego");
    };
} else if (num === "") {
    alert("no hay datos introducidos")
    num = prompt("Introduce un numero entero porfavor");
} else {
    do {
        if (num > n) {
            alert("el numero es mayor que n")
            num = prompt("Introduce un numero entero porfavor");
            contador++;
            if (n == num) {
                alert("acertaste");
                alert("intentos " + contador);
            }
        } else {
            alert("el numero es menor que n")
            num = prompt("Introduce un numero entero porfavor");
            contador++;
            if (n == num) {
                alert("acertaste");
                alert("intentos " + contador);
            }
        }
    } while (num != n);
}

// Usamos Math.floor para que el número mostrado sea un número entero, tal como lo tenemos puesto nos 
// mostrara los n del 0 al 100 ya que el n max que ponemos es excluyente.
// Los if que nos encontramos son el de acierto, si el jugador desea cancelar la partida se mostrar un mesaje de confirmacion 
// si realmente desea dejarla, el siguiente es cadena vacia.
// Si no entra en ninguina de los anteriores es que ha introducido un numero pero no es el correcto este nos indicara si es mayor o menor 
// que el numero que tiene que adivinar.



















// do {
//     contador++;
//     switch (num) {
//         case num < n:
//             alert("el numero es menor que n")
//             num = prompt("Introduce un numero entero porfavor");
//             break;
//         case num > n:
//             alert("el numero es mayor que n")
//             num = prompt("Introduce un numero entero porfavor");
//             break;
//         case num == n:
//             alert("acertaste!!")
//             alert("fin");
//             break;
//         case (num == null):
//             final = prompt("¿quieres acabar el juego?");
//             if (final == null || final.equals("si")) {
//                 alert("fin se cancelo el juego");
//             };
//             break;
//         case (num == ""):
//             num = prompt("Introduce un numero entero porfavor");
//             break;
//     }
// } while (num == n || final == null || final.equals("si"));


