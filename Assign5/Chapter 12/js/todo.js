// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// todo.js
// Chapter 12
// Assignment 5
// 10/30/14



// This script manages a to-do list.
// This function does all the work.
// It is immediately-invoked.
(function(){
    
	// Variable that stores the tasks:
    var tasks = []; 

	// Function called when add button clicked.
	// Function adds a task to the global array.
    function addTask() {
        'use strict';
        var task = document.getElementById('task');
        var output = document.getElementById('output');
        var addMessage = '';

        if (task.value) {
            tasks.push(task.value);
            addMessage = '<h2>To-Do</h2><ol>';
            for (var i = 0, count = tasks.length; i < count; i++) {
                addMessage += '<li>' + tasks[i] + '</li>';
            }
            addMessage += '</ol>';
            output.innerHTML = addMessage;        
        } // End of task.value IF.

	    // Return false to prevent submission:
        return false;

    } // End of addTask() function.

    // Function called when delete button clicked.
    //function deletes a tasks from the global array.
    function deleteTask(){
        'use strict';
        //Prompt user
        var input = prompt("what task do you want to delete?");
        //Convert to integer
        var delTask = parseInt(input);

        var delMessage = ' ';
        //Bullet 1: try and catch to log invalid inputs.
        try {
            //Validates that user input was number and is range of to do list
            if ((typeof delTask == 'number') && (delTask <= tasks.length)){
                if (delTask > 1){
                    //removes element from array
                    var oneDown = parseInt(delTask - 1);
                    tasks.splice(oneDown, 1);
                }else{
                    tasks.splice(0,1);
                } 
        
                delMessage = '<h2>To-Do</h2><ol>';
                for (var i = 0, count = tasks.length; i < count; i++) {
                    delMessage += '<li>' + tasks[i] + '</li>';
                }
                delMessage += '</ol>';
                output.innerHTML = delMessage; 
            } else {
                throw Error('Invalid Selection.');
            }    
        }catch(ex){
            console.log(ex);
        }

        //Return false to prevent submission:
        return false;
        
    }

    // Initial setup:
    function init() {
        'use strict';
        document.getElementById('add').onclick = addTask;
        document.getElementById('delete').onclick = deleteTask;
    } // End of init() function.
    window.onload = init;

})();