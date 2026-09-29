class Carta {
    #code;
    #value;
    #suit;
    #imagen;
    #url;

    constructor(code, value, suit, imagen, url){
        this.#code = code;
        this.#value = value;
        this.#suit = suit;
        this.#imagen = imagen;
        this.#url = url;
    }

    // b. Método guardarCarta() llamado por el botón
    guardarCarta() {
        console.log(`Guardando carta: ${this.#code}`);
        const guardadas = JSON.parse(localStorage.getItem('cartasGuardadas')) || [];
        const yaExiste = guardadas.some(c => c.code === this.#code);

        if (!yaExiste) {
            guardadas.push({
                code: this.#code,
                value: this.#value,
                suit: this.#suit,
                imagen: this.#imagen,
                url: this.#url
            });
            localStorage.setItem('cartasGuardadas', JSON.stringify(guardadas));
            alert("¡Carta guardada con éxito!");
        } else {
            alert("Esta carta ya se encuentra guardada.");
        }
    }

    toJsonString(){
        return JSON.stringify({
            code: this.#code,
            value: this.#value,
            suit: this.#suit,
            imagen: this.#imagen,
            url: this.#url
        });
    }

    static createFromJsonString(jsonString) {
        const data = JSON.parse(jsonString);
        return new Carta(data.code, data.value, data.suit, data.imagen, data.url);
    }

    static guardarCarta(carta) {
        // Verificamos que el parámetro recibido sea efectivamente un objeto de la clase Carta
        if (!(carta instanceof Carta)) {
            console.error("El parámetro proporcionado no es una instancia de la clase Carta.");
            return;
        }

        console.log(`Intentando guardar la carta con código: ${carta.#code}`);
        
        // 1. Obtenemos el array actual del localStorage (si no existe, inicializamos un array vacío)
        const guardadas = JSON.parse(localStorage.getItem('cartasGuardadas')) || [];
        
        // 2. Verificamos si ya existe una carta con el mismo código en el array (para no repetirla)
        // Usamos 'carta.#code' porque estamos dentro de la clase y podemos acceder a la propiedad privada del objeto recibido
        const yaExiste = guardadas.some(c => c.code === carta.#code);

        if (!yaExiste) {
            // 3. Si no existe, preparamos el objeto simple (usando toJsonString() o creando uno nuevo)
            const cartaParaGuardar = JSON.parse(carta.toJsonString()); // O creas el objeto a mano como { code: carta.#code, ... }

            // 4. Agregamos la nueva carta al array
            guardadas.push(cartaParaGuardar);
            
            // 5. Guardamos el array actualizado de vuelta en el localStorage
            localStorage.setItem('cartasGuardadas', JSON.stringify(guardadas));
            
            // Opcional: Mensaje de éxito
            alert("¡Carta guardada con éxito en el LocalStorage!");
            console.log("Carta agregada:", cartaParaGuardar);
        } else {
            // Opcional: Mensaje si ya estaba
            alert("Esta carta ya se encuentra guardada en el LocalStorage.");
            console.log("La carta ya existía, no se hicieron cambios.");
        }
    }

    createHtmlElement() {
        const contenedor = document.createElement('div');
        contenedor.className = 'carta';

        // 6.a. Al clickear la imagen, se abre en otra pestaña el link contenido en el atributo url
        const enlace = document.createElement('a');
        enlace.href = this.#url;
        enlace.target = '_blank'; // Abre en otra pestaña

        // Elemento para la imagen
        const img = document.createElement('img');
        img.src = this.#imagen;
        img.alt = `${this.#value} de ${this.#suit}`;
        img.className = 'carta-imagen';

        // Metemos la imagen dentro del enlace
        enlace.appendChild(img);

        // Elemento para el código
        const codigo = document.createElement('p');
        codigo.className = 'carta-codigo';
        codigo.textContent = `Código: ${this.#code}`;

        // Elemento para el valor y el palo
        const descripcion = document.createElement('p');
        descripcion.className = 'carta-detalle';
        descripcion.textContent = `Valor: ${this.#value} | Palo: ${this.#suit}`;

        // 6.b. Agregar un botón debajo con el texto "guardar" que llame a guardarCarta()
        const botonGuardar = document.createElement('button');
        botonGuardar.textContent = 'guardar';
        botonGuardar.className = 'btn btn-primary btn-sm mt-1';
        
        botonGuardar.addEventListener('click', () => {
            this.guardarCarta();
        });

        // Ensamblar todo en orden dentro del contenedor
        contenedor.appendChild(enlace);
        contenedor.appendChild(codigo);
        contenedor.appendChild(descripcion);
        contenedor.appendChild(botonGuardar);

        return contenedor;
    }
}