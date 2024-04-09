const products = [
    {"id":1,  "stock":20, "product":"Final Fantasy VIII", "description":"juego fisico de ff8" , "price": "15" , "image":"./img/ff8FISICO.png" , "category":"juego"},


    {"id":2,  "stock":20, "product":"Final Fantasy IX", "description":"juego fisico de ff9" , "price": "15" , "image":"./img/ff9FISICO.png" ,"category":"juego"},

    
    {"id":3,  "stock":20, "product":"Final Fantasy XVI", "description":"juego fisico de ff16" , "price": "25" , "image":"./img/ff16FISICO.png" , "category":"juego"},


    {"id":4,  "stock":20, "product":"Cosplay COMPLETO ff14", "description":"cosplay completo de ff14" , "price": "100" , "image":"./img/ff14COS.png" ,"category":"cosplay"},


    {"id":5,  "stock":20, "product":"Cosplay COMPLETO Tifa", "description":"cosplay completo de tifa" , "price": "100" , "image":"./img/tifaCOS.png" ,"category":"cosplay"},


    {"id":6,  "stock":20, "product":"Tifa Peluca Pelo Real", "description":"peluca de tifa para cosplay" , "price": "20" , "image":"./img/tifaPELUCA.png" ,"category":"cosplay"},


    {"id":7,  "stock":20, "product":"Agrias Final Fantasy Tactics Figura", "description":"figura de final fantasy tactics agrias" , "price": "50" , "image":"./img/muñecoAGRIAS.png" ,"category":"figura"},


    {"id":8,  "stock":20, "product":"Cloud Final Fantasy VII Figura", "description":"figura de final fantasy 7 cloud" , "price": "50" , "image":"./img/muñecoCloud.png" ,"category":"figura"},


    {"id":9,  "stock":20, "product":"Serah Final Fantasy XIII Figura", "description":"figura de final fantasy 13 serah" , "price": "50" , "image":"./img/muñecoFF13.png" ,"category":"figura"}
];

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
    botonProductos.setAttribute("id", "all")
    botonProductos.addEventListener("click", (allProducts));
        const iconoProductos = document.createElement("i");
            iconoProductos.setAttribute("class","bi bi-cursor-fill");

const listaFiguras = document.createElement("li");
    listaFiguras.classList.add("asideNavList")

    const botonFiguras = document.createElement("button");
        botonFiguras.innerHTML = "Figuras Coleccionables    "
        botonFiguras.classList.add("botonProductos");
        botonFiguras.setAttribute("id", "figura");
        botonFiguras.addEventListener("click", (e));
        
            const iconoFiguras = document.createElement("i");
                iconoFiguras.setAttribute("class","bi bi-tropical-storm");

const listaVestimenta = document.createElement("li");
    listaVestimenta.classList.add("asideNavList")

    const botonVestimenta = document.createElement ("button");
        botonVestimenta.innerHTML = "Vestimenta/Cosplay  "
        botonVestimenta.classList.add("botonProductos");
        botonVestimenta.setAttribute("id", "cosplay")
        botonVestimenta.addEventListener("click", (e));
            const iconoVestimenta = document.createElement("i");
                iconoVestimenta.setAttribute("class","bi bi-person-arms-up");

const listaJuegos = document.createElement("li");
    listaJuegos.classList.add("asideNavList")

    const botonJuegos = document.createElement ("button");
        botonJuegos.innerHTML = "Juegos Oficiales    "
        botonJuegos.classList.add("botonProductos");
        botonJuegos.setAttribute("id", "juego")
        botonJuegos.addEventListener("click", (e));
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

    function allProducts() {

        sectionProductos.innerHTML="";

        products.forEach(product => {

             const divProducto = document.createElement("div")
            divProducto.classList.add("product");
            divProducto.innerHTML = 
            `
            <div class="productoFoto">
                <img class="foto" src="${product.image}" alt="${product.description}">
            </div>
            <div class="productoInfo">
                <h3 class="productoNombre">${product.product}</h3>
                <h4 class="precioProducto">${product.price}</h4>
            <button class="botonCompra" id="${product.id}">Agregar al Carro</button>
            </div>
            
            `

        sectionProductos.appendChild(divProducto);

        })

    }


allProducts()

function categorys () {

    sectionProductos.innerHTML="";

    const productsButton = products.filter(producto => producto.category.id === e.currentTarget.id);
    allProducts(productsButton);
        
}


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

document.body.append(footer);
    footer.appendChild(p);