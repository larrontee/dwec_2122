let usu = "";
let pass = "";
let nuevousu = "";

let min = false;
let may = false;
let num = false;
let carat = false;

let Vmin = false;
let Vmay = false;
let Vnum = false;
let Vcarat = false;

let usuValidate = false;
let passValidate = false;



usu = prompt("Establece el nombre de usuario");
pass = prompt("Establece una contraseña");
if (usu === null || pass === null) {
    alert("has candelado la subcripcion")
}


// Creamos el bucle que finalizara cuando las variables booleanas sean verdaderas que sera cuando cumplan todos los requisitos
do {
    //Este buclre recorrera la cadena de usuario
    //Aquí comparamos caracter a caracter si el caracter de la cadena original es igual que si lo forzamos a estar en minusculas si entra.
    for (x in usu) {
        //En esta condicion añadiremos el caracter de la cadena a una cadena auxiliar  que luego la usaremos para comparar cuado acabe el
        //bucle las 2 cadenas si son iguales la validacion sera true.
        if (usu[x] === usu[x].toLowerCase() && usu[x] !== "") {
            nuevousu += usu[x];
        }
    };

    if (nuevousu === usu) {
        usuValidate = true;
        alert("usuario = " + usuValidate);
    };


    //En este bucle recorremos la contraseña caracter a caracter.
    for (i in pass) {
        //Aqui comprobamos si el caracter es minuscula si lo es min y Vmin se volvera verdadero al salir del if volvera a ser false  para resetear la variable
        if (pass[i] === pass[i].toLowerCase()) {
            min = true;
            Vmin = true;
        }
        min = false;

        //Aqui comprobamos si el caracter es mayuscula si lo es may y Vmay se volvera verdadero if volvera a ser false  para resetear la variable 
        if (pass[i] === pass[i].toUpperCase()) {
            may = true;
            Vmay = true;
        }
        may = false;

        //Aqui comprobamos si el caracter es numerico si lo es num y Vnum se volvera verdadero if volvera a ser false para resetear la variable
        if (!isNaN(pass[i])) {
            num = true;
            Vnum = true;
        }
        num = false;
        //Aqui si no es una cadena vacia o ninguna de las comprobaciones anteriores daremos como que es caracter  
        if (pass[i] !== "" && !may && !min && !num) {
            carat = true;
            Vcarat = true;
        }
    }

    //Al tener al menos un requisito de cada debera entrar en la validación de la contraseña.
    if (Vcarat === true && Vnum === true && Vmin === true && Vmay === true) {
        passValidate = true;
        alert("contraseña = " + passValidate);
    } else {
        pass = prompt("Establece una contraseña");
    }
    if (usu === null || pass === null) {
        alert("has candelado la subcripcion")
    }
} while (usuValidate == true && passValidate == true);





