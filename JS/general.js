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
    id: "cafe"},

    {producto: "Matecocido o té", 
    precio: 100,
    img: "/IMG/te.jpg",
    id: "te"},

    {producto:  "Capuccino", 
    precio: 140,
    img: "/IMG/capuccino.jpeg",
    id : "capuccino"},

    {producto: "Medialunas dulces/saladas", 
    precio: 80,
    img: "/IMG/medialuna.jpg",
    id: "medialuna"},
    
    {producto:     "Tostado",
    precio: 300,
    img: "/IMG/tostado.jpg",
    id: "tostado"},

    {producto: "Carlito común",
    precio: 350,
    img: "/IMG/carlito.jpg",
    id: "carlito"}
]

for (let i = 0; i < objCafeteria.length; i++) {
    const element = objCafeteria[i];
    const div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("id", element.id)
    div.innerHTML = `<span class="span_card" >${element.producto + " $" + element.precio}</span>
                     <div class="img_card">
                        <img src=${element.img} alt="fotoProducto" />
                     </div>
                     <button class="btn_comprar">comprar</button>`;
    const section = document.getElementById("nuestra_carta"); 
    section.appendChild(div);
}
const reducer = (accumulator, curr) => accumulator + curr;


/* BOTON COMPRAR */

let comprar = document.getElementsByClassName("btn_comprar");

for (let i = 0; i < comprar.length; i++) {
    const element = comprar[i];
    element.addEventListener("click", clickCafe);
}

function clickCafe (e) {
    document.getElementById("agregado_carrito").style.display = 'block'; 

    const evento = e.target
    const nombreProducto = evento.parentNode.getAttribute("id");
    
    function finderId(item) {
        return (item.id == nombreProducto) 
    }

    const producto = objCafeteria.find(finderId);
    carrito.push(producto);
    localStorage.setItem("carrito",JSON.stringify(carrito));
   
    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText =  nombreProducto;
    
    // imprime_resultado.innerText = localStorage.getItem("carrito",JSON.stringify(carrito.reduce(reducer)));

     /*LIBRERIA PARA PONER ALERTS*/
    // Swal.fire({
    //     icon: 'success',
    //     backdrop: 'rgb(24, 37, 44)',
    //     imageUrl: '/IMG/cafe.jpg',
    //     imageWidth: 400,
    //     imageHeight: 360,
    //     background: 'black',
    //     title: '¡Nuevo producto al carrito!',
    //     showConfirmButton: false,
    //     color: 'green',
    //     timer: 1500
    // })    
}

/* VER TOTAL */ 

let ver_total = document.getElementById("ver_total");
ver_total.addEventListener("click", verTotal);

function verTotal(e) {
}


// /* SALIR */

// let sali = document.getElementById("salir");
// sali.addEventListener("click", salir);


// function salir() {
//     document.getElementById("carrito_menu").style.display = 'none';
//     document.getElementById("botones").style.display = 'none';
// }

