//william kim
//williamkim1@my.smccd.edu
//CIS114
//mustache.js
//Assign 7
//12/2/2014

$(document).ready(function(){
	$.getJSON("resources/departments.json", function(data){
		var tpl = "{{#depts}}<h1>{{name}}</h1>" +
        	"<ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
		var partials = {employee: "<li><img src={{image}}></img> {{firstName}} {{lastName}}, {{title}}</li>"};
		var html = Mustache.to_html(tpl, data, partials);
		$('#employees').html(html);
	});
});
