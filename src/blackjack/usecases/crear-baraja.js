import { shuffle } from 'underscore';

// Exportación individual.
export const nombre = 'Gian Carlos Mehring';

/**
 *
//  * @param {Array<String>} tiposCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @returns {Array<String>} Retorna una nueva baraja de cartasmezclada
 */
export const crearBaraja = () => {
    // if((!tiposCartas) || (tiposCartas.length === 0)) throw new Error('tiposCartas es obligatorio. tiposCartas debe ser un arreglo de string');

    let baraja = [];

    const valoresCartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const tiposCartas = ['C', 'D', 'H', 'S'];

    for (const valor of valoresCartas) {
        for (const tipo of tiposCartas) {
            baraja.push(valor + tipo)
        }
    }

    return shuffle(baraja); // devuelve la baraja mezclada
}


// Exportación por defecto
// export default crearBaraja();