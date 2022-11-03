/* A) 3 chicos entran en una heladería para comprar un helado, pero hay un problema: los precios no estan al lado de cada estante.
Ellos quieren comprar el helado más caro que puedan  con la plata que tienen, así que... veamos como podemos ayudarlos.´

Roberto tiene $ 1.5 USD
Pedro tiene $ 1.7 USD
Cofla tiene $ 3 USD

los precios de los helados són lo siguiente: 
Palito de helado de agua: $ 0.6 USD
Palito de helado de crema: $ 1 USD
Bombón helado marca heladix: $ 1.6 USD
Bombón helado marca heladovich: $ 1.7 USD
Bombón helado marca helardo: $ 1.8 USD
Potecito helado con confites: $ 2.9 USD
Pote de 1/4 KG: $ 2.9 USD

Crear soluciones:
- Pedirles que ingresen el dinero que tienen y mostrarles el helado mas caro
- si hay 2 o más con el mismo precio, mostrar ambos
- Cofla quiere saber cuanto es el vuelto. */

// ---- IMPORTANTE: Para convertir en decimales se usa parseFloat(), y para decir cuantos decimales va tener es .toFixed()
// de esa forma se queda así: parseFloat().toFixed();

dineroCofla = prompt("Cuanto dinero tienes?");

dineroCofla = parseFloat(dineroCofla).toFixed(2);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de agua!");
    alert("Su cambio és de: " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate el helado de crema!");
    alert("Su cambio és de: " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate el helado heladix!");
    alert("Su cambio és de: " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate el helado heladovich!");
    alert("Su cambio és de: " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate el helado helardo!");
    alert("Su cambio és de: " + (dineroCofla - 1.8));
}

else if (dineroCofla > 2.9) {
    alert("Comprate el helado con confites o el Pote de 1/4 KG");
    alert("Su cambio és de: " + (dineroCofla - 2.9));
}

else {
    alert("Lo siento, no te alcanza para ningun helado!")
}



dineroRoberto = prompt("Cuanto dinero tienes?");

dineroCofla = parseFloat(dineroRoberto).toFixed(2);

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Comprate el helado de agua!");
    alert("Su cambio és de: " + (dineroRoberto - 0.6));
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Comprate el helado de crema!");
    alert("Su cambio és de: " + (dineroRoberto - 1));
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Comprate el helado heladix!");
    alert("Su cambio és de: " + (dineroRoberto - 1.6));
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Comprate el helado heladovich!");
    alert("Su cambio és de: " + (dineroRoberto - 1.7));
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Comprate el helado helardo!");
    alert("Su cambio és de: " + (dineroRoberto - 1.8));
}

else if (dineroRoberto > 2.9) {
    alert("Comprate el helado con confites o el Pote de 1/4 KG");
    alert("Su cambio és de: " + (dineroRoberto - 2.9));
}

else {
    alert("Lo siento, no te alcanza para ningun helado!")
}


dineroPedro = prompt("Cuanto dinero tienes?");

dineroCofla = parseFloat(dineroPedro).toFixed(2);

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Comprate el helado de agua!");
    alert("Su cambio és de: " + (dineroPedro - 0.6));
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Comprate el helado de crema!");
    alert("Su cambio és de: " + (dineroPedro - 1));
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Comprate el helado heladix!");
    alert("Su cambio és de: " + (dineroPedro - 1.6));
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Comprate el helado heladovich!");
    alert("Su cambio és de: " + (dineroPedro - 1.7));
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Comprate el helado helardo!");
    alert("Su cambio és de: " + (dineroPedro - 1.8));
}

else if (dineroPedro > 2.9) {
    alert("Comprate el helado con confites o el Pote de 1/4 KG");
    alert("Su cambio és de: " + (dineroPedro - 2.9));
}

else {
    alert("Lo siento, no te alcanza para ningun helado!")
}