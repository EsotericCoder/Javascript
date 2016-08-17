//When page if ready
$(document).ready(function(){
  //When translate button is clicked
  $('#translate').click(function(){
    //Reference
    var input = document.getElementById('input').value;
    var splitInput = input.split(" ");
    var newInput = splitInput.join("+");
    //build url for translating
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key={keyGoesHere}&lang=en-ru&text=" +
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