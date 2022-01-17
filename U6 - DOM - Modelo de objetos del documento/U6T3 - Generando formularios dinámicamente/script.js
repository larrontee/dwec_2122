
// Crea de manera dinámica (es decir, al cargarse la página) el formulario que definimos en el tema anterior (tarea U4T1).
// Ten en cuenta que el formulario deberá tener los atributos necesarios para que, al crearse, tenga la misma funcionalidad
// que el que creaste en html.
// No olvides añadir las etiquetas <label> a cada uno de los elementos.

window.onload = crearForm();



function crearForm() {
    let listaBody = document.getElementsByTagName("body");
    let body = listaBody[0];
    let formulario = document.createElement("form");


    let etiquetaDisco = document.createElement("label");
    etiquetaDisco.setAttribute("for", "Nombre disco");
    etiquetaDisco.appendChild(document.createTextNode("Nombre del disco "));
    formulario.appendChild(etiquetaDisco);

    let inputDisco = document.createElement("input");
    inputDisco.setAttribute("name", "nombre disco");
    formulario.appendChild(inputDisco);
    formulario.appendChild(document.createElement("br"));


    let etiquetaGrupo = document.createElement("label");
    etiquetaGrupo.setAttribute("for", "Nombre autor");
    etiquetaGrupo.appendChild(document.createTextNode("Nombre del autor "));
    formulario.appendChild(etiquetaGrupo);

    let inputGrupo = document.createElement("input");
    inputGrupo.setAttribute("name", "nombre autor");

    formulario.appendChild(inputGrupo);
    formulario.appendChild(document.createElement("br"));



    let etiquetaAno = document.createElement("label");
    etiquetaAno.setAttribute("for", "Año publicación");
    etiquetaAno.appendChild(document.createTextNode("Año de publicación "));
    formulario.appendChild(etiquetaAno);

    let inputAno = document.createElement("input");
    inputAno.setAttribute("type", "date")
    inputAno.setAttribute("name", "Año");
    formulario.appendChild(inputAno);
    formulario.appendChild(document.createElement("br"));




    let etiquetaTipo = document.createElement("label");
    etiquetaTipo.setAttribute("for", "Tipo de musica");
    etiquetaTipo.appendChild(document.createTextNode("Tipo de musica "));
    formulario.appendChild(etiquetaTipo);

    let inputTipo = document.createElement("select");
    inputTipo.setAttribute("name", "tipo de musica");
    let op1 = document.createElement("option")
    op1.setAttribute("value", "rock");
    op1.appendChild(document.createTextNode("rock"))
    inputTipo.appendChild(op1);

    let op2 = document.createElement("option")
    op2.setAttribute("value", "pop");
    op2.appendChild(document.createTextNode("pop"))
    inputTipo.appendChild(op2);

    let op3 = document.createElement("option")
    op3.setAttribute("value", "rock");
    op3.appendChild(document.createTextNode("punk"))
    inputTipo.appendChild(op3);

    let op4 = document.createElement("option")
    op4.setAttribute("value", "indie");
    op4.appendChild(document.createTextNode("indie"))
    inputTipo.appendChild(op4);


    formulario.appendChild(inputTipo);
    formulario.appendChild(document.createElement("br"));






    let etiquetaUbi = document.createElement("label");
    etiquetaUbi.setAttribute("for", "Ubicacion");
    etiquetaUbi.appendChild(document.createTextNode("Ubicacion "));
    formulario.appendChild(etiquetaUbi);

    let inputUbi = document.createElement("input");
    inputUbi.setAttribute("type", "number")
    formulario.appendChild(inputUbi);
    formulario.appendChild(document.createElement("br"));




    let etiquetaPrestado = document.createElement("label");
    etiquetaPrestado.setAttribute("for", "prestado");
    etiquetaPrestado.appendChild(document.createTextNode("prestado "));
    formulario.appendChild(etiquetaPrestado);

    let labelSi = document.createElement("label");
    let si = document.createTextNode("Si ");
    labelSi.appendChild(si);
    formulario.appendChild(labelSi);

    let radioSi = document.createElement("input");
    radioSi.setAttribute("type", "radio");
    formulario.appendChild(radioSi);


    let labelNo = document.createElement("label");
    let no = document.createTextNode("No");
    labelSi.appendChild(no);
    formulario.appendChild(labelNo);

    // let radioNo = document.createElement("input");
    // radioNo.setAttribute("type", "radio");
    // radioNo.setAttribute("checked");

    // formulario.appendChild(radioNo);







    body.appendChild(formulario);
    formulario.appendChild(document.createElement("br"));
}
