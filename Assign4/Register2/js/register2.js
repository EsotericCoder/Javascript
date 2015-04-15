//William Kim
//williamkim1@my.smccd.edu
//CIS114OL
//register2.js
//Chapter 10
//Assignment #4
//10/17/2014

function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var address = U.$('address');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');
	var password = U.$('password');
	var ccnum = U.$('ccnum');
	var exp = U.$('exp');

	//replace space and - in credit card;
	var cc = ccnum.value;
	cc = cc.replace(/\s/g, '');
	cc = cc.replace(/-/g, '');
	
	
	//get date to compare with expiration date
	var now = new Date();
	var month = now.getMonth();
	var year = now.getYear();
	var expStr = exp.value;
	var expDate = expStr.split("/");
	var expMonth = expDate[0];
	var expYear = expDate[1];
	month = month + 1;
	if (month < 10){
		month = "0" + month;
	}

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}

	// Validate the last name: Bullet 13
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}

	// Validate the address:
	if (/[A-Z \.\-']{2,20}$/i.test(address.value)) {
		removeErrorMessage('address');
	} else {
		addErrorMessage('address', 'Please enter your address.');
		error = true;
	}

	// Validate the city:
	if (/^[A-Z \.\-']{2,20}$/i.test(city.value)) {
		removeErrorMessage('city');
	} else {
		addErrorMessage('city', 'Please enter your city.');
		error = true;
	}
	
	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
	} else {
			addErrorMessage('zip', 'Please enter your zip code.');
		error = true;
	}
	
	//Validate the password:
	if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password.value)){
		removeErrorMessage('password');

	} else {
		addErrorMessage('password', 'Please enter a valid password.');
		error = true;
	}

	//Validate the credit card number:
	if (/^\d{16}$/.test(cc)) {
		removeErrorMessage('ccnum');
	} else {
		addErrorMessage('ccnum', 'Please enter a valid credit card number.');
		error = true;
	}

	//Validate the expiration date:
	if (/^\d{2}\/\d{4}$/.test(exp.value) && (expMonth >= month) && (expYear >= year)) {
		removeErrorMessage('exp');
	} else {
		addErrorMessage('exp', 'Please enter a valid expiration date.');
		error = true;
	}


    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.


// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
	U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips:
	U.enableTooltips('phone');
	U.enableTooltips('password');
	U.enableTooltips('ccnum');
	U.enableTooltips('exp');
    
};