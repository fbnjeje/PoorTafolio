const menu = document.querySelector('#hamburguer')
const menuHamburguer = document.querySelector('#menu')
const menuX = document.querySelector("#x")


const sepiaFilter = document.querySelector("#blackGround")


menu.addEventListener("click", () => {
    menuHamburguer.classList.toggle("menu-toggle")
    sepiaFilter.classList.toggle("blackGround")
})

menuX.addEventListener("click", () => {
    menuHamburguer.classList.toggle("menu-toggle")
    sepiaFilter.classList.toggle("blackGround")
})


const URL = "https://api.escuelajs.co/api/v1/products"

fetch(URL)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(err => console.log("error", err))

const mostrarData = (data) => {
    console.log(data);
}

