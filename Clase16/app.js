import express from "express";
import ejs from 'ejs';

const app = express();
const puerto = 3000;

app.get("/holaMundo", async(req, res) => {
    const index = await ejs.renderFile("views/index.ejs");
    res.status(200).send(index);
})

app.get("/alumno", async(req, res) => {
    const index = await ejs.renderFile("views/alumno.ejs",{
        nombre:"Damian",
        apellido:"Cubilla",
        edad:30,
        facultad:"UTN"
    });
    res.status(200).send(index);
})

app.get("/verAlumno/:id", async(req, res) => {
    const id = req.params.id;
    let alumno;
    if(id==1){
        alumno = {
            nombre:"Damian",
            apellido:"Cubilla",
            edad:30,
            facultad:"UTN"
        }
    }else{
        alumno = {
            nombre:"Aldana",
            apellido:"Cubilla",
            edad:21,
            facultad:"Jaureche"
        }
    }
    const index = await ejs.renderFile("views/alumno.ejs", alumno);
    res.status(200).send(index);
})

app.listen(puerto, ()=>{console.log(`El puerto esta escuchando en ${puerto}`);});