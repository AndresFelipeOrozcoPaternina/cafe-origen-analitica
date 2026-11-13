const Datos = require('./datos');
const instanciaDatos = new Datos();

class Analitica {

  ventas = instanciaDatos.ventas;

  mostrarNumero4() {
    console.log(this.ventas[4]);
  }

  mostrarPrimerDato(){
    console.log(this.ventas[0]);

  }

  mostrarUlitimoDato(){
    const tamaFinal=this.ventas.length-1;
    console.log(this.ventas[tamaFinal]);

  }


  mostrarTabla() {
    console.table(this.ventas);
  }
}


const miAnalitica = new Analitica();
miAnalitica.mostrarEjemplo();
miAnalitica.mostrarPrimerDato();
miAnalitica.mostrarUlitimoDato();
miAnalitica.mostrarTabla();

module.exports = Analitica;










