const Datos = require('./datos');
const instanciaDatos = new Datos();

const ventas = instanciaDatos.ventas;

function mostrarNumero4() {
  console.log("El cuarto valor es:",ventas[3]);
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
    cantidad += venta.cantidad;
  }

  return cantidad;

}
 

function ventaMayor(ventas) {
  let mayor = null;
  for (const venta of ventas) {
    if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
      mayor = venta;
    }
  }
  return mayor;
}

function ticketpromedio(ventas) {
  let sumaValida = 0;
  let cantidadVentasValidas = 0;
  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      sumaValida += valorVenta(venta);
      cantidadVentasValidas += 1;
    }
  }
  return cantidadVentasValidas === 0 ? 0 : sumaValida / cantidadVentasValidas;
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

//========================================== parte 3 del dia 1 ==================================================================================================================0


// El reduce es para entregar solo un dato 
function TotalVendidoM(ventas) {
  return ventas.reduce((v, venta) => {
    return v + (venta.precio * venta.cantidad);
  }, 0);
}


function unidadesVendidasM(ventas){

  return ventas.reduce((v, venta) => {
    return v + venta.cantidad 

  }, 0)

}

function TotalPorCiudadM(ventas) {
  return ventas.reduce((acumulador, venta) => {
    const ciudadLimpia = venta.ciudad.trim().toLowerCase();
    acumulador[ciudadLimpia] = (acumulador[ciudadLimpia] || 0) + (venta.precio*venta.cantidad);
    return acumulador;
  }, {});
}


function ventasPorCiudadM(ventas){
   return ventas.reduce((acumulador, venta) => {
    const ciudadLimpia = venta.ciudad.trim().toLowerCase();
    acumulador[ciudadLimpia] = (acumulador[ciudadLimpia] || 0) + 1;
    return acumulador;
  }, {});

}

function unidadesPorProducto(ventas){
  return ventas.reduce((c, producto)=>{
    const productolimpio= producto.producto.trim().toLowerCase();
    c[productolimpio] = (c[productolimpio] || 0) + producto.cantidad;
    return c;

  }, {});
}

function topProductosPorValor(ventas, k) {
  const copiaVentas = [...ventas];

  const totalesPorProducto = copiaVentas.reduce((acc, venta) => {
    const prod = venta.producto.trim().toLowerCase();
    acc[prod] = (acc[prod] || 0) + valorVenta(venta);
    return acc;
  }, {});

  return Object.entries(totalesPorProducto)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
}


//==================================================== Llamada de los datos ==========================================================================================================

function ventasDelDia(ventas, fecha) {
  return ventas.filter(venta => venta.fecha === fecha);
}



module.exports = {
  ventas,
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketpromedio,
  ventasPorCiudad,
  TotalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  TotalPorCiudadM,
  unidadesPorProducto,
  topProductosPorValor,
  ventasDelDia
};
