// ---- METODOS DE CHILD ---- 

const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

contenetor.replaceChild(h2_nuevo, h2_antiguo)





// - replaceChild() - reemplaza un elemento hijo por otro que nosotros definimos. ("el nuevo, el antiguo").

/* - remouveChild() - remueve al hijo que nosotros queremos. Lo definimos con querrySelector y despues con remouveChild
    seleccionamos el hijo que queremos remover. */

// - hasChildNodes() - nos permite saber si el elemento tiene hijos node o no.