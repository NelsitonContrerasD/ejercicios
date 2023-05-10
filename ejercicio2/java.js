let preciokm;
let vehiculo = prompt("por favor poner que tipo de vehiculo conduce");
let kms_recorrido = parseInt(prompt("porfavor digitar los kilometros recorridos"));
let litros_consumidos = parseInt(prompt("cuantos litros consumio"))
let x;

if(litros_consumidos<=100){
    x = 1;
    if(vehiculo==="coche"){
       preciokm = 0.10;

    }else if(vehiculo==="moto"){
        preciokm = 0.20;

    }else if(vehiculo==="autobus"){
        preciokm = 0.5;

    }
    
}else{
    x=2;
    if(vehiculo==="coche"){
        preciokm = 0.10;
 
     }else if(vehiculo==="moto"){
         preciokm = 0.20;
 
     }else if(vehiculo==="autobus"){
         preciokm = 0.5;
 
     }
     

}
    preciokm = (preciokm * kms_recorrido) + x ;
    alert("el valor total a pagar es de " + preciokm)