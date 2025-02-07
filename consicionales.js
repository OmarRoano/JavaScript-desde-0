//Tipo de mascota = Perro, Gato, Hamster

//Condicionales (Jaula grande, jaula mediana, jaula pequeña)
let tipoDeMascota = "Perro";

if (tipoDeMascota === "Perro"){
    console.log("Tienes un perro, necesitas la jaula grande");
} else if (tipoDeMascota === "Gato"){
    console.log("Tienes un gato, necesitas la jaula mediana");
} else if (tipoDeMascota === "Hamster"){
    console.log("Tienes un gato, necesitas la jaula mediana");
} else {
    console.log("No contamos con esta mascota");
}

// Semaforo color = Rojo, Amarillo, Verde
//rojo = alto , amarillo = detente , verde = siga

let colorSemaforo = "Amarillo";

if (colorSemaforo === "Verde"){
    console.log("Siga");
}else if (colorSemaforo === "Amarillo"){
    console.log("Detente");
}else if (colorSemaforo === "Rojo"){
    console.log("Alto");
}else {
    console.log("Color invalido");
}


let creditos = 10;
let promedio = 5;

if (creditos >= 10 && promedio >= 8.5){
    console.log("Tienes derecho a una beca")
} else {
    console.log("No tienes derecho a una beca")
    if (creditos < 10){
        console.log("Te hacen falta creditos");
    } else if (promedio < 8.5){
        console.log("Tu promedio debe subir")
    } else {
        console.log("no se por que, pero NO tienes beca XD")
    }
}
