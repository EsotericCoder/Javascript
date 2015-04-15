//William Kim
//williamkim1@my.smccd.edu
//CIS254AA
//employee.js
//Chapter 14
//Assignment 5
// 10/30/2014

//Custom Employee Object Bullet 1
function Employee(firstName, lastName, department){
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.hireDate = new Date();
    this.getName = function(){
        return this.firstName + ' ' + this.lastName;
    };
    this.toString = function(){
        return 'Name: ' + this.firstName + ' ' + this.lastName + 
            '\nDepartment: ' + this.department;
    };
}

function process() {
    'use strict';

    // Get form references:
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;

    // Reference to where the output goes:
    var output = document.getElementById('output');

    //Create new instance of Employee Object: Bullet 1
    var employee = new Employee(firstName, lastName, department);
    
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
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;