$(document).ready(function() {

// Declare variables
var loginButton = document.getElementById('login-button');
var registerButton = document.getElementById('register-button');
    
// Add event listeners   
loginButton.addEventListener('click', checkIfLoginMatchesObjPeople);
registerButton.addEventListener('click', addNewUserToObjPeople);
    
// Add functions    
function checkIfLoginMatchesObjPeople(){
    for(i = 0; i < objPeople.length; i++) {
        if(email == objPeople[i].email && password == objPeople[i].password) {
            console.log(email + ' is logged in!');
            return
        }
    }
    console.log('incorrect username or password');
}   

});
// Document.ready ends

var objPeople = [];
        
function addNewUserToObjPeople(){
    // for(i = 0; i < objPeople.length; i++) {
        // objPeople[i].email.push(email) && objPeople[i].password.push(password);
        var email = document.getElementById('email-register').value;
        var password = document.getElementById('password-register').value;
        objPeople.push({
            'email': email,
            'password': password
        });
        console.dir(document.getElementById('email-register'));
        console.log(objPeople);
}



    