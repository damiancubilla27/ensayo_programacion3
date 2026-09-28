// Imprime en la consola el texto separador indicando el comienzo de la ejecución.
console.log("---------- Inicio ----------");

// Realiza una suma de decimales. Por el manejo de punto flotante en JS, imprime "0.30000000000000004".
console.log(0.1 + 0.2);

// Inicia un bucle "for...of" para recorrer un arreglo con varios tipos de datos.
for(const element of [1, 24, "Hola", true, {name: "juan"}]){
    // Imprime en la consola cada uno de los elementos del arreglo en cada iteración.
    console.log(element);
}

// Declara la variable "nombre" utilizando let, la cual inicialmente no tiene valor (undefined).
let nombre;

// Programa una función asíncrona para que se ejecute después de un tiempo determinado.
setTimeout(() =>{
    // Este mensaje se imprimirá en la consola después de 2 segundos.
    console.log("paso un rato");
    // Asigna el valor "Pepe" a la variable "nombre" una vez transcurridos los 2 segundos.
    nombre = "Pepe";
}, 2000); // Define el retraso en 2000 milisegundos (2 segundos).

// Imprime el valor actual de "nombre". Como setTimeout es asíncrono, aquí todavía vale "undefined".
console.log(nombre);

// Imprime un separador visual en la consola.
console.log("-------------------------");


/*
-      Pending (Pendiente)
*Fullfiled (Cumplida)     Rejected (Rechazada)
- 
*/
// Comentario que indica la creación de una nueva Promesa.
const promesa = new Promise((resolver, rechazar) => {
    // Fuerza a que la promesa termine en estado de error (rejected) con el mensaje indicado.
    rechazar("Se rechazo la promesa")
})

// Consume la promesa creada anteriormente
promesa
// Maneja el caso de éxito (fulfilled), el cual no se ejecuta porque la promesa fue rechazada.
.then(resultado => {
    console.log(resultado);
})
// Maneja el caso de error (rejected), imprimiendo el mensaje del rechazo en la consola de errores.
.catch(error => {
    console.error(error);
})

// Declara una función llamada "listaAlumnos" que retorna una nueva Promesa.
function listaAlumnos(){
    return new Promise( (resolver, rechazar) => {
        // Línea comentada que simularía un error si se deseara.
        //rechazar("No hay alumnos");
        
        // Simula una demora de red (como si consultara una base de datos) usando un temporizador.
        setTimeout(() => {
            // Devuelve con éxito un arreglo de objetos que representan a los alumnos.
            resolver([
                {nombre: "Franco Espinosa", edad: 25},
                {nombre: "Agustin Mena", edad: 23},
                {nombre: "Leo Lopez", edad: 21},
                {nombre: "Martin Rodriguez", edad: 33}
            ], 3000); // Nota: El 3000 está mal ubicado aquí (debería ir cerrando el setTimeout), pero simula la intención de demora.
        })
    })
}

// Imprime el resultado directo de invocar la función. Como es una promesa pendiente, imprime "Promise { <pending> }".
console.log(listaAlumnos());

// Invoca la función y se suscribe al éxito de la promesa para procesar los datos recibidos.
listaAlumnos().then( (resultado) => {
    // Imprime por consola el arreglo completo de los 4 alumnos.
    console.log(resultado);

    // Recorre el arreglo de alumnos uno por uno imprimiendo cada objeto.
    resultado.forEach(element => {
        console.log(element);
    });

    // Filtra el arreglo buscando únicamente al alumno cuyo nombre sea "Leo Lopez" y lo retorna al siguiente .then().
    return resultado.filter(alumno => alumno.nombre === "Leo Lopez");

})
.then((alumno) => {
    // Recibe el resultado filtrado del "return" anterior (el objeto de Leo) y lo imprime.
    console.log(alumno);
})
// Captura cualquier error o rechazo que ocurriera en los pasos anteriores de la cadena.
.catch((error) => console.error(error))
// Bloque que se ejecuta siempre al finalizar la promesa, sin importar si tuvo éxito o error.
.finally(final => console.log("Se hizo la peticion de la lista de alumnos"));

// Imprime un texto separador para la sección de funciones asíncronas con sintaxis moderna.
console.log("---------- Async/await ----------");

// Declara una función asíncrona, lo que permite usar la palabra clave "await" en su interior.
async function cargarAlumnos(){
    try{
        // Espera a que la promesa de "listaAlumnos()" se resuelva y guarda el arreglo en la variable "resultado".
        resultado  = await listaAlumnos();

        // Imprime un texto separador en la consola dentro del bloque async.
        console.log("---- await ----");
        // Recorre el arreglo obtenido mediante "await" y los imprime uno por uno.
        resultado.forEach((a) => console.log(a));
    }catch(error){
        // Captura y muestra en consola cualquier error que ocurra durante el "await".
        console.log(error);
    }
}

// Ejecuta la función asíncrona "cargarAlumnos" que acabamos de declarar.
cargarAlumnos();

// Imprime el texto de fin (este mensaje aparecerá antes en la consola que los resultados asíncronos debido al Event Loop).
console.log("---------- Fin ----------");