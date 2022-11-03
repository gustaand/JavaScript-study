// ---- OPERADOR TERNÁRIO ----

let edad = parseInt(prompt("digite sua idade:"));

(edad >= 18) ? (
    console.log("Es mayor de edad"),
    console.log("Puedes pasar")
) : (
    console.log("Eres menor de edad"),
    console.log("No puedes pasar")
)

/* 
- El operador ternário és un operador condicional.
- Se expresa con ?.
- primero la condición, después el signo de ?, y despues lo que sucedería si fuese verdadero. 
después poner el signo : para determinar que pasaría si fuera falso. 

- ? pasará si la condición és verdadera.
- : pasará si la condición és falsa.

- se separa los "eventos", o cualquier otra cosa con parentesis () y las separamos por comas ,
- ultiliza menores recursos que if.

*/