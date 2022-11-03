// Es un tipo de Array, pero en vez de decirmos la posición, llamamos el nombre y nos dá el elemento que asociamos a este nombre.
// Se abre con {}

let pc = {
    nombre: "Gustavo",
    procesador: "AMD Ryzen 7",
    ram: "16GB",
    espacio: "1TB"
}

// Se llama igual que la lista, ej: alert(pc["nombre"])

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `PC: ${nombre} <br>
         Procesador: ${procesador} <br>
         Ram: ${ram} <br>
         Espacio: ${espacio} <br>`;

document.write(frase)