// Manipulación del DOM, Eventos y Manejo de JSON en JavaScript

// 1. Modificación de un párrafo existente
console.log("Hola"); 
// Imprime un mensaje de saludo ("Hola") en la consola del navegador.

var nodo = document.getElementById("miparrafo"); 
// Selecciona y almacena en la variable 'nodo' el elemento del DOM que tiene el ID "miparrafo".

var t = document.createTextNode(".... con texto extra"); 
// Crea un nuevo nodo de texto plano con el contenido especificado para agregarlo posteriormente.

nodo.appendChild(t); 
// Inserta el nodo de texto creado ('t') al final del contenido del elemento seleccionado ('nodo').

//--------------------------------------------------------------------------------------------------------------
// 2. Creación dinámica de elementos, atributos y estilos
var p = document.createElement("p"); 
// Crea un nuevo elemento HTML de tipo párrafo (<p>) en memoria.

var t2 = document.createTextNode("Yo soy el leon"); 
// Crea un nuevo nodo de texto con la frase "Yo soy el leon".

p.appendChild(t2); 
// Inserta el nodo de texto ('t2') dentro de la etiqueta de párrafo ('p') recién creada.

var d = document.getElementById("divParrafos"); 
// Selecciona un contenedor existente en la página mediante su ID "divParrafos".

d.appendChild(p); 
// Inserta el párrafo creado (con su texto dentro) como un nuevo hijo del contenedor 'd'.

p.setAttribute("id", "miOtroParrafo"); 
// Asigna el atributo ID con el valor "miOtroParrafo" al elemento de párrafo para identificarlo unívocamente.

p.setAttribute("miprop", "Horacio"); 
// Crea un atributo personalizado llamado "miprop" con el valor "Horacio" en el párrafo.

console.log(p.hasAttribute("miprop")); 
// Comprueba si el párrafo posee el atributo "miprop", imprimiendo 'true' o 'false' en consola.

console.log(p.getAttribute("miprop")); 
// Obtiene e imprime en consola el valor actual del atributo "miprop" ("Horacio").

p.style.backgroundColor = "red"; 
// Modifica la propiedad CSS del elemento, cambiando su color de fondo a rojo.

// p.style.display = "none"; 
// (Línea comentada) Permite ocultar el elemento visualmente de la pantalla cambiando su display a none.

//--------------------------------------------------------------------------------------------------------------
// 3. Función para alternar la visibilidad de un elemento
function PrendeApaga(evento){
// Define una función llamada 'PrendeApaga' que recibe un objeto de evento como parámetro.

    let nodo = document.getElementById("miOtroParrafo");
    // Busca y almacena localmente el elemento con ID "miOtroParrafo".

    if(nodo.style.display == "none"){
    // Evalúa si el elemento se encuentra oculto actualmente (si su display es "none").

        nodo.style.display = "block";
        // Si estaba oculto, cambia su propiedad display a "block" para volver a mostrarlo.

    }else{
        nodo.style.display = "none";
        // Si estaba visible, cambia su propiedad display a "none" para ocultarlo.
    }
};

//--------------------------------------------------------------------------------------------------------------
// 4. Asociación de eventos a elementos
var b = document.getElementById("btn"); 
// Selecciona y almacena en la variable 'b' el botón de la interfaz con ID "btn".

b.addEventListener("click", PrendeApaga);
// Registra un escuchador de eventos en el botón: al hacer clic sobre él, se ejecutará la función 'PrendeApaga'.

//--------------------------------------------------------------------------------------------------------------
// 5. Inserción dinámica de filas en una tabla y manejo de eventos de mouse
function $(id){return document.getElementById(id)}; 
// Crea una función corta (alias estilo jQuery) para simplificar la selección de elementos por ID.

var tbody = $("tbody"); 
// Utiliza la función anterior para seleccionar el elemento 'tbody' de una tabla HTML.

var nombre = document.createTextNode("Lucas"); 
// Crea un nodo de texto con el nombre "Lucas".

var apellido = document.createTextNode("Farjat"); 
// Crea un nodo de texto con el apellido "Farjat".

