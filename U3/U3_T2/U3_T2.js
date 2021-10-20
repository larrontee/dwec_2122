// • Crea un programa que pida al usuario que elija una opción del siguiente menú:
// • 1) Potencia.
// • 2) Raíz.
// • 3) Redondeo.
// • 4) Trigonometría.
// • Si el usuario introduce 1, se le deberá pedir una base y un exponente y se  
// mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
// • Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el  
// resultado en pantalla (La raíz de X es: )
// • Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el  
// redondeo al entero más próximo, al alta y a la baja.
// • Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán  
// por pantalla los valores trigonométricos del seno, coseno y tangente.



// let op = prompt("Elige una de las siguientes opciones  1) Potencia 2) Raíz 3) Redondeo 4) Trigonometría.")

// switch (op) {
//     case "1":
//         x = prompt("numero");
//         y = prompt("elevado a");
//         alert(Math.pow(x, y))
//         break;
//     case "2":
//         do {
//             x = number(prompt("numero no negativo"));
//         } while (x > 0)
//         alert(Math.sqrt(x));
//     case "3":
//         x = number(prompt("numero"));
//         alert("redondeo a la baja " + Math.floor(x));
//         alert("redondeo a la alta " + Math.ceil(x));
//     case "4":
//         do {
//             x = prompt("numero entre 0 y 360");
//         } while (x < 0 || x > 360);
//         alert("Coseno " + Math.cos(x * (Math.PI / 180)));
//         alert("Seno " + Math.sin(x * (Math.PI / 180)));
//         alert("Tangente " + Math.tan(x * (Math.PI / 180)));
// }





// Ejercicio 2

// Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

//     El valor del radio.
//     El valor del diámetro.
//     El valor del perímetro de la circunferencia.
//     El valor del área del círculo.
//     El valor del área de la esfera.
//     El valor del volumen de la esfera.

// El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente. Debes escribir al lado si son cm, o cm2, o cm3. Como datos de muestra, si metes 5, deberías obtener aproximadamente:
// 5 / 10 / 31,41 /78,54 / 314,15 / 523,59.


let radio = prompt("Valor del radio")
alert(radio )



