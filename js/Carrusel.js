const carrusel = document.querySelector(".carruselItems")

let intervalo = null;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let step = 800;
const start = () => {

    intervalo = setInterval(function () {
        carrusel.scrollLeft += step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = -800
        } else if (carrusel.scrollLeft === 0) {
            step = 800
        }
    }, 2000);
}
const stop = () => {
    clearInterval(intervalo)
};

carrusel.addEventListener('mouseover', () => {
    stop();
})
carrusel.addEventListener('mouseout', () => {
    start();
})

start();