var fila = document.createElement("tr"); 
// Crea un nuevo elemento de fila de tabla (<tr>).

var celda1 = document.createElement("td");  
// Crea una nueva celda de datos de tabla (<td>) para el nombre.

var celda2 = document.createElement("td"); 
// Crea una segunda celda de datos de tabla (<td>) para el apellido.

celda1.appendChild(nombre); 
// Inserta el texto "Lucas" dentro de la primera celda.

celda2.appendChild(apellido); 
// Inserta el texto "Farjat" dentro de la segunda celda.

fila.appendChild(celda1); 
// Agrega la primera celda a la fila.

fila.appendChild(celda2); 
// Agrega la segunda celda a la fila.

tbody.appendChild(fila); 
// Inserta la fila completa con sus celdas dentro del cuerpo de la tabla ('tbody').

// fila.parentNode.removeChild(fila);  
// (Línea comentada) Forma alternativa de eliminar la fila creada de su contenedor padre.

fila.addEventListener("dblclick", (e)=>{
// Añade un evento de doble clic a la fila recién creada utilizando una función flecha.

    console.log(e.target);
    // Imprime en consola el elemento exacto donde se hizo doble clic (puede ser la celda o el texto).

    console.log(e.currentTarget);
    // Imprime en consola el elemento al que está asociado el evento (la fila completa <tr>).
})

//--------------------------------------------------------------------------------------------------------------
// 6. Limpieza y manipulación de nodos hijos
var hijos = tbody.childNodes;
// Almacena una colección con todos los nodos hijos contenidos en el 'tbody'.

// tbody.innerHTML = "Hola"; 
// (Comentado) Reemplaza todo el contenido HTML interno del tbody por el texto plano "Hola".

// tbody.innerHTML = "<tr><td>Manuel</td><td>Lozano</td></tr>"
// (Comentado) Reemplaza todo el contenido interno por una nueva estructura HTML de fila y celdas.

//        !!!!!!!!!!!!!!!!!!! LA FORMAS CORRECTAS SON LAS SIGUIENTES 3 OPCIONES !!!!!!!!!!!!!!!!!!!!

//tbody.replaceChildren();
// (Comentado) Método moderno para eliminar de forma directa todos los nodos hijos de un elemento.

/*
while (tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild)
}
// (Comentado) Bucle tradicional para eliminar iterativamente el primer hijo hasta que no queden nodos.
*/

Array.from(tbody.childNodes).forEach(chiId => {
    chiId.parentNode.removeChild(chiId);
});
// Convierte la lista de nodos hijos en un Array real y recorre cada uno de ellos para eliminarlos de su nodo padre de forma segura.

//--------------------------------------------------------------------------------------------------------------
// 7. Manipulación de objetos y conversión con JSON
var o = {"nombre":"damian", "apellido":"cubilla"};
// Declara un objeto literal en JavaScript con propiedades 'nombre' y 'apellido'.

console.log(o.nombre);
// Imprime en consola el valor de la propiedad nombre ("damian") accediendo mediante notación de punto.

console.log(o.apellido);
// Imprime en consola el valor de la propiedad apellido ("cubilla").

console.log(JSON.stringify(o));
// Convierte el objeto JavaScript a una cadena de texto en formato JSON estándar y la imprime.

var js = '[{"nombre":"luciano", "apellido":"pereira"},{"nombre":"sergio", "apellido":"denis"}]';
// Define una cadena de texto que contiene un arreglo de objetos JSON serializados.

var v = JSON.parse(js);
// Convierte (parsea) la cadena de texto JSON anterior en un arreglo de objetos nativos de JavaScript.

console.log(v[0], v[1]);
// Imprime el arreglo de objetos resultante en la consola.

v[0].nombre = "bautista";
// Modifica la propiedad 'nombre' del primer objeto del arreglo (índice 0), cambiando "luciano" por "bautista".

console.log(v[0], v[1]);
// Imprime el arreglo actualizado en la consola para reflejar el cambio realizado.