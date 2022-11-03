// Crear una calculadora con las funciones: Sumar; Restar; Dividir; Multiplicar; Potencias; Raíces cuadradas y cubicas.

class Calculadora{
    constructor(){

    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }

    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }

    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num, exp){
        return parseInt(num) ** parseInt(exp);
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("Que operación deseas realizar?");
let operacion = prompt("1: sumar, 2: restar, 3: dividir, 4: multiplicar, 5: potenciar, 6: raíz cuadrada, 7: raíz cúbica");

if (operacion == 1){
    let numero1 = prompt("primer número para sumar: ");
    let numero2 = prompt("segundo número para sumar: ")
    resultado = calculadora.sumar(numero1, numero2);
    alert(`tu resultado és:  ${resultado}`);
}

else if (operacion == 2){
    let numero1 = prompt("primer número para restar: ");
    let numero2 = prompt("segundo número para restar: ")
    resultado = calculadora.restar(numero1, numero2);
    alert(`tu resultado és:  ${resultado}`);
}

else if (operacion == 3){
    let numero1 = prompt("primer número para dividir: ");
    let numero2 = prompt("segundo número para dividir: ")
    resultado = calculadora.dividir(numero1, numero2);
    alert(`tu resultado és:  ${resultado}`);
}

else if (operacion == 4){
    let numero1 = prompt("primer número para multiplicar: ");
    let numero2 = prompt("segundo número para multiplicar: ")
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`tu resultado és:  ${resultado}`);
}

else if (operacion == 5){
    let numero1 = prompt("Numero a potenciar: ");
    let numero2 = prompt("Exponente: ")
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`tu resultado és:  ${resultado}`);
}

else if (operacion == 6){
    let numero1 = prompt("Raíz cuadrada de: ");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`La raíz cuadrada de ${numero1} és:  ${resultado}`);
}

else if (operacion == 6){
    let numero1 = prompt("Raíz cúbica de: ");
    resultado = calculadora.raizCubica(numero1);
    alert(`La raíz cúbica de ${numero1} és:  ${resultado}`);
}


else {
    alert("Operación no encontrada!")
}