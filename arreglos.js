

let verduras = ["Lechuga","Tomate","Cebolla","Jitomate","Papa","Pimiento"];

console.log(verduras[0]);
console.log(verduras[1]);
console.log(verduras[2]);
console.log(verduras[3]);

console.log(verduras.length);

for(let i = 0; i <verduras.length; i++){
    console.log(verduras[i]);
}

console.log("Metodos de arreglos")
let personas = [];

personas.push('Ana'); //agrega un elemento al arreglo
personas.push('Diego');
personas.push('Liset');
personas.push('Marcela');

console.log(personas);

personas.pop(); //elimina el ultimo elemento del arreglo
console.log(personas);

personas.unshift('Alex'); // se agrega un elemento al inicio del arreglo 
personas.unshift('Yolanda');
console.log(personas);

personas.shift();
console.log(personas);

personas[1] = 'Monica';  //modifica un elemento del arreglo 
console.log(personas);
