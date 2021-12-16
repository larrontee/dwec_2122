window.onload=inicio()

function inicio(){
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function invalido(e){
    e.className="invalido";
    e.focus();
}

function valido(e){
    e.className="valido";
}

function validar(evento){
    if(validar && confirm("quieres enviar?")){
        return true;
    }else{
        evento.preventDefault();
        return false;
    }
}

function vTitulo(){
    let elemento=document.getElementById("titulo");
    let titulo=document.getElementById("titulo").value;

    if(/^\w+$/.test(titulo)){
        validar(elemento);
        return true;
    }else{
        invalido(elemento);
        return false;
    }
}