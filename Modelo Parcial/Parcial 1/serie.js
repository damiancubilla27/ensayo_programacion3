class Serie{
    id;         /* Declara la propiedad para almacenar el identificador único de la serie */
    url;        /* Declara la propiedad para guardar el enlace web con información de la serie */
    name;       /* Declara la propiedad para el nombre de la serie */
    language;   /* Declara la propiedad para el idioma original de la serie */
    generes;    /* Declara la propiedad para los géneros de la serie (nota: tiene un pequeño error tipográfico en el nombre, dice "generes" en lugar de "genres") */
    image;      /* Declara la propiedad para la ruta o URL de la imagen/póster de la serie */

    constructor(id, url, name, language, generes, image){
        this.id = id;               /* Asigna el id recibido como parámetro a la propiedad del objeto */
        this.url = url;             /* Asigna la url recibida a la propiedad del objeto */
        this.name = name;           /* Asigna el nombre recibido a la propiedad del objeto */
        this.language = language;   /* Asigna el idioma recibido a la propiedad del objeto */
        this.generes = generes;     /* Asigna los géneros recibidos a la propiedad del objeto */
        this.image = image;         /* Asigna la imagen recibida a la propiedad del objeto */
    }

    toJsonString(){
        return JSON.stringify({id:this.id, url:this.url, name:this.name,
            language:this.language, generes:this.generes, image:this.image
        }); /* Convierte las propiedades de la instancia actual en una cadena de texto en formato JSON para facilitar su transmisión o almacenamiento */
    }

    static createFromJsonString(json){
        const parseo = JSON.parse(json); /* Convierte el string JSON recibido en un objeto de JavaScript */
        return new Serie(parseo.id, parseo.url, parseo.name, parseo.language, parseo.generes, parseo.image); /* Retorna una nueva instancia de la clase Serie usando los datos del objeto analizado */
    }

    static guardarSerie(serie) {
        let series = JSON.parse(localStorage.getItem("series")) || []; /* Obtiene la lista de series guardadas en el almacenamiento local del navegador; si no hay nada, inicializa un arreglo vacío */
        series.push(serie);                                            /* Agrega la nueva serie al final del arreglo */
        localStorage.setItem("series", JSON.stringify(series));        /* Vuelve a guardar el arreglo actualizado en el localStorage convirtiéndolo a formato JSON */
    }

    createHtmlElement(){
        const con = document.createElement("div");     /* Crea un contenedor principal de tipo <div> */
        con.className = "serie";                       /* Le asigna la clase CSS "serie" (la misma que estilizamos en el código anterior) */
        
        const nombre = document.createElement("p");    /* Crea un elemento párrafo para el nombre */
        nombre.textContent = "Nombre: " + this.name;   /* Asigna el texto con el nombre de la serie */
        
        const lengua = document.createElement("p");    /* Crea un elemento párrafo para el idioma */
        lengua.textContent = "Lenguaje: " + this.language; /* Asigna el texto con el idioma */
        
        const generos = document.createElement("p");   /* Crea un elemento párrafo para los géneros */
        generos.textContent = "Genero: " + this.generes; /* Asigna el texto con los géneros */
        
        const img = document.createElement("img");     /* Crea una etiqueta de imagen */
        img.src = this.image;                          /* Establece la fuente (src) de la imagen con la URL de la serie */
        
        const enlace = document.createElement("a");    /* Crea una etiqueta de hipervínculo (<a>) */
        enlace.href = this.url;                        /* Define el destino del enlace con la URL de la serie */
        enlace.target = "_blank";                      /* Hace que el enlace se abra en una pestaña nueva */
        
        const boton = document.createElement("button");/* Crea un botón */
        boton.textContent = "guardar";                 /* Le asigna el texto "guardar" al botón */
        boton.addEventListener("click", () => {        /* Añade un escuchador de eventos para cuando el usuario haga clic */
            Serie.guardarSerie(this);                  /* Llama al método estático para guardar la serie actual en el almacenamiento local */
        });                                            

        con.appendChild(nombre);                       /* Inserta el párrafo del nombre dentro del contenedor principal */
        con.appendChild(lengua);                       /* Inserta el párrafo del idioma dentro del contenedor */
        con.appendChild(generos);                      /* Inserta el párrafo de los géneros dentro del contenedor */
        enlace.append(img);                            /* Inserta la imagen dentro del hipervínculo para que sea clickeable */
        con.appendChild(enlace);                       /* Inserta el enlace (que contiene la imagen) dentro del contenedor principal */

        return con;                                    /* Retorna el elemento HTML completo listo para ser agregado a la página */
    }
}