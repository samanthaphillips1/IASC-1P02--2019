//
var start = new Date();

function stopTime(){
	
	var stop = new Date();
	
	var currentTime = start.getTime();
	var stoppedTime = stop.getTime();

	var passedTime = stoppedTime - currentTime;
	var passedSeconds = passedTime / 600;

	var timeOnSite = alert("You have been on the page for " + passedSeconds + " seconds.");
	console.log(timeOnSite);
}	
 