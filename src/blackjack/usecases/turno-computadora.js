import { crearCartaHTML, determinarGanador, pedirCarta, valorCarta } from "./";

/**
 *
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar.
 * @param {Array<String>} baraja Baraja
 */
export const turnoComputadora = (puntosMinimos, baraja) => {
    if(!puntosMinimos) throw new Error('Los puntos mínimos son necesarios');
    if(!baraja) throw new Error('La baraja es necesaria');

    let puntosComputadora = 0;
    let divCartas = document.querySelector('#computadora-cartas'),
        puntosHTML = document.querySelector('#computadora-puntos');

    do {
        const carta = pedirCarta(baraja);

        puntosComputadora += valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartas.append(imgCarta);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosMinimos, puntosComputadora);
}