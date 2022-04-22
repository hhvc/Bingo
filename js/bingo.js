// Juego de Bingo - Trabajo práctico curso JS en Coderhouse - Alumno, Héctor Horacio Vázquez Cuestas
let bolillero=[];

const imageJ1 = document.createElement('img');
const imageJ2 = document.createElement('img');
const imageJ3 = document.createElement('img');
const imageJ4 = document.createElement('img');

let magiajugador1 = document.getElementById("jugador1");
let magiajugador2 = document.getElementById("jugador2");
let magiajugador3 = document.getElementById("jugador3");
let magiajugador4 = document.getElementById("jugador4");

let jugador1={
    nombre:"vos, el burro",
    avatar: imageJ1,
};

let jugador2={
    nombre:"C-3PO",
    avatar:imageJ2,
};
    
let jugador3={
    nombre:"BB-8",
    avatar: imageJ3,
};

let jugador4={
    nombre:"R2-D2",
    avatar:imageJ4,
};


let ganadorLinea="";
let ganadorBingo="";
let juego="off";

function preInicioJuego(){
    if(juego=="on"){
        juego="off"
        location.reload();
    } else {
        juego="on";
        inicioJuego();
    };
};

function setNombre (nombreIngresado, nroJugador){
    if (nombreIngresado!="" && nombreIngresado!="robot" && nombreIngresado!=" " && nombreIngresado!=null){
        switch(nroJugador){
            case 1: jugador1.nombre=nombreIngresado;
            break;
            case 2: jugador2.nombre=nombreIngresado;
            break;
            case 3: jugador3.nombre=nombreIngresado;
            break;
            case 4: jugador4.nombre=nombreIngresado;
        }
    };
};

function setGanadorLinea(ganador){
    ganadorLinea=ganador;
    switch(ganador){
        case jugador1:
            magiajugador1.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
            magiaCarton1.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
        break
        case jugador2:
            magiajugador2.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
            magiaCarton2.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
        break
        case jugador3:
            magiajugador3.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
            magiaCarton3.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
        break
        case jugador4:
            magiajugador4.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
            magiaCarton4.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡Línea!!!</h3>');
    }
    const footer = document.getElementById("footer");
    footer.insertAdjacentHTML('beforebegin', '<h3 class="rojo">¡¡¡Línea!!! del jugador '+ganador.nombre+'</h3>');

}
function setGanadorBingo(ganador){
    ganadorBingo=ganador;
    switch(ganador){
        
        case jugador1:
            magiajugador1.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
            magiaCarton1.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
        break
        case jugador2:
            magiajugador2.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
            magiaCarton2.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
        break
        case jugador3:
            magiajugador3.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
            magiaCarton3.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
        break
        case jugador4:
            magiajugador4.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
            magiaCarton4.insertAdjacentHTML('beforeend', '<h3 class="rojo">¡¡¡BINGO!!!</h3>');
    }
    const footer = document.getElementById("footer");
    footer.insertAdjacentHTML('beforebegin', '<h3 class="rojo">¡¡¡BINGO!!! Ganó el jugador '+ganador.nombre+'</h3>');
}

function setMagiaJugadores(){
        magiajugador1 = document.getElementById("jugador1");
        magiajugador2 = document.getElementById("jugador2");
        magiajugador3 = document.getElementById("jugador3");
        magiajugador4 = document.getElementById("jugador4");
};

let carton1=[
    c1Linea1=[8,14,41,62,85],
    c1Linea2=[26,30,57,74,87],
    c1Linea3=[17,34,49,67,75]
    ];
let carton2=[
    c2Linea1=[12,23,42,52,80],
    c2Linea2=[1,28,31,60,71],
    c2Linea3=[9,15,39,55,65]
    ];
let carton3=[
    c3Linea1=[6,20,51,73,83],
    c3Linea2=[11,32,45,63,78],
    c3Linea3=[27,38,53,68,89]
    ];
let carton4=[
    c4Linea1=[2,16,40,70,84],
    c4Linea2=[5,24,33,54,64],
    c4Linea3=[25,46,58,77,90]
    ];

function sonido(){
    const sonido=new Audio('../assets/sonido.mp3');
    sonido.play();
};


const jugar = document.getElementById("btJugar");
jugar.addEventListener("click", preInicioJuego);

const magiaBolillero = document.getElementById("bolillasAdentro");
const magiaCarton1 = document.getElementById("carton1");
const magiaCarton2 = document.getElementById("carton2");
const magiaCarton3 = document.getElementById("carton3");
const magiaCarton4 = document.getElementById("carton4");

function resetBolillero(){
    bolillero=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
};

