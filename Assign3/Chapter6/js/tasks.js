// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// tasks.js
// Chapter 6
// Assignment 3
// 9/23/14


// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';
    

    if (task.value) {
    
        // Add the item to the array:
        tasks[tasks.length] = task.value;

        var randomNum = tasks.length; //Bullet3 finds array length
        var randomTask = parseInt((Math.random() * randomNum), 10); // Bullet 3 gets random int
        var randomMsg = tasks[randomTask]; //Bullet 3 Use random int to get random task

        
        // Update the page:
        message = 'You have ' + tasks.length + ' task(s) in your to-do list.\n';
        message += 'Random Task: ' + randomMsg; //Bullet 3 Display random task
		
        if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
		    output.innerText = message;
		}

        
        document.getElementById('task').value = ' '; //Bullet 4 Clears task

        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;