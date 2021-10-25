let ventana;

function crearVentana() {
    let confirmacion = confirm("¿Está de acuerdo en abrir una nueva ventana?");

    if (confirmacion) {
        ventana = window.open(
            "",
            "",
            "toolbar=no,location=no,resizable=no,width=200,height=80,top=500,left=500"
        );

        ventana.document.write(
            '<p>pequeño texto</p><button onclick="window.close()">cerrar</button>'
        );
        for (let i = 0; i < 400; i++) {
            ventana.document.write("<br/>");
        }
    } else {
        alert("Se ha denegado la creacion de una ventana.");
    }
}

function cerrarVentana() {
    if (ventana != null && !ventana.closed) {
        ventana.close();
    } else {
        alert("La ventana ya está cerrada");
    }
}

function moverVentanax10() {
    if (ventana != null && !ventana.closed) {
        ventana.moveBy(10, 10);
    } else {
        alert("La ventana está cerrada y no se puede realizar esa función.");
    }
}

function moverVentana() {
    if (ventana != null && !ventana.closed) {
        ventana.moveTo(100, 100);
    } else {
        alert("La ventana está cerrada y no se puede realizar esa función.");
    }
}

function aumentarx10() {
    if (ventana != null && !ventana.closed) {
        ventana.resizeBy(10, 10);
    } else {
        alert("La ventana está cerrada y no se puede realizar esa función.");
    }
}

function tamano400200() {
    if (ventana != null && !ventana.closed) {
        ventana.resizeTo(400, 200);
    } else {
        alert("La ventana está cerrada y no se puede realizar esa función.");
    }
}

function topScroll() {
    if (ventana != null && !ventana.closed) {
        ventana.scrollTo(0, 0);
    } else {
        alert("La ventana está cerrada y no se puede realizar esa función.");
    }
}

function topScroll10() {
    if (ventana != null && !ventana.closed) {
        ventana.scrollTo(0, 10);
    } else {
        alert("La ventana está cerrada y no se puede realizar esa función.");
    }
}



function abrirVentana() {
    window.open("");
}
