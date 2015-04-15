function calculate(){
	'use strict';
	var volume;
	var length = document.getElementById('length').value;
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;
	length = Math.abs(length); //absolute value for length
	width = Math.abs(width); //absolute value for width
	height = Math.abs(height); //absolute value for height
	volume = length * width * height; 
	volume = volume.toFixed(4); //4 decimal places
	document.getElementById('volume').value = volume;
	return false;

} //End of calculate() function.

function init(){
	'use strict';
	var calcForm = document.getElementById('calcForm');
	calcForm.onsubmit = calculate;

} //End of init() function.

window.onload = init; 	