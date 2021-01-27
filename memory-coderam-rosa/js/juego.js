/* partida={
    fecha: new Date(),
    jugador: jugador.value,
    jugada:[],
    vidas:8
} */

let partida = JSON.parse(sessionStorage.getItem("memory"))
let puntuacion = document.querySelector(".puntuacion")
let jugador = document.querySelector("#nombreJugador")
jugador.textContent=partida.jugador
console.log(partida)

document.querySelector("body").onload = () => {

    if (partida == null)
        window.location.src = "inicio.html"
    puntuacion.innerHTML = partida.vidas
    jugador.innerHTML = partida.jugador
}


// INICIAR EL ARRAY CON LAS IMG
const cards = [
    // { img: "images/cards/css.png" },
    // { img: "images/cards/gitlab.png " },
    // { img: "images/cards/html.png" },
    // { img: "images/cards/internet.png" },
    { img: "images/cards/js.png" },
    { img: "images/cards/mochuelo.png" },
    { img: "images/cards/php.png" },
    { img: "images/cards/python.png" },
    { img: "images/cards/react.png" },
    { img: "images/cards/sass.png" },

    // { img: "images/cards/css.png" },
    // { img: "images/cards/gitlab.png " },
    // { img: "images/cards/html.png" },
    // { img: "images/cards/internet.png" },
    { img: "images/cards/js.png" },
    { img: "images/cards/mochuelo.png" },
    { img: "images/cards/php.png" },
    { img: "images/cards/python.png" },
    { img: "images/cards/react.png" },
    { img: "images/cards/sass.png" }]

function mezclarCartas() {
    cards.sort(function () { return Math.random() - 0.5 })
}
mezclarCartas()



//CUENTA ATRÁS
window.onload = updateClock;

let totalTime = 45;

function updateClock() {
    document.querySelector(".tiempo").innerHTML = totalTime;
    if (totalTime == 0) {
        //alert('Final');
        document.querySelector("#modal_tiempo").classList.remove("ocultar")
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 9000);
    }
}

// CREAR CARTAS Y AÑADIRLAS AL DOM
function crearCartas(num) {
    for (i = 0; i < num; i++) {
        let carta = document.createElement("div")
        let img = carta.appendChild(document.createElement("img"))
        img.src = "img/cards/back.png"
        img.classList.add(i)
        img.classList.add("carta")
        carta.classList.add("pure-u-1-4")
        img.classList.add("pure-img")
        document.querySelector(".wrapper").appendChild(carta)

    }
}



crearCartas(12)

// PROGRAMAR EL CLICK DE LAS CARTAS

let turno = 0
let primeraCarta
let segundaCarta
let movimientos = 0
let vidas = 0

document.querySelector(".wrapper").onclick = (e) => {

    if (turno == 0) {
        let clase = e.target.classList[0]
        e.target.src = cards[clase].img
        primeraCarta = e.target
        turno++
    }
    else if (turno == 1) {
        let clase = e.target.classList[0]
        e.target.src = cards[clase].img
        segundaCarta = e.target

        if (primeraCarta.src == segundaCarta.src) {
            turno--
            movimientos++
            document.querySelector(".movimientos").innerHTML = movimientos
        }
        else {
            setTimeout(() => {
                primeraCarta.src = "img/cards/back.png"
                segundaCarta.src = "img/cards/back.png"
                turno--
                movimientos++
                document.querySelector(".movimientos").innerHTML = movimientos
                vidas++
                document.querySelector(`.star-${vidas}`).classList.add("ocultar")
                if (vidas == 7)
                    document.querySelector("#modal_perdedor").classList.remove("ocultar")
            }, 1000);
        }
    }
}

let cartas = document.querySelectorAll(".carta")
let src=[]

cartas.forEach(
    carta => {src.push(carta.src)
     if(src.indexOf("http://127.0.0.1:5501/img/cards/back.png")==-1){
        document.querySelector("#modal_ganador").classList.remove("ocultar") 
     }
    }
)
