// Variables globales para el manejo local de las paginaciones
let todasLasCartas = [];
let indiceActual = 0;
const cartasPorPagina = 6;

// Función para renderizar el grupo actual de cartas en el DOM
function mostrarCartasPagina() {
    const contenedorCartas = document.getElementById('cartas');
    if (!contenedorCartas) return;

    // 1. Elimina del documento las cartas ya insertadas
    contenedorCartas.innerHTML = '';

    // 2. Extraemos el bloque de 6 cartas correspondiente al índice actual usando slice
    const cartasAMostrar = todasLasCartas.slice(indiceActual, indiceActual + cartasPorPagina);

    // 3. Instanciamos e insertamos las nuevas cartas en el DOM
    cartasAMostrar.forEach(cartaData => {
        // Le pasamos cartaData.image tanto para la imagen como para la url (ya que el JSON no trae otra url)
        const nuevaCarta = new Carta(
            cartaData.code,
            cartaData.value,
            cartaData.suit,
            cartaData.image,
            cartaData.image // <-- Usamos la imagen como el link que se abrirá en otra pestaña
        );

        const elementoHtml = nuevaCarta.createHtmlElement();
        contenedorCartas.appendChild(elementoHtml);
    });

    console.log(`Mostrando cartas desde el índice ${indiceActual} al ${indiceActual + cartasAMostrar.length}`);
}

// Método paginaSiguiente()
function paginaSiguiente() {
    if (indiceActual + cartasPorPagina < todasLasCartas.length) {
        indiceActual += cartasPorPagina;
        mostrarCartasPagina();
    } else {
        console.log("Ya estás en la última página.");
    }
}

// Método paginaAnterior()
function paginaAnterior() {
    if (indiceActual - cartasPorPagina >= 0) {
        indiceActual -= cartasPorPagina;
        mostrarCartasPagina();
    } else {
        console.log("Ya estás en la primera página de cartas.");
    }
}

// Al cargar la página por primera vez (Único DOMContentLoaded necesario)
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'; // Traemos el mazo completo

        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const datos = await response.json();

        // Guardamos todas las cartas en nuestra variable global
        todasLasCartas = datos.cards;

        // Mostramos la primera página (primeras 6 cartas)
        mostrarCartasPagina();

    } catch (error) {
        console.error("Hubo un error al procesar las cartas:", error);
    }

    // Asociamos los eventos click de los botones de tu HTML
    const botonSiguiente = document.getElementById('siguiente');
    if (botonSiguiente) {
        botonSiguiente.addEventListener('click', paginaSiguiente);
    }

    const botonAnterior = document.getElementById('anterior');
    if (botonAnterior) {
        botonAnterior.addEventListener('click', paginaAnterior);
    }
});