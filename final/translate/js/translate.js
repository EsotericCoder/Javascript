//William Kim
//williamkim1@my.scmccd.edu
//CIS114
//translate.html
//this program translate from english to korean
//Final
//12/18/2014

//When page if ready
$(document).ready(function(){
  //When translate button is clicked
  $('#translate').click(function(){
    //Reference
    var input = document.getElementById('input').value;
    var splitInput = input.split(" ");
    var newInput = splitInput.join("+");
    //build url for translating
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20141218T165023Z.2b6214a735bd8719.1f3ca026bcb6c2b2f5f1cb41931b46a6029b2650&lang=en-ru&text=" +
      newInput +"&callback=?";
    //Get JSON    
    $.getJSON(url, function(data){
      //build html to output
      var outputString = "<p>" + data.text + "</p>";
      //Send html to div
      $("div").html(outputString);
      
    });
  });
});