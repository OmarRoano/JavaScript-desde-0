let frutas = ['Pera','Manzana','Manzana', 'Pera','Naranja','Fresa','Fresa','Guayaba','Manzana','Pera','Pera'];

let nombre_frutas = ['Manzana','Pera','Naranja','Platano','Fresa','Guayaba'];
let numero_frutas = [0,0,0,0,0,0];
//Solucion con for y arrays
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

//Solucion con objetos 
let contador_fruta = {};  //Se declara un objeto
frutas.forEach(fruta => {
    contador_fruta[fruta] = (contador_fruta[fruta]||0) + 1;
});
//Una opcion para imprimir datos de un objeto
Object.entries(contador_fruta).forEach(([fruta, cantidad]) => {
    console.log(`${fruta} = ${cantidad}`);    //comillas inversas o backticks
});
console.log(numero_frutas);
//otra opcion para imprimir datos de un objeto
Object.keys(contador_fruta).forEach(fruta => {
    console.log(fruta + " = " + contador_fruta[fruta]);
});