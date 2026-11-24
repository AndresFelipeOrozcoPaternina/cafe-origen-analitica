const Datos = require('./datos');
const {
  totalVendido, unidadesVendidas, ventaMayor, valorVenta, ticketpromedio,
  TotalPorCiudadM, ventasPorCiudadM, unidadesPorProducto,
  topProductosPorValor, ventasDelDia
} = require('./analitica');

const ventas = new Datos().ventas;
const pesos = valor => `$ ${valor.toLocaleString('es-CO', { maximumFractionDigits: 2 })} COP`;

function seccion(titulo) {
  console.log(`\n${'='.repeat(64)}\n${titulo}\n${'='.repeat(64)}`);
}

function mostrarResumen(registros) {
  const mayor = ventaMayor(registros);
  console.table([{
    Registros: registros.length,
    'Ventas efectivas': registros.filter(venta => venta.cantidad > 0).length,
    Unidades: unidadesVendidas(registros),
    Total: pesos(totalVendido(registros)),
    'Ticket promedio': pesos(ticketpromedio(registros)),
    'Mayor venta': pesos(mayor === null ? 0 : valorVenta(mayor))
  }]);
}

console.log('CAFÉ ORIGEN | INFORME DE VENTAS | v0.1');
seccion('1. RESUMEN GENERAL');
mostrarResumen(ventas);

seccion('2. VENTAS POR CIUDAD');
const cantidades = ventasPorCiudadM(ventas);
console.table(Object.entries(TotalPorCiudadM(ventas)).map(([ciudad, total]) => ({
  Ciudad: ciudad, Registros: cantidades[ciudad], Total: pesos(total)
})));

seccion('3. UNIDADES POR PRODUCTO');
console.table(Object.entries(unidadesPorProducto(ventas)).map(([producto, unidades]) => ({
  Producto: producto, Unidades: unidades
})));

seccion('4. TOP 3 DE PRODUCTOS POR VALOR');
console.table(topProductosPorValor(ventas, 3).map(([producto, total], indice) => ({
  Puesto: indice + 1, Producto: producto, Total: pesos(total)
})));

seccion('DETALLE DIARIO');
for (const fecha of ['2026-09-01', '2026-09-07']) {
  const delDia = ventasDelDia(ventas, fecha);
  console.log(`\nFecha: ${fecha}${delDia.length === 0 ? ' | Sin ventas' : ''}`);
  mostrarResumen(delDia);
}
