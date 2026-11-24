# Café Origen Analítica — v0.1

Proyecto de aprendizaje en JavaScript que analiza las ventas de Café Origen mediante funciones puras, ciclos y métodos de arreglos. Integra módulos con `require` y presenta un informe en consola con `console.log`, `console.table`, plantillas de texto y valores en pesos colombianos con `toLocaleString("es-CO")`.

## Ejecución

Requiere Node.js 22 o superior y no necesita dependencias. Desde la carpeta del proyecto:

```sh
node src/reporte.js
```

Para reproducir los errores del código anterior y comprobar las correcciones:

```sh
node src/verificar.js
```

## Preguntas que responde

- ¿Cuánto se vendió, cuántas unidades y registros hay y cuál fue la venta mayor?
- ¿Cuál es el ticket promedio de las ventas efectivas?
- ¿Cuánto dinero y cuántos registros corresponden a cada ciudad?
- ¿Cuántas unidades se vendieron por producto?
- ¿Cuáles son los tres productos que generan más dinero?
- ¿Qué ocurrió el 2026-09-01 (con ventas) y el 2026-09-07 (sin ventas)?

Los registros con cantidad cero se conservan y aportan cero a ingresos y unidades; se excluyen del denominador del ticket promedio. El ticket es el ingreso de ventas con cantidad positiva dividido por su número de registros, siguiendo el pseudocódigo de la bitácora. Ciudades y productos se agrupan con `trim().toLowerCase()` para evitar duplicados. `ventasDelDia(ventas, fecha)` devuelve los registros de una fecha `AAAA-MM-DD`; sin coincidencias devuelve `[]`, y el informe muestra ceros y «Sin ventas».

`src/datos.js` contiene los datos, `src/analitica.js` los cálculos, `src/reporte.js` la presentación y `bitacora.md` las decisiones y la depuración. Los MiniRetos previos conservan sus commits; esta entrega añade el MiniReto de integración como v0.1.
