// programa para mostrar los multiplos de 5 hasta un numero dado

let numero = 20;

let contador = 1;

while (contador <= numero){
    //codigo a iterar
    if(contador % 5 === 0){
        console.log(contador);
    }
    contador++; //incremento del contador
    //contador = contador + 1;
}

console.log("Fin del programa");

//numeros impares
let num = 35;

for(let i = 0; i <= num; i++){
    if (i % 2 !== 0 ){
        console.log(i);
    }
}

console.log("Fin del programa");

//imprimir los numeros del 1 al 10

let inicio = 0;

while (inicio <= 10){
    console.log(inicio);
    inicio++;
}

for (let i = 0; i <= 10; i++){
    console.log(i);
}