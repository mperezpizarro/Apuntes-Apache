'use strict'

let contenidos=document.querySelectorAll(".contenido");
let mostrar=document.querySelectorAll("span");
for(let contenido of contenidos){
    for (let span of mostrar)
    span.onclick=function(){
        contenido.style.display="block";
    }
    contenido.style.display="none";
}