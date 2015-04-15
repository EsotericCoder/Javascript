//William Kim
//williamkim1@my.smccd.edu
//CIS114OL
//os.js
//Chapter 10
//Assignment #4
//10/17/2014

//New update function that takes two arguments: Bullet 6
function update(id, opts){

	// Get references to the menus:
	var os = document.getElementById(id);
	var os2 = document.getElementById('os2');

	// Empty the second menu:
	while (os2.firstChild) {
		os2.removeChild(os2.firstChild);
	}

	// Update the menu:
	if (opts) {
		os2.disabled = false;
		
		// Add the options to the menu:
		for (var i = 0, count = opts.length; i < count; i++) {
			var opt = document.createElement('option');
			opt.text = opt.value = opts[i];
		    os2.appendChild(opt);
		}
		
	} else { // No selection!
        os2.disabled = true;
	}

}

function updateMenu() {
    'use strict';
    
    // Get references to the menus:
	var os = document.getElementById('os');
	var os2 = document.getElementById('os2');

	// For storing the options:
	var options = null;
       

    // Determine the options:
    if (os.value == 'Windows') {
		options = ['7 Home Basic', '7 Home Premium', '7 Professional', '7 Ultimate', 'Vista', 'XP'];
 	} else if (os.value == 'Mac OS X') {
		options = ['10.7 Lion', '10.6 Snow Leopard', '10.5 Leopard', '10.4 Tiger'];
    }

    os.onchange = update(os, options);

	

} // End of updateMenu() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    // Get the select menu:
	var os = document.getElementById('os');

	// Clear out the existing options:
	while (os.firstChild) {
		os.removeChild(os.firstChild);
	}
	
	// Add the new options:
	var options = ['Choose', 'Windows', 'Mac OS X'];
	for (var i = 0, count = options.length; i < count; i++) {
		var opt = document.createElement('option');
		opt.text = opt.value = options[i];
	    os.appendChild(opt);
	}
    
    // Add an event handler:
    os.onchange = updateMenu;
    
    // Create the other select menu:
	var os2 = document.createElement('select');
	os2.id = 'os2';
	os2.disabled = true;
	os.parentNode.appendChild(os2); 

};