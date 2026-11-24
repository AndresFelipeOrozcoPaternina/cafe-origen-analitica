SEMANA 1 PRIMERA PARTE

• Ciudades: El registro id: 5 tiene "medellín" en minúscula, mientras que los demás tienen "Medellín" con mayúscula inicial. Si no se normaliza, aparecerán como dos ciudades distintas.
• Cantidades: El registro id: 8 tiene cantidad: 0, lo que representa una venta sin unidades (ingreso $0). Debes decidir si lo excluyes de los cálculos de ventas efectivas.
• Clientes: Los clientes C01, C02 y C03 aparecen repetidos en varias fechas distintas. Si quieres saber cuántos clientes únicos compraron, no puedes simplemente contar el total de registros (12), sino eliminar duplicados.

SEGUNDA PARTE 

1) FUNCIÓN valorVenta(venta)
    RETORNAR venta.cantidad * venta.precio
FIN FUNCIÓN

2) FUNCIÓN totalVendido(ventas)
    total <- 0

    PARA CADA venta EN ventas HACER
        total <- total + valorVenta(venta)
    FIN PARA

    RETORNAR total
FIN FUNCIÓN

3) FUNCIÓN unidadesVendidas(ventas)
    unidades <- 0

    PARA CADA venta EN ventas HACER
        unidades <- unidades + venta.cantidad
    FIN PARA

    RETORNAR unidades
FIN FUNCIÓN

4) FUNCIÓN ventaMayor(ventas)
    mayorRegistro <- null

    PARA CADA venta EN ventas HACER
        SI mayorRegistro == null O valorVenta(venta) > valorVenta(mayorRegistro) ENTONCES
            mayorRegistro <- venta
        FIN SI
    FIN PARA

    RETORNAR mayorRegistro
FIN FUNCIÓN

5) FUNCIÓN ticketPromedio(ventas)
    sumaValida <- 0
    cantidadVentasValidas <- 0

    PARA CADA venta EN ventas HACER
        SI venta.cantidad > 0 ENTONCES
            sumaValida <- sumaValida + valorVenta(venta)
            cantidadVentasValidas <- cantidadVentasValidas + 1
        FIN SI
    FIN PARA

    SI cantidadVentasValidas == 0 ENTONCES
        RETORNAR 0
    FIN SI

    RETORNAR sumaValida / cantidadVentasValidas
FIN FUNCIÓN

6) FUNCIÓN ventasPorCiudad(ventas, ciudad)
    totalCiudad <- 0
    ciudadBuscada <- MINUSCULAS(RECORTAR_ESPACIOS(ciudad))

    PARA CADA venta EN ventas HACER
        ciudadActual <- MINUSCULAS(RECORTAR_ESPACIOS(venta.ciudad))

        SI ciudadActual == ciudadBuscada ENTONCES
            totalCiudad <- totalCiudad + valorVenta(venta)
        FIN SI
    FIN PARA

    RETORNAR totalCiudad
FIN FUNCIÓN

TERCERA PARTE: MÉTODOS DE ARREGLO Y LAS 5 PREGUNTAS SOBRE COLECCIONES

1) FUNCIÓN totalVendidoM(ventas)
- ¿Qué recorro?: El arreglo completo de ventas (`ventas`).
- ¿Qué filtro?: Ninguno (se consideran todas las ventas).
- ¿Qué transformo?: Cada objeto venta a su importe monetario (`valorVenta(venta)` o `venta.cantidad * venta.precio`) mediante `.map()`.
- ¿Qué acumulo?: La suma total de los importes calculados en una variable acumuladora numérica inicializada en 0 mediante `.reduce()`.
- ¿Cómo agrupo?: No aplica (se reduce a un único valor escalar global).

2) FUNCIÓN unidadesVendidasM(ventas)
- ¿Qué recorro?: El arreglo completo de ventas (`ventas`).
- ¿Qué filtro?: Ninguno (se procesan todos los registros).
- ¿Qué transformo?: No se requiere transformación intermedia, se lee directamente `venta.cantidad`.
- ¿Qué acumulo?: La suma acumulada de las unidades vendidas (`venta.cantidad`) iniciando en 0 mediante `.reduce()`.
- ¿Cómo agrupo?: No aplica (se totaliza en un único valor numérico).

3) FUNCIÓN ventasPorCiudadM(ventas, ciudad)
- ¿Qué recorro?: El arreglo de ventas (`ventas`).
- ¿Qué filtro?: Filtra únicamente los registros donde el nombre de la ciudad coincida con la ciudad buscada (limpiando espacios con `.trim()` y en minúsculas con `.toLowerCase()`) mediante `.filter()`.
- ¿Qué transformo?: Cada venta filtrada se transforma a su valor monetario (`valorVenta(venta)`) mediante `.map()`.
- ¿Qué acumulo?: La suma total del dinero generado para esa ciudad específica mediante `.reduce()`, iniciando en 0.
- ¿Cómo agrupo?: No aplica agrupamiento en objeto (filtra por una ciudad en particular).

4) FUNCIÓN totalPorCiudad(ventas)
- ¿Qué recorro?: El arreglo completo de ventas (`ventas`).
- ¿Qué filtro?: Ninguno (se toman todas las ventas).
- ¿Qué transformo?: El nombre de la ciudad a un formato estándar normalizado (eliminando espacios en los extremos con `.trim()` y asegurando mayúscula inicial y minúsculas posteriores, ej. "Medellín", "Bogotá") y cada venta a su valor monetario.
- ¿Qué acumulo?: El valor total de ventas sumado por cada ciudad dentro de un objeto acumulador que funciona como diccionario (`{}`).
- ¿Cómo agrupo?: Utilizando el nombre normalizado de la ciudad como clave en el objeto diccionario: `acumulador[ciudad] = (acumulador[ciudad] || 0) + valorVenta(venta)`.

5) FUNCIÓN unidadesPorProducto(ventas)
- ¿Qué recorro?: El arreglo completo de ventas (`ventas`).
- ¿Qué filtro?: Ninguno (se evalúan todos los registros).
- ¿Qué transformo?: El nombre del producto limpiando posibles espacios residuales (`.trim()`).
- ¿Qué acumulo?: La suma total de unidades (`venta.cantidad`) por cada producto dentro de un objeto acumulador (`{}`).
- ¿Cómo agrupo?: Por el nombre del producto como clave del diccionario: `acumulador[producto] = (acumulador[producto] || 0) + venta.cantidad`.

6) FUNCIÓN topProductosPorValor(ventas, k)
- ¿Qué recorro?: Primero una copia del arreglo `ventas` (creada con `[...]`), y posteriormente el arreglo de pares generado por `Object.entries()`.
- ¿Qué filtro?: No se descartan ventas inicialmente; al final se extraen los primeros `k` elementos mediante `.slice(0, k)`.
- ¿Qué transformo?: Con `Object.entries()`, el objeto diccionario de totales se transforma en un arreglo bidimensional de pares `[producto, totalValor]`.
- ¿Qué acumulo?: El dinero generado por cada producto mediante `.reduce()`, sumando `valorVenta(venta)`.
- ¿Cómo agrupo?: Por el nombre de producto en el diccionario intermedio. Luego se ordenan los grupos de mayor a menor según el valor acumulado usando `.sort((a, b) => b[1] - a[1])`.
