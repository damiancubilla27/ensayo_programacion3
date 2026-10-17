const fs = require("fs"); // Libreria que permite la interracion con el sistema de archivos

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

fs.writeFileSync("lista.txt", "ID: 91b5488d-5e23-441e-98eb-bb2079970c26 - Usuario:Nicolas");
console.log("Se creo el archivo");

const contenido = fs.readFileSync("lista.txt", "utf-8");
console.log(contenido);
