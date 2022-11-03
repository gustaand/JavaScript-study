// ---- CLOSURES (O CLAUSURAS) ----

// Clausuras són funciones que retornan otra función.

//ejemplo práctico de clausuras.

const cambiarSize = (size)=>{
    return ()=>{
        document.querySelector(".texto").style.fontSize = `${size}px`;
    }
}

px12 = cambiarSize(12);
px14 = cambiarSize(14);
px16 = cambiarSize(16);


document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);




/* Para seleccionar el estilo del elemento, ya sea por getElementById o por querySelector, se usa .style
y despues el style que quieres cambiar (siempre en camelcase), en este caso es .fontSize */

/* 

--- código normal ---

const cambiarSize = (size)=>{
    document.querySelector(".texto").style.fontSize = `${size}px`;
}

document.querySelector(".t12").addEventListener("click", ()=>cambiarSize(12));
document.querySelector(".t14").addEventListener("click", ()=>cambiarSize(14));
document.querySelector(".t16").addEventListener("click", ()=>cambiarSize(16));

*/