function inicioJuego(){
    sonido();
    resetBolillero();
    // ingreso nombres de jugadores
    for (let i=1; i<5; i++){
        nombreIngresado = prompt('Ingresa el nombre del jugador o "Cancelar" para incorporar robot');
        setNombre (nombreIngresado, i);
    }
    magiaCarton1.insertAdjacentHTML('afterbegin','<h3 class="jugadores" id="jugador1">'+jugador1.nombre+'</h3>');
    magiaCarton2.insertAdjacentHTML('afterbegin','<h3 class="jugadores" id="jugador2">'+jugador2.nombre+'</h3>');
    magiaCarton3.insertAdjacentHTML('afterbegin','<h3 class="jugadores" id="jugador3">'+jugador3.nombre+'</h3>');
    magiaCarton4.insertAdjacentHTML('afterbegin','<h3 class="jugadores" id="jugador4">'+jugador4.nombre+'</h3>');

    if (jugador1.nombre=="vos, el burro"){
        imageJ1.src= '../assets/1burro.jpeg';
    } else {imageJ1.src="../assets/1chancho.jpeg"};
    if (jugador2.nombre=="C-3PO"){
        imageJ2.src= '../assets/C-3PO.jpeg';
    } else {imageJ2.src= '../assets/1ganso.png'};
    if (jugador3.nombre=="BB-8"){
        imageJ3.src= '../assets/BB-8.jpeg';
    } else {imageJ3.src= '../assets/1perro.png'};
    if (jugador4.nombre=="R2-D2"){
        imageJ4.src= '../assets/R2-D2.jpeg';
    } else {imageJ4.src= '../assets/1burro.jpeg'};

    document.querySelector('.carton1').appendChild(imageJ1);
    document.querySelector('.carton2').appendChild(imageJ2);
    document.querySelector('.carton3').appendChild(imageJ3);
    document.querySelector('.carton4').appendChild(imageJ4);

    alert ("Jugadores en la mesa. Presiona Enter para iniciar juego");
    tirarBolillas();
};

