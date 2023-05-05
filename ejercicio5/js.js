var mesActual = new Date().getMonth();

if (mesActual >= 0 && mesActual <= 3) {
  alert("Nos encontramos en el primer cuatrimestre del año");
} else if (mesActual >= 4 && mesActual <= 7) {
  alert("Nos encontramos en el segundo cuatrimestre del año");
} else if (mesActual >= 8 && mesActual <= 11) {
  alert("Nos encontramos en el tercer cuatrimestre del año");
} else {
  alert("Mes inválido");
}