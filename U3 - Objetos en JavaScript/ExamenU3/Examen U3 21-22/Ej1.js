class Carta {
    constructor(tipo) {
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
}

class Baraja {
    constructor() {
        this._cartas = [];
        this.generarBaraja(this._cartas);
    }
    get contenido() {
        return this._cartas;
    }
    generarBaraja(array) {
        let cCamino = 44;
        let cCaminoPuestas = 0;
        let cAccion = 27;
        let ccAccionPuestas = 0;
        let longitud = 71;

        let aleatorio = Math.floor(Math.random() * (2));
        console.log(aleatorio);
        for (let i = 0; i < longitud; i++) {
            if (aleatorio === 1 && cCaminoPuestas <= 43) {
                array[i] += new Carta("camino");
                cCaminoPuestas++;
            } else if (ccAccionPuestas <= 26) {
                array[i] += new Carta("accion");
                ccAccionPuestas++;
            }
        }
    }
}

class Jugador {
    constructor(tipo) {
        this._tipoJ = tipo;
        this._cartas = [];
    }
    get tipoJ() {
        return this._tipoJ;
    }
    get mano() {
        return this._cartas;
    }
    recibirCarta(card) {
        this._cartas.push(card);
    }
    toString() {
        let cadena = "";
        cadena = this._tipoJ + ": " + this._cartas.toString();
        return cadena;
    }
}

class Saboteur {
    constructor(array) {
        this._jugadores = array;
        this._baraja = new Baraja();
    }
    get jugadores() {
        return this._jugadores;
    }
    get baraja() {
        return this._baraja;
    }
    repartir_cartas() {
        let cartasR = 0;
        for (var i = 0; i < this._jugadores.length; i++) {
            let player = this._jugadores[i];
            if (cartasR <= 65) {
                for (var j = 0; j < 6; j++) {
                    player.recibirCarta(this._baraja.contenido[cartasR]);
                    cartasR++;
                    player.mano.reverse();
                    player.mano.pop();
                    player.mano.reverse();
                }
            }
        }
    }
}

j1 = new Jugador("minero");
j2 = new Jugador("minero");
j3 = new Jugador("minero");
j4 = new Jugador("saboteador");
j5 = new Jugador("saboteador");

let partida = [j1, j2, j3, j4, j5];


let data1 = document.getElementById("J1");
let data2 = document.getElementById("J2");
let data3 = document.getElementById("J3");
let data4 = document.getElementById("J4");
let data5 = document.getElementById("J5");



s1 = new Saboteur(partida);
data1.innerHTML = j1.toString();
data2.innerHTML = j2.toString();
data3.innerHTML = j3.toString();
data4.innerHTML = j4.toString();
data5.innerHTML = j5.toString();

s1.repartir_cartas();
console.log(s1);
