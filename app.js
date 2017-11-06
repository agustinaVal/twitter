function add(){

    var comments = document.getElementById("comment").value;
   
    document.getElementById("comment").value = "";
    var cont = document.getElementById("cont");
    var newComments = document.createElement("div");

    if (comments.length == 0 || comments == null)

    {
        alert("Ingrese su mensaje..");
         return false;
    }
    /*var d = new Date();
    var n = d.toLocaleTimeString();*/

    var textNewComment = document.createTextNode(comments);
    var contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);    
    newComments.appendChild(contenedorElemento);

    cont.appendChild(newComments);

}

 var cont = document.getElementClassName("textarea").maxLength;
