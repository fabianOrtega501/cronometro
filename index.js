let tablero     = document.getElementById("tablero");
let boton_play  = document.getElementById("boton_play");
let boton_pause = document.getElementById("boton_pause");
let boton_reset = document.getElementById("boton_reset");

//Estados cronometro
let esta_activo = false
let time = {
    decimas     :0,
    segundos    :0,
    minutos     :0
}

//función actualizar
function formato(numero){
    if(numero < 10){
        return "0" + numero;
    }
    else{
        return numero;
    }
}

function actualizar(){
    time.decimas++;

    if(time.decimas == 10){
        time.decimas = 0;
        time.segundos++;
    }

    if(time.segundos == 60){
        time.segundos = 0;
        time.minutos++;
    }

    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}`

    if(esta_activo == true){
        setTimeout(actualizar,100)
    }
}

function play(){
    if(esta_activo == false){
        esta_activo = true;
        tablero.parentElement.style.backgroundColor = "rgb(25, 135, 84)";
        actualizar();
    }
}

function pause(){
    esta_activo = false;
    tablero.parentElement.style.backgroundColor = "rgb(13, 110, 253)";
}

function reset(){
    time.decimas    = 0;
    time.segundos   = 0;
    time.minutos    = 0;
    tablero.parentElement.style.backgroundColor = "rgb(220, 53, 69)";
    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}`
}

boton_play.addEventListener('click', play);
boton_pause.addEventListener('click', pause);
boton_reset.addEventListener('click', reset);