// ----- METODOS DE CADENAS -----

let cadena = "Hola,como,estás";

resultado = cadena.split(",");

document.write(resultado)

/*
 ----- METODOS DE CADENAS -----
- concat(): Junta dos o mas cadenas y retorna una nueva

- startsWith(): si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
- endsWith(): si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
- includes(): si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.
- indexOf(): devuelve el indice del primer caracter de la cadena, sino existe, devuelve -1.
- lastIndexOf(): devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1.


- PadStart() [propuesta de Estandar]: rellenar cadena al principio con los caracteres deseados.
- padEnd() [propuesta de Estandar/ECMA]: rellenar cadena al final con los caracteres deseados.
- repeat(): Decuelve la misma cadena pero repetida la cantidad que le indiquemos.


- split(): Divide la cadena como le pudamos.
- substring(): Nos retorna un pedazo de la cadena que seleccionamos.
- toLowerCase(): Convierte una cadena a minúscula.
- toUpperCase(): Convierte la cadena a mayúscula.
- toString(): Método devuelve una cadena que representa al objeto especificado.
- trim(): Elimina los espacios en blanco al principio y al final de una cadena.
*/