

window.onload = inicio;
let objeto;
function inicio() {
    let modificar = document.getElementById("modificar");
    let fetch = document.getElementById("fetch");
    let xmlhttp = document.getElementById("xmlhttp");


    let ccaa = document.getElementById("ccaa");
    let dosisEntregadas = document.getElementById("dosisEntregadas").value;
    let dosisAdministradas = document.getElementById("dosisAdministradas").value;
    let dosisPautasCompletas = document.getElementById("dosisPautasCompletas").value;
    let porcentajeEntregadas = document.getElementById("porcentajeEntregadas").value;
    let porcentajePoblacionCompletas = document.getElementById("porcentajePoblacionCompletas").value;
    let porcentajePoblacionAdministradas = document.getElementById("porcentajePoblacionAdministradas").value;

    objeto = {
        ccaa: ccaa.value,
        dosisEntregadas: parseInt(dosisEntregadas),
        dosisAdministradas: parseInt(dosisAdministradas),
        dosisPautaCompletada: parseInt(dosisPautasCompletas),
        porcentajeEntregadas: parseInt(porcentajeEntregadas),
        porcentajePoblacionCompletas: parseFloat(porcentajePoblacionCompletas),
        porcentajePoblacionAdministradas: parseFloat(porcentajePoblacionAdministradas)
    }


    fetch.addEventListener("click", obtenerDatosFetch);
    modificar.addEventListener("click", modificarBD);
}


function obtenerDatosFetch() {
    fetch('latest.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
            insertarBD(data);
        })
        .catch((err) => console.log(err));
}

function insertarBD(datos) {
    fetch('insertar_comunidades.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            procesarDatos(result);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}
function modificarBD() {
    fetch('actualizar_comunidad.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}


function procesarDatos(objJson) {
    let series = objJson;
    let datos = [];
    let titulos = ["ccaa", "dosisEntregadas", "dosisAdministradas", "dosisPautaCompletada", "porcentajeEntregadas", "porcentajePoblacionCompletas", "porcentajePoblacionAdministradas"];
    console.log(series[1]["titulo"]);
    for (let i = 0; i < series.length; i++) {
        crearOption(ccaa, series[i]["ccaa"]);
        for (let j = 0; j < titulos.length; j++) {
            datos.push(series[i][titulos[j]]);
        }
    }
    console.log(datos);
    generarTabla(datos, titulos);
}


function generarTabla(data, titulos) {
    let tabla = document.createElement("table");
    let resultado = document.getElementById("resultado");

    let eHeader = document.createElement("tr");
    let contador = 0;
    for (let i = 0; i < titulos.length; i++) {
        let td = document.createElement("td");
        let tit = document.createTextNode(titulos[i]);
        td.appendChild(tit);
        eHeader.appendChild(td);
    }
    tabla.appendChild(eHeader);

    for (let i = 0; i < data.length / titulos.length; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        for (let j = 0; j < titulos.length; j++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(data[contador]));
            if (data[contador] == "Si" || data[contador] == "no") {
                if (data[contador] === "Si") {
                    let img = document.createElement("img");
                    img.src = "tic.png";
                    tr.appendChild(img);
                } else {
                    let img = document.createElement("img");
                    img.src = "x.png";
                    tr.appendChild(img);
                }
            } else {
                tr.appendChild(td);
            }
            contador += 1;
        }
        resultado.appendChild(tabla);
    }
    console.log(data)
}

function crearOption(select, comunidad) {
    let option = document.createElement("option");
    option.value = comunidad;
    option.appendChild(document.createTextNode(comunidad));
    select.appendChild(option);
}