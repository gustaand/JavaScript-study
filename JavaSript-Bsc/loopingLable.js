// Lable asocia un looping a un nombre, para poder terminar cuando queramos.
//ej: tenemos un array dentro de otro con los siguientes loopings:

/*
let array1 = ["maría", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1];

for (let array in array2) {
    if (array == 2){
        for (let array of array1){
            document.write(array + "<br>");
        }
    } 
    else {
        document.write(array2[array] + "<br>");
    }
}
*/

// para parar un solo looping o saltar algun de los bucles, usamos el metodo Lable, que es dar nombre al looping. ej
// forXablau: 

 
let array1 = ["maría", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1];

forRancio:
for (let array in array2) {
    if (array == 2){
        for (let array of array1){
            continue forRancio; //en este caso hace con que el for se salte, y solo me muestra la array2 "pedro", "marcelo"
            document.write(array + "<br>");
        }
    } 
    else {
        document.write(array2[array] + "<br>");
    }
}


// ____ PRÁCTICA ____

let nomes = ["nome1", "nome2", "nome3"]
let idade = ["idade1", "idade2", "idade3", nomes]

forPirulito:
for (let xablau in idade) {
    if (xablau == 3){
        for (let xablau of nomes){
            continue forPirulito; 
            document.write(xablau + "<br>");
        }
    }
    else {
        document.write(idade[xablau] + "<br>");
    }
}