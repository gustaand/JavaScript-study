// Són elementos condicionales. Si cumplen la condición, se ejecutará el comando, si no cumple pasará al proximo.
// if, else if, else

nombre = prompt("Digite seu nome, Por favor!");

if (nombre != "Gustavo") {
    alert("Você não é o Gustavo!");
}

else if (nombre == "gustavo") {
    alert("Escreva com Mayuscula, por favor!");
}

else {
    alert(`hola ${nombre}`);
}