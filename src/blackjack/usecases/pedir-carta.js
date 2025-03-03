/**
 *
 * @param {Array<String>} baraja Baraja del juego
 * @returns {String} Retorna la primer carta que el usuario pidió de la baraja
 */
export const pedirCarta = (baraja) => {
    if (!baraja || baraja.length === 0) {
        // regresa un error si ya no hay cartas en la baraja
        throw 'No hay más cartas en la baraja';
    }

    return baraja.shift(); // retorna la carta que se pide
}