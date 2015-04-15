// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// box.js
// Chapter 12
// Assignment 5
// 10/30/14

function calculate(){
	'use strict';
	var volume;
	var length = document.getElementById('length').value;
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;
	//Bullet 4: try and catch in order to use assert function that throws
	//error message when any of the dimensions is not greater than zero.
	try{

		length = Math.abs(length); //absolute value for length
		assert((length > 0),'Length not greater than zero.');
		width = Math.abs(width); //absolute value for width
		assert((width > 0),'Width not greater than zero.');
		height = Math.abs(height); //absolute value for height
		assert((height > 0),'Height not greater than zero.');

	}catch(ex){
		console.log(ex);
	}
	
	volume = length * width * height; 
	volume = volume.toFixed(4); //4 decimal places
	document.getElementById('volume').value = volume;
	return false;

} //End of calculate() function.

//Bullet 4: Created assert function
function assert(expression, message){

	if (!expression) throw {name: 'Assertion Exception', message: message}
	
}

function init(){
	'use strict';
	var calcForm = document.getElementById('calcForm');
	calcForm.onsubmit = calculate;

} //End of init() function.

window.onload = init; 	