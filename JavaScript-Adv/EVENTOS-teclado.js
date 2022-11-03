// ---- EVENTOS DEL TECLADO ----

const input = document.querySelector(".input-prueba");


input.addEventListener("keydown", (e)=>{
    console.log("una tecla fue apretada.");
});

input.addEventListener("keypress", (e)=>{
    console.log("un usuário presionó una tecla y la soltó");
});

input.addEventListener("keyup", (e)=>{
    console.log("una tecla fue soltada");
});


/*
- keydown - ocurre cuando una tecla se deja de presionar.
- keypress - ocurre cuando una tecla se presiona y se suelta en un elemento.
- keyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.
*/