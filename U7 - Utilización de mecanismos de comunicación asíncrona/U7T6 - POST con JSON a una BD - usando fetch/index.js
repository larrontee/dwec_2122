

window.onload = inicio;
function inicio() {
    let button = document.getElementById("enviar");
    let listar = document.getElementById("listar");
    button.addEventListener("click", enviar);
    listar.addEventListener("click", listar_series);

}



function enviar() {
    let muestra = document.getElementById("muestra");
    let titulo = document.getElementById("Titulo").value;
    let direction = document.getElementById("Director").value;
    let cadena = document.getElementById("Cadena").value;
    let anyo = document.getElementById("Anyo").value;
    let terminada = document.getElementById("Terminada").value;

    let objeto = {
        titulo: titulo,
        director: direction,
        cadena: cadena,
        anyo: parseInt(anyo),
        terminada: terminada
    }


    fetch('create_serie.php', {
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
            muestra.innerHTML = result;
            alert(result);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function listar_series() {
    fetch('listar_series.php')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            generarTabla(data);
        })
        .catch((err) => console.log(err));
}



function generarTabla(objJson) {
    let series = objJson;
    let datos = [];
    let titulos = ["titulo", "cadena", "director", "anyo", "terminada"]
    console.log(series[1]["titulo"]);
    for (let i = 0; i < series.length; i++) {
        console.log(series[i]);
        for (let j = 0; j < titulos.length; j++) {
            console.log(series[i][titulos[j]]);
            datos.push(series[i][titulos[j]]);
        }
    }
    console.log(datos);
    generar(datos);
}


function generar(data) {
    let tabla = document.createElement("table");
    let resultado = document.getElementById("resultado");
    let titulos = ["titulo", "cadena", "director", "anyo", "terminada"]

    // tabla.style.color(color.value);

    let eHeader = document.createElement("tr");
    let contador = 0;
    for (let i = 0; i < titulos.length; i++) {
        let td = document.createElement("td");
        let tit = document.createTextNode(titulos[i]);
        td.appendChild(tit);
        eHeader.appendChild(td);
    }
    tabla.appendChild(eHeader);

    for (let i = 0; i < data.length / 5; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        for (let j = 0; j < titulos.length; j++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(data[contador]));
            console.log(data)
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
}