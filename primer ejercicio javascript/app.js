let blanco = document.getElementById("boton1");
let desenfoque = document.getElementById("boton2");
let zoom = document.getElementById("boton3");

blanco.addEventListener("click", () => {
    imagen.classList.toggle("filterBN");
    });

desenfoque.addEventListener("click", () => {
    imagen.classList.toggle("Blur");
    });

zoom.addEventListener("click", () => {
    imagen.classList.toggle("Zoom");
    });