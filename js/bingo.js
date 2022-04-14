//Desde JS agrego el título, imágenes de cartones y reglas del juego

document.write('<h1 class="titulo">Juego CoderBingo</h1>');
document.write("<h2>Escoje tu cartón, presiona Jugar y ten mucha suerte!</h2>");

//función para insertar imagen (ésta me costó bastante aprenderla)
function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}
display_image('assets/Cartones-bingo.png', 496, 198, 'Cartones de Bingo');

//Instrucciones
document.write("<p>El bingo de 90 bolas es el que se juega en más partes del mundo. Los cartones tienen 15 números distribuidos en 3 filas diferentes. (fuente: Wikipedia.org)</p>");
document.write("<strong>Premios: Línea:<\strong><p> Consiste en acertar antes que el resto todos los números de una línea. <\p><strong>Cartón:<\strong><p> Es el premio principal. Consiste en acertar antes que el resto todos los números del cartón.</p>");

// ingreso los números de los cartones. Para este juego no vala hacer línea, gana quién complete el cartón.
// Todavía no vimos arrays, pero me adelanto un poco para hacerlo más interesante. Para el próximo ejercicio definiré funciones que hagan al código más simple y corto, además de incluir la posibilidad de hacer línea.

let carton1=[8,14,17,26,30,34,41,49,57,62,67,74,75,85,87];
let carton2=[1,9,12,15,23,28,31,39,42,52,55,60,65,71,80];
let carton3=[6,11,20,27,32,38,45,51,53,63,68,73,78,83,89];
let carton4=[2,5,16,24,25,33,40,46,54,58,64,70,77,84,90];

// Solicito al usuario elegir su cartón
let nombre = prompt("ingresa tu nombre");
alert ("Hola "+nombre);
let carton = parseInt(prompt("ingresá tu número de cartón (entre 1 y 4)"));

// Según el número elegido, el jugador accede a un cartón o pierde

if (!Number.isInteger(carton)){
    alert ("Un número papá, tenías que poner un número!!! Perdiste por sonso. Andate a jugar al TaTeTi...")
} else {
    if (carton < 1 || carton >4) {
    alert ("Perdiste por gil. No era tan dificil, solo tenías que poner un número entre 1 y 4")
    } else {
    alert ("Buena opción. Estás jugando con el cartón "+carton)
    };
};
document.write('<strong class="rojo">'+nombre+' juega con el cartón: '+carton+'<\strong><br>');
document.write("<strong>Bolillas expulsadas: <\strong>");

//Le metí opción de salir apretando "s" para que no se haga largo de más. El juego termina sino cuando alguno de los 4 cartones se completa.
//Para que se haga más corto debería sacar del bolillero los números que van saliendo (no permitir que se repitan), pero queda para la próxima.
let salir = "n";
while (carton1.length!=0 && carton2.length!=0 && carton3.length!=0 && carton4.length!=0 && salir!="s"){
    let aleatorio = Math. round(Math. random()*90);
    alert("Del bolillero salió el: "+aleatorio);
    document.write(aleatorio + ", ");
    let indice1 = carton1.indexOf(aleatorio);
    if (indice1 >= 0){
        document.write("Bolilla del cartón 1!");
        carton1.splice(indice1, 1);
        document.write('<p class="rojo">El cartón 1 queda así: '+carton1+'<\p>');
        document.write("<strong>Bolillas expulsadas: <\strong>");
    }
    let indice2 = carton2.indexOf(aleatorio);
    if (indice2 >= 0){
        document.write("Acierto del cartón 2");
        carton2.splice(indice2, 1);
        document.write('<p class="amarillo">El cartón 2 queda así: '+carton2+'<\p>');
        document.write("<strong>Bolillas expulsadas: <\strong>");
    }
    let indice3 = carton3.indexOf(aleatorio);
    if (indice3 >= 0){
        document.write("La pegó con el cartón 3");
        carton3.splice(indice3, 1);
        document.write('<p class="verde">El cartón 3 queda así: '+carton3+'<\p>');
        document.write("<strong>Bolillas expulsadas: <\strong>");
    }
    let indice4 = carton4.indexOf(aleatorio);
    if (indice4 >= 0){
        document.write("Afortunado el 4. Acierta!");
        carton4.splice(indice4, 1);
        document.write('<p class="azul">El cartón 4 queda así: '+carton4+'<\p>');
        document.write("<strong>Bolillas expulsadas: <\strong>");
    }
    salir = prompt("ingresa 's' para salir");
};
if(carton1.length==0){
    alert("Tenemos un ganador con el cartón 1!");
    if(carton == 1){
        alert("Felicitaciones "+nombre)
        document.write("<h3>Felicitaciones "+nombre+"!!!");
    } else{
        alert("Y vos, "+nombre+", perdiste!!! ");
        document.write("<h3>Ganó el cartón 1 "+nombre+"!!!");
    };
}
if(carton2.length==0){
    alert("Tenemos un ganador con el cartón 1!");
    if(carton == 2){
        alert("Felicitaciones "+nombre)
        document.write("<h3>Felicitaciones "+nombre+"!!!");
    } else{
        alert("Y vos, "+nombre+", perdiste!!! ");
        document.write("<h3>Ganó el cartón 2 "+nombre+"!!!");
    };
}
if(carton3.length==0){
    alert("Tenemos un ganador con el cartón 1!");
    if(carton == 3){
        alert("Felicitaciones "+nombre)
        document.write("<h3>Felicitaciones "+nombre+"!!!");
    } else{
        alert("Y vos, "+nombre+" perdiste!!! ");
        document.write("<h3>Ganó el cartón 3 "+nombre+"!!!");
    };
}
if(carton4.length==0){
    alert("Tenemos un ganador con el cartón 4!");
    if(carton == 4){
        alert("Felicitaciones "+nombre)
        document.write("<h3>Felicitaciones "+nombre+"!!!");
    } else{
        alert("Y vos, "+nombre+" perdiste!!! ");
        document.write("<h3>Ganó el cartón 4 "+nombre+"!!!");
    };
}



