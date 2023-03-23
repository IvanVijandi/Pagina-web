//EVENTOS NO RESPONIVE//

let tarjeta = document.querySelector(".tarjeta_corrediza");
let mario = document.querySelector(".text-conteiner");


tarjeta.addEventListener("click",()=>{
    tarjeta.classList.toggle("corrida"); //HACE QUE SE CORRA
    mario.classList.toggle("mario"); //APARECE EL MARIO
})

//header con EFECTO SCROLL//

const header = document.querySelector(".header-conteiner");
let ubicacion_principal = window.pageYOffset;

window.addEventListener("scroll",()=>{
    let ubicacion_actual = window.pageYOffset;

    if(ubicacion_principal<=ubicacion_actual){
       
       header.style.top="-300PX"

    }
    else{
        
        header.style.top="0PX"
    }

    ubicacion_principal=ubicacion_actual;

})


