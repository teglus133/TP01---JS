




function ValidarNota(id) {
    num = document.getElementById(id).value
    console.log(num)
    if (num == "") {
        alert("ERROR, tiene que completar todos los campos")
    } else {
        if (num > 0 && num < 11) {
            document.getElementById(id).style.color = "green";
        } else {
            document.getElementById(id).style.color = "red";
        }  
    }

}

