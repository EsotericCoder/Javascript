// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// employee.js
// Chapter 7
// Assignment 3
// 9/23/14

// This script creates an object using form data.

// Function called when the form is submitted.
// Function creates a new object.

//Bullet 7 - Using $ function
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // End of $ function.

//Bullet 7 - Setting Parameters.
function process(first, last, dept) {
    'use strict';

    // Get form references: Bullet 7
    var firstName = $(first).value;
    var lastName = $(last).value;
    var department = $(dept).value;
    // Reference to where the output goes: Bullet 7
    var output = $('output');

    // Create a new object:
    var employee = {
        firstName: firstName,
        lastName: lastName,
        department: department,
        getName: function() {
            return this.lastName + ', ' + this.firstName;
        },
        hireDate: new Date()
    }; // Don't forget the semicolon!
    
    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
    // Return false:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    //Bullet 7 - creating anonymous function to call process
    $('theForm').onsubmit = function(){
        process('firstName', 'lastName', 'department');
        return false;
    }
} // End of init() function.
window.onload = init;