//william kim
//williamkim1@my.smccd.edu
//CIS114
//stock.js
//Assign 7
//12/2/2014

//When page if ready
$(document).ready(function(){
	//When search button is clicked
	$('#search').click(function(){
		//Reference
		var symbol = document.getElementById('symbol').value;
		//build url for stock quote
		var url = "http://www.google.com/finance/info?infotype=infoquoteall&q=" + 
				symbol + "&format=json&callback=?";
		//Get JSON		
		$.getJSON(url, function(data){
			//reference to info
			var stockName = data[0].t;
			var current = data[0].l;
			var time = data[0].lt;
			var hi = data[0].hi;
			var lo = data[0].lo;
			var vo = data[0].vo;
			var company = data[0].name;
			//build html to output
			var outputString = "<li>Company: " + company + "</li>" +"<li>Stock Symbol: " + stockName + 
				"</li>" + "<li>Date : " + time+ "</li>" + "<li>Current: " + current + "</li>" + "<li>High: " + 
				hi + "</li>" + "<li>Low: " + lo + "</li>" + "<li>Volume: " + vo + "</li>";

			//Send html to div
			$("div").html(outputString);
			
		});
	});
});
