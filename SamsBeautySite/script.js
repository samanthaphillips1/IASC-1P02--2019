var total = 0;
var weddingPrice = 300;
var promPrice = 100;
var birthdayPrice = 80;
var specialPrice = 60;
var hairPrice = 25;
var lashPrice = 75;
var tanningPrice = 215;
var browsPrice = 31;
var nailsPrice = 75;
var startTime = new Date();

function checkout(){

	//TIME ON SITE
	var stop = new Date();
	
	var currentTime = startTime.getTime();
	var stoppedTime = stop.getTime();

	var passedTime = stoppedTime - currentTime;
	var passedSeconds = passedTime / 600;

	//TOTAL AND TAX
	var tax = total *  .13;

	total = total + tax;


	alert("Your total today is : $" + total + ". You were browsing the site for " + passedSeconds + " seconds before you checked out.");
}	
 

function weddingAddToCart() {
	total += weddingPrice;
	alert("You have added the WEDDING package to your cart");
}

function promAddToCart() {
	total += promPrice;
	alert("You have added the PROM package to your cart");
}

function birthdayAddToCart() {
	total += birthdayPrice;
	alert("You have added the BIRTHDAY package to your cart");
}

function specialAddToCart() {
	total += specialPrice;
	alert("You have added the SPECIAL package to your cart");
}

function hairAddToCart() {
	total += hairPrice;
	alert("You have added the HAIR package to your cart");
}

function lashAddToCart() {
	total += lashPrice;
	alert("You have added the LASH package to your cart");
}

function tanningAddToCart() {
	total += tanningPrice;
	alert("You have added the TANNING package to your cart");
}

function browAddToCart() {
	total += browPrice;
	alert("You have added the BROWS package to your cart");
}

function nailsAddToCart() {
	total += nailsPrice;
	alert("You have added the NAILS package to your cart");
}