/*
Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”.
• Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
• “Pausar” detiene el conteo pero mantiene el tiempo actual.
• “Reiniciar” pone el temporizador en 00:00:00.
*/

let intervalId = null

let segundos = 0;
let minutos = 0;
let horas = 0;

let botonIniciar = document.getElementById("iniciar");
let botonPausar = document.getElementById("pausar");
let botonReiniciar = document.getElementById("reiniciar");
let pantalla = document.getElementById("pantalla");

const tick = () => {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    let segundosFormateados = segundos < 10 ? "0" + segundos : segundos;
    let minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
    let horasFormateadas = horas < 10 ? "0" + horas : horas;

    pantalla.textContent = horasFormateadas + ":" + minutosFormateados + ":" + segundosFormateados;
};


const iniciar = () => {
    if (intervalId !== null) return;
    intervalId = setInterval(tick, 1000);
};

const pausar = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const reiniciar = () => {
    segundos = 0;
    minutos = 0;
    horas = 0;
    pantalla.textContent = "0" + horas + ":0" + minutos + ":0" + segundos;
};

botonIniciar.addEventListener("click", iniciar);
botonPausar.addEventListener("click", pausar);
botonReiniciar.addEventListener("click", reiniciar);