function Dado() {
    this.lanzar_dado = function () {
        valor = Math.random() * (6) + 1;
        return valor;
    }
}

function Jugador(nombre, color, quesiteles) {
    this.nombre = nombre;
    this.color_ficha = color;
    this.quesos = quesiletes;

    this.sumar_quesitele = function () {
        if (this.quesos <= 5) {
            this.quesos += 1
        }
    }
}
function Trivial() {
    this.jugadores = [];
    this.palmares = {}
}

// La clase Trivial hará uso de la anterior, y contendrá las siguientes propiedades:
//jugadores: Será un array de objetos Jugador que participan en una partida concreta.
//palmares: Será un objeto (un objeto simple, que no está asociado a una clase) que contiene tantas propiedades 
//como jugadores distintos, y su valor será el número de veces que han respondido bien a una pregunta, y el número de quesiletes que ostenta.
//Ejemplo:
//{ "Jose": { "puntos": 1, "quesiletes": 0 }, "Ana": { "puntos": 5, "quesiletes": 4 } }
// No es necesario tener en cuenta que los jugadores se pueden llamar igual. Supondremos que son todos distintos.