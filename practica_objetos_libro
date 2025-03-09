class Libro {
    //Constructor del objeto
    constructor (titulo,autor,anio,estado, capitulos){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.setEstado(estado);
        this.capitulos = capitulos;
    }
    //Evalua que el estado ingresado sea valido
    setEstado(estado){
        if(estado === "disponible" || estado === "prestado"){
            this.estado = estado;
        }
        else{
            console.log("No se puede establecer el estado ingresado...");
            this.estado = "desconocido";
        }
    }
    getEstado(){
        return this.estado;
    }
    describirLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es : ${this.estado}.`);
    }
    imprimirCapitulos(){
        for (let i = 0 ; i < this.capitulos.length ; i++){
            console.log(`Capítulo ${i + 1}: ${this.capitulos[i]}`);
        }        
    }
    agregarCapitulo(nombreCapitulo){
        this.capitulos.push(nombreCapitulo);
    }
    editarCapitulo(numeroCapitulo, nuevoNombreCapitulo){
        this.capitulos[numeroCapitulo-1] = nuevoNombreCapitulo;
    }
    borrarCapitulo(numeroCapitulo){
        this.capitulos.pop();
    }

}
// se crea el array inicial para guardar los nombres de los capitulos del libro
let nombreCapitulos = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];

//Se crean objetos miLibro de la clase Libro
const miLibro = new Libro("¿Sueñan los androides con ovejas eléctricas?","Philip K. Dick",1968,"prestado",nombreCapitulos);

const miLibro2 = new Libro("Mujeres de ojos Grandes","Ángeles Mastretta",1990,"prestado",nombreCapitulos);

const miLibro3 = new Libro("Las brujas de su majestad","Juno Dawson",2022,"disponible",nombreCapitulos);

//Vector donde se guardan los obejetos de tipo Libro
let libros = [];
libros[0] = miLibro;
libros[1] = miLibro2;
libros[2] = miLibro3;

//Se ejecuta el metodo que imprime la descripcion del libro
console.log("_________________________________");
miLibro.describirLibro();
//Se ejecuta el metodo que imprime la lista de capitulos del libro
console.log("_________________________________");
miLibro.imprimirCapitulos();
//Se realizan pruebas de las funciones de agregar, borrar y editar elementos de la lista de capitulos
console.log("_________________________________");
miLibro.agregarCapitulo("El de prueba 1");
miLibro.agregarCapitulo("El de prueba 2");
miLibro.imprimirCapitulos();
console.log("_________________________________");
miLibro.editarCapitulo(9,"El nueve")
miLibro.borrarCapitulo();
miLibro.imprimirCapitulos();
console.log("_________________________________");


//Prueba para acceder a los datos de los objetos dentro del vector de libros
libros[0].describirLibro();
libros[1].describirLibro();
libros[2].describirLibro();
console.log(libros[0].autor);
console.log(libros[1].autor);
console.log(libros[2].autor);

