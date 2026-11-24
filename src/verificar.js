const {
  ventas,
  totalVendido,
  TotalVendidoM,
  unidadesVendidas,
  unidadesVendidasM
} = require('./analitica');

console.log("=== Comparación ===");

// 1. Total Vendido
const totalCiclo = totalVendido(ventas);
const totalMetodo = TotalVendidoM(ventas);
console.log(`totalVendido: ${totalCiclo === totalMetodo ? "OK" : "DIFERENTE"}`);

// 2. Unidades Vendidas
const unidadesCiclo = unidadesVendidas(ventas);
const unidadesMetodo = unidadesVendidasM(ventas);
console.log(`unidadesVendidas: ${unidadesCiclo === unidadesMetodo ? "OK" : "DIFERENTE"}`);
