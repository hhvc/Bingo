// Juego de Bingo - Trabajo práctico curso JS en Coderhouse - Alumno, Héctor Horacio Vázquez Cuestas
let salir = "n"
let bolillero=[];
let carton=0;
let nombre ="";

function setNombre (nombreIngresado){
    nombre=nombreIngresado;
}
function setCarton(cartonElegido){
    carton=cartonElegido;
}

let carton1=[
    c1Linea1=[8,14,41,62,85],
    c1Linea2=[26,30,57,74,87],
    c1Linea3=[17,34,49,67,75]
    ];
// let carton1Concat=[];
let carton2=[
    c2Linea1=[12,23,42,52,80],
    c2Linea2=[1,28,31,60,71],
    c2Linea3=[9,15,39,55,65]
    ];
// let carton2Concat=[];
let carton3=[
    c3Linea1=[6,20,51,73,83],
    c3Linea2=[11,32,45,63,78],
    c3Linea3=[27,38,53,68,89]
    ];
// let carton3Concat=[];

let carton4=[
    c4Linea1=[2,16,40,70,84],
    c4Linea2=[5,24,33,54,64],
    c4Linea3=[25,46,58,77,90]
    ];
// let carton4Concat=[]

const jugar = document.getElementById("btJugar");
jugar.addEventListener("click", inicioJuego);

const magiaBolillero = document.getElementById("bolillero");
const magiaCarton1 = document.getElementById("carton1");
const magiaCarton2 = document.getElementById("carton2");
const magiaCarton3 = document.getElementById("carton3");
const magiaCarton4 = document.getElementById("carton4");

function resetBolillero(){
    bolillero=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
};
function inicioJuego(){
    resetBolillero();
// Solicito al usuario elegir su cartón
    let nombreIngresado = prompt("ingresa tu nombre");
    setNombre (nombreIngresado);
    alert ("Hola "+nombre);
    cartonElegido = parseInt(prompt("ingresá tu número de cartón (entre 1 y 4)"));
// Según el número elegido, el jugador accede a un cartón o pierde
    let confirmacionJuego = '<p class= "rojo">'+nombre+', estás jugando con el cartón <strong>'+cartonElegido+'!!!</strong></p>';
    if (!Number.isInteger(cartonElegido)){
        alert ("Un número papá, tenías que poner un número!!! Perdiste por sonso. Andate a jugar al TaTeTi...");
    } else {
        if (cartonElegido < 1 || cartonElegido >4) {
        alert ("Perdiste por gil. No era tan dificil, solo tenías que poner un número entre 1 y 4");
        } else {
            alert ("Buena opción. Estás jugando con el cartón "+cartonElegido);
            magiaBolillero.insertAdjacentHTML('beforeend',confirmacionJuego);
            magiaBolillero.insertAdjacentHTML('beforeend','<strong>Bolillas expulsadas: </strong>');
            setCarton(cartonElegido);
            tirarBolillas();
        };
    };
};
function tirarBolillas(){

    let carton1Concat = c1Linea1.concat(c1Linea2, c1Linea3);
    let carton2Concat = c2Linea1.concat(c2Linea2, c2Linea3);
    let carton3Concat = c3Linea1.concat(c3Linea2, c3Linea3);
    let carton4Concat = c4Linea1.concat(c4Linea2, c4Linea3);

    while (carton1Concat.length!=0 && carton2Concat.length!=0 && carton3Concat.length!=0 && carton4Concat.length!=0 && salir!="s"){
        let aleatorio = Math.round(Math.random()*90);
        magiaBolillero.insertAdjacentHTML('beforeend','Bolilla: '+aleatorio+', ');
        // salir = prompt("Bolilla: "+aleatorio+'  ¿Para salir presiona "s", sino continuamos?');


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
            magiaCarton1.insertAdjacentHTML('beforeend',"Bolilla del cartón 3!");
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

        if(carton1Concat.length==0){
        alert("Tenemos un ganador con el cartón 1!");
            if(carton == 1){
                alert("Felicitaciones "+nombre);
                magiaBolillero.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!</h3>");
                magiaCarton1.insertAdjacentHTML('beforeend',"<h3>¡¡¡GANADOR!!!</h3>")
            }   else{
                    alert("Y vos, "+nombre+", perdiste!!! ");
                    magiaCarton1.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+" Ganó el cartón 1!!!</h3>");
                };
        };

        if(carton2Concat.length==0){
            alert("Tenemos un ganador con el cartón 2!");
            if(carton == 2){
                alert("Felicitaciones "+nombre);
                magiaBolillero.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!");
                magiaCarton2.insertAdjacentHTML('beforeend',"<h3>¡¡¡GANADOR!!!</H3>")
            } else{
                alert("Y vos, "+nombre+", perdiste!!! ");
                magiaCarton2.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+". Ganó el cartón 2!!!</h3>");
            };
        }
        if(carton3Concat.length==0){
            alert("Tenemos un ganador con el cartón 3!");
            if(carton == 3){
                alert("Felicitaciones "+nombre);
                magiaBolillero.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!");
                magiaCarton3.insertAdjacentHTML('beforeend',"<h3>¡¡¡GANADOR!!!</H3>");
            }   else{
                    alert("Y vos, "+nombre+", perdiste!!! ");
                    magiaCarton3.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+". Ganó el cartón 3!!!</h3>");
                };
        };
        if(carton4Concat.length==0){
            alert("Tenemos un ganador con el cartón 4!");
            if(carton == 4){
                alert("Felicitaciones "+nombre);
                magiaBolillero.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!");
                magiaCarton4.insertAdjacentHTML('beforeend',"<h3>¡¡¡GANADOR!!!</H3>");
            }   else{
                    alert("Y vos, "+nombre+", perdiste!!! ");
                    magiaCarton4.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+". Ganó el cartón 4!!!</h3>");
                };
        };
    };
};




