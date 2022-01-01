const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const close = document.querySelector(".close")
menu.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})
close.addEventListener("click", () => {
    navLinks.classList.remove("open")
})