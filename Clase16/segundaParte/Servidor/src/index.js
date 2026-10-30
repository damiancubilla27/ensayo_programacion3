import express from "express"
import cors from "cors"
import {connection} from "./config.js"

const app = express();

const puerto = 3003;

app.use(cors({
    origin:"*",
}));

//Query params
app.get("/alumnos", (req, res)=>{
    const alumnos = [{
        legajo: "123",
        nombre: "Damian",
        edad: 30, 
    },
    {
        legajo: "124",
        nombre: "Leo",
        edad: 25, 
    },
    {
        legajo: "125",
        nombre: "Luciano",
        edad: 32, 
    },
    {
        legajo: "126",
        nombre: "Nicolas",
        edad: 26, 
    }];

    const {legajo, ...parametros} = req.query;

    console.log(legajo);
    
    console.log(parametros);
    
    if(legajo){
        const alumnoEncontrado = alumnos.find((alumno) => alumno.legajo === legajo);

        if(!alumnoEncontrado){
            res.status(404).send({error: `alumno no encontrado ${legajo}`});
        }

        res.status(200).send(alumnoEncontrado);
    }

    res.status(200).send(alumnos);
});

// Router params
app.get("/profesores/:id/pruebas", (req, res) => {
    const {id} = req.params;

    // const body = req.body;
    // const token = req.header("authorization");
    // const preferencias = req.cookies.idioma;
    console.log(id);
    res.end();
})

try {
  const results = await connection.query(
    'SELECT * FROM `alumnos` WHERE 1'
  );

  console.log(results); // results contains rows returned by server
} catch (err) {
  console.log(err);
}

app.listen( puerto, ()=>{
    console.log("Esta ejecutandose en el puerto 3003");
})