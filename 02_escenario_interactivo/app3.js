const franklin = document.querySelector ('.franklin')
const Franklin2 = document.querySelector('.Franklin2')
const franklin3 = document.querySelector('.franklin3')
const trevor = document.querySelector('.trevor')
const trevor2 = document.querySelector('.trevor2')
const trevor3 = document.querySelector('.trevor3')
const michael = document.querySelector('.michael')
const michael2 = document.querySelector('.michael2')
const michael3 = document.querySelector('.michael3')


franklin.addEventListener ('click',()=>{
    franklin.classList.add ('Qfranklin')
    Franklin2.classList.add('Sfranklin')
    franklin.classList.remove ('Sf')

})


Franklin2.addEventListener('click',()=>{
    Franklin2.classList.add('Qf2')
    Franklin2.classList.remove('Sfranklin')
    franklin3.classList.add('Sfranklin3')
}) 

franklin3.addEventListener ('click',()=>{
    franklin3.classList.add ('Qf3')
    franklin3.classList.remove ('Sfranklin3')
   franklin.classList.add ('Sf')
   franklin.classList.remove ('Qfranklin')
    
}) 

trevor.addEventListener ('click',()=>{
    trevor.classList.add ('QT')
    trevor2.classList.add('St2')
    trevor.classList.remove ('ST')

})

trevor2.addEventListener('click',()=>{
    trevor2.classList.add('Qt2')
    trevor2.classList.remove('St2')
    trevor3.classList.add ('St3')
}) 


 trevor3.addEventListener ('click',()=>{
    trevor3.classList.add ('Qt3')
    trevor3.classList.remove ('St3')
   trevor.classList.add ('ST')
   trevor.classList.remove ('QT')
    
}) 

michael.addEventListener ('click',()=>{
    michael.classList.add ('QM')
    michael2.classList.add('Sm2')
    michael.classList.remove ('SM')

})

michael2.addEventListener('click',()=>{
    michael2.classList.add('Qm2')
    michael2.classList.remove('Sm2')
    michael3.classList.add ('Sm3')
}) 


 michael3.addEventListener ('click',()=>{
    michael3.classList.add ('Qm3')
    michael3.classList.remove ('Sm3')
   michael.classList.add ('SM')
   michael.classList.remove ('QM')
    
}) 