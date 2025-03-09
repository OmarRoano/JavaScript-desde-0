document.addEventListener('DOMContentLoaded', () => {
    
    let btnAgregar = document.getElementById("btnAgregar");

    btnAgregar.addEventListener('click', (e) =>{
        
        let comentario = document.getElementById("comentarioEntrada").value;
        let cajaComentario = document.getElementById("cajaComentario");
        let listaComentarios = document.createElement("div");
        let fecha = new Date();
        let timestamp = fecha.toLocaleString();
        let btnBorrar = document.createElement("button");

        if (comentario.trim() === "") return;
        
        listaComentarios.classList.add("comentario");
            
        listaComentarios.textContent = comentario +"__________________" +timestamp; 
        btnBorrar.innerText = "Eliminar";
        btnBorrar.classList.add("btnBorrar");

        btnBorrar.onclick = function() {
            cajaComentario.removeChild(listaComentarios);
        };
        
        listaComentarios.appendChild(btnBorrar);
        cajaComentario.appendChild(listaComentarios);

        document.getElementById("comentarioEntrada").value = "";
    });
});
