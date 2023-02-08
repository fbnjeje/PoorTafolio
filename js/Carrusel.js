const carrusel = document.querySelector(".carruselItems")

let intervalo = null;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let step = 300;
const start = () => {

    intervalo = setInterval(function () {
        carrusel.scrollLeft += step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = -300
        } else if (carrusel.scrollLeft === 0) {
            step = 300
        }
    }, 1000);
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