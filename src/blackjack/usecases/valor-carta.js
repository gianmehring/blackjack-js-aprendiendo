/**
 *
 * @param {String} carta Carta que obtuvo el jugador
 * @returns {Number} Valor/Puntaje de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); // Obtener el valor de la carta (sin el tipo)
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}