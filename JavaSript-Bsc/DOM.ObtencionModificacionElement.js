// ---- Obtención y Modificación de Elementos ----








/*
 --- Obtención y Modificación de Elementos ---

- textContent - devuelve el texto de cualquier nodo. (sin incluir cambios con html)


- innerHTML - Es una propiedad que nos permite leer un dato o asignarlo al contenido de un div o bien, del mismo control.
  Nos facilita la asignación de valores a controles.

- outerHTML - obtiene el fragmento HTML serializado que describe el elemento incluyendo sus descendientes.
  Puede ser asignado para reemplazar el elemento por los nodos resultantes de examinar de la cadena proporcionada.
*/

const titulo = document.querySelector(".titulo");

let resultado = titulo.textContent