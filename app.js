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
    
    var textNewComment = document.createTextNode(comments);
    var contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);    
    newComments.appendChild(contenedorElemento);

    cont.appendChild(newComments);
    document.getElementById("count").innerHTML = "140";
}
var comment = document.getElementById("comment");
comment.onkeydown = function (){
    var num = document.getElementById("count");
    var texto = document.getElementById("comment");
    var caracter = texto.value.length;
    num.innerHTML = 140 - caracter;
};

 
