import express from "express"

const app = express();

const puerto = 3003;

app.get("/", (req, res)=>{
    const alumno = {
        legajo: "123",
        nombre: "Damian",
        edad: 30, 
        toString(){
            return JSON.stringify(this);
        }
    }

    res.status(200).send(`<div> ${alumno} </div>`);
})

app.listen( puerto, ()=>{
    console.log("Esta ejecutandose en el puerto 3003");
})