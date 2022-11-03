// ----- METODOS DE ARRAYS TRANSFORMADORES -----

let nombres = ["pedro", "maría", "jorge"];

document.write(nombres + "<br>");

let resultado = nombres.push("Juancito"); // el resultado nos dice el numero del elemento q se agregó.

document.write(nombres + "<br>");

//--------

let numeros = [1, 2 ,3 ,4 ,5];

document.write(numeros + "<br>");

numeros.reverse(); // invierte el array.

document.write(numeros + "<br>");


//---------

let orden = ["Z", "X", "W", "D", "C", "A", "B",];

document.write(orden + " ---> Cadena desordenada" + "<br>");

orden.sort(); // Nos da un nuevo array ordenado.

document.write(orden + " ---> Cadena ordenada" + "<br>");

//  --------

document.write("<br><br>");

let lista = ["Zéca", "Wallace", "Daniel", "Catia", "Aristeu", "Bento",];

document.write(lista + "<br>");

lista.splice(1, 3); // empezamos del elemento 1 y eliminamos 3.

document.write(lista + "<br>");


/*
_____ Transformadores _____
// Són elementos que Transforman/Cambian/Modifican el array.

- pop() - Elimina el último elemento de un array y lo devuelve.
- shift() - Elimina el primer elemento de un array y lo devuelve.
- push() - Agrega un elemento al array al final de la lista.
- reverse() - Invierte el orden de los elementos de un array.
- unshift() - Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
- sort()- Ordena los elementos de un array localmente y devuelve el array ordenado.
- splice() - Cambia el contenido de un array elmininando elementos existentes y/o agregando nuevos elementos.
ej: (1, 3) Estamos diciendo que arranque en la posición 1 y elimine 3 elementos.
También puedo reemplazar el eliminado por otra cosa, ej: (1, 3, "nombre") me va eliminar 3 elementos y agregar "nombre".
también puedo agregar algun elemento al final o al pricipio sin eliminar nada, ej final: (-1, 0, "nombre", "nombre2"). ej principio: (0, 0, "nombre", "nombre2")
*/