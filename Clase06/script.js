console.log("Hola")
var nodo = document.getElementById("miparrafo"); // Puedo seleccionar los elementos por ID
var t = document.createTextNode(".... con texto extra"); // Estoy creando contenido nuevo
nodo.appendChild(t); // Agregando el contenido creado a el elemento seleccionado originalmente


//--------------------------------------------------------------------------------------------
var p = document.createElement("p"); // Creo una etiqueta p
var t2 = document.createTextNode("Yo soy el leon"); // Creo un nodo de texto
p.appendChild(t2); // A esa etiqueta le inserto el texto
var d = document.getElementById("divParrafos"); // Seleccion el ID de cierta parte del codigo
d.appendChild(p); // A esa parte del codigo con el ID, le inserto la etiqueta con su texto