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
    {producto: "Café c/s leche doble",
    precio: 120,
    img: "/IMG/cafe.jpg",
    id: "Café c/s leche doble $120 \n",
    idPrecio: 120,
    p: "El café con leche es una bebida de café común en España y América Latina <br> que consiste en café fuerte (generalmente espresso) mezclado con leche escaldada en cantidades aproximadamente iguales."},

    {producto: "Matecocido o té", 
    precio: 100,
    img: "/IMG/te.jpg",
    id: "Matecocido o té $100 \n",
    idPrecio: 100,
    p: "El té proviene principalmente de <br> China continental, <br> India, Sri Lanka, Taiwán, <br> Japón, Nepal, Australia, <br> Argentina y Kenia."},

    {producto:  "Capuccino", 
    precio: 140,
    img: "/IMG/capuccino.jpeg",
    id : "Capuccino $140 \n",
    idPrecio: 140,
    p: "El capuchino (del italiano cappuccino) <br> es una bebida nacida en Italia, <br> preparada con café expreso y <br> leche montada con vapor <br> para darle cremosidad."},

    {producto: "Medialunas dulces/saladas", 
    precio: 80,
    img: "/IMG/medialuna.jpg",
    id: "Medialunas dulces/saladas $80 \n",
    idPrecio: 80,
    p: "En Argentina, Chile, Paraguay y Uruguay, el término medialuna es un panificado dulce/salado elaborado para comer en el desayuno o la merienda, también llamado croissant."},
    
    {producto: "Tostado",
    precio: 300,
    img: "/IMG/tostado.jpg",
    id: "Tostado $300 \n",
    idPrecio: 300,
    p: "Un tostado es un sándwich de miga <br> que se tuesta <br> hasta que sus tapas <br> de miga queden doradas y crocantes. <br> El más común es el de jamón y queso."},

    {producto: "Carlito común",
    precio: 350,
    img: "/IMG/carlito.jpg",
    id: "Carlito común $350 \n",
    idPrecio: 350,
    p: "Al igual que el tostado se tuesta de <br> ambos lados, la diferencia es que está preparado <br> con jamón, queso, pan de miga, manteca y ketchup."}
]


for (let i = 0; i < objCafeteria.length; i++) {
    const element = objCafeteria[i];
    const div = document.createElement("div");
    const div2 = document.createElement("div");
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


  
      // ABRIR CARD


 // click.style.height = '770';




/* BOTON COMPRAR */
const productoss = [];
const total = [];
const reducer = (accumulator, curr) => accumulator + curr;



let comprar = document.getElementsByClassName("btn_comprar");

for (let i = 0; i < comprar.length; i++) {
    const element = comprar[i];
    element.addEventListener("click", clickCafe);
}

function clickCafe (e) {
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
 
    
    // const evento2 = e.target
    // const precios = evento2.parentNode.getAttribute('idPrecio');

    // function finderPrecio() {
    //     console.log("hola");
    //     // return (item.idPrecio == precios);
    // }

    // const elPrecio = objCafeteria.find(finderPrecio);

    const elPrecio = objCafeteria[1];
    total.push(objCafeteria[1])
    
    // total.push(elPrecio);
    totalStore.push(elPrecio);
    localStorage.setItem("total",JSON.stringify(totalStore));
  


    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = productoss.reduce(reducer);
   

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
    ver_total.addEventListener("click", calcularTotal);

    // function verTotal() {
        
    // }
      // * Calcula el precio total teniendo en cuenta los productos repetidos
        // */
       function calcularTotal() {
          
           let imprime_resultado = document.getElementById("carrito_menu");
           imprime_resultado.innerText = total.reduce(reducer);
       }








// /* SALIR */

// let sali = document.getElementById("salir");
// sali.addEventListener("click", salir);


// function salir() {
//     document.getElementById("carrito_menu").style.display = 'none';
//     document.getElementById("botones").style.display = 'none';
// }

