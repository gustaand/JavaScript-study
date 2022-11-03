// ----- DOCUMENT -----



/*
- Document - Metodos de Selección de Elementos   ( ej: document.gerElementById()   )

    - getElementById() - Selecciona un elemento por ID ( el Id que damos en HTMl )
    - getElementsByTagName() - Seleciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
    - querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
    - querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.
*/

/* 
--- document.getElementById() ---
selecionamos el Id de un elemento HTML, como un párrafo o un div, ej:

parrafo = document.getElementById("parrafo");    aqui seleccionamos el elemento entero por ID
*/


/*
 --- document.getElementByTagName() ---
seleccionamos todos los elementos que seleccionarmos, como seleccionar todas las etiquetas p o todos los divs. ej:

cajas = document.getElementByTagName("div");      aqui seleccionamos todos los divs. (nos dice que es una HTML Collection)
*/


/*
 --- document.querySelector() ---
Seleccionamos el primer elemento selector (como class, Id, etc.), ej:

parrafo = document.querySelector(".parrafo")       estamos selecionando el elemento con la classe.
*/


/*
 --- document.querySelectorAll() ---
Seleccionamos todos los elementos que coincidan con el grupo de selectores, ej:

caja = document.querySelectorAll(".caja")    si tenemos 2 o más .caja nos va seleccionar todos
*/
