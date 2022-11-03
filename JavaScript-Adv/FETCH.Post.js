// ---- Petición POST con FETCH ----

fetch("https://reqres.in/api/users", {
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Gustavo",
        "apellido" : "Marques"
    }),
    headers : {"Content-type" : "application/json"}
}).then(res=>res.json())
  .then(res=>console.log(res))

/* Para hacer peticiones POST con FETCH primero se pone la url que va ultilizar, y después ponemos {}
dentro de llaves pasamos algunos parámetros:

{
    method : "POST",                                     ----------> El metodo que se va ultilizar.
    body : '{"nombre" : "gustavo", "etc" : "etc"}',      ----------> el contenido del body.
    headers : {"Content-type" : "application/json"}      ----------> El tipo de Header.
}

Existen muchos tipos de headders, depende de la información que se va enviar al servidor.

*/