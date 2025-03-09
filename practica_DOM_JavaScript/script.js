function agregarComentario() {
    let commentText = document.getElementById("comentarioEntrada").value;
    
    if (commentText.trim() === "") return;
    
    let commentBox = document.getElementById("commentBox");
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    
    let date = new Date();
    let timestamp = date.toLocaleString();
    
    commentDiv.innerHTML = `<p>${commentText}</p><small>${timestamp}</small>`;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Eliminar";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        commentBox.removeChild(commentDiv);
    };
    
    commentDiv.appendChild(deleteBtn);
    commentBox.appendChild(commentDiv);
    
    document.getElementById("comentarioEntrada").value = "";
}
