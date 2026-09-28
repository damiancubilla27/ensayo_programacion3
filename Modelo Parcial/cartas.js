class Carta{
    #code;
    #value;
    #suit;
    #imagen;

    constructor(code, value, suit, imagen){
        this.#code = code;
        this.#value = value;
        this.#suit = suit;
        this.#imagen = imagen;
    }

    toJsonString(){
        return JSON.stringify({
            code: this.code,
            value: this.value,
            suit: this.suit,
            imagen: this.imagen
        });
    }

    static createFromJsonString(jsonString) {
        const data = JSON.parse(jsonString);
        return new Carta(data.code, data.value, data.suit, data.imagen);
    }

    createHtmlElement() {
        const contenedor = document.createElement('div');
        contenedor.className = 'carta';

        // Elemento para la imagen
        const img = document.createElement('img');
        img.src = this.imagen;
        img.alt = `${this.value} de ${this.suit}`;
        img.className = 'carta-imagen';

        // Elemento para el código
        const codigo = document.createElement('p');
        codigo.className = 'carta-codigo';
        codigo.textContent = `Código: ${this.code}`;

        // Elemento para el valor y el palo
        const descripcion = document.createElement('p');
        descripcion.className = 'carta-detalle';
        descripcion.textContent = `Valor: ${this.value} | Palo: ${this.suit}`;

        // Ensamblar el elemento
        contenedor.appendChild(img);
        contenedor.appendChild(codigo);
        contenedor.appendChild(descripcion);

        return contenedor;
    }
}
