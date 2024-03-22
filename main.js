const pagina = document.createElement("section");
    pagina.classList.add("pagina");

const header = document.createElement("header");
    header.classList.add("headerProducto");


const aside = document.createElement("aside");
    aside.classList.add("asideNav");

const logo = document.createElement("img");
    logo.setAttribute("src", "./img/Final_Fantasy_VIII_LogAAAAAAo.png");
    logo.classList.add("logo");

const asideNavBar = document.createElement("nav")
const ul = document.createElement("ul");
    ul.classList.add("asideNavList")

const listaProductos = document.createElement("li");

const botonProductos = document.createElement("button");
    botonProductos.innerHTML = "Todo  "
    botonProductos.classList.add("botonProductos")
        const iconoProductos = document.createElement("i");
            iconoProductos.setAttribute("class","bi bi-cursor-fill");

const listaFiguras = document.createElement("li");
    listaFiguras.classList.add("asideNavList")

    const botonFiguras = document.createElement("button");
        botonFiguras.innerHTML = "Figuras Coleccionables    "
        botonFiguras.classList.add("botonProductos");
            const iconoFiguras = document.createElement("i");
                iconoFiguras.setAttribute("class","bi bi-tropical-storm");

const listaVestimenta = document.createElement("li");
    listaVestimenta.classList.add("asideNavList")

    const botonVestimenta = document.createElement ("button");
        botonVestimenta.innerHTML = "Vestimenta/Cosplay  "
        botonVestimenta.classList.add("botonProductos");
            const iconoVestimenta = document.createElement("i");
                iconoVestimenta.setAttribute("class","bi bi-person-arms-up");

const listaJuegos = document.createElement("li");
    listaJuegos.classList.add("asideNavList")

    const botonJuegos = document.createElement ("button");
        botonJuegos.innerHTML = "Juegos Oficiales    "
        botonJuegos.classList.add("botonProductos");
            const iconoJuegos = document.createElement("i");
                iconoJuegos.setAttribute("class","bi bi-joystick");

const listaCarro = document.createElement("li");
    listaCarro.classList.add("asideNavList")

    const botonCarro = document.createElement("button");
        botonCarro.classList.add("botonCarro");

            const linkCarro = document.createElement("a");
                linkCarro.innerHTML = "Carro "
                linkCarro.setAttribute("href", "./pages/carro.html");
                linkCarro.classList.add("linkCarro");

                const iconoCarro = document.createElement("i");
                    iconoCarro.setAttribute("class", "bi bi-box-seam")
                    const numProductos = document.createElement("span");
                     numProductos.innerHTML = " 0 "
                     numProductos.classList.add("numeroProductos");



