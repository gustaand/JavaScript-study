// ---- PROMESAS ----


// MUY UTIL PARA LLAMADAS A SERVIDORES O BASE DE DATOS



nombre = prompt("Escribe su nombre: ");

const promesa = new Promise((resolve,reject)=>{
    if (nombre !== "Gustavo"){
        reject("Lo siento, el nombre no es Gustavo");
    } else {
        resolve(nombre);
    }
})

promesa.then((resultado)=>{             //.then esta pegado a promesas, y va recibir el valor de la función promesas.
    console.log(resultado);
}).catch((e)=>{                         //.catch me va mostrar el error que sale, y puedo manejarlo de la forma que quiero.
    console.log(e);
})




/* Las promesas " new promise() ", són objetos donde se le asigna a una constante y dentro tiene dós callbacks; resolve, reject.

ej: 
    const promesa = new promise((resolve,reject)=>{})

Sirve para solucionar el problema de los callbacks de uso excesivo de if else y tornar el código gigantesco e ilegible. 

Para acceder al valor que tiene el RESOLVE dientro usamos then(), que es una función que recibe un callback.
Si accedemos al resolve, podemos verificarlo con el then (sirve para cuando todo sale bién.)

    promesa.then((resultado)=>{
        console.log(resultado);
    })

Si sale un error, o accedemos al reject, podemos acceder con .catch(): el código completo se queda:

    promesas.then((resultado)=>{
        console.log(resultado);
    }).catch((e)=>{
        console.log(e);
    })
*/