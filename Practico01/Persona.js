class Persona{
    #id;
    #nombre;
    #apellido;
    #edad;

    constructor(id, nombre, apellido, edad){
        this.#id = id;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    getId(){
        return this.#id;
    }

    setId(valor){
        this.#id = valor;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(valor){
        this.#nombre = valor;
    }

    getApellido(){
        return this.#apellido;
    }

    setApellido(valor){
        this.#apellido = valor;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(valor){
        this.#edad = valor;
    }

    toString() {
        return `id: ${this.#id}, nombre: '${this.#nombre}', apellido: '${this.#apellido}', edad: ${this.#edad}`;
    }
}

class Futbolista extends Persona{
    #equipo;
    #posicion;
    #cantidadGoles;

    constructor(id, nombre, apellido, edad, equipo, posicion, cantidadGoles){
        super(id, nombre, apellido, edad);
        this.#equipo = equipo;
        this.#posicion = posicion;
        this.#cantidadGoles = cantidadGoles;
    }

    getEquipo(){
        return this.#equipo;
    }

    setEquipo(valor){
        this.#equipo = valor;
    }

    getPosicion(){
        return this.#posicion;
    }

    setPosicion(valor){
        this.#posicion = valor;
    }

    getCantGoles(){
        return this.#cantidadGoles;
    }

    setCantGoles(valor){
        this.#cantidadGoles = valor;
    }

    toString() {
        return `${this.constructor.name} { ${super.toString()}, equipo: '${this.#equipo}', posicion: '${this.#posicion}', cantidadGoles: ${this.#cantidadGoles} }`;
    }
}

class Profesional extends Persona{
    #titulo;
    #facultad;
    #anioGraduacion;

    constructor(id, nombre, apellido, edad, titulo, facultad, anioGraduacion){
        super(id, nombre, apellido, edad);
        this.#titulo = titulo;
        this.#facultad = facultad;
        this.#anioGraduacion = anioGraduacion;
    }

    getTitulo(){
        return this.#titulo;
    }

    setTitulo(valor){
        this.#titulo = valor;
    }

    getFacultad(){
        return this.#facultad;
    }

    setFacultad(valor){
        this.#facultad = valor;
    }

    getAnioGraduacion(){
        return this.#anioGraduacion;
    }

    setAnioGraduacion(valor){
        this.#anioGraduacion = valor;
    }

    toString() {
        return `${this.constructor.name} { ${super.toString()}, titulo: '${this.#titulo}', facultad: '${this.#facultad}', anioGraduacion: ${this.#anioGraduacion} }`;
    }
}

function PrendeApaga(evento) {

    let nodo = document.querySelector(".boton-datos");

    if (nodo.style.display == "none") {
        nodo.style.display = "block";
    } else {
        nodo.style.display = "none";
    }
}

let b = document.querySelector(".formulario-ABM");

b.addEventListener("click", PrendeApaga);