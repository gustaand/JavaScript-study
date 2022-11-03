// Hacer un formulário con nombre completo, mail y asunto.
// se debe validar que el mail sea válido y que el nombre sea real.
// se debe enviar al servidor de manera pulida.

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (evt)=>{
    evt.preventDefault();                    // -----> previene el comportamento por defecto que es actualizar la página.
    let error = validarCampo();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }
    else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});

const validarCampo = ()=> {
    let error = [];
    if (nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 caracteres.";
        return error;
    } else if (nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener más de 40 caracteres.";
        return error;
    } else if (email.value.length < 5 || 
               email.value.length > 40 ||
               email.value.indexOf("@") == -1 ||
               email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "EL email no és válido." 
        return error;
    }

    error[0] = false;
    return error;
}