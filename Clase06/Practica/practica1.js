// Ejercicio 1
let titulo = document.getElementById("titulo");
let mensaje = document.getElementById("mensaje");
let btnAgregar = document.getElementById("btnAgregar");

// Ejercicio 2
document.getElementById("mensaje").textContent = "¡Bienvenido a mi lista de tareas!" ;

// Ejercicio 3
document.getElementById("mensaje").innerHTML = "Tenés <strong>3 tareas</strong> pendientes.";

// Ejercicio 4
document.getElementById("btnMensaje").onclick = function(){
    document.getElementById("btnMensaje").textContent = "¡Presionaste el botón!" ;
}

// Ejercicio 5
let lista1 = document.createElement("li");

// Ejercicio 6
 let lista2 = document.createTextNode("Estudiar JavaScript");
    lista1.appendChild(lista2);

// Ejercicio 8
document.getElementById("btnAgregar").onclick = function(){
    document.getElementById("listaTareas").appendChild(lista1); // Ejercicio 7

    let contenido = document.getElementById("tareaInput").value;

    let nuevaTarea = document.createElement("li");

    let textoTarea = document.createTextNode(contenido);

    nuevaTarea.appendChild(textoTarea);

    document.getElementById("listaTareas").appendChild(nuevaTarea);
}