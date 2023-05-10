function calcularPresupuesto() {
    const procesador = parseInt(document.getElementById("procesador").value);
    const monitor = parseInt(document.getElementById("monitor").value);
    const discoDuro = parseInt(document.getElementById("disco-duro").value);
    
    const total = procesador + monitor + discoDuro;
    
    document.getElementById("total").innerHTML = "$" + total;
  }
  