//William Kim
//williamkim1@my.smccd.edu
//CIS 114 OL
//zodiac.js
//Assignment 2
//9/11/14


function findSign(){
    'use strict';
    //Declare all var and apply getElement
    var sign; 
    var image;
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var output = document.getElementById('output');

    //Makes sure year and year values are present.
    if (year && year.value){
        //Convert string to integer.
        year = parseInt(year.value);
        month = parseInt(month.value);
        //If the month is January then use previous years sign.
        if (month < 2) {
            year = (year - 1);
        }
        //Zodiac sign cycle every 12 years so use remainder
        //to find which sign.
        year = ((year - 1924) % 12);

    } else { // Show Error:
        document.getElementById('year').value = 
        'Please enter valid values.';
    }
    // Use switch to assign sign
    switch (year){
        case 0 :
            sign = "Rat";
            image = "images/rat.jpg";
            break;
        case 1:
            sign = "Ox";
            image = "images/ox.jpg";
            break;
        case 2:
            sign = "Tiger";
            image = "images/tiger.jpg";
            break;
        case 3:
            sign = "Rabbit";
            image = "images/rabbit.jpg";
            break;
        case 4 :
            sign = "Dragon";
            image = "images/dragon.jpg";
            break;
        case 5:
            sign = "Snake";
            image = "images/snake.jpg";
            break;
        case 6:
            sign = "Horse";
            image = "images/horse.jpg";
            break;
        case 7:
            sign = "Goat";
            image = "images/goat.jpg";
            break;
        case 8 :
            sign = "Monkey";
            image = "images/monkey.jpg";
            break;
        case 9:
            sign = "Rooster";
            image = "images/rooster.jpg";
            break;
        case 10:
            sign = "Dog";
            image = "images/dog.jpg";
            break;
        case 11:
            sign = "Boar";
            image = "images/boar.jpg";
            break;
        default:
            sign = "Error: Enter a valid year Ex 1995.";
            image = "images/zodiac.jpg";


    } // End Switch

    document.getElementById("zodiac").src = image; 

    //textContent and innerText to output
    if (output.textContent != undefined) {
        output.textContent = sign;

    } else {
        output.innerText = sign;
    }


    return false;
    
} // End of findSign() function

function init(){
    'use strict';
    document.getElementById('theForm').onsubmit = findSign;

} // End of init() function

window.onload = init;