const horaAct = document.getElementById("hora");
const userDatos = document.getElementById("info");

function obtenerHora() {
  const ahora = new Date();
  const hora = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  return `${hora}:${minutos}`;
}

function actualizarHora() {
  horaAct.textContent = obtenerHora();
}

actualizarHora();

setInterval(actualizarHora, 1000);
