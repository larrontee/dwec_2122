
// Ejercicio 1

// Crea un programa que pida al usuario su nombre y apellidos y muestre:

//     El tamaño del nombre más los apellidos (sin contar espacios).
// let usuario = prompt("Introduce tu nombre");
// let apellido = prompt("Introduce tu apellido");
// let apellido2 = prompt("Introduce tu 2 apellido");
// let contador = 0;

// let union = usuario + apellido;

// for (let i = 0; i < union.length; i++) {
//     if (union[i] != " ") {
//         contador += 1;
//     }
// }
// alert("el nombre y apellido tiene " + contador + " caracteres");


//     La cadena en minúsculas y en mayúsculas.
// alert(usuario.toLowerCase());
// alert(usuario.toUpperCase());

//  Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
// alert("Nombre " + usuario + "\n" + "Apellido1" + apellido + "\n" + "Apellido2 " + apellido2);


//Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido:
//ej. Para José María García Durán sería jgarciad.

// let nick = usuario.slice(0, 1) + apellido + apellido2.slice(0, 1);
// alert(nick.toLowerCase());

//     Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.

// let nick = usuario.slice(0, 3) + apellido.slice(0, 3) + apellido2.slice(0, 3);
// alert(nick.toLowerCase());



// Ejercicio 2

// Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

//     Tiene entre 8 y 16 caracteres.
//     Tiene una letra mayúscula.
//     Tiene una letra minúscula.
//     Tiene un número.
//     Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.

// Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.



// let pass = prompt("introduzca una contraseña");
// let contador = 0;
// let caracteres = "-_@#$%&";
// let minus = "abcdefghijklmnñopqrstuvwxyz";
// let mayus = minus.toUpperCase();
// let nums = "0123456789"

// let ValidatorC = false;
// let Validatorm = false;
// let ValidatorM = false;
// let ValidatorN = false;


// for (let i = 0; i < pass.length; i++) {
//     if (pass[i] != " ") {
//         contador += 1;
//         if (pass[i].includes(caracteres)) {
//             ValidatorC = true;
//         } else if (pass[i].includes(minus)) {
//             Validatorm = true;
//         } else if (pass[i].includes(mayus)) {
//             ValidatorM = true;
//         } else {
//             ValidatorN = true;
//         }
//     }
// };

// if (contador >= 8 && ValidatorC && Validatorm && ValidatorM && ValidatorN) {
//     alert("contraseña segura");
// } else {
//     alert("contraseña insegura");
// };