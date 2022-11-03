// ---- CALBACKS ----

// callback por función normal.

function prueba(callback){
    callback("Gustavo");
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);

/* En este caso estamos ejecutando una función prueba(callback) y dentro de ella definimos otra función,
luego llamamos esta función dentro con callback("Gustavo"); y definimos el valor dentro de (). 

Luego usamos una función para llamar otra función, donde prueba(decirNombre) va recibir "Gustavo" como parametro y va ejecutar
el console.log(nombre). 

En resumen, es una función que pasamos como parametro a otra función. */

/*Los callbacks tienen un problema/desventaja que és el excesivo uso de if else por cuestiones de condiciones
  y torna el código ilegible. */

// Es una función dentro de otra función.