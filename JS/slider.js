// const objCafeteria = {
//     cafe: "Café c/s leche doble $120 \n",
//     precioCafe: 120, 

//     matecocido: "Matecocido o té, $100 \n", 
//     precioMatecocido: 100,

//     capuccino:  "Capuccino $140 \n", 
//     precioCapuccino: 140 ,
    
//     medialunas: "Medialunas dulces/saladas $80 c/u \n", 
//     precioMedialunas: 80,
    
//     tostado:     "Tostado $300 \n",
//     precioTostado: 300,

//     carlitoComun: "Carlito común $350 \n",
//     precioCarlitoComun: 350,

//     carlitoEspecial: "Carlito especial $450 \n",
//     precioCarlitoEspecial: 450
            
// }


window.addEventListener('load', cambiarSlider) 

 
    let imagenes_slider = [];

    imagenes_slider[0] = '/IMG/slider1.jpg';
    imagenes_slider[1] = '/IMG/slider2.jpg';
    imagenes_slider[2] = '/IMG/slider3.jpg';
   
    let contadorSlider = 0;


function cambiarSlider() {
    document.slider.src = imagenes_slider[contadorSlider];

    if (contadorSlider < 2) {
        contadorSlider++;
    } else {
        contadorSlider = 0;
    }
}
    setInterval(cambiarSlider, 2000);

cambiarSlider();



