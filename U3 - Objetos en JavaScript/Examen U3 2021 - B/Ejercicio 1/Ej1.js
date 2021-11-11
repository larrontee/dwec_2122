class Carta {
    constructor(palo, valor) {
        if (palo < 1 || palo > 4 || valor < 1 || valor > 10) {
            return null;
        } else {
            this._palo = palo;
            this._valor = valor;
        }
        this._valorPalo = ["Oros", "Copas", "Espadas", "Basto"];
        this._valorCarta = ["As de ", "Dos de ", "Tres de ", "Cuatro de ", "Cinco de ", "Seis de ", "Siete de ", "Sota de ", "Caballo de ", "Rey de "];
    }

    darvalor(palo, valor) {
        if (!(palo < 1 || palo > 4 || valor < 1 || valor > 10)) {
            this._palo = palo;
            this._valor = valor;
        }
    }

    toString() {
        return this._valorCarta[this._valor - 1] + this._valorPalo[this._palo - 1];
    }
}

class Baraja {
    constructor() {
        this._baraja = []
        let k = 0;
        for (var i = 0; i < Carta._valorPalo.length; i++) {
            for (var j = 0; j < Carta._valorCarta.length; j++) {
                this._baraja[k++] = new Carta(_valorCarta[j], _valorPalo[i]);
            }
            k = 0;
        }
    }

    toString() {
        let cadena = "";
        for (var i = 0; i < _baraja.length; i++) {
            cadena += this._baraja[i].toString() + "<br>";
            return cadena;
        }
    }
}


carta1 = new Carta(1, 1);
console.log(carta1.toString());
carta1.darvalor(3, 8);
console.log(carta1.toString());
baraja1 = new Baraja();
console.log(baraja1.toString());