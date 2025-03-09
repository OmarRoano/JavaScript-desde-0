document.addEventListener('DOMContentLoaded', () => {
    //Obtencion de elementos por su ID
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const contacto = document.getElementById('contacto');

    //obtencion de elemntos por DOM por su ID del menu de navegacion
    const menuInicio = document.getElementById('menu-inicio');
    const menuProductos = document.getElementById('menu-productos');
    const menuContacto = document.getElementById('menu-contacto');

    //Obtencion de elementos del DOM para el carrito de compras
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0;   //variable para almacenar el total del carrito

    //obtencion de los elemntos del DOM para el formulario 
    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    //evento para mostrar la seccion de inicio y ocultar las demas
    menuInicio.addEventListener('click', (e) =>{   // la "e" es de evento, la funcion recibe un evento
        e.preventDefault();       //evita un comportamiento por defecto
        inicio.style.display = 'block';  //mostrar
        productos.style.display = 'none'; //ocultar
        contacto.style.display = 'none';  //ocultar
    });
    //evento para mostrar la seccion de productos y ocultar las demas
    menuProductos.addEventListener('click', (e) =>{   // la "e" es de evento, la funcion recibe un evento
        e.preventDefault();       //evita un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'block';
        contacto.style.display = 'none';
    });
    //evento para mostrar la seccion de contacto y ocultar las demas
    menuContacto.addEventListener('click', (e) =>{   // la "e" es de evento, la funcion recibe un evento
        e.preventDefault();       //evita un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'none';
        contacto.style.display = 'block';
    });

    //evento para agregar productos al carrito
    productos.addEventListener('click',(e) =>{
        if(e.target.classList.contains('agregar-carrito')){
            //se optiene el nombre del producto
            const nombre = e.target.dataset.nombre;
            //se optiene el precio del producto
            const precio = parseInt(e.target.dataset.precio);

            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `${nombre} - $${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio;
            console.log(total);

            actualizarTotalCarrito();

            //target = es una propiedad que despliega el elemento que desencadeno
            //classList = nos permite acceder a las clases de un elemento

        }
    });

    //ejemplo de queryselector para manipular el total del carrito 
    const totalElemento = document.querySelector('#total-carrito');

    function actualizarTotalCarrito(){
        totalElemento.textContent = total;
    }

    // Titulo del carrito con queryselector 
    const tituloCarrito = document.querySelector('#carrito h2');
    tituloCarrito.textContent = 'Sus pasteles : ';

    //simular envio de nuestro formulario 
    formularioContacto.addEventListener('submit', function(event){
        event.preventDefault(); //evitar el comportamiento por defecto
        formularioContacto.style.display = 'none';
        mensajeEnviado.style.display = 'block';
    });

    productos.addEventListener('mouseover', (e) => {
        if(e.target.classList.contains('producto')){
            const precio = e.target.querySelector('.agregar-carrito').dataset.precio; //encuentra el precio del producto (en el boton)
            e.target.setAttribute('title', `Precio : $${precio}`);
            //como tooltip
        }
    })
})