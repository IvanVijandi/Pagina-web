let barras = document.querySelector(".bars");
let barra1 = document.querySelector(".linea1");
let barra2 = document.querySelector(".linea2");
let barra3 = document.querySelector(".linea3");


barras.addEventListener("click",()=>{
    barra1.classList.toggle("active");
    barra2.classList.toggle("active");
    barra3.classList.toggle("active");
})