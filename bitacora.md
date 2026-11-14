
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