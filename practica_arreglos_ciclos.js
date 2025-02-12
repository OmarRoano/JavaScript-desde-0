let frutas = ['Manzana','Pera','Manzana', 'Pera','Naranja','Fresa','Fresa','Guayaba','Manzana','Pera','Pera'];
let nombre_frutas = ['Manzana','Pera','Naranja','Platano','Fresa','Guayaba'];
let numero_frutas = [0,0,0,0,0,0];

for (let i = 0; i < frutas.length; i++){
    for (let j = 0; j < nombre_frutas.length; j++){
        if ( frutas[i] === nombre_frutas[j]){
            numero_frutas[j]++;
        }
    }
}
for (let i = 0; i < nombre_frutas.length; i++){
    console.log(nombre_frutas[i] + " = " + numero_frutas[i]);
}
console.log(numero_frutas);