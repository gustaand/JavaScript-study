// TRY... CATCH

throw "Xablau: blau blau";   //se puede hacer tanto dentro cuanto fuera del catch. (se tira un error).

try {
    console.log("no hay errores");
}
catch(error){
    if (3 > 5){
        console.log("ha ocurrido un error");
    } else {
        console.log("XABLAU")
    }
}
finally {
    console.log("se muestra igual");
}





/* Es un bloque entero, y maneja las excepciones (errores):
el error dentro de try{} va ser el parametro de catch(error):

try {

}
catch(error){

}

finally: Sirve para que se muestre si o si. Aún que no haya errores.
throw: Sirve para tirar un error.

- try va obligatoriamente acompañado de catch o del finally.

- cuando ejecutamos try... catch, eliminamos los eventHandler (eventos que ocurren cuando hay un error). Se desactiva
y lo vamos a poder manejar nosotros.

- Los errores que controlamos no són los errores de sintaxis, sino que són errores basados en el comportamiento que 
el programador espera.


*/