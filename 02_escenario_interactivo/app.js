const mario = document.querySelector(".mario");
const bloques = document.querySelector(".bloque");
const contador = document.querySelector(".score");
const moneda = document.querySelector(".moneda");
const tortuga = document.querySelector(".tortuga");



let puntos = 0;



mario.addEventListener("click", () => {
    
    mario.classList.add("mario_saltar");
    bloques.classList.add("bloque_saltar");
    moneda.classList.add("salir_moneda");
    puntos++;
    contador.textContent = puntos;
  
});


mario.addEventListener("animationend", () => {
    moneda.classList.remove("salir_moneda");
    mario.classList.remove("mario_saltar");
    bloques.classList.remove("bloque_saltar");
});

tortuga.addEventListener("click",()=>{
  tortuga.classList.add ("tortuga_cabezona")
})

tortuga.addEventListener("animationend",()=>{
  tortuga.classList.remove("tortuga_cabezona")
})




