function cargarSeries() {
    const url = "https://api.tvmaze.com/schedule/full"; /* Define la URL de la API de TVMaze para obtener la programación completa de series */
    fetch(url)                                        /* Realiza una petición HTTP asíncrona (AJAX) a la API */
        .then(response => response.json())            /* Convierte la respuesta obtenida a formato JSON */
        .then(data => {                               /* Recibe los datos ya procesados en formato de objeto/arreglo */
            const series = data.slice(0, 6);          /* Extrae únicamente los primeros 6 elementos del arreglo general */
            const seriesObjetos = series.map(serie => { /* Recorre el subconjunto de 6 series para transformarlas */
            const datos = serie._embedded.show;       /* Extrae el objeto interno que contiene los datos detallados de cada show */
                return new Serie(                     /* Crea y retorna una nueva instancia de la clase Serie con los datos obtenidos */
                    datos.id,
                    datos.url,
                    datos.name,
                    datos.language,
                    datos.genres,
                    datos.image.original
                );
            });
            const contenedor = document.getElementById("series"); /* Obtiene el contenedor HTML con el id "series" del DOM */
            seriesObjetos.forEach(serie => {          /* Itera sobre cada objeto Serie creado */
                const elemento = serie.createHtmlElement(); /* Genera el elemento visual HTML usando el método de la clase */
                contenedor.appendChild(elemento);     /* Inserta la tarjeta de la serie dentro del contenedor en la página */
            });
        })
        .catch(error => {                             /* Captura cualquier error que ocurra durante la petición fetch */
            console.log(error);                       /* Muestra el error en la consola del navegador para depuración */
        });
}

cargarSeries();                                       /* Ejecuta automáticamente la función al cargar el script para mostrar la primera página */

let pagina = 0;                                       /* Declara una variable numérica global para llevar el control de la página actual (comienza en 0) */
function paginaSiguiente() {
    pagina++;                                         /* Incrementa en 1 el número de la página actual */
    const url = "https://api.tvmaze.com/schedule/full"; /* Define la URL de la API a consultar */
    fetch(url)                                        /* Realiza la petición HTTP a la API */
        .then(response => response.json())            /* Convierte la respuesta a JSON */
        .then(data => {                               /* Procesa los datos recibidos */
            const inicio = pagina * 6;                /* Calcula el índice de inicio según la página (Ej: Pág 1 = 1 * 6 = 6) */
            const series = data.slice(inicio, inicio + 6); /* Extrae el siguiente bloque de 6 series del arreglo completo */
            const contenedor = document.getElementById("series"); /* Obtiene el contenedor HTML de las series */
            contenedor.innerHTML = "";                /* Limpia el contenedor vaciando su contenido anterior para mostrar las nuevas */
            series.forEach(serie => {                 /* Itera sobre cada serie del nuevo bloque */
                const datos = serie._embedded.show;   /* Extrae los datos detallados del show */
                const objetoSerie = new Serie(        /* Crea una instancia de la clase Serie */
                    datos.id,
                    datos.url,
                    datos.name,
                    datos.language,
                    datos.genres,
                    datos.image.original
                );
                const elemento = objetoSerie.createHtmlElement(); /* Crea el elemento HTML para la serie */
                contenedor.appendChild(elemento);     /* Agrega la nueva serie al contenedor visual */
            });
        })
        .catch(error => {                             /* Captura errores de red o del servidor */
            console.log(error);                       /* Imprime el error en la consola */
        });
}

function paginaAnterior() {

    if (pagina > 0) {                                 /* Valida que la página actual sea mayor a 0 para evitar índices negativos */
        pagina--;                                     /* Decrementa en 1 el número de la página actual */
        const url = "https://api.tvmaze.com/schedule/full"; /* Define la URL de la API */
        fetch(url)                                    /* Realiza la petición HTTP a la API */
            .then(response => response.json())        /* Convierte la respuesta a JSON */
            .then(data => {                           /* Procesa los datos */
                const inicio = pagina * 6;            /* Recalcula el índice de inicio para el bloque anterior */
                const series = data.slice(inicio, inicio + 6); /* Extrae el bloque de 6 series correspondiente */
                const contenedor = document.getElementById("series"); /* Obtiene el contenedor HTML */
                contenedor.innerHTML = "";            /* Limpia las tarjetas anteriores de la pantalla */
                series.forEach(serie => {             /* Itera sobre las series del bloque anterior */
                    const datos = serie._embedded.show; /* Extrae la información interna de la serie */
                    const objetoSerie = new Serie(    /* Instancia el objeto Serie */
                        datos.id,
                        datos.url,
                        datos.name,
                        datos.language,
                        datos.genres,
                        datos.image.original
                    );
                    const elemento = objetoSerie.createHtmlElement(); /* Genera su estructura HTML */
                    contenedor.appendChild(elemento); /* Añade la tarjeta al contenedor */
                });
            })
            .catch(error => {                         /* Captura posibles errores de la petición */
                console.log(error);                   /* Muestra el error por consola */
            });
    }
}

document.getElementById("anterior").addEventListener("click", paginaAnterior); /* Busca el botón con id "anterior" y le asigna el evento 'click' para ejecutar la función de retroceder */
document.getElementById("siguiente").addEventListener("click", paginaSiguiente); /* Busca el botón con id "siguiente" y le asigna el evento 'click' para ejecutar la función de avanzar */