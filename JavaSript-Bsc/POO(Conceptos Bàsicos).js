/* conceptos básicos de programación orientada a objetos:
- Clase
- Objeto
- Atributo
- Metodo
- Constructor
- Instanciación
*/
// NO PUEDO TENER UN OBJETO CON EL MISMO NOMBRE DE LA CLASE!!!

class animal {
    constructor(especie, edad, color){     //pasamos los parametros q va a contener nuestra clase dentro del constructor()
        this.especie = especie;
        this.edad = edad;
        this.color = color;                 //this: Estoy diciendo que el objeto va tener una propiedad/atributo.
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    verInfo(){                       // -----------> esto es un método. (lo mismo que una función.)
        document.write(this.info + "<br>");
    }
}

//Los metodos són las acciones que podemos hacer con la clase. Los metodos se crean dentro de la clase. (es una función dentro de la clase.)
//Las funciones flecha no pueden ser usadas dentro de las clases para hacer métodos.

const perro = new animal("perro", 5, "caramelo");  //con el new estamos diciendo q vamos a crear un nuevo objeto, crear un nuevo animal.
const gato = new animal("gato", 2, "gris");
const pajaro = new animal("pajaro", 1, "azul");

// si lo mostramos en pantalla o por console.log() nos va mostrar el objeto. Se selecciona el objeto con un punto.

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pajaro.info);

//llamamos al método que creamos.

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

