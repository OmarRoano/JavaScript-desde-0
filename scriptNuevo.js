document.addEventListener('DOMContentLoaded', () => {
    const productoInput = document.getElementById('producto');
    const agregarButton = document.getElementById('btn_agregar');
    const listaCompras = document.getElementById('lista_compras');
    
    let productos = []; //arreglo para almacenar los productos

    agregarButton.addEventListener('click',()=>{
        const nombreProducto = productoInput.value.trim();
        if(nombreProducto){
            const nuevoProducto = { //objeto para representar un producto
                nombre: nombreProducto,
                comprado: false
            };
            productos.push(nuevoProducto);
            agregarProductoALista(nuevoProducto);
            productoInput.value = '';
        }
    });

    function agregarProductoALista(producto){
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = producto.nombre;
        listaCompras.appendChild(nuevoItem);
    }
});

