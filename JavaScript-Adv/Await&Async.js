// ---- AWAIT & ASYNC ----


// MUY UTIL PARA LLAMADAS A SERVIDORES O BASE DE DATOS



const object = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
}


const obtenerInformacion = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(object)},1000);
    })
}

// obtenerInformacion().then((resultado)=>{
//     console.log(resultado);
// })

const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();

// Las promesas són asincronas, es decir, trabajan en tiempo real.

// await: obtiene directamente el resultado sin necesicad del .then(), pero solo se permite dentro de una función asincrona (async).
/* async: crea una función async que va antes del (): 

    const nombreDeLaFuncion = async()=>{} 

    async function nombreDeLaFuncion(){}

*/