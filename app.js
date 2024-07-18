let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');

        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
   let valorCaja = document.querySelector ('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   //Si el numero generado está incluido en la lista

   console.log (numeroGenerado);
   console.log (listaNumerosSorteados);
   if (listaNumerosSorteados.length == numeroMaximo) {

    print ('Ya se sortearon todos los numeros posibles');

    }

   if (listaNumerosSorteados.includes(numeroGenerado)) {
    
    return generarNumeroSecreto();

   }
   else {

    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;
   }
}

function CondicionesIniciales () {
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Digita un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensje de inicio
    CondicionesIniciales ();
    //Generar número aleatorio nuevamente
    //Reiniciar el número de intentos
    //Deshabilitar botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
CondicionesIniciales();

