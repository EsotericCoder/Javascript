// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// words.js
// Chapter 7
// Assignment 3
// 9/23/14

// This script defines a function for sorting words in a case-insenstive manner.

// Shortcut function:
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // End of $ function.

// Function for setting text of an element:
function setText(elementId, message) {
    'use strict';
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
        var output = $(elementId);
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    } // End of main IF.
} // End of setText() function.

// This function sorts a list of words.
// The function takes one argument, a string.
function sortWords(max) {
    'use strict';

    // Get the words:
    var words = $('words').value;
    
    // Convert the string to an array:
    words = words.split(' ');
    
    // Bullet 5 Array for sorting words
    var sorted = [];
    // Bullet 5 loop to lowercase all word in words
    for (var i = 0; i < words.length; i++) {
        sorted.push(words[i].toLowerCase());
    }
    // Sort the words:
    sorted.sort();
    
    // Send the output to the page:
    setText('output', sorted.join(', '));
        
    // Return false to prevent submission:
    return false;

} // End of sortWords() function.

function init() {
    'use strict';
    $('theForm').onsubmit = sortWords;
} // End of init() function.
window.onload = init;