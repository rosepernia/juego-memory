var btn_renunciar_tiempo =document.querySelector("#modal_btn_renunciar_tiempo")
var btn_renunciar_ganador =document.querySelector("#modal_btn_renunciar_ganador")
var btn_renunciar_perdedor =document.querySelector("#modal_btn_renunciar_perdedor")
var botonNuevapart1 =document.querySelector(".jugarMovimientos")
var botonNuevapart2 =document.querySelector(".jugarTiempo")
//var btn_renunciar_perdedor =document.querySelector("#modal_btn_renunciar_perdedor")


var modal_button=document.querySelector(".modal_button")


btn_renunciar_tiempo.onclick=()=>{
   console.log("holiii")
    window.location.href="inicio.html"
}

btn_renunciar_ganador.onclick=()=>{
    console.log("holiii")
    window.location.href="inicio.html"
}

btn_renunciar_perdedor.onclick=()=>{
    console.log("holiii")
    window.location.href="inicio.html"
}

botonNuevapart1.onclick=()=>{
    window.location.href="juego.html"
}

botonNuevapart2.onclick=()=>{
    window.location.href="juego.html"
}

/* document.querySelector(".nueva").onclick = () => {
    console.log("nueva partida") 
    vidas==0 
    turno==0 
    movimientos==0
    
}

  document.querySelector(".salir").onclick = () => {
    console.log("reinicio")
    window.location.src="inicio.html"

    } */