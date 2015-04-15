//William Kim
//williamkim1@my.smccd.edu
//CIS114OL
//cookies.js
//Chapter 9
//Assignment #4
//10/17/2014

// Create one global object:
var COOKIE = {
    
    // Function for setting a cookie: Bullet 15 - add path and domain
    setCookie: function(name, value, expire, path, domain) {
        'use strict';

        // Add validation! Bullet 14
        if (name.value == "" || null){
            alert("Please enter name");
            return false;
        }

        if (value.value == "" || null){
            alert("Please enter a value");
            return false;
        }

        if (expire.value == "" || null){
            alert("Please enter a the expiration date");
            return false;
        }


        // Begin creating the value string:
        var str =  encodeURIComponent(name) + '=' + encodeURIComponent(value);
    
        // Add the expiration:
        str += ';expires=' + expire.toGMTString(); 

        // Add the path and domain : Bullet 15
        str += ';path =' + path + ";domain=" + domain;  
    
        // Create the cookie:
        document.cookie = str;

    }, // End of setCookie() function.
    
    // Function for retrieving a cookie value:
    getCookie: function(name) {
        'use strict';

        // Useful to know how long the cookie name is:
        var len = name.length;
        
        // Split the cookie value:
        var cookies = document.cookie.split(';');

        // Loop through the values:
        for (var i = 0, count = cookies.length; i < count; i++) {

            // Lop off an initial space:
            var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];

			// Decode the value:
			value = decodeURIComponent(value);

            // Check if this iteration matches the name:
            if (value.slice(0,len) == name) {

                // Return the part after the equals sign:
                return value.split('=')[1];

            } // End of IF.
            
        } // End of FOR loop.
            
        // Return false if nothing's been returned yet:
        return false;

    }, // End of getCookie() function.
    
    // Function for deleting cookies: Bullet 15: added path and domain
    deleteCookie: function(name, path, domain) {
        'use strict';

        var str2 = encodeURIComponent(name) + '=; path =' + path + '; domain =' + domain; 
        str2 += ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
         
        document.cookie = str2;
        
    } // End of deleteCookie() function.

}; // End of COOKIE declaration.