/* Crear un sistema entre 7 apps que tenga:
- información de descargas, puntuación y peso
- Las apps se deben poder instalar, abrir, cerrar, desinstalar
*/

class App{
    constructor(descargas, puntuación, peso){
        this.descargas = descargas;
        this.puntuación = puntuación;
        this.peso = peso;
        this.instalar = false;
        this.abrir = false;
    }
    botonInstall(){
        if (this.instalar == false){
            alert("Programa Instalado")
            this.instalar = true;
        }
        else {
            alert("Programa desinstalado");
            this.instalar = false;
        }
    }
    abrirApp(){
        if (this.instalar == true && this.abrir == false){
            alert("Abriendo App");
            this.abrir = true;
        }
        else if (this.abrir == true){
            alert("Cerrando App");
            this.app = false;
        }
        else {
            alert("No fue posíble abrir la App por que el programa no está instalado!")
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuación}</b><br>
        Tamaño: <b>${this.peso}</b><br>
        `
    }
}

const app1 = new App("25.000", "4.2", "600Mb");
const app2 = new App("100.000", "4.1", "1.2GB");
const app3 = new App("1M", "4.3", "1GB");
const app4 = new App("5M", "4.3", "1.3GB");
const app5 = new App("10M+", "4.1", "1.2GB");
const app6 = new App("1M", "4.6", "2GB");
const app7 = new App("5M", "4.7", "1.6GB");

// app1.botonInstall();
// app1.abrirApp();
// app1.abrirApp();
// app1.botonInstall();

document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `)