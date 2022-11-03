// ---- Parametro ...rest ---

//si queremos agregar algo junto con el parametro rest, el rest tiene que ir siempre al final

const soma = (frase, ...num)=>{
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(`${frase} ${resultado}`);
}

soma("joaquim", 52,14,12);


/*
- para usar el parametro rest, siempre tiene que ir al final de todo.
- es un parametro que funciona como argument.
- nos da en forma de array si solamente ponemos el parametro y llamamos con varios parametros asignados en la función:
       
        const soma = (...num)=>{
            console.log(num);
        }

        soma("XABLAU", "power gui", "Jubileu");



 */

