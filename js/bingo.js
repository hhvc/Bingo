// Juego de Bingo - Trabajo práctico curso JS en Coderhouse - Alumno, Héctor Horacio Vázquez Cuestas
let bolillero=[];
let carton=0;
let carton1=[8,14,17,26,30,34,41,49,57,62,67,74,75,85,87];
    // c1Linea1=[8,14,17,26,30],
    // c1Linea2=[34,41,49,57,62],
    // c1Linea3=[67,74,75,85,87]

let carton2=[1,9,12,15,23,28,31,39,42,52,55,60,65,71,80];
        // c2Linea1=[1,9,12,15,23],
        // c2Linea2=[28,31,39,42,52],
        // c2Linea3=[55,60,65,71,80]

let carton3=[6,11,20,27,32,38,45,51,53,63,68,73,78,83,89];
        // c3Linea1=[6,11,20,27,32],
        // c3Linea2=[38,45,51,53,63],
        // c3Linea3=[68,73,78,83,89]

let carton4=[2,5,16,24,25,33,40,46,54,58,64,70,77,84,90];
        // c4Linea1=[2,5,16,24,25],
        // c4Linea2=[33,40,46,54,58],
        // c4Linea3=[64,70,77,84,90]

const jugar = document.getElementById("btJugar");
jugar.addEventListener("click", inicioJuego);

const magia = document.getElementById("desarrollo");

function resetBolillero(){
    bolillero=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
};
function inicioJuego(){
    resetBolillero();
// Solicito al usuario elegir su cartón
    let nombre = prompt("ingresa tu nombre");
    alert ("Hola "+nombre);
    carton = parseInt(prompt("ingresá tu número de cartón (entre 1 y 4)"));
// Según el número elegido, el jugador accede a un cartón o pierde
    let confirmacionJuego = '<p class= "rojo">'+nombre+', estás jugando con el cartón <strong>'+carton+'!!!</strong></p>';
    if (!Number.isInteger(carton)){
        alert ("Un número papá, tenías que poner un número!!! Perdiste por sonso. Andate a jugar al TaTeTi...")
    } else {
        if (carton < 1 || carton >4) {
        alert ("Perdiste por gil. No era tan dificil, solo tenías que poner un número entre 1 y 4")
        } else {
            alert ("Buena opción. Estás jugando con el cartón "+carton);
            magia.insertAdjacentHTML('beforeend',confirmacionJuego);
            magia.insertAdjacentHTML('beforeend','<strong>Bolillas expulsadas: </strong>');
            tirarBolillas();
        };
    };
}
function tirarBolillas(){
    while (Object.keys(carton1).length!=0 && Object.keys(carton2).length!=0 && Object.keys(carton3).length!=0 && Object.keys(carton4).length!=0){
        let aleatorio = Math. round(Math. random()*90);
        // alert("Del bolillero salió el: "+aleatorio);
        magia.insertAdjacentHTML('beforeend',"Bolilla: "+aleatorio+", ");

        let indice1 = carton1.indexOf(aleatorio);
        if (indice1 >= 0){
            magia.insertAdjacentHTML('beforeend',"Bolilla del cartón 1!");
            carton1.splice(indice1, 1);
            magia.insertAdjacentHTML('beforeend','<p class="rojo">El cartón 1 queda así: '+carton1+'</p>');
        }

        let indice2 = carton2.indexOf(aleatorio);
        if (indice2 >= 0){
            magia.insertAdjacentHTML('beforeend',"Acierto del cartón 2");
            carton2.splice(indice2, 1);
            magia.insertAdjacentHTML('beforeend','<p class="amarillo">El cartón 2 queda así: '+carton2+'</p>');
        }

        let indice3 = carton3.indexOf(aleatorio);
        if (indice3 >= 0){
            magia.insertAdjacentHTML('beforeend',"La pegó en el cartón 3");
            carton3.splice(indice3, 1);
            magia.insertAdjacentHTML('beforeend','<p class="verde">El cartón 3 queda así: '+carton3+'</p>');
        }

        let indice4 = carton4.indexOf(aleatorio);
        if (indice4 >= 0){
            magia.insertAdjacentHTML('beforeend',"Afortunado el 4. Acierta!");
            carton4.splice(indice4, 1);
            magia.insertAdjacentHTML('beforeend','<p class="azul">El cartón 4 queda así: '+carton4+'</p>');
        }

        if(Object.keys(carton1).length==0){
        alert("Tenemos un ganador con el cartón 1!");
            if(carton == 1){
                alert("Felicitaciones "+nombre)
                magia.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!</h3>");
            }   else{
                    alert("Y vos, "+nombre+", perdiste!!! ");
                    magia.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+" Ganó el cartón 1!!!</h3>");
                };
        };

        if(Object.keys(carton2).length==0){
            alert("Tenemos un ganador con el cartón 1!");
            if(carton == 2){
                alert("Felicitaciones "+nombre)
                magia.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!");
            } else{
                alert("Y vos, "+nombre+", perdiste!!! ");
                magia.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+". Ganó el cartón 2!!!</h3>");
            };
        }
        if(Object.keys(carton3).length==0){
            alert('beforeend',"Tenemos un ganador con el cartón 1!");
            if(carton == 3){
                alert("Felicitaciones "+nombre)
                magia.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!");
            }   else{
                alert("Y vos, "+nombre+", perdiste!!! ");
                magia.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+". Ganó el cartón 3!!!</h3>");
                };
        }
        if(Object.keys(carton4).length==0){
            alert("Tenemos un ganador con el cartón 4!");
            if(carton == 4){
                alert("Felicitaciones "+nombre)
                magia.insertAdjacentHTML('beforeend',"<h3>Felicitaciones "+nombre+"!!!");
            }   else{
                    alert("Y vos, "+nombre+", perdiste!!! ");
                    magia.insertAdjacentHTML('beforeend',"<h3>Perdiste "+nombre+". Ganó el cartón 4!!!</h3>");
                };
        };
    };
}




