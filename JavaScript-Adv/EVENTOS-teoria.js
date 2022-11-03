// ----- E V E N T O S -----

// Los eventos són cualquier cambio que sucede en la pantalla.


/* Se trabaja con:
- Event Handlers: se coloca el prefijo "on" antes del evento ej: onclick="". Se puede llamar en HTML
  ej: <button onclick="alert('saludar')">Apretame</button>                                                      (NO SE USA MÁS.)

- addEventListener() - Escucha de eventos o "Event Listeners". 

- El objeto "Event" - Es el parametro que podemos pasar a un evento, por defecto es una "e" (puede ser qualquier cosa)
  nos muestra el evento que se ejecuta y sus propiedades.

- Flujo de Eventos o "event flow" - es el orden al que se van ejecutar los eventos, són 2 tipos:
        Event Bubbling: Este viene por defecto. Se ejecuta des del más especifico (hijos), a los menos especificos (padres).
        Event Capturing: Se ejecuta al revés, des del que se le da "true".
    al que se le da "true" será el que estará por encima de todos.

- stopPropagation() - Sirve para asignar al evento que quieres para que se deje de propagar. Por ejemplo: 
  si ponemos varios clicks en una caja, le damos esta propiedad a un click, los otros no van a ejecutarse.
*/


/* --- Eventos del MOUSE:

- click - ocurre un click.
- dblclick - ocurre un doble click.
- mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos..
- mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundários..

----- otros -----

- contextmenu - ocurre con un click en el boton derecho en un elemento para abrir un menú contextual.
- mouseenter - ocurre cuando el puntero se mueve sobre un elemento.
- mouseleave - ocurre cuando el puntero se mueve fuera de un elemento.
- mouseup - ocurre cuando un usuario suelta un botón del mouse sobre un elemento.
- mousemove - ocurre cuando el puntero se mueve mientras está sobre un elemento.

*/


/* --- Eventos del TECLADO ---

- keypress - ocurre cuando una tecla se presiona.
- keydown - ocurre cuando una tecla se deja de presionar.
- onkeyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.

*/

/* --- Eventos de la interfaz: ---

- error - ocurre cuando sucede un error durante la carga de un archivo multimedia.
- load - ocurre cuando un objeto se ha cargado.
- beforeunload - ocurre antes de que el documento esté a punto de descargarse.
- unload - ocurre una vez que se ha descargado una página.
- resize - ocurre cuando se cambia el tamaño de la vista del documento.
- scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento.
- select - ocurre después de que el usuario selecciona algún texto de <input> o <textarea>.

*/