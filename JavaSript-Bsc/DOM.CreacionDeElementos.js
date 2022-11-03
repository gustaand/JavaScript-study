// ---- Creación de Elementos ----


let contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (i=0; i < 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);





// - createElements() - (DENTRO DEL PARENTESIS TIENE QUE SER TODO EN MAYUSCULA).

// - createTextNode() - crea texto node.

// - appendChild() -  asigna un hijo a una caja padre. (uno dentro del otro)

// - createDocumentFragment() - crea fragmentos y evita el consumo excesivo de recursos.