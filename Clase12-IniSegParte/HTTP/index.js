const http = require("http");

const escuchador = (peticion, respuesta) => {
    console.log(peticion.url);
    console.log(peticion.method);
    console.log(peticion.headers);
    
    
};

const servidor = http.createServer(escuchador);

servidor.listen(3000);
console.log("Se esta escuchando el servidor!");
