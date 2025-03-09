document.addEventListener('DOMContentLoaded', iniciarApp);

//DOMContentLoaded: 

//addEventListener:
function iniciarApp(){
    const productoInput = document.getElementById('producto');
    const agregarButton = document.getElementById('btn_agregar');
    const listaCompras = document.getElementById('lista_compras');
//getElementById:
    let productos = [];

    agregarButton.addEventListener('click', function(){
        agregarProducto(productos, productoInput, listaCompras);
    });
}

function agregarProducto(productos, productoInput, listaCompras){
    const nombreProducto = productoInput.value.trim();
    if(nombreProducto){
        const nuevoProducto = {
            nombre: nombreProducto,
            comprado: false
        };
        productos.push(nuevoProducto);
        productoInput.value = '';
    }
}
// value: 
// trim():
// appendChild:
function mostrarProductos(producto, listaCompras){
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = producto.nombre;
    listaCompras.appendChild(nuevoItem);
}