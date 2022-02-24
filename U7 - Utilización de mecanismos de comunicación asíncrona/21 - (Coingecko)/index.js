let READY_STATE_LOADING = 1;
let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

let peticion_http;
let boton;
var coins;

function descargaArchivo() {
    let url = `https://api.coingecko.com/api/v3/coins/list`;

    cargaContenido(url, "GET");
}

window.onload = inicio;
function inicio() {
    boton = document.getElementById("cargar");
    boton.addEventListener("click", descargaArchivo);
}

function cargaContenido(url, metodo) {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
    } if (peticion_http) {
        peticion_http.onreadystatechange = muestraContenido;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
    }
}

function muestraContenido() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
            coins = JSON.parse(peticion_http.responseText);
            console.log("coins = ");
            console.log(coins);
            procesarDatos(coins);
        }
    }
}


function procesarDatos(objJson) {
    let series = objJson;
    let datos = [];
    let monedas = ["bitcoin", "ethereum", "tether", "binancecoin", "usd-coin", "ripple", "cardano", "solana", "terra-luna", "binance-usd"];
    let titulos = ["id", "symbol", "name"];
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < titulos.length; j++) {
            datos.push(series[i][titulos[j]]);
        }
    }
    console.log("datos = ");
    console.log(datos);
    //   generarTabla(datos, titulos);

    let opciones = document.getElementById("select");
    opciones.onchange = datoCripto;
    crearSelect(select, monedas, coins);
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
}



function crearSelect(select, options, coins) {
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.value = options[i];
        console.log(options[i]);
        for (let j = 0; j < coins.length; j++) {
            if (option.value === coins[j]["id"]) {
                option.appendChild(document.createTextNode(coins[j]["name"]));
            }
        }
        select.appendChild(option);
    }
}

function datoCripto() {
    let objet;
    let moneda = select.value;
    console.log("moneda=" + moneda)
    fetch(`https://api.coingecko.com/api/v3/coins/${moneda}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            let datos_moneda = {
                name: data.name,
                symbol: data.symbol,
                image_url: data.image.large,
                current_price_eur: data.market_data.current_price.eur,
            };
            console.log("gola");
            console.log(datos_moneda.symbol);
            generarFicha(datos_moneda)
            guardar_moneda(datos_moneda)
        })
        .catch((err) => console.log(err));




}

function generarFicha(cripto) {
    console.log(cripto);
    console.log(cripto.symbol);
    console.log(cripto.name);
    console.log(cripto.image_url);

    let ficha = document.getElementById("ficha");


    let name = document.createElement("h1");
    name.appendChild(document.createTextNode(cripto.name));

    let img = document.createElement("img");
    img.src = cripto.image_url;

    let precio = document.createElement("p");
    precio.appendChild(document.createTextNode(cripto.current_price_eur + "€"));

    let simbolo = document.createElement("p");
    simbolo.appendChild(document.createTextNode(cripto.symbol));

    ficha.appendChild(name);
    ficha.appendChild(img);
    ficha.appendChild(precio);
    ficha.appendChild(simbolo);
}

function guardar_moneda(moneda) {
    console.log("se guarda");
    fetch("guardar_moneda.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(moneda),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err));
}
