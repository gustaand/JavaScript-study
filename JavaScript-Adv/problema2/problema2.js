let alumnos = [{
    nombre: "Alumno Da Silva",
    email: "alumnoSilva@gmail.com",
    materia: "Programación"
},
{
    nombre: "Alumno Hernandez",
    email: "alumnoHernandez@gmail.com",
    materia: "Analisis"
},
{
    nombre: "Alumno Castro",
    email: "alumnoCastro@gmail.com",
    materia: "Cálculos 1"
},
{
    nombre: "Alumno Xablau",
    email: "alumnoXablau@gmail.com",
    materia: "fisica 2"
},
{
    nombre: "Alumno Cofla",
    email: "alumnoCofla@gmail.com",
    materia: "Programación"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="semana 1">Semana 1</option>
            <option value="semana 2">Semana 2</option>
        </select>
    </div>`;
    contenedor.innerHTML += htmlCode;
};


boton.addEventListener("click", ()=>{
    let confirmar = confirm("Realmente quieres confirmar?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})