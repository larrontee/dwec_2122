window.onload = inicio();
function inicio() {
    generate_html();
}


function generate_html() {
    let container = getId("container");
    let div1 = creatElem("div");
    let div2 = creatElem("div");
    let div3 = creatElem("div");
    let div4 = creatElem("div");
    let div5 = creatElem("div");
    let div6 = creatElem("div");
    let p1 = creatElem("p");//hay texto dentro
    let div7 = creatElem("div");
    let p2 = creatElem("p");
    let div8 = creatElem("div");
    let p3 = creatElem("p");
    let a1 = creatElem("a");
    let span1 = creatElem("span");
    let span2 = creatElem("span");
    let a2 = creatElem("a");
    let span3 = creatElem("span");
    let span4 = creatElem("span");
    let coment1 = document.createComment(".md-lite-share");// hijo de div 3

    let div9 = creatElem("div");
    let div10 = creatElem("div");
    let a3 = creatElem("a");
    //hay texto Suscripción al Diario en papel
    let span5 = creatElem("span");
    let div11 = creatElem("div");
    let ul1 = creatElem("ul");
    let li1 = creatElem("li");
    let a4 = creatElem("a");
    let coment2 = document.createComment(".box");// hijo de div 3
    let coment3 = document.createComment(".inner-nav-special");// hijo de div 3
    let div12 = creatElem("div");
    let a5 = creatElem("a");
    // Suscripción al Diario en PDF
    let span6 = creatElem("span");
    let div13 = creatElem("div");
    let div14 = creatElem("div");
    let div15 = creatElem("div");
    let img1 = creatElem("div");
    let div16 = creatElem("div");
    let p4 = creatElem("p");
    let b1 = creatElem("b");
    let i1 = creatElem("i");
    let a6 = creatElem("a");
    let span7 = creatElem("span");
    let coment4 = document.createComment(".md-pdf-link");// hijo de div 3
    let coment5 = document.createComment(".box");// hijo de div 3
    let coment6 = document.createComment(".inner-nav-special");// hijo de div 3



    setAtt(div1, "id", "layerNavAll");
    setAtt(div1, "class", "droplayer");
    setAtt(div2, "class", "inner");
    setAtt(div3, "class", "inner-nav");
    setAtt(div4, "class", "nav-section-layer limiter");
    setAtt(div5, "class", "inner-nav-header");
    setAtt(div6, "class", "inner-nav-row");
    setAtt(p1, "class", "nav-title");
    setAtt(div7, "class", "box");
    //va p vacia
    setAtt(div8, "class", "md-lite-share");
    //se abre etiqueta p
    setAtt(a1, "class", "btn facebook small");
    setAtt(a1, "href", "https://www.facebook.com/diariodecadiz/");
    setAtt(a1, "target", "_blank");
    setAtt(a1, "rel", "noopener noreferrer");
    setAtt(span1, "class", "fa ico ico-facebook-circle");
    setAtt(span2, "class", "inner-text");// tiene texto dentro
    setAtt(a2, "class", "btn twitter small");
    setAtt(a2, "href", "https://twitter.com/diariocadiz");
    setAtt(a2, "target", "_blank");
    setAtt(a2, "rel", "noopener noreferrer");
    setAtt(span3, "class", "fa ico ico-twitter-circle");
    setAtt(span4, "class", "inner-text");
    //comentario
    setAtt(div9, "class", "inner-nav-body");
    setAtt(div10, "class", "inner-nav-special");
    setAtt(a3, "class", "lnk");
    setAtt(a3, "href", "https://diariodecadiz.clubsuscriptor.es/");
    setAtt(a3, "title", "Suscripción al Diario en papel");
    setAtt(a3, "target", "_blank");
    //texto
    setAtt(span5, "class", "fa ico ico-caret-right");
    setAtt(div11, "class", "box");
    //ul li 
    setAtt(a4, "class", "lnk");
    setAtt(a4, "href", "https://diariodecadiz.clubsuscriptor.es/");
    setAtt(a4, "title", "Suscríbete a la edición de papel de Diario de Cádiz");
    setAtt(a4, "target", "_blank");
    // texto
    // coment
    // coment
    setAtt(div12, "class", "inner-nav-special");
    setAtt(a5, "class", "lnk");
    setAtt(a5, "href", "http://www.pdfinteractivo.es/cadiz");
    setAtt(a5, "title", "Suscripción al Diario en PDF");
    setAtt(a5, "target", "_blank");
    // texto
    setAtt(span6, "class", "fa ico ico-caret-right");
    setAtt(div13, "class", "box");
    setAtt(div14, "class", "md-pdf-link md");
    setAtt(div15, "class", "image");
    setAtt(img1, "src", "https://www.diariodecadiz.es/static/BB3HTML/images/devices.png?hash=7626712fc5a45e45982059abe2351069");
    setAtt(img1, "width", "121");
    setAtt(img1, "height", "63");
    setAtt(img1, "alt", "Multiple devices");
    setAtt(div16, "class", "claim");
    // p b i 
    setAtt(a6, "class", "btn primary small");
    setAtt(a6, "href", "http://www.pdfinteractivo.es/cadiz");
    setAtt(a6, "title", "Suscríbete");
    setAtt(a6, "target", "_blank");
    setAtt(span7, "class", "text");
    // coment
    // coment




    container.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(div5);
    div5.appendChild(div6);
    div4.appendChild(div9);
    div6.appendChild(p1);
    div6.appendChild(div7);
    div7.appendChild(p2);
    div7.appendChild(div8);
    div7.appendChild(coment2);
    div8.appendChild(p3);
    div8.appendChild(coment1);
    p3.appendChild(a2);
    a2.appendChild(span3);

    span3.appendChild(span4);
    span4.appendChild(document.createTextNode("Twitter"));



    div9.appendChild(div10);
    div9.appendChild(div12);
    div10.appendChild(a3);
    div10.appendChild(div11);
    div10.appendChild(coment3);

    a3.appendChild(document.createTextNode("Suscripción al Diario en papel"));

    div11.appendChild(a4);
    ul1.appendChild(li1);
    li1.appendChild(a4);
    a4.appendChild(document.createTextNode("Suscríbete a la edición de papel de Diario de Cádiz"));

    div12.appendChild(a5);
    div12.appendChild(div13);
    div12.appendChild(coment6);

    a5.appendChild(docuemnt.createTextNode("Suscripción al Diario en PDF"));
    a5.appendChild(span6);

    div13.appendChild(div14);
    div13.appendChild(coment5);

    div14.appendChild(div15);
    div14.appendChild(div16);
    div14.appendChild(coment4);

    div15.appendChild(img1);

    div16.appendChild(p4);
    p4.appendChild(b1);
    b1.appendChild(document.createTextNode("Consulta en PDF"));
    p4.appendChild(i1);
    i1.appendChild(document.createTextNode("toda la información"));
    p4.appendChild(document.createTextNode("en tu dispositivo favorito"));
    a6.appendChild(span7);





}



function generate_inner_nav_row(titulo, lista) {
    let div1 = creatElem("div");
    setAtt(div1, "class", "inner-nav-row");
    let a1 = creatElem("a");
    setAtt(a1, "class", "lnk");
    setAtt(a1, "href", "/cadiz/");
    setAtt(a1, "title", titulo);
    a1.appendChild(document.createTextNode(titulo));
    let div2 = creatElem("div");
    setAtt(div2, "class", "box");
    let ul = creatElem("ul");
    let li1 = creatElem("li");
    let a2= creatElem("a");
    setAtt(a2, "class", "lnk");
    
    let li2 = creatElem("li");
    let a3= creatElem("a");
}

function creatElem(e) {
    return document.createElement(e);
}

function getId(id) {
    return document.getElementById(id);
}

function setAtt(e, att, value) {
    e.setAttribute(att, value);
}