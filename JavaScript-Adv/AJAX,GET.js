// ---- AJAX ----
// Asynchronous JavaScript y XML (JAVASCRIPT ASINCRONO).


const request = new XMLHttpRequest();


request.addEventListener("load", ()=>{
    console.log(request.response);
})


request.open("GET", "informacion.txt");
request.send();



/* AJAX envia la peticion al servidor en paralelo, el servidor envia la respuesta que se ejecuta en AJAX en paralelo
y despues envia los datos para la página, sin actualizarla. 
 Esto evita que la página se tenga que cargar cada vez que reciba algun dato, lo hace en tiempo real.
*/


/* objeto XMLHttpRequest: Es un objeto para peticionar. Con este objeto podemos enviar peticiones GET y POST.

open("GET") : metodo que abre una petición y tiene dos parametros. el "GET" y la URL, ej: open("GET", "info.txt");
open("POST") : Los datos no se envian por URL, sino que se envian por el método POST

send() : se envia la petición.
*/


/* addEventListener("readystatechange", ()=>{}) este evento nos permite trabajar con los cambios del state. (pero se hacia antes).

addEventListener("load", ()=>{})

propiedad readyState: nos permite ver el cambio del readystate
tiene 4 estados:
    1 = dice que la solicitud se creó correctamente.
    2 = dice que la solicitud fue recibida correctamente.
    3 = nos dice que se está procesando esa petición.
    4 = nos dice que está todo listo, que nos devolvió una respuesta y que el resultado ya se puede ultilizar.
*/

//.response: sirve para mostrar el resultado de la petición.

/* códigos de respuesta más comunes:
    404: nos indica un error.
    200: nos indica que todo está correcto.
*/