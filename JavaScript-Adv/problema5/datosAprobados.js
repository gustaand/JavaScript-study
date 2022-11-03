const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    
    try {
        resultado = await axios("informacion.TXT")
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch(e){
        aprobados.innerHTML = "La API Falló";
        desaprobados.innerHTML = "La API Falló";
    }
}

document.getElementById("getInfo").addEventListener("click",getInfo);