# Bitácora de Café Origen

## Primera parte: revisar las ventas

Al mirar los datos encontré lo siguiente:

- «Medellín» y «medellín» son la misma ciudad y deben quedar juntas.
- La venta 8 tiene cantidad cero. La dejé en la lista, pero no suma dinero ni unidades y no cuenta para el promedio.
- Hay clientes que compraron varias veces. Por eso, la cantidad de ventas no es la cantidad de clientes.

## Segunda parte: hacer las cuentas

Para resolver los cálculos seguí estos pasos:

1. **Valor de una venta:** multipliqué la cantidad por el precio.
2. **Total vendido:** sumé el valor de todas las ventas.
3. **Unidades vendidas:** sumé las cantidades.
4. **Venta mayor:** comparé las ventas y me quedé con la de mayor valor.
5. **Ticket promedio:** dividí el dinero vendido entre las ventas con cantidad mayor que cero. Cuando no hay ventas, el resultado es cero.
6. **Ventas de una ciudad:** busqué las ventas de esa ciudad y sumé su valor.

## Tercera parte: reunir los resultados

Usé `reduce` para hacer las sumas. Estas fueron mis respuestas a las preguntas del ejercicio:

| Cálculo | ¿Qué recorro? | ¿Qué filtro? | ¿Qué transformo? | ¿Qué acumulo? | ¿Cómo agrupo? |
| --- | --- | --- | --- | --- | --- |
| Total vendido | Todas las ventas | Nada | Cantidad por precio | El dinero vendido | Todo en un solo total |
| Unidades vendidas | Todas las ventas | Nada | Nada | Las cantidades | Todo en una sola suma |
| Cantidad de registros por ciudad | Todas las ventas | Nada | Nombres sin espacios sobrantes y en minúsculas | Un registro por cada venta | Por ciudad |
| Dinero por ciudad | Todas las ventas | Nada | Los nombres y el valor de cada venta | El dinero vendido | Por ciudad |
| Unidades por producto | Todas las ventas | Nada | Nombres sin espacios sobrantes y en minúsculas | Las cantidades | Por producto |
| Productos que más dinero generan | Las ventas y los totales por producto | Al final tomo los tres primeros | Los nombres y el valor de cada venta | El dinero vendido | Por producto, de mayor a menor valor |

## Cuarta parte: revisar los errores

### Error 1: la venta mayor daba cero

- **Síntoma:** salía 0 en vez de la venta mayor. Sin ventas, salía `undefined`.
- **Entrada que lo produce:** la lista de las 12 ventas o una lista vacía.
- **Hipótesis:** pensé que la función terminaba antes de revisar todas las ventas.
- **Prueba realizada:** mostré el resultado con `console.log` y confirmé que daba 0. Después de corregirlo, comprobé que saliera la venta 10, de $168.000, y `null` si no había ventas.
- **Causa:** empezaba comparando con el número 0 como si fuera una venta. Además, terminaba en la primera vuelta.
- **Corrección:** empecé sin una venta elegida y dejé la respuesta para después de revisar toda la lista.

### Error 2: el promedio no salía bien

- **Síntoma:** al calcular el promedio aparecía un error. Sin ventas, salía `NaN`.
- **Entrada que lo produce:** calcular el promedio con las ventas del proyecto o con una lista vacía.
- **Hipótesis:** pensé que la suma estaba mal y que faltaba revisar el caso sin ventas.
- **Prueba realizada:** ejecuté el cálculo y usé `console.log` para revisar los fallos. Después comprobé que el promedio fuera $985.000 dividido entre 11 ventas, y cero cuando no hubiera ventas o la cantidad fuera cero.
- **Causa:** pasaba una sola venta donde se esperaba la lista completa. También intentaba dividir las funciones en lugar de los números que necesitaba.
- **Corrección:** sumé el dinero y conté las ventas con cantidad mayor que cero. Luego hice la división. Si no hay ninguna, devuelvo cero.

## Revisar ciudades y productos

Comprobé que «Medellín» y «medellín» quedaran juntas. El reporte muestra cuatro ciudades y Medellín suma $356.000.

También revisé los nombres de los productos para que las mayúsculas y los espacios no hicieran aparecer el mismo producto dos veces.

## Revisar las ventas de un día

Usé `ventasDelDia` para buscar las ventas por fecha:

- **1 de septiembre de 2026:** dos ventas, tres unidades y $110.000.
- **7 de septiembre de 2026:** ninguna venta. El reporte muestra «Sin ventas» y los valores quedan en cero.

## Revisión del reporte

Ejecuté el reporte y revisé las cuatro secciones: resumen general, ventas por ciudad, unidades por producto y los tres productos que más dinero generan.

El total fue de $985.000 y 21 unidades. Comprobé que no hubiera grupos repetidos ni aparecieran `NaN` o `undefined`. También revisé que las cuentas no cambiaran los datos originales.
