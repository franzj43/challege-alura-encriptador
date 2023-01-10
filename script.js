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
    var encriptado = "";
    for(var i = 0; i<input.value.length; i++){

        var indice = vocales.indexOf(input.value[i]);
        if(indice >= 0){
            encriptado = encriptado + llaves[indice];
        } else {
            encriptado = encriptado + input.value[i];
        }

    }

    document.getElementById('respuesta').innerHTML = encriptado;

}

function desencriptar(){

    document.getElementById('respuesta').style.display = "block";
    document.getElementById('copiar').style.display = "block";
    document.getElementById('imagen').style.display = "none";
    document.getElementById('labels').style.display = "none";
    var desencriptado = "";
    var subcadena = "";
    var incluye = false;

    for(var i = 0; i < input.value.length; i++){

        subcadena = subcadena + input.value[i];

        for(var x = 0; x < llaves.length; x++){
            
            if(llaves[x] == subcadena){

                desencriptado = desencriptado + vocales[x];
                subcadena = "";
                incluye = false;
                break;

            }
            
            
            for(var y = 0; y < llaves[x].length; y++){

                if(y >= subcadena.length){

                    break;

                } else {

                    if(llaves[x][y] == subcadena[y]){

                        incluye = true;

                    }

                }

            }

        }

        if(!incluye){

            desencriptado = desencriptado + subcadena;
            subcadena = "";

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


