let btn = document.querySelector(".btn");
let nav = document.querySelector(".header");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
    nav.classList.toggle('header-slide');
    p.classList.toggle('fade');
})

