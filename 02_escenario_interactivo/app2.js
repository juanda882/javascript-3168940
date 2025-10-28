const bb2 = document.querySelector ('.bb2')
const bb1 = document.querySelector ('.bb1')
const bb3 = document.querySelector ('.bb3')
const bb4 = document.querySelector('.bb4')
const huevo2 = document.querySelector('.huevo2')
const huevo3 = document.querySelector('.huevo3')
const huevo1 = document.querySelector('.huevo1')
const huevo4 = document.querySelector('.huevo4')
const contador2 = document.querySelector ('.contador2')

let dragones = 0;

huevo1.addEventListener ("click", () => {
    huevo1.classList.add ("Mhuevo1");
    bb2.classList.add ('Mbb2')
    dragones++;
    contador2.textContent = dragones
})

huevo4.addEventListener ('click',()=> {
    huevo4.classList.add ('Mhuevo4')
    bb1.classList.add ('Abb1')
    dragones++;
    contador2
    contador2.textContent = dragones
})

huevo2.addEventListener ('click', ()=>{
    huevo2.classList.add ('Mhuevo2')
    bb3.classList.add ('tp')
    dragones++;
    contador2.textContent = dragones
})

huevo3.addEventListener ('click', ()=>{
    huevo3.classList.add ('Mhuevo3')
    bb4.classList.add ('Abb4')
    dragones++;
    contador2.textContent = dragones
})