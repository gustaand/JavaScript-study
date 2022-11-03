// ---- POST ----

const request = new XMLHttpRequest();


request.addEventListener("load", ()=>{
    console.log(JSON.parse(request.response));     // JSON.parse sirve para convertir la respuesta a JSON
})


request.open("post", "https://reqres.in/api/users");  // abrimos la solicitud.

request.setRequestHeader("Content-type", "application/json;charset=UTF8")

request.send(JSON.stringify({     // no podemos enviar la solicitud como json, por eso usamos el JSON.stringfy para convertir a string.
    "nombre" : "Gustavo",
    "trabajo" : "NADA"
}));






/* setRequestHeader() = Nos pide el tipo de contenido (o tipo de header), y en este caso es el Content-type, y luego nos pide
el valor del header, que en este caso és application/json;charset=utf8. Esto és para mostrar la respuesta de nuestra solicitud.*/