function calculate(){
	'use strict';
	var result;
	var principal = document.getElementById('principal').value;
	var interest = document.getElementById('interest').value;
	var years = document.getElementById('years').value;
	principal = Math.abs(principal); //absolute value for principal
	interest = Math.abs(interest); //absolute value for interest
	interest = interest/100; //convert % to decimal
	years = Math.abs(years); //absolute value for years
	result = principal * Math.pow((1 + interest), years); 
	result = result.toFixed(2); //2 decimal places
	document.getElementById('result').value = result;
	return false;

} //End of calculate() function.

function init(){
	'use strict';
	var calcForm = document.getElementById('calcForm');
	calcForm.onsubmit = calculate;

} //End of init() function.

window.onload = init; 	