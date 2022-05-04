if(!JSON.parse(localStorage.getItem("carrito"))) {
    localStorage.setItem("carrito",JSON.stringify([]))
}
const carritoInicial = JSON.parse(localStorage.getItem("carrito"));
const carrito = carritoInicial;


    // ARRAY CAFETERIA
const objCafeteria = [
    {producto: "Café c/s leche doble",
    precio: 120,
    img: "/IMG/cafe.jpg",
    id: "cafe",
    p: "El café con leche es una bebida de café común en España y América Latina <br> que consiste en café fuerte (generalmente espresso) mezclado con leche escaldada en cantidades aproximadamente iguales."},

    {producto: "Matecocido o té", 
    precio: 100,
    img: "/IMG/te.jpg",
    id: "te",
    p: "El té proviene principalmente de <br> China continental, <br> India, Sri Lanka, Taiwán, <br> Japón, Nepal, Australia, <br> Argentina y Kenia."},

    {producto:  "Capuccino", 
    precio: 140,
    img: "/IMG/capuccino.jpeg",
    id : "capuccino",
    p: "El capuchino (del italiano cappuccino) <br> es una bebida nacida en Italia, <br> preparada con café expreso y <br> leche montada con vapor <br> para darle cremosidad."},

    {producto: "Medialunas dulces/saladas", 
    precio: 80,
    img: "/IMG/medialuna.jpg",
    id: "medialuna",
    p: "En Argentina, Chile, Paraguay y Uruguay, el término medialuna es un panificado dulce/salado elaborado para comer en el desayuno o la merienda, también llamado croissant."},
    
    {producto:     "Tostado",
    precio: 300,
    img: "/IMG/tostado.jpg",
    id: "tostado",
    p: "Un tostado es un sándwich de miga <br> que se tuesta <br> hasta que sus tapas <br> de miga queden doradas y crocantes. <br> El más común es el de jamón y queso."},

    {producto: "Carlito común",
    precio: 350,
    img: "/IMG/carlito.jpg",
    id: "carlito",
    p: "Al igual que el tostado se tuesta de <br> ambos lados, la diferencia es que está preparado <br> con jamón, queso, pan de miga, manteca y ketchup."}
]

for (let i = 0; i < objCafeteria.length; i++) {
    const element = objCafeteria[i];
    const div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("id", element.id)
    const p = document.createElement("p");
    p.classList.add("parrafo");
    div.innerHTML = `<span class="span_card" >${element.producto + " $" + element.precio}</span>
                     <div class="img_card">
                        <img src=${element.img} alt="fotoProducto" />
                     </div>
                     <p class="parrafo_caracteristicas">${element.p}</p>
                    
                     <button class="btn_comprar">comprar</button>`;
    const section = document.getElementById("nuestra_carta"); 
    section.appendChild(div);
    section.appendChild(p);
}

/* BOTON COMPRAR */

let comprar = document.getElementsByClassName("btn_comprar");

for (let i = 0; i < comprar.length; i++) {
    const element = comprar[i];
    element.addEventListener("click", clickCafe);
}

function clickCafe (e) {
    const evento = e.target
    const nombreProducto = evento.parentNode.getAttribute("id");

    function finderId(item) {
        return (item.id == nombreProducto);
    }

    const producto = objCafeteria.find(finderId);
    carrito.push(producto);
    localStorage.setItem("carrito",JSON.stringify(carrito));
   
    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = nombreProducto;
   

     /*LIBRERIA PARA PONER ALERTS*/
    Swal.fire({
        icon: 'success',
        backdrop: 'rgb(24, 37, 44)',
        imageWidth: 400,
        imageHeight: 360,
        background: 'black',
        title: '¡Nuevo producto al carrito!',
        showConfirmButton: false,
        color: 'green',
        timer: 1500
    })    
}


/* VER TOTAL */ 
    let ver_total = document.getElementById("ver_total");
    ver_total.addEventListener("click", verTotal);

    function verTotal() {
        
   
}



// /* SALIR */

// let sali = document.getElementById("salir");
// sali.addEventListener("click", salir);


// function salir() {
//     document.getElementById("carrito_menu").style.display = 'none';
//     document.getElementById("botones").style.display = 'none';
// }

