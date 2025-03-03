
import { crearBaraja, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';

// import './style.css'

/**
 * 2C = Dos de Tréboles
 * 2D = Dos de Diamantes
 * 2H = Dos de Corazones
 * 2S = Dos de Picas
 */

const miModulo = (() => {
    'use strict';

    let baraja = [];
    let puntosJugador = 0;

    // Referencias HTML
    const btnPedirCarta = document.querySelector('#btnPedirCarta'),
        btnDetenerJuego = document.querySelector('#btnDetenerJuego'),
        btnNuevoJuego = document.querySelector('#btnNuevoJuego');

    const divCartasJugador = document.querySelector('#jugador-cartas'),
        puntosJugadorHTML = document.querySelector('#jugador-puntos');

    // Esta función inicializa el juego
    const iniciarJuego = (cantJugadores = 2) => {
        baraja = crearBaraja();
        puntosJugador = 0;

        let cartasJugadores = document.querySelectorAll('.divCartas');
        let puntosJugadores = document.querySelectorAll('small');

        for (let i = 0; i < cartasJugadores.length; i++) {
            cartasJugadores[i].innerHTML = '';
            puntosJugadores[i].innerText = '0';
        }

        btnPedirCarta.disabled = false;
        btnDetenerJuego.disabled = false;
    }

    // Eventos
    // PEDIR CARTA
    btnPedirCarta.addEventListener('click', () => {
        const carta = pedirCarta(baraja);

        puntosJugador += valorCarta(carta);
        puntosJugadorHTML.innerHTML = puntosJugador;

        const imgCarta = crearCartaHTML(carta);
        divCartasJugador.append(imgCarta);

        if (puntosJugador >= 21) {
            btnPedirCarta.disabled = true;
            btnDetenerJuego.disabled = true;
            turnoComputadora(puntosJugador, baraja);
        }
    });

    // DETENER JUEGO
    btnDetenerJuego.addEventListener('click', () => {
        btnPedirCarta.disabled = true;
        btnDetenerJuego.disabled = true;
        turnoComputadora(puntosJugador, baraja);
    });

    // NUEVO JUEGO
    btnNuevoJuego.addEventListener('click', () => {
        iniciarJuego();
    });

    iniciarJuego();
})();