// Dispones del código de una página web en html: pagina.html. Introduce en el apartado de script el código necesario para extraer:
// El número de párrafos de la página.
// El texto del segundo párrafo.
// El número de enlaces de la página.
// La dirección del primer enlace.
// La dirección del penúltimo enlace.
// El número de enlaces que apuntan a /wiki/Municipio
// El número de enlaces del primer párrafo.
// Para agregar texto en la página deberás introducir una etiqueta div con el id=info y  añadir en ella toda la información detallada mediante:


// let info = document.getElementById(“info”);
// info.innerHTML = “Texto informativo”;

let obj_html = document.documentElement;
console.log("obj_html "+obj_html);
let obj_body = obj_html.lastChild;
console.log("obj_body "+obj_body);
let parrafos=document.getElementsByTagName("p");
console.log("parrafos "+parrafos);
let SegundoP=parrafos[1];
let ContenidoSP=SegundoP.nodeValue;
console.log("contenidoSegundoP"+ContenidoSP);