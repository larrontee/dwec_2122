// Ejercicio 1
// -----------
// Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de 
// curso (por ejemplo, el 24 de junio).
// Recuerda que los meses empiezan desde el número 0

// let factual = new Date("oct 14 2021");
// let fincurso = new Date("jun 24 2022");

// let msActual = factual.getTime()
// let msFincurso = fincurso.getTime();

// let msRestantes = msFincurso - msActual;

// diasRestantes = msRestantes / (1000 * 60 * 60 * 24)

// alert(diasRestantes + "dias restantes");



// Ejercicio 2
// -----------
// Crea un programa que pida por parámetro tu cumpleaños
// (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer
// en domingo desde este año hasta el año 2100.
// Recuerda que los meses empiezan desde el número 0.





let domingos = 0;
let contador = 2021
do {
    let cumple = new Date(contador, 6, 2)
    if (cumple.getDay() === 0) {
        domingos += 1;
    }
    contador += 1;
    console.log(contador);
} while (contador == "2100");

alert(domingos);