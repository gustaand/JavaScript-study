// ---- Metodos para Definir, Obtener y Eliminar valores de atributos ----

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contenteditable", "true");



const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type", "color");  






/* - setAttribute() - Modifica el valor del atributo: ponemos el primer parametro que es el type, y después lo modificamos con el
segundo parámetro, ej: setAttribute("type", "number"); estamos modificando el valor que era antes al valor "number".
además si no está definido el atributo, setAttributo lo crea y lo modifica de la manera que querramos.*/

// - getAttribute() - Obtiene el valor del atributo. 

// - removeAttribute() - Remueve el valor del atributo.


/* 
 ---- ATRIBUTOS GLOBALES ----

- class - són las clases.

- contenteditable - indica si el elemento puede ser modificable por el usuario (boolean).

- dir - indica la direccionalidad del texto. (tiene dos valores. ltr = left to right, e rtl = right to left).

- hidden - indica si el elemento aún no es, o ya no es, relevante.

- id - identificador único.

- style - contiene declaraciones de estilo CSS para ser aplicadas al elemento.

- tabindex - indica si el elemento puede obtener un focus de input.

- title - contiene un texto con información relacionada al elemento al que pertenece.
*/
