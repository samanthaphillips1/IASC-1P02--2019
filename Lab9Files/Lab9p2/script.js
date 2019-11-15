var age = prompt("What is your age?");

var todaysDate  = new Date();

document.getElementById("year").innerHTML = parseInt(todaysDate.getFullYear()) - parseInt(age)
