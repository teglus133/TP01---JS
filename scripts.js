var idMate = document.getElementById("mate");
var idLengua = document.getElementById("lengua");
var idEfsi = document.getElementById("efsi");




function ValidarNota(event) {
    var numero = document.getElementById("nota").value;
    console.log(numero);
    if (numero > 0 && numero < 11) {
        document.getElementById("nota").style.color = "green";
    } else {
        document.getElementById("nota").style.color = "red";
    } 
    if (numero = " ") {
        alert("ERROR, tiene que completar todos los campos")
    }
}

