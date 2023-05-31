const vocales = ['a', 'e', 'i', 'o', 'u'];
const llaves = ['ai', 'enter', 'imes', 'ober', 'ufat'];
var input = document.getElementById('encriptador');
document.getElementById('respuesta').style.display = "none";
document.getElementById('copiar').style.display = "none";

function encriptar(){

    document.getElementById('respuesta').style.display = "block";
    document.getElementById('copiar').style.display = "block";
    document.getElementById('imagen').style.display = "none";
    document.getElementById('labels').style.display = "none";

    var encriptado = input.value.toLowerCase().split('');

    for(var i = 0; i<encriptado.length; i++) {

        if(vocales.indexOf(encriptado[i]) !== -1) {
            encriptado[i] = llaves[vocales.indexOf(encriptado[i])];
        }

    }

    document.getElementById('respuesta').innerHTML = encriptado.join('');

}

function desencriptar(){

    document.getElementById('respuesta').style.display = "block";
    document.getElementById('copiar').style.display = "block";
    document.getElementById('imagen').style.display = "none";
    document.getElementById('labels').style.display = "none";
    var desencriptado = input.value;

    for(var i = 0; i<llaves.length; i++){

        if(desencriptado.includes(llaves[i])) {
            desencriptado = desencriptado.replaceAll(llaves[i], vocales[i])
        }

    }

    document.getElementById('respuesta').innerHTML = desencriptado;

}

function copiar(){

    const label = document.getElementById('respuesta');
    const labelText = label.textContent;
    navigator.clipboard.writeText(labelText);
    input.value = '';
    input.focus();

}

var button = document.getElementById('encriptar');
button.onclick = encriptar;

var button2 = document.getElementById('desencriptar');
button2.onclick = desencriptar;

var button3 = document.getElementById('copiar');
button3.onclick = copiar;


