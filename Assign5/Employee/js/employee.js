//William Kim
//williamkim1@my.smccd.edu
//CIS254AA
//employee.js
//Chapter 14
//Assignment 5
// 10/30/2014


//Custom Employee Object
function Employee(firstName, lastName, department){
	this.firstName = firstName;
	this.lastName = lastName;
	this.department = department;
	this.hireDate = new Date();
	this.getName = function(){
		return this.firstName + ' ' + this.lastName;
	};
	this.toString = function(){
		return 'Name: ' + this.firstName + ' ' + this.lastName + 
			'\nDepartment: ' + this.department;
	};
}

//Custom Department Object
function Department(name){
	this.name = name;
	this.employees = [];
	this.addEmployee = function(emp){
		this.employees.push(emp);
		emp.department = this.name; 
	};
}


window.onload = function(){
	'use strict';

	//Creating department objects
	var it = new Department('IT'); 
	var customerService = new Department('Customer Service');
	var hr = new Department('Human Resources');

	//Creating 10 employee objects
	var e1 = new Employee('Jane', 'Doe', 'Customer Service');
	var e2 = new Employee('Alex', 'Shih', 'Customer Service');
	var e3 = new Employee('Donna', 'Johnson', 'Customer Service');
	var e4 = new Employee('Johnny', 'Appleseed', 'Human Resources');
	var e5 = new Employee('John', 'Smith', 'Human Resources');
	var e6 = new Employee('Joe', 'Park', 'Human Resources');
	var e7 = new Employee('Sue', 'Smith', 'IT');
	var e8 = new Employee('Reta', 'Kim', 'IT');
	var e9 = new Employee('Paul', 'Kareem', 'IT');
	var e10 = new Employee('William', 'Kim', 'IT');

	//Add employee to object
	customerService.addEmployee(e1);
	customerService.addEmployee(e2);
	customerService.addEmployee(e3);
	hr.addEmployee(e4);
	hr.addEmployee(e5);
	hr.addEmployee(e6);
	it.addEmployee(e7);
	it.addEmployee(e8);
	it.addEmployee(e9);
	it.addEmployee(e10);

	//Reference to output element
	var output = document.getElementById('output');

	var addMessage = " ";

	//Walk through arrays for each department and add to message

	for (var i = 0, count = customerService.employees.length; i < count; i++) {
	    addMessage += '<li>' + customerService.employees[i] + '</li>';
	}            

	for (var j = 0, count = hr.employees.length; j < count; j++) {
		addMessage += '<li>' + hr.employees[j] + '</li>';
	}

	for (var k = 0, count = it.employees.length; k < count; k++) {
		addMessage += '<li>' + it.employees[k] + '</li>';
	}

    //output html list
	output.innerHTML = addMessage; 

};