const main = document.createElement("main");
 main.classList.add("mainProducto");

    const h1 = document.createElement("h1");
        h1.classList.add("tituloIndex");
        h1.innerHTML = "P R O D U C T O S"

    const sectionProductos = document.createElement("section");
        sectionProductos.classList.add("productos");

    const divImagen1 = document.createElement("div");
    divImagen1.classList.add("productoFoto");

        const imagenProducto1 = document.createElement("img");
        imagenProducto1.classList.add("foto")
        imagenProducto1.setAttribute("src", "./img/ff8FISICO.png");

            const divProducto1 = document.createElement("div");
            divProducto1.classList.add("productoInfo");

                const nombreProducto1 = document.createElement("h3");
                nombreProducto1.classList.add("productoNombre");
                nombreProducto1.innerHTML = "Final Fantasy VIII"

                const precioProducto1 = document.createElement("h4");
                precioProducto1.classList.add("precioProducto");
                precioProducto1.innerHTML = "15 U$D"

                const botonCompra1 = document.createElement("button")
                botonCompra1.classList.add("botonCompra");
                botonCompra1.innerHTML = "Agregar al Carro"

    const divImagen2 = document.createElement("div");
    divImagen2.classList.add("productoFoto");

        const imagenProducto2 = document.createElement("img");
        imagenProducto2.classList.add("foto")
        imagenProducto2.setAttribute("src", "./img/ff9FISICO.png");

            const divProducto2 = document.createElement("div")
            divProducto2.classList.add("productoInfo");

                const nombreProducto2 = document.createElement("h3");
                nombreProducto2.classList.add("productoNombre");
                nombreProducto2.innerHTML = "Final Fantasy IX"

                const precioProducto2 = document.createElement("h4");
                precioProducto2.classList.add("precioProducto");
                precioProducto2.innerHTML = "15 U$D"

                const botonCompra2 = document.createElement("button")
                botonCompra2.classList.add("botonCompra");
                botonCompra2.innerHTML = "Agregar al Carro"

    const divImagen3 = document.createElement("div");
    divImagen3.classList.add("productoFoto");

        const imagenProducto3 = document.createElement("img");
        imagenProducto3.classList.add("foto")
        imagenProducto3.setAttribute("src", "./img/ff16FISICO.png");

            const divProducto3 = document.createElement("div")
            divProducto3.classList.add("productoInfo");

                const nombreProducto3 = document.createElement("h3");
                nombreProducto3.classList.add("productoNombre");
                nombreProducto3.innerHTML = "Final Fantasy XVI"

                const precioProducto3 = document.createElement("h4");
                precioProducto3.classList.add("precioProducto");
                precioProducto3.innerHTML = "25 U$D"

                const botonCompra3 = document.createElement("button")
                botonCompra3.classList.add("botonCompra");
                botonCompra3.innerHTML = "Agregar al Carro"

    const divImagen4 = document.createElement("div");
    divImagen4.classList.add("productoFoto");

        const imagenProducto4 = document.createElement("img");
        imagenProducto4.classList.add("foto")
        imagenProducto4.setAttribute("src", "./img/ff14COS.png");

            const divProducto4 = document.createElement("div")
            divProducto4.classList.add("productoInfo");

                const nombreProducto4 = document.createElement("h3");
                nombreProducto4.classList.add("productoNombre");
                nombreProducto4.innerHTML = "Cosplay COMPLETO ff14"

                const precioProducto4 = document.createElement("h4");
                precioProducto4.classList.add("precioProducto");
                precioProducto4.innerHTML = "100 U$D"

                const botonCompra4 = document.createElement("button")
                botonCompra4.classList.add("botonCompra");
                botonCompra4.innerHTML = "Agregar al Carro"

    const divImagen5 = document.createElement("div");
    divImagen5.classList.add("productoFoto");

        const imagenProducto5 = document.createElement("img");
        imagenProducto5.classList.add("foto")
        imagenProducto5.setAttribute("src", "./img/tifaCOS.png");

            const divProducto5 = document.createElement("div")
            divProducto5.classList.add("productoInfo");

                const nombreProducto5 = document.createElement("h3");
                nombreProducto5.classList.add("productoNombre");
                nombreProducto5.innerHTML = "Cosplay COMPLETO Tifa"

                const precioProducto5 = document.createElement("h4");
                precioProducto5.classList.add("precioProducto");
                precioProducto5.innerHTML = "100 U$D"

                const botonCompra5 = document.createElement("button")
                botonCompra5.classList.add("botonCompra");
                botonCompra5.innerHTML = "Agregar al Carro"

    const divImagen6 = document.createElement("div");
    divImagen6.classList.add("productoFoto");

        const imagenProducto6 = document.createElement("img");
        imagenProducto6.classList.add("foto")
        imagenProducto6.setAttribute("src", "./img/tifaPELUCA.png");

            const divProducto6 = document.createElement("div")
            divProducto6.classList.add("productoInfo");

                const nombreProducto6 = document.createElement("h3");
                nombreProducto6.classList.add("productoNombre");
                nombreProducto6.innerHTML = "Tifa Peluca Pelo Real"

                const precioProducto6 = document.createElement("h4");
                precioProducto6.classList.add("precioProducto");
                precioProducto6.innerHTML = "20 U$D"

                const botonCompra6 = document.createElement("button")
                botonCompra6.classList.add("botonCompra");
                botonCompra6.innerHTML = "Agregar al Carro"

    const divImagen7 = document.createElement("div");
    divImagen7.classList.add("productoFoto");

        const imagenProducto7 = document.createElement("img");
        imagenProducto7.classList.add("foto")
        imagenProducto7.setAttribute("id", "fotoAgrias");
        imagenProducto7.setAttribute("src", "./img/muñecoAGRIAS.png");

            const divProducto7 = document.createElement("div")
            divProducto7.classList.add("productoInfo");

                const nombreProducto7 = document.createElement("h3");
                nombreProducto7.classList.add("productoNombre");
                nombreProducto7.innerHTML = "Agrias Final Fantasy Tactics Figura"

                const precioProducto7 = document.createElement("h4");
                precioProducto7.classList.add("precioProducto");
                precioProducto7.innerHTML = "50 U$D"

                const botonCompra7 = document.createElement("button")
                botonCompra7.classList.add("botonCompra");
                botonCompra7.innerHTML = "Agregar al Carro"

    const divImagen8 = document.createElement("div");
    divImagen8.classList.add("productoFoto");

        const imagenProducto8 = document.createElement("img");
        imagenProducto8.classList.add("foto")
        imagenProducto8.setAttribute("src", "./img/muñecoCloud.png");

            const divProducto8 = document.createElement("div")
            divProducto8.classList.add("productoInfo");

                const nombreProducto8 = document.createElement("h3");
                nombreProducto8.classList.add("productoNombre");
                nombreProducto8.innerHTML = "Cloud Final Fantasy VII Figura"

                const precioProducto8 = document.createElement("h4");
                precioProducto8.classList.add("precioProducto");
                precioProducto8.innerHTML = "50 U$D"

                const botonCompra8 = document.createElement("button")
                botonCompra8.classList.add("botonCompra");
                botonCompra8.innerHTML = "Agregar al Carro"

    const divImagen9 = document.createElement("div");
    divImagen9.classList.add("productoFoto");

        const imagenProducto9 = document.createElement("img");
        imagenProducto9.classList.add("foto")
        imagenProducto9.setAttribute("src", "./img/muñecoFF13.png");

            const divProducto9 = document.createElement("div")
            divProducto9.classList.add("productoInfo");

                const nombreProducto9 = document.createElement("h3");
                nombreProducto9.classList.add("productoNombre");
                nombreProducto9.innerHTML = "Serah Final Fantasy XIII Figura"

                const precioProducto9 = document.createElement("h4");
                precioProducto9.classList.add("precioProducto");
                precioProducto9.innerHTML = "50 U$D"

                const botonCompra9 = document.createElement("button")
                botonCompra9.classList.add("botonCompra");
                botonCompra9.innerHTML = "Agregar al Carro"

