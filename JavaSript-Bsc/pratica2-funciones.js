/* En una fiesta, no se pueden pasar los menores de 18 años, y la primera persona mayor de edad que entra después de las 2AM no paga.
- no dejar pasar a los menores de 18
- la primera persona después de las 2AM no paga. */

let gratis = false;

const fiesta = (hora)=>{
    let edad = prompt("Cuantos años tienes?");
    if (edad >= 18){
        if (hora >= 2 && hora < 7 && gratis == false){
            alert("Eres la primera persona a entrar después de las 2AM, puedes pasar sin pagar!")
            gratis = true;
        }
        else {
            alert(`son las ${hora}:00 y puedes pasar, pero tienes que pagar la entrada!`)
        }
    }
    else{
        alert("Miraaa papu, eres menor de edad, entonces vete, MAQUINOLA!!")
    }
}

fiesta(22);
fiesta(23);
fiesta(00);
fiesta(1);
fiesta(1);
fiesta(2);
fiesta(2);
fiesta(3);