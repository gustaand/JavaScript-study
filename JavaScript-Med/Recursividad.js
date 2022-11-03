// ---- RECURSIVIDADE ----
// Recursividad és cuando una función llama a si misma. !!! cuidado, se puede hacer un bucle infinito !!!

const validarEdad = (msg)=>{
    let edad;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un número para la edad"
        if (edad > 18) console.log("Eres mayor de edad");
        else console.log("Eres menor de edad");
    } catch(e){
        validarEdad(e)
    }
} 

//--- Sequencia fibonacci recursiva ---

function fibonacci(n){
    if (n < 2){
        return n;
    } 
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const numero = prompt("Digite um numero para a sequencia:");
if (numero <=0){
    alert("digite um numero positivo!");
}
else {
    for (i = 0; i < numero; i++);{
        console.log(fibonacci(i));
    }
}


/* this és lo mismo que decir window, de hecho són estrictamente lo mismo: window === this */