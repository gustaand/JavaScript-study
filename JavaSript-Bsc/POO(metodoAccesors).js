//Metodo Accrsors. Getters, Setters
// los getters y los setters funcionan como propiedades.

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

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }
    set setRaza(newName) {  //----> set = setter, estamos modificando el valor de this.raza. Nos toma como propiedad.
        this.raza = newName;
    }
    get getRaza(){         //-----> get= getter, retorna un valor.
        return this.raza
    }
}

const perro = new Perro("perro", 5, "marron", "doberman");

perro.setRaza = "pedro";  //----> aqui está 
document.write(perro.getRaza);