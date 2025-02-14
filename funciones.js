// palabra reservada function + nombre de la funcion + parametros
function Sumar (numero1, numero2){  
    let total = numero1 + numero2;
    return total;
}

let resultado = Sumar (10,9);
console.log(resultado);
console.log(Sumar(12,20));

function Saludar (nombre){
    console.log("Hola, bienvenido!! " + nombre);
}
Saludar("Omar");
Saludar("Yare");

let total = "Hola";

function Restar(a,b){
    let total = a-b;
    console.log(total);
}

Restar(10,5);

console.log(total);

function Casita(){  //funcion qeu no recibe parametros (datos de entrada)
    let nombre = "Ana";       //variable local
    let apellido = "Aguilar";
    console.log("Esta es la casa de " + nombre + " "+ apellido);
}
Casita();

//console.log(nombre);

let nombre = "Juana";  //variable global
let edad = 20;
let ciudad = "Teziutlan";

//forma antigua de imprimir
console.log("Ella se llama "+ nombre + " tiene " + edad + " años y vive en " + ciudad); 

//forma nueva de imprimir y mas cómoda para sacar `` es con Ctrl+Alt+}
console.log(`Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`); 

//pedir datos al usuario en consola
let usuario = prompt ("Cual es tu nombre? ");
let gatos = prompt ("Cuantos gatos tienes? ");
let perros = prompt ("Cuantos perros tienes? ");
let num_mascotas = Number(gatos) + Number(perros);

//se ven los datos en consola 
console.log(`${usuario} tiene ${gatos} gatos y ${perros} perros.`);

// se ven los datos como un mensaje pop up
alert (`${usuario} tiene ${gatos} gatos y ${perros} perros.`);
alert (`En total tienes ${num_mascotas} mascotas`);
// se imprimen los datos directamente en la pagina
document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros.`);

// en total tienes x mascotas 
document.write(`En total tienes ${num_mascotas} mascotas`);
