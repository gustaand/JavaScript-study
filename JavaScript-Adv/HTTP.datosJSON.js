// ---- Datos JSON (estructurados) ----

// const object = {
//     "propiedad1" : "valor1",
//     "propiedad2" : "valor2"
// }

// console.log(object.propiedad1);

const serializado = '{"variable1" : "valor1", "variable2" : "valor2"}';
const deserializado = JSON.parse(serializado);
console.log(typeof deserializado);                                         // typeof sirve para ver el tipo de la variable.


/* Sirve para enviar la información al servidor con "", para evitar problemas.

JSON és exactamente igual a los arrays associativos (diccionarios), pero con una pequeña diferencia;
En JSON las propiedades se definen con comillas "", en vez de variables. ej:

--- JSON deserializado. ---
object = {
    "propiedad1" : "valor1",
    "propiedad2" : "valor2"
}
*/


/* Un JSON serializado és una cadena de texto. ej:
--- JSON serializado. ---

object = '{"variable1" : "valor1", "variable2" : "valor2"}';  ---> JSON serializado. (una cadena de texto que tiene el formato JSON).
*/

// JSON.parse(): convierte un string con estructura JSON a formato JSON (deserializar).

// JSON.stringify(): Convierte un dato JavaScript en una cadena de texto JSON (serializar).

// JSON PolyFill: https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_Objects/JSON/parse