const footer = document.createElement("footer");
    footer.classList.add("footer")
const p = document.createElement("p");
    p.innerHTML = "© SQUARE ENIX LOGO & IMAGE ILLUSTRATION:© MARTIN SUAREZ"
    p.classList.add("copyright");


document.body.append(pagina);
    pagina.appendChild(header);
        header.appendChild(aside);
            aside.appendChild(logo);
            aside.appendChild(asideNavBar);
             asideNavBar.appendChild(ul);
                    ul.appendChild(listaProductos);
                    ul.appendChild(listaFiguras);
                    ul.appendChild(listaVestimenta);
                    ul.appendChild(listaJuegos);
                    ul.appendChild(listaCarro);
                        listaProductos.append(botonProductos);
                            botonProductos.append(iconoProductos);
                        listaFiguras.append(botonFiguras);
                            botonFiguras.append(iconoFiguras);
                        listaVestimenta.append(botonVestimenta);
                            botonVestimenta.append(iconoVestimenta);
                        listaJuegos.append(botonJuegos);
                            botonJuegos.append(iconoJuegos);
                        listaCarro.append(botonCarro);
                            botonCarro.appendChild(linkCarro);
                            linkCarro.appendChild(numProductos);
                            numProductos.appendChild(iconoCarro);
    pagina.appendChild(main);
        main.appendChild(h1);
        main.appendChild(sectionProductos);
            sectionProductos.appendChild(divImagen1);
                divImagen1.appendChild(imagenProducto1);
                divImagen1.appendChild(divProducto1);
                    divProducto1.appendChild(nombreProducto1);
                    divProducto1.appendChild(precioProducto1);
                    divProducto1.appendChild(botonCompra1);
            sectionProductos.appendChild(divImagen2);
                divImagen2.appendChild(imagenProducto2);
                divImagen2.appendChild(divProducto2);
                    divProducto2.appendChild(nombreProducto2);
                    divProducto2.appendChild(precioProducto2);
                    divProducto2.appendChild(botonCompra2);
            sectionProductos.appendChild(divImagen3);
                divImagen3.appendChild(imagenProducto3);
                divImagen3.appendChild(divProducto3);
                    divProducto3.appendChild(nombreProducto3);
                    divProducto3.appendChild(precioProducto3);
                     divProducto3.appendChild(botonCompra3);
            sectionProductos.appendChild(divImagen4);
                divImagen4.appendChild(imagenProducto4);
                divImagen4.appendChild(divProducto4);
                    divProducto4.appendChild(nombreProducto4);
                    divProducto4.appendChild(precioProducto4);
                    divProducto4.appendChild(botonCompra4);
            sectionProductos.appendChild(divImagen5);
                divImagen5.appendChild(imagenProducto5);
                divImagen5.appendChild(divProducto5);
                    divProducto5.appendChild(nombreProducto5);
                    divProducto5.appendChild(precioProducto5);
                    divProducto5.appendChild(botonCompra5);
            sectionProductos.appendChild(divImagen6);
                divImagen6.appendChild(imagenProducto6);
                divImagen6.appendChild(divProducto6);
                    divProducto6.appendChild(nombreProducto6);
                    divProducto6.appendChild(precioProducto6);
                     divProducto6.appendChild(botonCompra6);
            sectionProductos.appendChild(divImagen7);
                divImagen7.appendChild(imagenProducto7);
                divImagen7.appendChild(divProducto7);
                    divProducto7.appendChild(nombreProducto7);
                    divProducto7.appendChild(precioProducto7);
                    divProducto7.appendChild(botonCompra7);
            sectionProductos.appendChild(divImagen8);
                divImagen8.appendChild(imagenProducto8);
                divImagen8.appendChild(divProducto8);
                    divProducto8.appendChild(nombreProducto8);
                    divProducto8.appendChild(precioProducto8);
                    divProducto8.appendChild(botonCompra8);
            sectionProductos.appendChild(divImagen9);
                divImagen9.appendChild(imagenProducto9);
                divImagen9.appendChild(divProducto9);
                    divProducto9.appendChild(nombreProducto9);
                    divProducto9.appendChild(precioProducto9);
                     divProducto9.appendChild(botonCompra9);
document.body.append(footer);
    footer.appendChild(p);