// ---- EVENTOS DEL MOUSE ----


const contenedor1 = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");
const button = document.querySelector(".button");



// contenedor1.addEventListener("click",(e)=>{
//     alert("Click en el contenedor 1");
// })

contenedor2.addEventListener("mouseover",(e)=>{
    alert("Click en el contenedor 2");
})

// button.addEventListener("click",(e)=>{
//     alert("click en el botón");
// })





/* --- Eventos del MOUSE:

- click - ocurre un click.
- dblclick - ocurre un doble click.
- mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos..
- mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundários..

----- otros -----

- contextmenu - ocurre con un click en el boton derecho en un elemento para abrir un menú contextual.
- mouseenter - ocurre cuando el puntero se mueve sobre un elemento. (especial para el internet explorer).
- mousemove - ocurre cuando el puntero se mueve mientras está sobre un elemento.
- mouseleave - ocurre cuando el puntero se mueve fuera de un elemento.
- mousedown - ocurre cuando un usuario apreta un botón del mouse sobre un elemento.
- mouseup - ocurre cuando un usuario suelta un botón del mouse sobre un elemento.


*/