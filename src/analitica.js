const Datos = require('./datos');
const instanciaDatos = new Datos();

const ventas = instanciaDatos.ventas;

function mostrarNumero4() {
  console.log("El cuarto valor es:",ventas[4]);
}

function mostrarPrimerDato() {
  console.log("El primer dato es:",ventas[0]);
}

function mostrarUlitimoDato() {
  const tamaFinal = ventas.length - 1;
  console.log("El dato final es:",ventas[tamaFinal]);
}

function mostrarTabla() {
  console.table(ventas);
}

function valorVenta(venta) {
  return venta.cantidad * venta.precio;
}

function totalVendido(ventas) {
  let total = 0;

  for (const venta of ventas) {
    total += valorVenta(venta);
  }

  return total;
}

function unidadesVendidas(ventas){
  let cantidad=0;

   for (const venta of ventas) {
    cantidad += ventas.cantidad;
  }

  return cantidad;

}
 

function ventaMayor(ventas){

  let mayor=0;

  for (const venta of ventas) {
    if(mayor == null || valorVenta(venta) > valorVenta(mayorRegistro))
    {

      mayor=venta;

    }


    }

}


function ticketpromedio(ventas){


 for (const venta of ventas) {
    
     totalVendido(venta);
     unidadesVendidas(venta)


    }
    
  let at = totalVendido/unidadesVendidas;

    return prom;
}


function ventasPorCiudad(ventas, ciudad){
  let ciudadbuscada= ciudad.trim().toLowerCase();
  let cantidad = 0;

  for (const venta of ventas){

    let minuscula= venta.ciudad.trim().toLowerCase();

   if(ciudadbuscada === minuscula){

     cantidad += valorVenta(venta); 

   }

   
  }
  return [ciudad, cantidad]

}


console.log(ventasPorCiudad(ventas,"medellín"));



module.exports = {
  ventas,
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketpromedio,
  ventasPorCiudad
};

console.log