/*
Rene Jerez
CIS 114
translate.js
final
date: December 19 2014
*/



$( document ).ready(function() {

   $('#translate').click(function(){

       var data = $("englishText").val(); // I dont think this gets the internal value. Also I changed your html
       //so that it is an input box, I am not sure text area. Use alerts to see if your data is being pulled. 
       data = data.split(' ').join('+'); // Maybe seperate these? Might work, not sure.
       alert(data);
       var url = "https:https://translate.yandex.net/api/v1.5/tr.json/translate?" +
       "key=trnsl.1.1.20141220T013703Z.677e490cf8778c61.c38a04deb85eb8a4befacc21f5cc9b12b1011f1b" +
       "&lang=en- ru&text=" + data + "&callback=?";
       alert(url);
       $.getJSON(url, function(result){
       		alert(result.text);
          var resultHTML = "<p>" + result.text + "</p>";
            $("frenchText").html(resultHTML);
       });
   });


});

/*
This is my key 

trnsl.1.1.20141220T013703Z.677e490cf8778c61.c38a04deb85eb8a4befacc21f5cc9b12b1011f1b


