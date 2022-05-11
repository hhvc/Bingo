var NUM_COCHES=5; // Máximo número de coches

var META=85; // Porcentaje en el que fijamos la meta

var coches=new Array; // Vector que almacena cada coche con su posición

// Constructor de cada coche
class Coche {
  constructor( _num) {
    this.num = _num;
    this.pos = 0;
    // Método que incrementa la posición del coche
    this.avanza = function (_incPos) {
      this.pos += _incPos;
      $('#c' + this.num).animate({ 'margin-left': this.pos + '%' }, 2000);
      return this.pos;
    };
      // Devolvemos el coche a la posición inicial
      this.reinicia = function () {
        this.pos = 0;
        $('#c' + this.num).animate({ 'margin-left': this.pos }, 2000);
      };
    } // Fin de constructor de coche
  }
    // Inicialización del vector de coches
    function inicializar_coches() {
      for (var i = 0; i < NUM_COCHES; ++i) {
        coches[i] = new Coche(i + 1);
      }
    }

    // Realizar la carrera hasta que algún coche llegue a la meta
    function realizar_carrera() {
      var max = 0;
      var tmpPos;
      while (coches[max].pos < META) {
        for (var j = 0; j < NUM_COCHES; ++j) {
          tmpPos = coches[j].avanza(Math.floor(Math.random() * 40 + 1));
          max = (tmpPos < coches[max].pos) ? max : j;
        }
      }
    }


    // Devolver todos los coches a su posición inicial
    function reiniciar_coches() {
      for (var i = 0; i < NUM_COCHES; ++i) {
        coches[i].reinicia();
      }
    }


    // Inicializamos los coches y asignamos eventos al comenzar.
    $(document).ready(function () {
      inicializar_coches();
      $('#empezar').click(function () {
        $(this).hide();
        $('#reiniciar').show();
        realizar_carrera();
      });
      $('#reiniciar').click(function () {
        $(this).hide();
        $('#empezar').show();
        reiniciar_coches();
      });

    });
