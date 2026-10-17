console.log("Hola Mundo con node en npm");
const sumar = require("./sumar.js");

const usuarios = [
    {
        id: crypto.randomUUID(), // numero random para el id
        nombre: "Nicolas",
    },
    {
        id: crypto.randomUUID(),
        nombre:"Leo",
    },
    {
        id: crypto.randomUUID(),
        nombre: "Cubilla",
    },
    {
        id: crypto.randomUUID(),
        nombre: "Ezequiel",
    }
];

usuarios.forEach((usuario, index) => 
    console.log(`Indice: ${index} - ID: ${usuario.id} - Usuario:${usuario.nombre}`) 
);

console.log(sumar(3,3));

