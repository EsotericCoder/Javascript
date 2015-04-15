// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// epoch.js
// Chapter 8
// Midterm 1
// 10/5/2014

// Call this function when the page has loaded
// and when mouseovers occur:
function updateDuration() {
    'use strict';

    // Get now:
    var now = new Date();

    // Create the message: Updated to seconds.
    var message = 'It has been ' + Math.floor(now.getTime()/1000);
    message += ' seconds since the epoch.';

    // Update the page:
    U.setText('output', message);
    
} // End of updateDuration() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    
    // Create the event listener: Pursue 3, get ID and on click.
    U.addEvent(U.$('button'), 'click', updateDuration);
    
    // Call the function now:
    updateDuration();
    
};