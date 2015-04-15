// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// auction.js
// Chapter 6
// Assignment 3
// 9/23/14

// This script validates two dates and calculates the number of days between them.
// Function called when the form is submitted.
// Function processes the dates and returns false.
function process() {
    'use strict';

    // Get a reference to the form elements:

    // Get a reference to the paragraph:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';
    var intervalD = '';
    var intervalH = '';
    var intervalM = '';
    var intervalS = '';
    var day = 1000 * 60 * 60 *24;

    // Initialize and set variables.
    var startDate = new Date();
    startDate.toTimeString();
    var endDate = new Date('4 Oct 2014 12:30:00 UTC');
    endDate.toTimeString();
    var startHour = startDate.getHours();
    var startMin = startDate.getMinutes();
    var startSec = startDate.getSeconds();
    var endHour = endDate.getHours();
    var endMin = endDate.getMinutes();
    var endSec = endDate.getSeconds();
    

    // Make sure the start date comes first:
    if (startDate < endDate) {
            
        // Get the interval:
        var diffDay = endDate - startDate;
        

        if (endHour >= startHour){ // Make sure its counting down
            var diffHour = Math.abs(endHour - startHour); 
        } else { //Since start hour is greater, we now have to count down from 60.
            var diffHour = ((endHour - startHour) + 24);
        }
        

        if (endMin >= startMin){
            var diffMin = Math.abs(endMin - startMin);
        } else {
            var diffMin = ((endMin - startMin) + 60);
        }
        
        if (endSec >= startSec){
            var diffSec = Math.abs(endSec - startSec);
        } else {
            var diffSec = ((endSec - startSec) + 60);
        }

        // Determine interval
        if (diffDay <= day) {
            intervalD = '1 day ';
        } else {
            intervalD = Math.round(diffDay/day) + ' days ';
        }

        intervalH = diffHour + ' hours ';
        intervalM = diffMin + ' minutes ';
        intervalS = diffSec + ' seconds ';
    

        // Build the message:
        message += 'Auction ends on ' + endDate.toLocaleDateString();
        message += ', Timeleft : ' + intervalD + intervalH + intervalM;
        message += intervalS + '.';
            
    } else { // The start date doesn't come first!
        message = 'Auction Ended!';
    }
    
    
    // Update the paragraph:
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
        
    // Return false to prevent submission:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;