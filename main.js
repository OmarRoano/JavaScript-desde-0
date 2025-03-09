function cambiarTexto(){
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola, desde el DOM";
}

function cambiarColorClase(){
    let parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++){
        parrafos[i].style.color = "blue";
    }
    //seleccionamos todos los elementos de la clase texto, y luego usamos un bucle para cambiar de color todos los parrafos seleccionados 
}

function ocultarParrafo(){
    // Seleccionamos el elemento 4 de las P ,se empieza a contar de 0
    let segundoParrafo = document.getElementsByTagName("p")[4];
    segundoParrafo.style.display = "none";
    //seleccionamos todos los elementos p y despues indicamos mediante el indice que tomaremos con []
}
function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector("div p");
    parrafoDiv.textContent = "Texto cambiado destro del div";
}
/*Selecciona el primer parrafo que encuentre dentro de un Div*/
function marcarItems(){
    let items = document.querySelectorAll("li");
    items.forEach(item => {
        item.style.backgroundColor = "yellow";
    }) /*Seleccionamos todos los elementos li en la pagina y cambia su color de fondo a amarillo*/
}