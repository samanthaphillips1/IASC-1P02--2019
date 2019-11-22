function add() {
var output = parseInt(document.getElementById("number1").value) + parseInt(document.getElementById("number2").value);

document.getElementById("output").innerHTML = output;
event.preventDefault();
}

function subtract() {
var output = parseInt(document.getElementById("number1").value) - parseInt(document.getElementById("number2").value);

document.getElementById("output").innerHTML = output;
event.preventDefault();
}

function divide() {
var output = parseInt(document.getElementById("number1").value) / parseInt(document.getElementById("number2").value);

document.getElementById("output").innerHTML = output;
event.preventDefault();
}

function multiply() {
var output = parseInt(document.getElementById("number1").value) *  parseInt(document.getElementById("number2").value);

document.getElementById("output").innerHTML = output;
event.preventDefault();
}
