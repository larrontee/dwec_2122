let caracterS = "~!@#$%^&*()+`={}[]|\\:;/?><.,"
let cadena = prompt("introduce una cadena", "DAW2 ~!@#$%^&*()+`-={}[]|\\:;/?><., ALIXAR");
let aux = "";


for (let i = 0; i < cadena.length; i++) {
    if (cadena[i].includes(caracterS)) {
        break;
    } else {
        aux += cadena[i];
    }
}
console.log(aux);



