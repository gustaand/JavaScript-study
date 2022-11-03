/* Caracteristicas de la Programación Orientada a Objetos.

- Abstración: Intentar reduzir lo maximo que podamos en este objeto. Se resumen en las características más importantes del objeto.
- Modularidad: Separa el problema por partes, Resolviendo parte por parte en vez del problema entero de una vez.
- Encapsulamiento: Hace con que todos los datos esten privados.
- Polimorfismo: Como el objeto se comporta de manera ante el mismo metodo.
*/

class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad}, y soy de color ${this.color}.`;
    }
    verInfo(){
        document.write(this.info);
    }
}

const perro = new animal("perro", 5, "marron");
const gato = new animal("gato", 2, "gris");
const pajaro = new animal("pajero", 1, "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();