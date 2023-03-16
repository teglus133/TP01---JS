var inputNotaMate = document.getElementById("notaMate");

var inputNotaLengua = document.getElementById("notaLengua");

var inputNotaEFSI = document.getElementById("notaEFSI");

var boletin = document.getElementById("boletin");

var buttonProm = document.getElementById("boton");

var buttonMax = document.getElementById("boton2");

var tituloMatematica = document.getElementById("matematica");

var tituloLengua = document.getElementById("lengua");

var tituloEFSI = document.getElementById("efsi");


var i = 0;

inputNotaMate.onkeyup = ValidarNota;
inputNotaLengua.onkeyup = ValidarNota;
inputNotaEFSI.onkeyup = ValidarNota;

function ValidarNota(event) {
    if (event.target.value == "") {
        alert("ERROR, tiene que completar todos los campos");
    } else {
        if (event.target.value > 0 && event.target.value < 11) {
            event.target.style.color = "green";
        } else {
            event.target.style.color = "red";
        }  
    }
}
buttonProm.onclick = function() {
    var promedio = calcularPromedio();
    if (promedio > 0 && promedio < 11) {
        boletin.innerHTML = "El promedio es " + promedio;
    }
    else {
        boletin.innerHTML = "Escriba los numeros dentro del rango permitido."
    }
    if (promedio >= 6) {
        boletin.style.color = "green"
    }
    else {
        boletin.style.color = "red"

    }
}
buttonMax.onclick = function() {
    var notaMax = calcularNotaMax();
    if (notaMax > 0 && notaMax < 11) {
        var texto = "La nota maxima es ";
        if (notaMax == inputNotaMate.value) {
            texto +=  "-Matematica ";
            tituloMatematica.style.color = "blue";
            
        }
        if (notaMax == inputNotaLengua.value) {
            texto +=  "- Lengua  ";
            tituloLengua.style.color = "blue";

        }
        if (notaMax == inputNotaEFSI.value) {
            tituloEFSI.style.color = "blue";
            texto +=  "- Efsi  ";
            
        }
        boletin.innerHTML = texto;
    }
    else {
        boletin.innerHTML = "Escriba los numeros dentro del rango permitido."
    }
}

function calcularPromedio() {
    return (parseInt(inputNotaMate.value) + parseInt(inputNotaLengua.value) + parseInt(inputNotaEFSI.value)) / 3;
}

function calcularNotaMax() {
    return Math.max(parseInt(inputNotaMate.value), parseInt(inputNotaLengua.value), parseInt(inputNotaEFSI.value));
}


