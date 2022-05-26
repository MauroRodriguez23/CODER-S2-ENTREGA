window.addEventListener('load', cambiarSlider) 

let imagenes_slider = [];

imagenes_slider[0] = '/IMG/SLIDER/slider1.jpg';
imagenes_slider[1] = '/IMG/SLIDER/slider2.jpg';
imagenes_slider[2] = '/IMG/SLIDER/slider2.jpg';

let contadorSlider = 0;

function cambiarSlider() {
document.slider.src = imagenes_slider[contadorSlider];

if (contadorSlider < 2) {
    contadorSlider++;
} else {
    contadorSlider = 0;
}
}
setInterval(cambiarSlider, 3000);
cambiarSlider();


