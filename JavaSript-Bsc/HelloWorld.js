// Para comentar en línea se usa //, para comentar en varias líneas se abre con /* y se cierra con */
/* variable = "valor" (las variables són espacios que guardamos en la memoria para usarlo otra vez). */
/* string = "texto", number = 10, boolean = true o false.*/
/* formas de declarar una variable: var (global), let(local), const(inmutable) . */ //const tiene que inicializar cuando se declara.
// también podemos declarar varias variables a la vez, ej: let numero, numero2, numero3; o separandolas con coma
// ej: let numero1 = 23, numero2 = 39

 let numero, numero2, numero3 //se esta declarando la variable con "let" y inicializando con el valor 29.

numero = 29
numero2  = 2
numero3 = 13

alert(numero * numero2) // igual a print

/* prompt = input */

 let nombre = prompt("whats your name?") //el valor de la variable nombre será el valor de prompt (input)

alert("Hi " + nombre)

// --- document.write() --- 
// Printa en el documento (en la página). 

let OperatorAdd = 10

OperatorAdd += 5 // és lo mismo que OperatorAdd = OperatorAdd + 5 (mirar en la imagen)

document.write(OperatorAdd)

// ---- Concatenación: unión de 2 strings ---- 

saludo = "Hi Gusta"
pergunta = " How are you?"
frase = saludo + pergunta

alert(frase)

fraseNum1 = 5;
fraseNum2 = 8;

// para convertir algun operador en string se pone "" antes. Ej: frase = "" + numero1 + numero2 (así se puede concatenar numeros)

fraseConc = " " + fraseNum1 + fraseNum2
document.write(fraseConc)

//también se puede concatenar con la variable entre ` frase ${variable} frase (hay que usar el acentuo `` .)

nombre = "Gustavo";
edad = "22 anos";
MiFrase = `Soy ${nombre} y tengo ${edad}`;

alert(MiFrase)

/* javaScript trabaja con "camel case" donde se escribe la primera palavra en minuscula y las otras con la primera 
   letra en mayuscula, ej: javaScript, palavraEnMayuscula, dimeAlgoPorFavor, etc.
   ej de una función: parseInt(), document.getElementById(). */