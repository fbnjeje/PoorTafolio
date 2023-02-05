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