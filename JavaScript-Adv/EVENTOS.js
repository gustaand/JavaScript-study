
const contenedor1 = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");
const button = document.querySelector(".button");



contenedor1.addEventListener("click",(e)=>{
    alert("Click en el contenedor 1");
})

contenedor2.addEventListener("click",(e)=>{
    alert("Click en el contenedor 2");
})

button.addEventListener("click",(e)=>{
    alert("click en el botón");
    e.stopPropagation();
})









/* addEventListener(""): se puede coloca el evento y después el nombre de la función (se tiene que crear la función normal con 
function). ej:

    button.addEventListener("click", saludar);
    funtion saludar(){
        alert("hola");
    }


o se puede abrir una función flecha dentro del código, ej: (MÁS RECOMENDABLE!)      

    button.addEventListener("click",()=>{
        alert("hola");
    })

de esa forma nos va ejecutar directamente, y es la más recomentable! */

/* 
- addEventListener() - adiciona un evento.
- removeEventListener() - remueve un evento.
*/ 

/* Objeto event: Es el parametro que podemos pasar a un evento, por defecto es una "e" (puede ser qualquier cosa)
nos muestra el evento que se ejecuta y sus propiedades. */

/* stopPropagation(): Sirve para asignar al evento que quieres para que se deje de propagar. Por ejemplo: 
  si ponemos varios clicks en una caja, le damos esta propiedad a un click, los otros no van a ejecutarse.*/