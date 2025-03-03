/**
 *
 * @param {String} carta Carta que el jugador obtuvo al pedir la última carta
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = (carta) => {
    if( !carta ) throw new Error('"carta" es un argumento obligatorio')
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta');

    return imgCarta;
    divCartasJugadores[turno].append(imgCarta);
}