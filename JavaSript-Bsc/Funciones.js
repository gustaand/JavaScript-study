// ---- function ----
/* funciones sirven para asignar códigos para no tener que volver a escribirlos, basta con llamar la 
función y ejecuratá el código asignado */

function saludar() {
    respuesta = prompt("¡Hola Gustavo! ¿como fue tu dia? ");
    if (respuesta == "bien") {
        alert("Me alegro!");
    }
    else {
        alert("Una pena!");
    }
}

saludar()
saludar()

/* El return nos devuelve un valor de la función. El valor de la función será el valor del return.
Si ponermos en una variable nos va retornar el valor de return. Poner la función en una variable
es diferente de llamarla. 

Cuando la función retorna un valor, se finaliza. Si ponemos el return al principio, va valer el valor de return. (casi un break). */

function saludo(){
    alert("hola")
    return "Xablau";
}

let decirHola = saludo(); //aqui no estamos llamando la función, sino que estamos estamos asignando una variable = a función.

document.write(decirHola) // Imprimimos la variable que es igual a saludo, que nos va dar el valor de return = "Xablau"



