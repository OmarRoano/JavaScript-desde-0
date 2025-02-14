// declaro mi arreglo vacio
let libros_leidos = [];

//declarar mi funcion agregarLibro

function agregarLibro(tituloLibro){
    libros_leidos.push(tituloLibro);
}

agregarLibro("El principito");
agregarLibro("Las mujeres que amaban demasiado");
agregarLibro("Los 7 esposos de Evelyn Hugo");

console.log(libros_leidos);
console.log("____________________________");

function mostrarLibrosLeidos(){
    for(let i = 0; i < libros_leidos.length; i++){
        console.log(libros_leidos[i]);
    }
}

mostrarLibrosLeidos();
console.log("____________________________");
agregarLibro("El alquimista");
agregarLibro("Arrancame la vida");
agregarLibro("La biblioteca infinita");
agregarLibro("Un mundo feliz");
agregarLibro("Almendra");

mostrarLibrosLeidos();
