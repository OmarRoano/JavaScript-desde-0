document.addEventListener('DOMContentLoaded', () => {
    
    let btnAgregar = document.getElementById("btnAgregar");

    btnAgregar.addEventListener('click', () => {
        let comentario = document.getElementById("comentarioEntrada").value;
        let cajaComentario = document.getElementById("cajaComentario");
        let listaComentarios = document.createElement("div");
        let textoComentario = document.createElement("p");
        let fecha = new Date();
        let timestamp = fecha.toLocaleString();
        let timestampSpan = document.createElement("span");
        let btnBorrar = document.createElement("button");

        if (comentario.trim() === "") return;

        listaComentarios.classList.add("comentario");
        textoComentario.textContent = comentario;
        timestampSpan.textContent = " " + timestamp;
        timestampSpan.style.fontSize = "12px";
        timestampSpan.style.color = "gray";

        btnBorrar.innerText = "Eliminar";
        btnBorrar.classList.add("btnBorrar");

        btnBorrar.onclick = function () {
            cajaComentario.removeChild(listaComentarios);
        };

        listaComentarios.appendChild(textoComentario);
        listaComentarios.appendChild(timestampSpan);
        listaComentarios.appendChild(btnBorrar);
        cajaComentario.appendChild(listaComentarios);

        document.getElementById("comentarioEntrada").value = "";
    });
});