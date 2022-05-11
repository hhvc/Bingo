window.onload = function () {
    alert('Use las flecha izquierda y derecha o las letras A, D para moverse')
    // Captura el fondo (elemento padre)
    var bg = this.document.getElementById('bg');
    // Obtener la altura de la pantalla y dar fondo
    var h = this.document.documentElement.clientHeight;
    var w = bg.clientWidth;
    bg.style.height = h + 'px';
    // Generar caja
    function createBox() {
      var box = this.document.createElement('div')
      box.setAttribute('class', 'box');
      // Posición generada ---> 22; 88; 172; 238 Se generan cuatro pistas aleatoriamente
      var randNum = Math.random();
      var deltai = (((w - 20) / 4) - boxw) / 2;
      var i = deltai + 10; // Inicio de abscisas
      // console.log(randNum);
      if (randNum < 0.25) {
        box.style.left = i + 'px';
      } else if (randNum >= 0.25 && randNum < 0.5) {
        box.style.left = i + boxw + (2 * deltai) + 'px';
      } else if (randNum >= 0.5 && randNum < 0.75) {
        box.style.left = i + (2 * boxw) + (4 * deltai) + 'px';
      } else {
        box.style.left = i + (3 * boxw) + (6 * deltai) + 'px';
      };
      // box.style.left = Math.floor (Math.random () * 270) + 'px'; // 270 no se puede modificar aquí
      bg.appendChild(box);
      // console.log(box.clientWidth);
      moveBox(box); // Vincular objetos para cada caja
      end(box);
    };
    // Agrega un cuadro al elemento padre cada t milisegundos
    var t = 1500;
    function add() {
      // console.log('add');
      createBox();
    };
    setInterval(function () {
      add();
    }, t);
    // Haz que cada caja se mueva
    var deltaX = 1;
    var time = 10;
    function moveBox(obj) {
      deltaX += 0.1;
      var pos = 0;
      var id = setInterval(move, time);
      function move() {
        if (pos == (h - boxh)) {
          clearInterval(id);
          bg.removeChild(obj); // Quita la caja que se mueve hasta el final
        } else {
          pos += deltaX;
          obj.style.top = pos + 'px';
        }
      }
    };
    // Agrega un auto personalizado
    var mybox = this.document.getElementById('mybox');
    var boxh = mybox.clientHeight;
    var boxw = mybox.clientWidth;
    // Especifica la posición inicial
    mybox.style.top = h - boxh - 150 + 'px';
    mybox.style.left = w / 2 + 'px';
    var speed = 10;
    // Definir función de desplazamiento
    // function moveUp() {
    //   // console.log('Up');
    //   mybox.style.top = mybox.offsetTop - speed + 'px';
    // };
    // function moveDown() {
    //   // console.log('Down');
    //   mybox.style.top = mybox.offsetTop + speed + 'px';
    // };
    function moveLeft() {
      // console.log('Left');
      if (mybox.offsetLeft >= 25) {
        mybox.style.left = mybox.offsetLeft - speed + 'px';
      }
    };
    function moveRight() {
      // console.log('Right');
      if (mybox.offsetLeft <= w - boxw - 20) {
        mybox.style.left = mybox.offsetLeft + speed + 'px';
      }
    };
    var sensitivity = 30; // Control de la sensibilidad de la dirección, cuanto más pequeña, más sensible
    setInterval(function () {
      switch (dir) {
        // case 87:
        //   moveUp();
        //   break;
        // case 38:
        //   moveUp();
        //   break;
        // case 83:
        //   moveDown();
        //   break;
        // case 40:
        //   moveDown();
        //   break;
        case 65:
          moveLeft();
          break;
        case 37:
          moveLeft();
          break;
        case 68:
          moveRight();
          break;
        case 39:
          moveRight();
          break;
      }
    }, sensitivity);
    // Juicio de borde
    function end(obj) {
      var v = deltaX / time;
      var x = h - 10 - 2 * boxh;
      var t = x / v;
      setTimeout(function () {
        var deltaMin = obj.offsetLeft;
        var deltaMax = obj.offsetLeft + boxw;
        // console.log(deltaMin);
        // console.log(deltaMax);
        // console.log(mybox.offsetLeft);
        if (mybox.offsetLeft <= deltaMax && mybox.offsetLeft >= deltaMin) {
          alert('Game End');
          window.location.reload();
        }
      }, t + 300);
    };
    // Vincular eventos de teclado
    this.document.onkeydown = function (event) {
      event = event || window.event;
      // up 38 w 87；down 40 s 83；left 37 a 65；right 39 d 68
      dir = event.keyCode;
    };
    this.document.onkeyup = function () {
      dir = 0;
    };
  }
  