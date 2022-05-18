if(!JSON.parse(localStorage.getItem("carrito"))) {
    localStorage.setItem("carrito",JSON.stringify([]))
}
const carritoInicial = JSON.parse(localStorage.getItem("carrito"));
const carrito = carritoInicial;


if(!JSON.parse(localStorage.getItem("total"))) {
    localStorage.setItem("total",JSON.stringify([]))
}
const totalIni = JSON.parse(localStorage.getItem("total"));
const totalStore = totalIni;



    // ARRAY CAFETERIA
const objCafeteria = [
    {producto: "Cafe c/s leche doble",
    precio: 120,
    img: "/IMG/cafe.jpg",
    id: "Cafe c/s leche doble $120 \n",
    idPrecio: 120,
    p: "El café con leche es una bebida de café común en España y América Latina <br> que consiste en café fuerte (generalmente espresso) mezclado con leche escaldada en cantidades aproximadamente iguales.",
    amount: 1},

    {producto: "Matecocido o té", 
    precio: 100,
    img: "/IMG/te.jpg",
    id: "Matecocido o té $100 \n",
    idPrecio: 100,
    p: "El té proviene principalmente de <br> China continental, <br> India, Sri Lanka, Taiwán, <br> Japón, Nepal, Australia, <br> Argentina y Kenia.",
    amount: 1},

    {producto:  "Capuccino", 
    precio: 140,
    img: "/IMG/capuccino.jpeg",
    id : "Capuccino $140 \n",
    idPrecio: 140,
    p: "El capuchino (del italiano cappuccino) <br> es una bebida nacida en Italia, <br> preparada con café expreso y <br> leche montada con vapor <br> para darle cremosidad.",
    amount: 1},

    {producto: "Lagrima",
    precio: 150,
    img: "/IMG/lagrima.jpg",
    id: "Lagrima $150 \n",
    idPrecio: 150,
    p: "Si el café te gusta en sus versiones más suaves y cremosas, <br> una lágrima es la bebida caliente ideal para tí. <br> Es una bebida inspirada en el macciato pero con las proporciones al revés. <br> Alrededor de un 10% de café.",
    amount: 1},

    {producto: "Licuado de banana",
    precio: 160,
    img: "/IMG/banana.jpg",
    id: "Licuado de banana $160\n",
    idPrecio: 160,
    p: "El café con leche es una bebida de café común en España y América Latina <br> que consiste en café fuerte (generalmente espresso) mezclado con leche escaldada en cantidades aproximadamente iguales.",
    amount: 1},

    {producto: "Exprimido de naranja",
    precio: 140,
    img: "/IMG/naranja.jpg",
    id: "Exprimido de naranja $140\n",
    idPrecio: 140,
    p: "El zumo de naranja exprimido puede ser incluido en una dieta con “comida real”, saludable y equilibrada. <br> Concretamente, se recomienda tomar 1 vaso al día de 250 ml.",
    amount: 1},



    {producto: "Medialunas dulces/saladas", 
    precio: 80,
    img: "/IMG/medialuna.jpg",
    id: "Medialunas dulces/saladas $80 \n",
    idPrecio: 80,
    p: "En Argentina, Chile, Paraguay y Uruguay, el término medialuna es un panificado dulce/salado elaborado para comer en el desayuno o la merienda, también llamado croissant.",
    amount: 1},

    {producto: "Tostado",
    precio: 300,
    img: "/IMG/tostado.jpg",
    id: "Tostado $300 \n",
    idPrecio: 300,
    p: "Un tostado es un sándwich de miga <br> que se tuesta <br> hasta que sus tapas <br> de miga queden doradas y crocantes. <br> El más común es el de jamón y queso.",
    amount: 1},

    {producto: "Carlito común",
    precio: 350,
    img: "/IMG/carlito.jpg",
    id: "Carlito común $350 \n",
    idPrecio: 350,
    p: "Al igual que el tostado se tuesta de <br> ambos lados, la diferencia es que está preparado <br> con jamón, queso, pan de miga, manteca y ketchup.",
    amount: 1},
]


for (let i = 0; i < objCafeteria.length; i++) {
    const element = objCafeteria[i];
    
    const div = document.createElement("div");
   
    div.classList.add("card","filtro_card");
   
    div.setAttribute("id", element.id)

    const p = document.createElement("p");
    p.classList.add("parrafo");

    const a = document.createElement("span");
  

    div.innerHTML = `<span class="span_card" >${element.producto + " $" + element.precio}</span>
                     <div class="img_card">
                        <img src=${element.img} alt="fotoProducto" />
                     </div>
                     <p class="parrafo_caracteristicas">${element.p}</p>
                     <span class="amount">${element.amount}</span>
                     <button class="btn_comprar">comprar</button>
                     `;  
    
    const section = document.getElementById("nuestra_carta"); 
    section.appendChild(div);
    section.appendChild(p);
    section.appendChild(a);
}


/* BOTON COMPRAR */
let buyThings = [];
const productoss = [];
const total = [];
const reducer = (accumulator, curr) => accumulator + curr;

let comprar = document.getElementsByClassName("btn_comprar");


    for (let i = 0; i < comprar.length; i++) {
    const element = comprar[i];
    element.addEventListener("click", clickComprar);
    }

    function clickComprar (e) {

    const evento = e.target
    const nombreProducto = evento.parentNode.getAttribute('id');


    function finderId(item) {
        return (item.id == nombreProducto);
    }

    const producto = objCafeteria.find(finderId);
    productoss.push(nombreProducto);
    carrito.push(producto);
    localStorage.setItem("carrito",JSON.stringify(carrito));

 //ACÁ TERMINA EL PRODUCTO
 

    let imprime_numero2 = document.getElementById("carrito_cafeteria");
    imprime_numero2.innerText = "carrito" + " " + productoss.length;

    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = productoss.reduce(reducer);
   
     /*LIBRERIA PARA PONER ALERTS*/
    Swal.fire({
        icon: 'success',
        imageWidth: 400,
        imageHeight: 360,
        background: 'transparent',
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
        
        let imprime_resultado = document.getElementById("carrito_menu");
        imprime_resultado.innerText = productoss.length;
    }
    

    

    // CLICK CARD


    // CLICK CARRITO

    let carrito2 = document.getElementById("carrito");
    let carrito22 = document.getElementById("carrito_cafeteria");
    carrito22.addEventListener("click", clickCarrito);
    carrito2.addEventListener("click", clickCarrito);

    function clickCarrito() {
        document.getElementById("nuestra_carta").style.visibility = 'hidden';
        document.getElementById("buscador").style.visibility = 'hidden';

        document.getElementById("carrito_menu").style.visibility = 'visible';
        document.getElementById("botones").style.visibility = 'visible';
    }


    // CARRITO SALIR

    let salir = document.getElementById("salir");
    salir.addEventListener("click", clickSalir);

    function clickSalir(){
        document.getElementById("carrito_menu").style.visibility = 'hidden';
        document.getElementById("botones").style.visibility = 'hidden';

        document.getElementById("nuestra_carta").style.visibility = 'visible';
        document.getElementById("section1").style.visibility = 'visible';
        document.getElementById("buscador").style.visibility = 'visible';
      
    }

