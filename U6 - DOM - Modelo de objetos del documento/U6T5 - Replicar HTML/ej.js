window.onload = inicio();

function inicio() {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let article1 = document.createElement("article");
    let div3 = document.createElement("div");
    let img1 = document.createElement("img");
    let div4 = document.createElement("div");
    let figure1 = document.createElement("figure");
    let div5 = document.createElement("div");
    let span1 = document.createElement("span");
    let div6 = document.createElement("div");
    let a1 = document.createElement("a");
    let img2 = document.createElement("img");
    let div7 = document.createElement("div");
    let div8 = document.createElement("div");
    let div9 = document.createElement("div");
    let div10 = document.createElement("div");
    let a2 = document.createElement("a");
    let h3 = document.createElement("h3");

    div = document.getElementById("div");

    div1.setAttribute("class", "grid__column_space1of4-3Auw grid__column-2zuc");
    div2.setAttribute("class", "grid__card-1AMl grid__is_not_ad-3CXE");
    article1.setAttribute("class", "cards__postcard-37d3 cards__postcardLandscape-3RIF cards__font_landscape_single_text_below_4_col-7iX7 cards__columns-4-YOiO background_color_zeta cards__no_has_section-3wNM");

    // div3 no añado nada
    img1.setAttribute("title", "");
    img1.setAttribute("class", "cards__snap_image-aOud");
    img1.setAttribute("loading", "lazy");
    img1.setAttribute("srcset", "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024 1024w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=800   800w, https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=768   768w, https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=640   640w, https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=600   600w, https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=480   480w, https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=360   360w, https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=320   320w");
    img1.setAttribute("size", "(min-width: 960px) 502px, (min-width: 768px) 50vw, 100vw");
    img1.setAttribute("alt", "");
    img1.setAttribute("pinger-seen", "true");


    div4.setAttribute("class", "cards__postcard__content-1w21");
    figure1.setAttribute("class", "cards__postcard__cnt_media-1R9F");
    div5.setAttribute("class", "cards__cnt_coin-2H_i");
    // div6 no se usa
    span1.setAttribute("class", "cards__postcard__channel-1-fM coin_undefined");
    // div7 no tiene atributo
    a1.setAttribute("href", "https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html");
    a1.setAttribute("class", "cards__link-1oHn");
    a1.setAttribute("target", "_self");
    img2.setAttribute("src", "");
    img2.setAttribute("title", "");
    img2.setAttribute("class", "cards__image-24d0");
    img2.setAttribute("loading", "lazy");
    img2.setAttribute("src", "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024");
    img2.setAttribute("srcset", "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024 1024w, https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=800   800w, https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=768   768w, https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=640   640w, https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=600   600w, https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=480   480w, https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=360   360w, https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=320   320w");
    img2.setAttribute("loading", "(min-width: 960px) 245px, (min-width: 768px) 50vw, 100vw");
    img2.setAttribute("alt", "Gal·la desvela en qué punto se encuentra con Miguel de Hoyos");
    img2.setAttribute("pinger-seen", "true");

    div8.setAttribute("class", "cards__postcard__cnt_info-21bV");
    div9.setAttribute("class", "sponsor__content-3-Ul sponsor__typeH-3Hjq sponsor__imgBand-2XTv");
    div10.setAttribute("data-agth", "cardTitle");
    a2.setAttribute("class", "color_eta");
    a2.setAttribute("href", "https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html");
    a2.setAttribute("target", "_self");
    h3.setAttribute("class", "site_font cards__postcard__paragraph-2EVg color_eta color_eta");

    h3.appendChild(document.createComment("Gal·la desvela en qué punto se encuentra su relación con Miguel tras su rechazo en 'La isla de las tentaciones'"));
    a2.appendChild(h3);
    div10.appendChild(a2);
    div8.appendChild(div9);
    div8.appendChild(div10);


    a1.appendChild(img2);
    div6.appendChild(span1);
    div5.appendChild(div6);
    div5.appendChild(div7);
    div5.appendChild(a1);
    figure1.appendChild(div5);
    div4.appendChild(figure1);

    div3.appendChild(img1);
    article1.appendChild(div3);
    article1.appendChild(div4);
    article1.appendChild(div8);
    div2.appendChild(article1);
    div1.appendChild(div2);

    div.appendChild(div1);
}

