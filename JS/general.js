const objCafeteria = {
    cafe: "Café c/s leche doble $120 \n",
  

    matecocido: "Matecocido o té, $100 \n", 
    

    capuccino:  "Capuccino $140 \n", 
    
    medialunas: "Medialunas dulces/saladas $80 c/u \n", 
    
    
    tostado:     "Tostado $300 \n",
   

    carlito: "Carlito común $350 \n",
 

}



const precioCafeteria = {
    precioCafe: 120, 
    precioMatecocido: 100,
    precioCapuccino: 140,
    precioMedialunas: 80,
    precioTostado: 300,
    precioCarlito: 350
}

// objCafeteria = JSON.parse;
// precioCafeteria = JSON.parse;







const totalCompro = [];
const reducer = (accumulator, curr) => accumulator + curr;

const totalPrecio = [];







/* BOTON CAFE */

let comprar_cafe = document.getElementById("btn_cafe");
comprar_cafe.addEventListener("click", clickCafe);

function clickCafe () {
    document.getElementById("agregado_carrito").style.display = 'block'; 


    totalCompro.push(objCafeteria.cafe);
    totalPrecio.push(precioCafeteria.precioCafe);

    

    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = totalCompro.reduce(reducer);

    }



/* BOTON MATECOCIDO */

let comprar_matecocido = document.getElementById("btn_matecocido");
comprar_matecocido.addEventListener("click", clickMatecocido);

function clickMatecocido() {
    document.getElementById("agregado_carrito").style.display = 'block';

    totalCompro.push(objCafeteria.matecocido)
    totalPrecio.push(precioCafeteria.precioMatecocido);

    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = totalCompro.reduce(reducer);  
}


/* BOTON CAPUCCINO */



let comprar_capuccino = document.getElementById("btn_capuccino");
comprar_capuccino.addEventListener("click", clickCapuccino);

function clickCapuccino() {
    document.getElementById("agregado_carrito").style.display = 'block';

   
    totalCompro.push(objCafeteria.capuccino);
    totalPrecio.push(precioCafeteria.precioCapuccino);
    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = totalCompro.reduce(reducer);
}





/* BOTON MEDIALUNAS */


let comprar_medialunas = document.getElementById("btn_medialunas");
comprar_medialunas.addEventListener("click", comprarMedialunas);

function comprarMedialunas() {
    document.getElementById("agregado_carrito").style.display = 'block';

    totalCompro.push(objCafeteria.medialunas);
    totalPrecio.push(precioCafeteria.precioMedialunas);
    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = totalCompro.reduce(reducer);
}


/* BOTON TOSTADO */


let comprar_tostado = document.getElementById("btn_tostado");
comprar_tostado.addEventListener("click", comprarTostado);

function comprarTostado() {
    document.getElementById("agregado_carrito").style.display = 'block';

    totalCompro.push(objCafeteria.tostado);
    totalPrecio.push(precioCafeteria.precioTostado);
    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = totalCompro.reduce(reducer);
}

/* BOTON CARLITO */


let comprar_carlito = document.getElementById("btn_carlito");
comprar_carlito.addEventListener("click", comprarCarlito);

function comprarCarlito() {
    document.getElementById("agregado_carrito").style.display = 'block';

    totalCompro.push(objCafeteria.carlito);
    totalPrecio.push(precioCafeteria.precioCarlito);
    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = totalCompro.reduce(reducer);
}




/* VER TOTAL */ 

let ver_total = document.getElementById("ver_total");
ver_total.addEventListener("click", verTotal);

function verTotal() {
    let imprime_resultado = document.getElementById("carrito_menu");
    imprime_resultado.innerText = totalPrecio.reduce(reducer);
}


/* SALIR */

let sali = document.getElementById("salir");
sali.addEventListener("click", salir);


function salir() {
    document.getElementById("carrito_menu").style.display = 'none';
    document.getElementById("botones").style.display = 'none';
}

