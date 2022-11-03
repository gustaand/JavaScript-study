// --- AJAX no sirve para todos los navegadores, por eso tenemos que verificar si el usuário está usando este tipo de petición.
// vamos a verificar si el usuario está usando internet explorer.

let request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHttp");
}


request.addEventListener("load", ()=>{
    console.log(JSON.parse(request.response));  // lo deserializamos para poder trabajar. (convertimos a JSON).
})


request.open("GET", "informacion.txt");
request.send();



// ActiveXObject: sirve para el internet explorer, ej new ActiveXObject("Microsoft.XMLHttp");

// deserializamos la información que nos llega como string para poder trabajar como objeto. Como no se puede trabajar.

// recibimos algo del servidor = de texto a JSON
// enviamos algo para el servidor = de JSON a texto