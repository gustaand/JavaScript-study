// el for és un looping determinado. Le decimos cuantas vueltas va a dar.
/* Con el for trabajamos con 3 partes.
primero declaramos la variable,
después inicializamos el looping
y por ultimo iteramos (aumento o decremento) */ 

//for (let i=0 declaramos; i < 6 decimos la condición; i++ iteramos)

for (let i = 0; i < 6; i++) {
    document.write(i + "<br>")
}

// también se puede declarar la variable por fuera. 
let i = 1
   
// se puede dar continue, para que se salte a donde queramos y continue des de alli.

for (i; i <= 6; i++) {

    if (i == 3) {
        continue;
    }

    document.write("<br>" + i  + "<br>")
}


// también se le puede parar en algun punto determinado con if break

// ---- FOR IN ----
// recorre la Array.
// ---- para el for in, si pongo para mostrar solo la variable, me mostrará el index. */ 
// este nos muestra el índice de los elementos.

let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales){
    document.write(animal + "<br>") //en este caso la variable es animal. si ponemos document.write(animales[animal]) nos va mostrar los valores de los elementos.
}

document.write("<br> <br>")

// ---- FOR OF ----
// recorre la Array.
// en for (animal of animales) me muestra directamente los nombres (o los valores)de los elementos.

for (animal of animales){
    document.write(animal + "<br>")
}
