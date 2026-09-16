// Que me puedo esperar en js, con cosas que no venia estudiando
var a = {}; // defino un objeto de la nada
a.nombre = "damian"; // creo un atributo en tiempo de ejecucion, es decir, creando ese atributo de la nada
console.log(a.nombre); // hasta se puede llamar por consola
a.saludar = function(){
    console.log("Hola Mundo");
}
a.saludar(); // hasta puedo llamar una funcion. OJO CON ESTA FORMA DE TRABAJAR