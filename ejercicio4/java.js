let numero =parseInt(prompt("dame un numero positivo"));

function contarDigitos(numero) {
  
  var cantidadDigitos = numero.toString().length;
  return cantidadDigitos;
}
var cantidadDigitos = contarDigitos(numero);
alert(cantidadDigitos)