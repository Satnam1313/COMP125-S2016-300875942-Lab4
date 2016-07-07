
/**
 * FileName: app.js
 * 
 * @author Satnam Singh
 * @date June 22, 2016
 * 
 * StudentID: 300875942
 * github:- https://github.com/Satnam1313/COMP125-S2016-300875942-Lab4
 * website:http://comp125-s2016-300875942-lab4.azurewebsites.net/
 * @description This file is the main javascript file for the web site
 */

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
    "use strict";



    // create a reference to the form
    var login = document.getElementById("Login");


    if (Login) {
        // event listener with inline anonymous event handler function
        login.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("submitted");
            LogIn();
            login.reset();
        });
    }
    // form Class +++++++++++++++++++++++++++++++
    var form = (function () {
        // Constructor ++++++++++++++++++++++++++++
        function form(name, password) {
            this.name = name;
            this.password = password;
        }
        var checked=document.getElementById("showhide");

        checked.addEventListener("click",toggle_password);
        function toggle_password() {
            
            if (checked) {
                document.getElementById('Password').type = "text";
                checked=false;
            }
            else {
                document.getElementById('Password').type = "password";
                checked=true;
            }
        }

        
        /*   var person = {
           name: "",
           age: "",
           info: function () {
               console.log("User ID: "+ this.name );
                console.log("Password: "+ this.password );
           }
       }*/

        // METHODS ++++++++++++++++++++++++++++++++
        form.prototype.info = function () {
            console.log("User ID: " + this.name);
            console.log("Password: " + this.password);
        }

        return form;
    } ());

    function LogIn() {
        var input = new form(username.value, Password.value);
        input.info();
    }




})();
