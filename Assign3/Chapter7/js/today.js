// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// today.js
// Chapter 7
// Assignment 3
// 9/23/14


// today.js #2
// This script indicates the current date and time.

// This function is used to update the text of an HTML element.
// The function takes two arguments: the element's ID and the text message.
function setText(elementId, message) {
    'use strict';
    
    if ( (typeof elementId == 'string')
    //Bullet 2 - message can also be a number.    
    && (typeof message == 'string' || typeof message == 'number')
    //Bullet 1 - neither argument can be an empty string
    && ( elementId !== ' ' ) && (message !== ' ' )
    //Bullet 3 - validates that the destination element was found.
    && ( typeof elementId != 'undefined')) {
    
        // Get a reference to the paragraph:
        var output = document.getElementById(elementId);
    
        // Update the innerText or textContent property of the paragraph:
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    
    } // End of main IF.

} // End of setText() function.

// Call this function when the page has loaded:
function init() {
    'use strict';
    var today = new Date();
    var message = 'Right now it is ' + today.toLocaleDateString();
    message += ' at ' + today.getHours() + ':' + today.getMinutes();

    // Update the page:
    setText('output', message);
    
} // End of init() function.
window.onload = init;