function tirarBolillas(){
    setMagiaJugadores();
    let carton1Concat = c1Linea1.concat(c1Linea2, c1Linea3);
    let carton2Concat = c2Linea1.concat(c2Linea2, c2Linea3);
    let carton3Concat = c3Linea1.concat(c3Linea2, c3Linea3);
    let carton4Concat = c4Linea1.concat(c4Linea2, c4Linea3);
    const magiabolillasAdentro = document.getElementById("bolillasAdentro");
    const magiabolillasAfuera = document.getElementById("bolillasAfuera");
    magiabolillasAdentro.insertAdjacentHTML('beforeend','<p id="bolillero2">'+bolillero+'</p>');

    while (bolillero.length!=0 && carton1Concat.length!=0 && carton2Concat.length!=0 && carton3Concat.length!=0 && carton4Concat.length!=0){
        let aleatorio = Math.round(Math.random()*90);

        let pruebaBolillero = bolillero.indexOf(aleatorio);

        if (pruebaBolillero!=-1){
            bolillero.splice(pruebaBolillero, 1);
            bolilleroARemover=document.getElementById("bolillero2");
            magiabolillasAdentro.removeChild(bolilleroARemover);
            magiabolillasAdentro.insertAdjacentHTML('beforeend','<p id="bolillero2">'+bolillero+'</p>');
            magiabolillasAfuera.insertAdjacentHTML('beforeend',aleatorio+'; ');
        }

        let indice11 = c1Linea1.indexOf(aleatorio);
        let indice12 = c1Linea2.indexOf(aleatorio);
        let indice13 = c1Linea3.indexOf(aleatorio);

        if (indice11 >= 0){
            magiaCarton1.insertAdjacentHTML('beforeend',"Bolilla del cartón 1!");
            c1Linea1.splice(indice11, 1);
            magiaCarton1.insertAdjacentHTML('beforeend','<p class="rojo">La línea 1 del cartón 1 queda así: '+c1Linea1+'</p>');
        }
        if (indice12 >= 0){
            magiaCarton1.insertAdjacentHTML('beforeend',"Bolilla del cartón 1!");
            c1Linea2.splice(indice12, 1);
            magiaCarton1.insertAdjacentHTML('beforeend','<p class="rojo">La línea 2 del cartón 1 queda así: '+c1Linea2+'</p>');
        }        
        if (indice13 >= 0){
            magiaCarton1.insertAdjacentHTML('beforeend',"Bolilla del cartón 1!");
            c1Linea3.splice(indice13, 1);
            magiaCarton1.insertAdjacentHTML('beforeend','<p class="rojo">La línea 3 del cartón 1 queda así: '+c1Linea3+'</p>');
        }

        let indice21 = c2Linea1.indexOf(aleatorio);
        let indice22 = c2Linea2.indexOf(aleatorio);
        let indice23 = c2Linea3.indexOf(aleatorio);

        if (indice21 >= 0){
            magiaCarton2.insertAdjacentHTML('beforeend',"Bolilla del cartón 2!");
            c2Linea1.splice(indice21, 1);
            magiaCarton2.insertAdjacentHTML('beforeend','<p class="rojo">La línea 1 del cartón 2 queda así: '+c2Linea1+'</p>');
        }
        if (indice22 >= 0){
            magiaCarton2.insertAdjacentHTML('beforeend',"Bolilla del cartón 2!");
            c2Linea2.splice(indice22, 1);
            magiaCarton2.insertAdjacentHTML('beforeend','<p class="rojo">La línea 2 del cartón 2 queda así: '+c2Linea2+'</p>');
        }        
        if (indice23 >= 0){
            magiaCarton2.insertAdjacentHTML('beforeend',"Bolilla del cartón 2!");
            c2Linea3.splice(indice23, 1);
            magiaCarton2.insertAdjacentHTML('beforeend','<p class="rojo">La línea 3 del cartón 2 queda así: '+c2Linea3+'</p>');
        }

        let indice31 = c3Linea1.indexOf(aleatorio);
        let indice32 = c3Linea2.indexOf(aleatorio);
        let indice33 = c3Linea3.indexOf(aleatorio);

        if (indice31 >= 0){
            magiaCarton3.insertAdjacentHTML('beforeend',"Bolilla del cartón 3!");
            c3Linea1.splice(indice31, 1);
            magiaCarton3.insertAdjacentHTML('beforeend','<p class="rojo">La línea 1 del cartón 3 queda así: '+c3Linea1+'</p>');
        }
        if (indice32 >= 0){
            magiaCarton3.insertAdjacentHTML('beforeend',"Bolilla del cartón 3!");
            c3Linea2.splice(indice32, 1);
            magiaCarton3.insertAdjacentHTML('beforeend','<p class="rojo">La línea 2 del cartón 3 queda así: '+c3Linea2+'</p>');
        }        
        if (indice33 >= 0){
            magiaCarton3.insertAdjacentHTML('beforeend',"Bolilla del cartón 3!");
            c3Linea3.splice(indice33, 1);
            magiaCarton3.insertAdjacentHTML('beforeend','<p class="rojo">La línea 3 del cartón 3 queda así: '+c3Linea3+'</p>');
        }

        let indice41 = c4Linea1.indexOf(aleatorio);
        let indice42 = c4Linea2.indexOf(aleatorio);
        let indice43 = c4Linea3.indexOf(aleatorio);

        if (indice41 >= 0){
            magiaCarton4.insertAdjacentHTML('beforeend',"Bolilla del cartón 4!");
            c4Linea1.splice(indice41, 1);
            magiaCarton4.insertAdjacentHTML('beforeend','<p class="rojo">La línea 1 del cartón 4 queda así: '+c4Linea1+'</p>');
        }
        if (indice42 >= 0){
            magiaCarton4.insertAdjacentHTML('beforeend',"Bolilla del cartón 4!");
            c4Linea2.splice(indice42, 1);
            magiaCarton4.insertAdjacentHTML('beforeend','<p class="rojo">La línea 2 del cartón 4 queda así: '+c4Linea2+'</p>');
        }        
        if (indice43 >= 0){
            magiaCarton4.insertAdjacentHTML('beforeend',"Bolilla del cartón 4!");
            c4Linea3.splice(indice43, 1);
            magiaCarton4.insertAdjacentHTML('beforeend','<p class="rojo">La línea 3 del cartón 4 queda así: '+c4Linea3+'</p>');
        }

        carton1Concat = c1Linea1.concat(c1Linea2, c1Linea3);
        carton2Concat = c2Linea1.concat(c2Linea2, c2Linea3);
        carton3Concat = c3Linea1.concat(c3Linea2, c3Linea3);
        carton4Concat = c4Linea1.concat(c4Linea2, c4Linea3);

        if(c1Linea1.length==0 || c1Linea2.length==0 || c1Linea3.length==0){
            if(ganadorLinea==0){
                alert("Tenemos línea en el cartón 1!");
                setGanadorLinea(jugador1);
            }
        }
        if(c2Linea1.length==0 || c2Linea2.length==0 || c2Linea3.length==0){
            if(ganadorLinea==0){
                alert("Tenemos línea en el cartón 2!");
                setGanadorLinea(jugador2);
            }
        }
        if(c3Linea1.length==0 || c3Linea2.length==0 || c3Linea3.length==0){
            if(ganadorLinea==0){
                alert("Tenemos línea en el cartón 3!");
                setGanadorLinea(jugador3);
            }
        }
        if(c4Linea1.length==0 || c4Linea2.length==0 || c4Linea3.length==0){
            if(ganadorLinea==0){
                alert("Tenemos línea en el cartón 4!");
                setGanadorLinea(jugador4);
            }
        }

        if(carton1Concat.length==0){
        alert("Tenemos un ganador con el cartón 1!");
        setGanadorBingo(jugador1);
        };

        if(carton2Concat.length==0){
            alert("Tenemos un ganador con el cartón 2!");
            setGanadorBingo(jugador2);
        }
        if(carton3Concat.length==0){
            alert("Tenemos un ganador con el cartón 3!");
            setGanadorBingo(jugador3);
        };
        if(carton4Concat.length==0){
            alert("Tenemos un ganador con el cartón 4!");
            setGanadorBingo(jugador4);

        };
    };
};



