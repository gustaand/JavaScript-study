// ---- CONTROL DE FLUJO (SWITCH) ----

let expr = "manzana";

switch(expr){
    case "banana":
        console.log("Es una banana");
        break;
    case "pera":
        console.log("Pode pera!");
        break;
    case "manzana":
        console.log("Se caió en la cabeça de Newton!");
        break;
}

/* Además del while, del if, else, etc. Tenemos el switch:

primero analiza la expresión y muestra el valor al que corresponde, ej:
let expr = "manzana";
switch(expr) va ser "manzana"
*/ 