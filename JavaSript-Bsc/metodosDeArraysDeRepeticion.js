// ----- METODOS DE ARRAYS DE REPETICIÓN ----- (LOOPING)

// ----- Filter -----
// es como un looping
// filter recibe como parametro una función
/* ej:
lista.filter(function(numero){
    document.write(numero + "<br>")
})
*/

let lista = ["cosas", "zapato", "mouse", "manzana", "platano", "teclado"];

// creamos una variáble y en cada vuelta del looping, los elementos van a ser = a la variáble. (se itera).

resultado = lista.filter(numero => numero.length > 5); // aqui primero verifica si la cadena de texto tiene más de 5 letras, y después muestra solo las que tienen.

document.write(resultado);

/* Filter y forEach són lo mismo, pero filter tiene la cualidad de crear un nuevo array con los elementos que cumplan la condición que le demos.

- filter() - Crea un nuevo array con todos los elementos que cumplan la condición.
- forEach() - Ejecuta la función indicada una vez por cada elemento del array.
*/