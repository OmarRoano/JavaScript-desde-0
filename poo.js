// 1. Abstraccion: definir una clase (plantilla) de una figura geometrica

class Figura{
    constructor(color){ //el metodo contructor asegura que los objetos tengan las propiedades necesarias para funcionar
        this.color = color;
    }

    //metodos son las acciones que puede realizar un objeto
    //obtener el color
    calcularArea(){
        throw new Error("El metodo no ha sido implementado");
    }
    obtenerColor(){
        return this.color;
    }
    miNombre(){
        return "Hola soy una figura";
    }
}

// 2. Herencia : Creamos subclases especificas a partir de la clase padre

class Circulo extends Figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura;
    }
}

class Triangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura / 2;
    }
    soy(){
        console.log("Hola soy triangulo");
    }
}

// 3 crear mis objetos (instanciar)

const miCirculo = new Circulo("verde", 9);
const miRectangulo = new Rectangulo("azul", 2, 5);
const miTriangulo = new Triangulo("rosa", 2, 5);

console.log("Color del círculo: ", miCirculo.obtenerColor());
console.log("Color del rectangulo: ", miRectangulo.obtenerColor());
console.log("Rectangulo dice: ",miRectangulo.miNombre());

//4 polimorfismo : un objeto puede hacer el mismo trabajo de forma diferente

function mostrarArea(figura){
    console.log(figura.calcularArea());
}


mostrarArea(miCirculo); //hace lo mismo console.log(miCirculo.calcularArea());
mostrarArea(miRectangulo);
mostrarArea(miTriangulo);
miTriangulo.soy();