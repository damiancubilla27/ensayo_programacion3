// Se declara una constante llamada "usuario" que almacena un objeto literal
const usuario = {
    // Propiedad del objeto con clave de tipo string y valor "valor"
    clave : "valor",

    // Método tradicional que utiliza una función regular
    metodo : function(){
        // Imprime en consola la propiedad "clave" usando "this" para referirse al objeto actual
        console.log(this.clave);
    },

    // Método definido como función flecha (arrow function)
    metodo2 : () => {
        // Imprime en consola; nota: las funciones flecha no tienen su propio "this", heredan el del contexto superior
        console.log(this.clave + " funcion flecha ");
    },

    // Método abreviado (sintaxis moderna ES6)
    metodo3(){
        // Imprime en consola concatenando la clave del objeto con un texto descriptivo
        console.log(this.clave + " metodo abreviado");
    }
};

// Llama al primer método del objeto, imprimiendo "valor"
usuario.metodo();
// Llama al segundo método (función flecha), imprimiendo "undefined funcion flecha " por el comportamiento de "this"
usuario.metodo2();
// Llama al tercer método abreviado, imprimiendo "valor metodo abreviado"
usuario.metodo3();

// Demostración de objetos dinámicos: se agrega una nueva propiedad "direccion" al objeto existente
usuario.direccion = "Ejemplo123"; 
// Imprime en consola la nueva propiedad recién creada ("Ejemplo123")
console.log(usuario.direccion);
// Elimina la propiedad "direccion" del objeto usando el operador "delete"
delete usuario.direccion; 
// Intenta imprimir la propiedad eliminada, devolviendo "undefined"
console.log(usuario.direccion);

//--------------------------------------------------------------
// Declaración de una Función Constructora tradicional para crear múltiples instancias
function Usuario(nombre, edad){
    // Asigna el parámetro "nombre" a la propiedad de la instancia actual
    this.nombre = nombre;
    // Asigna el parámetro "edad" a la propiedad de la instancia actual
    this.edad = edad;
}

// Crea una nueva instancia (objeto) llamada "usuario2" utilizando el constructor y pasando argumentos
const usuario2 = new Usuario("Damian", 30);
// Imprime en consola el objeto completo creado por la función constructora
console.log(usuario2);

//--------------------------------------------------------------
// Declaración de una clase llamada "Animal" utilizando la sintaxis de clases de ES6
class Animal{
    // Declara una propiedad pública llamada "nombre"
    nombre; 
    // Declara una propiedad privada (indicada con #) llamada "peso"
    #peso; 
    // Declara otra propiedad privada llamada "genero"
    #genero

    // Método constructor que se ejecuta al instanciar la clase
    constructor(nombre, peso, genero){
        // Inicializa la propiedad pública "nombre"
        this.nombre = nombre;
        // Inicializa la propiedad privada "#peso"
        this.#peso = peso;
        // Inicializa la propiedad privada "#genero"
        this.#genero = genero;
    }

    // Método de la clase que define una acción por defecto
    hacerSonido(){
        // Imprime un texto indicando ausencia de sonido
        console.log("Sin sonido");
    }

    // Método getter público para acceder de forma controlada a la propiedad privada "#peso"
    getPeso(){
        // Retorna el valor de la propiedad privada "#peso"
        return this.#peso;
    }
}

// Crea una instancia de la clase Animal llamada "vaca"
const vaca = new Animal("Lola", 350, "Hembra");
// Imprime en consola la propiedad pública "nombre" ("Lola")
console.log(vaca.nombre);
// Imprime en consola el peso usando el método getter (350)
console.log(vaca.getPeso());
// Ejecuta el método hacerSonido de la clase base ("Sin sonido")
vaca.hacerSonido();

// Declaración de una clase hija "Vaca" que hereda de la clase "Animal" mediante "extends"
class Vaca extends Animal{
    // Declara una propiedad privada con valor inicial por defecto (true)
    #cuernos = true;
    
    // Constructor de la clase derivada
    constructor(nombre, peso, genero){
        // Llama al constructor de la clase padre (Animal) utilizando "super"
        super(nombre, peso, genero);
    }

    // Método setter para modificar el valor de la propiedad privada "#cuernos"
    setTieneCuernos(valor){
        this.#cuernos = valor;
    }

    // Sobrescribe el método "hacerSonido" de la clase padre (Polimorfismo)
    hacerSonido(){
        // Imprime un sonido personalizado y específico de la clase Vaca
        console.log("MUUUU SOY UNA VACA CON CUERNOS!");
    }
}

// Crea una instancia de la clase derivada "Vaca" llamada "vaca2"
const vaca2 = new Vaca("Elba", 500, "Hembra");
// Imprime en consola la propiedad pública heredada "nombre" ("Elba")
console.log(vaca2.nombre);
// Ejecuta el método hacerSonido sobrescrito en la clase Vaca
vaca2.hacerSonido();