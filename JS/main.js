if(!JSON.parse(localStorage.getItem("carrito"))) {
    localStorage.setItem("carrito",JSON.stringify([]))
}

const carritoInicial = JSON.parse(localStorage.getItem("carrito"));
const carrito = carritoInicial;


//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let precioTotal = document.querySelector('.price-total')
let contadorProduct = document.querySelector('.count-product');


let comprarCosas = [];
let totalCard = 0;
let contProduct = 0;

//functiones
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        leerTheContent(selectProduct);


           /*LIBRERIA PARA PONER ALERTS*/ 
Swal.fire({
    title: '¡Nuevo producto al carrito!',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  },
    showConfirmButton: false,
    background: 'transparent',
    icon: 'success',
    color: 'white',
    position: 'top-start',
    timer: 1300,
  })
}   
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        comprarCosas.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.cantidad);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        comprarCosas = comprarCosas.filter(product => product.id !== deleteId);
        
        contProduct--;
    }
    loadHtml();
}

function leerTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = comprarCosas.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = comprarCosas.map(product => {
            if (product.id === infoProduct.id) {
                product.cantidad++;
                return product;
            } else {
                return product;
            }
        });
        comprarCosas = [...pro];
    } else {
        comprarCosas = [...comprarCosas, infoProduct]
        contProduct++;
    }
    loadHtml();
}

function loadHtml(){
    clearHtml();
    comprarCosas.forEach(product => {
        const {image, title, price, cantidad, id} = product;
        const fila_carrito= document.createElement('div');
        fila_carrito.classList.add('item');
        fila_carrito.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Cantidad: ${cantidad}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(fila_carrito);

        precioTotal.innerHTML = totalCard;

        contadorProduct.innerHTML = contProduct;
    });
}
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }

 function showCart(x){
    document.getElementById("products-id").style.display = "block";
}
function closeBtn(){
     document.getElementById("products-id").style.display = "none";
}
