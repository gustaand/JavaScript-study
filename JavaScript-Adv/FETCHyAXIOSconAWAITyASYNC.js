// ---- FETCH y AXIOS con ASYNC & AWAIT ----

const getName = async ()=>{
    let request = await fetch("https://reqres.in/api/unknown/2");
    let resultado = await request.json();
    console.log(resultado.data);
}

getName();

/* ponemos el parametro de la función como async. Nos va devolver una promesa encapsulada por que es Fetch, 
entonces en el resultado la desencapsulamos con los metodos de fetch. */