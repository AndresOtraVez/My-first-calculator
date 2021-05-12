//Ejercicio1
var suma = function(numero1, numero2) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
   
    var resultado = numero1 + numero2;
    return resultado;
}

var resta = function(numero3, numero4) {
    var numero3 = document.getElementById("numero3").value;
    var numero4 = document.getElementById("numero4").value;

    var resultado = numero3 - numero4;
    return resultado; 
}

var multiplicacion = function(numero5, numero6) {
    var numero5 = document.getElementById("numero5").value;
    var numero6 = document.getElementById("numero6").value;

    var resultado = numero5 * numero6;
    return resultado;
}

var division = function(numero7, numero8) {
    var numero7 = document.getElementById("numero7").value;
    var numero8 = document.getElementById("numero8").value;

    var resultado = numero7 / numero8;
    return resultado;
}

