// En una tienda de mobiles entra una persona para comprar y queda indecisa entre 3.
// - Crear un sistema para mostrar las particularidades de los 3 celulares.
// - Cada celular debe tener color, peso, resolución de pantalla, resolución de camara y memoria ram.
// - Cada celular debe poder prender, reiniciar, apagar, tomar foto y grabar.

class celular{
    constructor(color, peso, pantalla, camara, ram){
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }
        else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("celular reiniciando");
        }
        else {
            alert("el celular está apagado")
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolución de: ${this.camara}`);
    }
    grabarVideo(){
        alert(`grabando vídeo en: ${this.camara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Pantalla: <b>${this.pantalla}</b><br>
        Resolución de Camara: <b>${this.camara}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        `;
    }
}

const celular1 = new celular("rojo", "150g", "5'", " HD", "1BG");
const celular2 = new celular("negro", "155g", "5.4'", "full HD", "2BG");
const celular3 = new celular("blanco", "146g", "5.9'", "full HD", "2BG");


// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`)


document.write("<br><br> Celulares de Alta Gama: <br><br><br>");
/* Crear 2 celulares de alta gama que puedan hacer lo mismo que los anteriores pero con mejores características y además podrán
grabar en camara super lenta, tienen reconocimiento facial y una camara extra. */

class altaGama extends celular{
    constructor(color, peso, pantalla, camara, ram, camaraExtra,){
        super(color, peso, pantalla, camara, ram);
        this.camaraExtra = camaraExtra;
    }
    grabarVideoLento(){
        alert("Grabando en Camara Lenta")
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de Camara Extra: <b>${this.camaraExtra}</b><br>`
    }
}

const celularAltaGama1 = new altaGama("rojo", "130g", "5.2'", "4k", "3GB", "full hd");
const celularAltaGama2 = new altaGama("negro", "135g", "5.8'", "4k", "4GB", "hd");

document.write(`
    ${celularAltaGama1.infoAltaGama()} <br>
    ${celularAltaGama2.infoAltaGama()} <br>
`)