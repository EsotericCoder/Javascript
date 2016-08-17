// Establish functionality on window load:
window.onload = function() {
    'use strict';

    // Gets the cookie's value:
    var count = COOKIE.getCookie('count');
    // Store message
    var message = "";
    // Set the cookie:
    var expire = new Date(); // Today!
    expire.setDate(expire.getDate() + 7); // One week!
    // First visit and no count cookie is found
    if(!count) {
        COOKIE.setCookie('count', 1 , expire);
        message = "Welcome, this is your first visit.";
        //textContent and innerText
        if (text.textContent != undefined) {
            text.textContent = message;

        } else {
            text.innerText = message;
        }    

    // count cookie already exists and adds to counter
    }else{
        var newcount = parseInt(count) + 1;
        COOKIE.deleteCookie('count');
        COOKIE.setCookie('count', newcount, expire);
        message = "Welcome back, you have visited this site " + count + " times.";
        //textContent and innerText
        if (text.textContent != undefined) {
            text.textContent = message;
        } else {
            text.innerText = message;
        }
    }
    return false; // Prevent the default behavior.
}; // End of onload anonymous function.