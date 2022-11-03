/* Herencia: crea una clase que va tomar todas las propiedades de la otra clase y agrega cosas nuevas. (sintaxi: extends).
cuando se hace una heredad, se puede heredar todos los métodos de la otra clase sin hacer falta poner el this.*/

// NO PUEDO TENER UN OBJETO CON EL MISMO NOMBRE DE LA CLASE!!!

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

// Vamos hacer un extends que va heredar todos los atributos de la clase animal y vamos adicionar un
// atributo nuevo "raza" y  una nueva clase "ladrar"

class Perro extends Animal{
    constructor(especie,edad, color, raza){
        super(especie,edad,color);            // -----> Se hereda las clases anteriores con el "SUPER"
        this.raza = null;
    }
    static ladrar(){         //------> estamos creando un método estático que no necesita de todo el resto de la clase, se le puede llamar sin más
        alert("perro: WAW!!");
    }
}

// Un método estático és un método que no necesita que la clase se defina para poder ser creado. (static)

const perro = new Perro("perro", 5, "marron", "doberman");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

Perro.ladrar(); // Estamos llamando directamente a la clase que coja el static, ya que no necesita estar definida. 
perro.verInfo();
gato.verInfo();
pajaro.verInfo();

//Métodos Static: Un método estático és un método que no necesita que la clase se defina para poder ser creado. (static)
//Métodos accesors (Getters, Setters)