
/**
 *
 * @param {Number} puntosJugador Puntos totales del jugador
 * @param {Number} puntosComputadora Puntos totales de la computadora
 */
export const determinarGanador = (puntosJugador, puntosComputadora) => {
    setTimeout(() => {
        if (puntosComputadora === puntosJugador) {
            alert('Nadie gana :(');
        } else if ((puntosJugador > 21) || ((puntosComputadora <= 21) && (puntosJugador < puntosComputadora))) {
            alert('Ganó la computadora');
        } else if (puntosJugador <= 21) {
            alert('Ganó el jugador')
        }
    }, 100);
}