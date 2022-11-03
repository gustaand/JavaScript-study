// O elemento While faz com que se repita um looping, até que uma condição seja cumprida.

// si colocamos: 

let numero = 0

while (numero < 6) {
    numero++;
    document.write(numero)
}


/* Nos va contar cuantas veces for necesário hasta que llegue a 6, después se acabará el looping.
Por ejemplo: primero el numero vale 0 y soma 1 con el numero++, y sale en la pantalla 1, pero todavia no es maior o igual a 6,
entonces ahora vale 1 y contará +1 entonces saldra 2, y así hasta 6.*/

/* El do while funciona al revés. primero ejecuta el programa y después pregunta cuanto vale. */

let numero1 = 0

do {
    document.write("<br>" + numero1 + "<br>")
    numero1++;
}

while (numero1 < 6)

/* Aqui primero muestra el numero 0, después suma, entonces verifica si vale 6. Y lo hace hasta que se cumpla la condición.*/ 

/* ---- break; ---- Sirve para parar el looping a donde queramos.*/

let numero2 = 0

while (numero2 < 1000) {
    numero2++;

    document.write("<br>" + numero2)
    
    if (numero2 == 10){
        break;
    }
}

/* de esa forma con el if decimos que cuando numero2 sea 10, el looping se va parar, por que hemos puesto un break. */ 