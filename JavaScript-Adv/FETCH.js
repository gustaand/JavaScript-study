// ---- FETCH ----

/* En las peticiones fetch, nos devuelven una respuesta en formato de promesa encapsulada. No podemos acceder a los datos,
por eso trbajamos con metodos para convertir ese resultado a un tipo de dato válido. */

// como trabaja con promesas, és asíncrona, entonces el resultado es en tiempo real.

// Fetch tiene el metodo GET por defecto.


request = fetch("https://reqres.in/api/unknown/2");

request
    .then(res=>res.json())
    .then(res=>console.log(res))

// request.then(res=>res.json()).then(res=>console.log(res));





/* El servidor nos devolvió los datos en forma de promesa, pero está encapsulada.
para acceder a estos datos trabajamos con:

    - text()
    - json()
    - blob() - sirve para imagenes o datos blob, como videos o pdf.
    - formData()
    - arrayBuffer()

Para acceder, ponemos un then para convertir en el tipo que queremos, y después mostrar la respuesta con otro then. ej

peticion
    .then(res=>res.text())   -------> aquí convertimos a texto.S
    .then(res=>console.log(res))   ---------> aquí mostramos el resultado ya convertido.

seria lo mismo que :

    peticion.then(res=>res.text()).then(res=>console.log(res))

*/
