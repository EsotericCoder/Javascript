//William Kim
//williamkim1@my.smccd.edu
//CIS254AA
//tasks.js
//Chapter 14
//Assignment 5
// 10/30/2014


function Task(name, priority) {
    'use strict';
	
	// Assign the paremeters to variables:
	this.name = name;
	this.priority = priority;

	// Set the completion to false (i.e., not completed).
	this.completed = false;
	
	// Define a toString() method:
	this.toString = function() {
		return this.name + ' (' + this.priority + ')';
	};
	
} // End of Task function.



// Function that sets up the work:
window.onload = function(){
    'use strict';

	// Form references:
	var task = document.getElementById('task');
	var priority = document.getElementById('priority');
	var output = document.getElementById('output');

	// Variable that stores the tasks:
	var tasks = []; 
	//Create new date object bullet 7
	var date = new Date();
	//Create a getMonthName method to the date object. Bullet 7
	Date.prototype.getMonthName = function(){
		var monthNames = ["January", "February", "March", "April", "May", "June",
    		"July", "August", "September", "October", "November", "December" ];

		return monthNames[date.getMonth()];
	};

	// Function called when the form is submitted.
	// Function adds a task to the array.
	document.getElementById('theForm').onsubmit = function() {
		
		// Create a new Task:
		var t = new Task(task.value, priority.value);

		// Add it to the array:
		tasks.push(t);
		
		// Update the output: Bullet 4
		//Create string message to output as innerHTML
        var msg = 'There are now <b>' + tasks.length + 
        	'</b> item(s) in the to-do list. Just added:<br>' + t.toString(); 
        //Loop through list to display as list: Bullet 4
        for (var i = 0, count = tasks.length; i < count; i++){
       		msg += '<li>' + tasks[i] + '</li>';
       	}
		
        output.innerHTML = msg;

        //Bullet 3: clears task form value after task has been added.
        document.getElementById('task').value = " ";      

	    // Return false to prevent submission:
        return false;

	}; // End of onsubmit anonymous function.

}; // End of onload anonymous function.