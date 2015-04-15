// William Kim
// williamkim1@my.smccd.edu
// CIS114OL
// quotes.js
// Chapter 8
// Midterm1
// 10/5/14



// This script manages a Quotes list.
// This function does all the work.
// It is immediately-invoked.
(function(){
    
	// Variable that stores the quotes:
    var quotes = []; 
    var output = document.getElementById('output');

	// Function called when add button clicked.
	// Function adds a Quote to the global array.
    function addQuote() {
        'use strict';
        var quote = document.getElementById('quote');
        var addMessage = '';

        if (quote.value) {
            quotes.push(quote.value);
            addMessage = '<h2>Quotes</h2><ol>';
            for (var i = 0, count = quotes.length; i < count; i++) {
                addMessage += '<li>' + quotes[i] + '</li>';
            }
            addMessage += '</ol>';
            output.innerHTML = addMessage;        
        } // End of quote.value IF.

	    // Return false to prevent submission:
        return false;

    } // End of addQuote() function.

    // Function called when delete button clicked.
    //function deletes a quote from the global array.
    function deleteQuote(){
        'use strict';
        //Prompt user
        var input = prompt("what quote do you want to delete?");
        //Convert to integer
        var delQuote = parseInt(input);
        var delMessage = ' ';

        //Validates that user input was number and is range of to do list
        if ((typeof delQuote == 'number') && (delQuote <= quotes.length)){
            if (delQuote > 1){
                //removes element from array
                var oneDown = parseInt(delQuote - 1);
                quotes.splice(oneDown, 1);
            }else{
                quotes.splice(0,1);
            } 
            //Output new quotes
            delMessage = '<h2>Quotes</h2><ol>';
            for (var i = 0, count = quotes.length; i < count; i++) {
                delMessage += '<li>' + quotes[i] + '</li>';
            }
            delMessage += '</ol>';
            output.innerHTML = delMessage; 
        }
        //Return false to prevent submission:
        return false;
    }

    // Fuction called when modify button clicked.
    // function modifies a quote from the global array.
    function modifyQuote(){
        'use strict'
        var modifyMessage;
        //prompt user
        var inputModify = prompt("what quote do you want to modify?");
        //convert to integer and account for array.
        var modifyQuoteNum = (parseInt(inputModify) - 1);
        //Validates that user input was number and is range of to do list
        while ((typeof modifyQuoteNum != 'number') || 
            ((modifyQuoteNum + 1) > quotes.length)){
            
            var inputModify = prompt("what quote do you want to modify?");
            var modifyQuoteNum = (parseInt(inputModify) - 1);

        }

        //prompt user
        var modifyQuoteText = prompt("Please modify the text:");
        //replace array element with new text
        quotes[modifyQuoteNum] = modifyQuoteText;
        //Output new quotes
        modifyMessage = '<h2>Quotes</h2><ol>';
            for (var i = 0, count = quotes.length; i < count; i++) {
                modifyMessage += '<li>' + quotes[i] + '</li>';
            }
            modifyMessage += '</ol>';
            output.innerHTML = modifyMessage;
        //return false to prevent submission    
        return false;


    }

    // Initial setup:
    function init() {
        'use strict';
        //Adds 3 quotes to global array on load
        var startMessage = ' ';

        quotes.push("Get your facts first then, you can distort \
            them as you please. - Mark Twain");
        quotes.push("Always remember that you are absolutely unique. \
            Just like everyone else. - Margaret Mead");
        quotes.push("Do not take life too seriously. You will never \
            get out of it alive. - Elbert Hubbard");
        //Output quotes
        startMessage = '<h2>Quotes</h2><ol>';
            for (var i = 0, count = quotes.length; i < count; i++) {
                startMessage += '<li>' + quotes[i] + '</li>';
            }
            startMessage += '</ol>';
            output.innerHTML = startMessage; 
        document.getElementById('add').onclick = addQuote;
        //added a modify button event listener
        document.getElementById('modify').onclick = modifyQuote;
        document.getElementById('delete').onclick = deleteQuote;
    } // End of init() function.

    window.onload = init;

})();