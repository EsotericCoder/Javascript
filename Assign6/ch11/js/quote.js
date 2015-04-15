//William Kim
//williamkim1@my.smccd.edu
//CIS114
//quote.js
//Assignment6
//11/26/2014

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// Create the Ajax object:
	var ajax = getXMLHttpRequestObject();
	
	// Function to be called when the readyState changes:
	ajax.onreadystatechange = function() {

		// Check the readyState property:
		if (ajax.readyState == 4) {

			// Check the status code:
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {

				// Parse the response:
				var data = JSON.parse(ajax.responseText);
				

				// Update the page:
				for(var i = 0; i < data.length; i++){
					var output = document.getElementById('quote' + i);
					if (output.textContent !== undefined) {
				    	output.textContent = data[i].l;
					} else {
				    	output.innerText = data[i].l;
					}// End of nested if-else
				}// End of for.

			} // End of status IF.
			
		} // End of readyState IF.

	}; // End of onreadystatechange function.
	
	// Fetch the initial data:
	ajax.open('GET', 'resources/quote.json', true);
	ajax.send(null);
	
		
    
}; // End of onload anonymous function.