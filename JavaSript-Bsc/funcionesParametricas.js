// una función no es una funciión sin parametros. Los parametros permiten que las funciones puedan variar. 

/* primero definimos las variables dentro de la función, y así podemos llamar la función cambiando las variables ej:

function suma (numero1, numero2){

}

suma(1, 2)   -------> aqui cambiamos numero1 y numero2 por 1, 2. */

function soma(num1, num2) {
    let resultado = num1 + num2
    return resultado;
}

let conta = soma(25, 30)

document.write(conta)

// creamos la función, despues ponemos el return con el valor del resultado. Despues le ponemos en una variable e imprimimos.


// también podemos crear la función creando una variable = funcion().
// ej. const soma = function() {}

// Otra forma de crear la función es la función flecha.
//ej: const soma = ()=>{}.  
/* las funciones flecha tienen muchas funciones, pero una de ellas es que no hace falta poner () si tenemos una sola variable,
también no hace falta ponerle {}, y el valor dado de la función ya retorna automaticamente.*/
/*ej:  
let frase = `hola %{nombre}! como estás`;
const saludo = nombre => document.write(frase)    --------> esto ya está retornando. */