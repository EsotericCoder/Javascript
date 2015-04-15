//William Kim
//williamkim1@my.smccd.edu
//CIS 114 OL
//membership.js
//Assignment 2
//9/11/14


function calculate() {
    
    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = document.getElementById('type');
    var years = document.getElementById('years');
    var output = document.getElementById('output');
    
    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }
    
    // Check for valid data: 
   if (type && type.value && years && (years > 0) ) {
        
        // Determine the base cost:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        } // End of switch.
        
        if ( years < 2 ) {
            cost *= years; // 100%
        } else if (years < 4) {
            cost = ((cost * years) * .90); // 90%
        } else if (years < 5) {
            cost = ((cost * years) * .85); // 85%
        } else {
            cost = ((cost * years) * .80); // 80%
        }

        // Send total to reference
        if (output.textContent != undefined) {
            output.textContent = cost.toFixed(2);

        } else {
            output.innerText = cost.toFixed(2);
        } 
        
    } else { // Show an error:
        document.getElementById('cost').value = 'Please enter valid values.';
    }
    
    // Return false to prevent submission:
    return false;
    
} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;