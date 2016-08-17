define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        employees = [
                {"id": 1, "firstName": "Ryan", "lastName": "Howard", "managerId": 0, managerName: "", "reports": 1, "title": "Vice President, North East", "department": "Management", "cellPhone": "212-999-8888", "officePhone": "212-999-8887", "email": "ryan@dundermifflin.com", "city": "New York, NY", "pic": "ryan_howard.jpg", "twitterId": "@ryanhoward", "blog": "http://howard.org"},
                {"id": 2, "firstName": "Michael", "lastName": "Scott", "managerId": 1, managerName: "Ryan Howard", "reports": 9, "title": "Regional Manager", "department": "Management", "cellPhone": "570-865-2536", "officePhone": "570-123-4567", "email": "michael@dundermifflin.com", "city": "Scranton, PA", "pic": "michael_scott.jpg", "twitterId": "@michaelscott", "blog": "http://scott.org"},
                {"id": 3, "firstName": "Dwight", "lastName": "Schrute", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Assistant Regional Manager", "department": "Management", "cellPhone": "570-023-3211", "officePhone": "570-635-1122", "email": "dwight@dundermifflin.com", "city": "Scranton, PA", "pic": "dwight_schrute.jpg", "twitterId": "@dwightschrute", "blog": "http://schrute.org"},
                {"id": 4, "firstName": "Jim", "lastName": "Halpert", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Assistant Regional Manager", "department": "Management", "cellPhone": "570-255-8989", "officePhone": "570-968-5741", "email": "jim@dundermifflin.com", "city": "Scranton, PA", "pic": "jim_halpert.jpg", "twitterId": "@jimhalpert", "blog": "http://halpert.org"},
                {"id": 5, "firstName": "Angela", "lastName": "Martin", "managerId": 2, managerName: "Michael Scott", "reports": 2, "title": "Senior Accountant", "department": "Accounting", "cellPhone": "570-555-9696", "officePhone": "570-999-3232", "email": "angela@dundermifflin.com", "city": "Scranton, PA", "pic": "angela_martin.jpg", "twitterId": "@angelamartin", "blog": "http://martin.org"},
                {"id": 6, "firstName": "Oscar", "lastName": "Martinez", "managerId": 5, managerName: "Angela Martin", "reports": 0, "title": "Accountant", "department": "Accounting", "cellPhone": "570-321-9999", "officePhone": "570-585-3333", "email": "oscar@dundermifflin.com", "city": "Scranton, PA", "pic": "oscar_martinez.jpg", "twitterId": "@oscarmartinez", "blog": "http://martinez.org"},
                {"id": 7, "firstName": "Kevin", "lastName": "Malone", "managerId": 5, managerName: "Angela Martin", "reports": 0, "title": "Accountant", "department": "Accounting", "cellPhone": "570-777-9696", "officePhone": "570-111-2525", "email": "kmalone@dundermifflin.com", "city": "Scranton, PA", "pic": "kevin_malone.jpg", "twitterId": "@kevinmalone", "blog": "http://malone.org"},
                {"id": 8, "firstName": "Andy", "lastName": "Bernard", "managerId": 2, managerName: "Michael Scott", "reports": 2, "title": "Sales Director", "department": "Sales", "cellPhone": "570-555-0000", "officePhone": "570-546-9999", "email": "andy@dundermifflin.com", "city": "Scranton, PA", "pic": "andy_bernard.jpg", "twitterId": "@andybernard", "blog": "http://bernard.org"},
                {"id": 9, "firstName": "Phyllis", "lastName": "Lapin", "managerId": 8, managerName: "Andy Bernard", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "570-141-3333", "officePhone": "570-888-6666", "email": "phyllis@dundermifflin.com", "city": "Scranton, PA", "pic": "phyllis_lapin.jpg", "twitterId": "@phyllislapin", "blog": "http://lapin.org"},
                {"id": 10, "firstName": "Stanley", "lastName": "Hudson", "managerId": 8, managerName: "Andy Bernard", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "570-700-6666", "officePhone": "570-777-6666", "email": "shudson@dundermifflin.com", "city": "Scranton, PA", "pic": "stanley_hudson.jpg", "twitterId": "@stanleyhudson", "blog": "http://hudson.org"},
                {"id": 11, "firstName": "Toby", "lastName": "Flenderson", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Human Resources", "department": "Human Resources", "cellPhone": "570-485-8554", "officePhone": "570-996-5577", "email": "tflenderson@dundermifflin.com", "city": "Scranton, PA", "pic": "toby_flenderson.jpg", "twitterId": "@tobyflenderson", "blog": "http://flenderson.org"},
                {"id": 12, "firstName": "Pamela", "lastName": "Beesly", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Receptionist", "department": "Support", "cellPhone": "570-999-5555", "officePhone": "570-999-7474", "email": "pam@dundermifflin.com", "city": "Scranton, PA", "pic": "pamela_beesly.jpg", "twitterId": "@pambeesly", "blog": "http://beesly.org"},
                {"id": 13, "firstName": "Kelly", "lastName": "Kapoor", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Customer Service Rep.", "department": "Support", "cellPhone": "570-123-9654", "officePhone": "570-125-3666", "email": "kelly@dundermifflin.com", "city": "Scranton, PA", "pic": "kelly_kapoor.jpg", "twitterId": "@kellykapor", "blog": "http://kapor.org"},
                {"id": 14, "firstName": "Creed", "lastName": "Bratton", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Quality Assurance", "department": "Support", "cellPhone": "570-222-6666", "officePhone": "570-333-8585", "email": "creed@dundermifflin.com", "city": "Scranton, PA", "pic": "creed_bratton.jpg", "twitterId": "@creedbratton", "blog": "http://bratton.org"},
                {"id": 15, "firstName": "Meredith", "lastName": "Palmer", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Supplier Relations", "department": "Support", "cellPhone": "570-555-8888", "officePhone": "570-777-2222", "email": "meredith@dundermifflin.com", "city": "Scranton, PA", "pic": "meredith_palmer.jpg", "twitterId": "@meredithpalmer", "blog": "http://palmer.org"},
                {"id": 16, "firstName": "William", "lastName": "Kim", "managerId": 2, managerName: "Michael Scott", "reports": 0, "title": "Assistant Regional Manager", "department": "Management", "cellPhone": "650-555-8989", "officePhone": "650-968-5741", "email": "will@dundermifflin.com", "city": "Scranton, PA", "pic": "william_kim.jpg", "twitterId": "@will", "blog": "http://will.org"}
        
        ],

        findById = function (id) {
            var deferred = $.Deferred(),
                employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred(),
                results = employees.filter(function (element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred(),
                results = employees.filter(function (element) {
                    return managerId === element.managerId;
                });
            deferred.resolve(results);
            return deferred.promise();
        },


        Employee = Backbone.Model.extend({

            initialize: function () {
                this.reports = new ReportsCollection();
                this.reports.parent = this;
            },

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        EmployeeCollection = Backbone.Collection.extend({

            model: Employee,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByName(options.data.name).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        ReportsCollection = Backbone.Collection.extend({

            model: Employee,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByManager(this.parent.id).done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

    return {
        Employee: Employee,
        EmployeeCollection: EmployeeCollection,
        ReportsCollection: ReportsCollection
    };

});