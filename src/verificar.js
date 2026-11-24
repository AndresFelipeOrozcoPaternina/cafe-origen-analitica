const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const vm = require('node:vm');
const Datos = require('./datos');
const a = require('./analitica');
const ventas = new Datos().ventas;

// Depuración estratégica: ejecutar las funciones originales del MiniReto previo.
const original = execFileSync('git', ['show', '289476d:src/analitica.js'], { encoding: 'utf8' });
const contexto = { require, module: { exports: {} }, console: { log() {} } };
vm.runInNewContext(original, contexto);
const antes = contexto.module.exports;
console.log('Depuración original: ventaMayor =', antes.ventaMayor(ventas));
assert.equal(antes.ventaMayor(ventas), 0);
assert.throws(() => antes.ticketpromedio(ventas), /iterable/);
assert.ok(Number.isNaN(antes.ticketpromedio([])));
console.log('Depuración original: ticketpromedio arroja TypeError con ventas y NaN con [].');

assert.equal(a.totalVendido(ventas), 985000);
assert.equal(a.TotalVendidoM(ventas), a.totalVendido(ventas));
assert.equal(a.unidadesVendidas(ventas), 21);
assert.equal(a.unidadesVendidasM(ventas), a.unidadesVendidas(ventas));
assert.equal(a.ventaMayor(ventas).id, 10);
assert.equal(a.ventaMayor([]), null);
assert.equal(a.ticketpromedio(ventas), 985000 / 11);
assert.equal(a.ticketpromedio([]), 0);
assert.equal(a.ticketpromedio([{ cantidad: 0, precio: 42000 }]), 0);
assert.deepEqual(a.TotalPorCiudadM(ventas), {
  'medellín': 356000, 'bogotá': 276000, cali: 185000, pereira: 168000
});
assert.deepEqual(a.topProductosPorValor(ventas, 3), [
  ['origen huila 500 g', 294000], ['origen sierra 500 g', 225000], ['prensa francesa', 190000]
]);
assert.equal(a.ventasDelDia(ventas, '2026-09-01').length, 2);
assert.equal(a.totalVendido(a.ventasDelDia(ventas, '2026-09-01')), 110000);
assert.deepEqual(a.ventasDelDia(ventas, '2026-09-07'), []);
assert.equal(a.totalVendido(a.ventasDelDia(ventas, '2026-09-07')), 0);

const variantes = [
  { ciudad: ' Medellín ', producto: ' Café ', cantidad: 1, precio: 100 },
  { ciudad: 'medellín', producto: 'café', cantidad: 2, precio: 100 }
];
assert.deepEqual(a.TotalPorCiudadM(variantes), { 'medellín': 300 });
assert.deepEqual(a.unidadesPorProducto(variantes), { 'café': 3 });
assert.deepEqual(a.topProductosPorValor(variantes, 3), [['café', 300]]);
const congeladas = Object.freeze(ventas.map(venta => Object.freeze({ ...venta })));
for (const nombre of ['totalVendido', 'unidadesVendidas', 'ventaMayor', 'ticketpromedio',
  'TotalVendidoM', 'unidadesVendidasM', 'TotalPorCiudadM', 'ventasPorCiudadM', 'unidadesPorProducto']) {
  a[nombre](congeladas);
}
a.topProductosPorValor(congeladas, 3);
a.ventasDelDia(congeladas, '2026-09-01');

const salida = execFileSync(process.execPath, [require.resolve('./reporte')], { encoding: 'utf8' });
assert.doesNotMatch(salida, /NaN|undefined/);
for (const titulo of ['1. RESUMEN GENERAL', '2. VENTAS POR CIUDAD',
  '3. UNIDADES POR PRODUCTO', '4. TOP 3 DE PRODUCTOS POR VALOR', 'Sin ventas']) {
  assert.ok(salida.includes(titulo));
}
console.log('OK: errores reproducidos y corregidos; totales, días, grupos, pureza y reporte verificados.');
