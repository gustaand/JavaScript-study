// ---- AXIOS ----

// una vez pegado el script, basta llamar axios y pasarle el parametro de la petición.

axios("https://reqres.in/api/unknown/2")
    .then(res=>console.log(res.data))

axios.post("https://reqres.in/api/users", {
    "nombre" : "Gustavo",
    "apellido" : "Marques"
}).then(res=>console.log(res.data))

// además de la petición, tenemos que pedir lo que nos va devolver.

// también se puede trabajar con POST abriendo {} y trabajando con las configuraciones.

axios("https://reqres.in/api/users", {
    method: "POST",
    data: {"nombre" : "Gustavo"}  //----> en axios no hace falta convertir a JSON o a String.
}).then(res=>console.log(res.data))

/* Es el reemplazo de FETCH y está muy optimizada.
trabaja basada en el XMLHttpRequest 

- Está basado en promesas, pero usa la tecnologia XMLHttpRequest.
con axios, el contenido ya viene desencapsulado.

- por defecto trabaja con peticiones GET, pero si queremos trabajar con POST ponemos axios.post
    si queremos dejar obligatoriamente GET ponemos axios.get

lo podemos encontrar en github: https://github.com/axios/axios 

la librería:
pegar en el header o en el body.

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

*/

// con axios nos saldrá mucha información, dentro de ellas la DATA. Para acceder basta poner res.data