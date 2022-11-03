
// MUY UTIL PARA LLAMADAS A SERVIDORES O BASE DE DATOS

const obtenerInformacion = (text)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {resolve(text)}, Math.random()*200)
    })
}

async function mostrarData(){
    data1 = await obtenerInformacion("1: Nome 1");
    data2 = await obtenerInformacion("2: Nome 2");
    data3 = await obtenerInformacion("3: Nome 3");
    data4 = await obtenerInformacion("4: Nome 4");
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
}

mostrarData();