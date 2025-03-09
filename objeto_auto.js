const auto = {
    color : "Rojo",
    marca : "Ford",
    modelo : "Fiesta",
    kilometrosRecorridos : 123000,
    mostrarInfo : function (){
        console.log(`el carro es color ${this.color} de la marca ${this.marca} y modelo ${this.modelo} con un kilometraje de ${this.kilometrosRecorridos} kilometros recorridos`);
    }
}

console.log("Color " + auto.color);
console.log("Encendido ? " + auto.encendido);  //intento de acceder a propiedad que no existe
auto.mostrarInfo();

