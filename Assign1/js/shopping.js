
//fuction called when user clicks submit
function calculate(){ 
	'use strict';

	var total; //Declaring total
	var shipping = 5.99; //Declaring and setting USPS flatrate shipping price.
	//These variables are assigned references to the form element
	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;
	total = quantity * price; //calc initial total

	tax /= 100; //multiply by 100 convert from % to decimal.
	tax++; //add 1 to tax inorder to find total.
	total *= tax; //Calculate new total with taxes
	total += shipping; //Add Shipping
	total -= discount; //Sub any discount
	total = total.toFixed(2); //formats to only show 2 decimal places

	document.getElementById('total').value = total;
	return false; //prevent form from actually being submitted.


} // End of calculate() function.

function  init(){
	'use strict';
	var theForm = document.getElementById('theForm');
	theForm.onsubmit = calculate;
} // End of init() function.

window.onload = init; //trigger to call init function.

