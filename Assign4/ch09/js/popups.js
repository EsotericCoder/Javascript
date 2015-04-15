//William Kim
//williamkim1@my.smccd.edu
//CIS114OL
//popups.js
//Chapter 9
//Assignment #4
//10/17/2014



// Function called when the link is clicked.
function createPopup(e) {
    'use strict';
    
    // Get the event object:
    if (typeof e == 'undefined') var e = window.event;

    // Get the event target: Bullet 9: for class
    var popupClass = e.class || e.srcElement;

    // Bullet 9: create a string to open up the correct HTML file.
    var link = "popup" + popupClass.id + ".html";

    // Create the window:
    var popup = window.open(link, 'PopUp');
    
    // Give the window focus if it's open:
    if ( (popup !== null) && !popup.closed) {
        popup.focus();
        return false; // Prevent the default behavior.
    } else { // Allow the default behavior.
        return true;
    }
    
} // End of createPopup() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    // Add the click handler to each link:
    for (var i = 0, count = document.links.length; i < count; i++) {
        // IF statement to trigger specific class value : Bullet 9
        if (document.links[i].className == "okPop"){

            if (document.getElementsByClassName('okPop').value){

                popupLinks[i].onclick = createPopup;

            }else{

                document.links[i].onclick = createPopup;
            } //close else
        } // close if statement
    } // End of for loop.

}; // End of onload function.