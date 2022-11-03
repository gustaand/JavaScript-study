// ---- TIMERS (TEMPORIZADORES) ----
// Nos permite hacer trabajo con tiempo.


const intervalo = setInterval(()=>{
    document.write("Hola ");
}, 1000);

setTimeout(()=>{
    clearInterval(intervalo);
}, 5000);








/* ---- Timers ----

- setTimeout() - recibe una función como primer parámetro: , y el segundo parámetro dice en cuanto tiempo 
  lo queremos ejecutar ej: 2000 (2s, pero la cantidad es en milesegundos), ej:
  setTimeout(()=>{}, 2000): también se puede definir antes una función y llamarla en el parentesis.

- setInterval() - hace lo mismo que setTimeout(), pero ejecuta en intervalos, y no solo una vez. ej: si ponemos 2000
  va ejecutar una función a cada 2s.

- clearTimeout() - Sirve para limpiar (o eliminar) el temporizador.

- clearInterval() - Sirve para limpiar (o eliminar) el intervalo. Se le puede definir cuanto tiempo después de que se ejecute.

*/