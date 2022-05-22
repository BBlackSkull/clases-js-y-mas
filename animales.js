class Animal{
    constructor (especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad}, 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
}
class Perro extends Animal {
    constructor(especie,edad,color,raza){ 
    super(especie,edad,color);
    this.raza = null;
    }
    
    set modificarRaza(newName){
        this.raza = newName;
    }
}


const perro = new Perro ("perro","5","marron","doberman");
const gato = new Animal ("gato","2","negro");
const serpiente = new Animal ("cobra","4","caca");

//perro.verInfo();
//gato.verInfo();
//serpiente.verInfo();
//perro.ladrar();

perro.modificarRaza = "Fuck U";
    document.write(perro.raza)