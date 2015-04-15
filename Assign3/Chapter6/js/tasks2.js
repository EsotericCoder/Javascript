// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// tasks2.js
// Chapter 6
// Assignment 3
// 9/23/2014

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
    var message = []; //Bullet 6 - Create array to push

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message.push('<h2>To-Do</h2><ol>'); // Bullet 6 Push into array
        for (var i = 0, count = tasks.length; i < count; i++) {
            message.push('<li>' + tasks[i] + '</li>'); // Bullet 6 Push into array
        }
        message.push('</ol>');// Bullet 6 Push into array
        output.innerHTML = message.join(' ');//Bullet 6 Join array.
        
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