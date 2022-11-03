// ----- OBJETO MATH BÁSICO -----

// numero = Math.sqrt(25); // me va mostrar la raiz cuadrada de 25.
// numero1 = Math.cbrt(27); // me va mostrar la raiz cubica de 27.

//-------- MAX y MIN ------ trabaja solo con números
//Math.max() me muestra el numero más grande.
//Math.min() me muestra el numero más pequeño.

numero = Math.max(4, 1, 5, 234, 135, 567, 90, 3);

document.write(numero + "<br>");

// ---- Random y Round -----
// Random: muestra un numero aleatório entre 0 y 1. se le puede multiplicar.
// round: redondea el numero al numero más cercano.
// combinando random y round podemos obtener numeros aleatórios entre 0 y 100.

numero1 = Math.random()*100;
numero1 = Math.round(numero1);

document.write(numero1);

/*

------ OBJETO MATH BÁSICO ------

_____ Metodos _____

- sqrt() - Devuelve la raíz cuadrada positiva de un número.
- cbrt() - Devuelve la raíz cúbica de un número.
- max() - Devuelve el mayor de cero o más números.
- min() - Devuelve el más pequeño de cero o más números.
- random() - Devuelve un número pseudo-aleatorio entre 0 y 1.
- round() - Devuelve el valor de un número redondeado al número entero más cercano.
- fround() - Devuelve la representación flotante de precisión simple más cercana de un número.
- floor() - Devuelve el mayor entero menor que o igual a un número.
- trunc() - Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.


_____ Propiedades _____

- PI - Ratio de la circunferencia de un circulo respecto a su diámetro, apriximadamente 3.14159.
- SQRT1_2 - Raíz cuadrada de 1/2; Equivalentemente, 1 sobre la raíz cuadrada de 2, aproximadamente 0.707.
- SQRT2 -  Raíz cuadrada de 2, aproximadamente 1.414.

- E - Constande de Euler, la base de los logaritmos naturales, aproximadamente 2.718.
- LN2 - Logaritmo natural de 2, aproximadamente 0.693.
- LN10 - Logaritmo natural de 10, aproximadamente 2.303.
- LOG2E - Logaritmo de E con base 2, aproximadamente 1.443.
- LOG10E - Logaritmo de E con base 10, aproximadamente 0.434.

*/