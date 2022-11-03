// ----- METODOS DE ARRAYS ACCESORES -----
// no se modifica, se crea un nuevo array y almacena en la variable.


//---- JOIN ----
// convierte los elementos en cadena de texto.

let nombre = ["manzana", "pedro", "juanito", "coche", "bobo", "farofa"]

document.write(nombre + "<br>");

let resultado = nombre.join("_____"); //podemos ultilizar el separador que queramos.

document.write(resultado + "<br>");


//---- SLICE ----
// nos muestra el elemento que seleccionamos del array, ej: .slice(0, 2), el ultimo (2) no nos muestra.

document.write("<br><br>");


let nombre2 = ["elemento0", "elemento1", "elemento2", "elemento3", "elemento4", "elemento5", "elemento6"]

document.write(nombre2 + "<br>");

let resultado2 = nombre2.slice(0, 3); 

document.write(resultado2 + "<br>");


/*
_____ Accesores _____

- join() - Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
- slice() - Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
- Metodos ya vistos en cadenas: toString(), indexOf(), lasIndexOf(), includes().
*/