


// CLICK CARRITO 

let click_carrito = document.getElementById("carrito");
click_carrito.addEventListener("click", mostrarCarrito);

function mostrarCarrito() {
    document.getElementById("ver_total").style.display = 'flex';
    document.getElementById("carrito_menu").style.display = 'flex';
    document.getElementById("botones").style.display = 'flex';
}



