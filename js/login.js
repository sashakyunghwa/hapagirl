$(document).ready(function() {

// Declare variables
var loginButton = document.getElementById('login-button');
var registerButton = document.getElementById('register-button');
var loginEmail = document.getElementById('login-email').value;
var loginPassword = document.getElementById('login-password').value;
    
// Add event listeners   
loginButton.addEventListener('click', checkIfLoginMatchesObjPeople);
registerButton.addEventListener('click', addNewUserToObjPeople);
    
// Add functions    
function checkIfLoginMatchesObjPeople(){
    for(i = 0; i < objPeople.length; i++) {
        if(loginEmail == objPeople[i].email && loginPassword == objPeople[i].password) {
            console.log(email + ' is logged in!');
            return
        } else if(loginEmail.length < 7 || loginEmail.length === '') {
            $('.student-icon').popover('show');
            emailValid = false;
            console.log('incorrect username or password');
        } else {
            $('.student-icon').popover('hide');
            emailValid = true;
        }
    }   
}   

});
// Document.ready ends

var emailValid = null;
var objPeople = [];
        
function addNewUserToObjPeople(){
    // for(i = 0; i < objPeople.length; i++) {
        // objPeople[i].email.push(email) && objPeople[i].password.push(password);
        var registerEmail = document.getElementById('register-email').value;
        var registerPassword = document.getElementById('register-password').value;
     
        if(registerEmail.length < 7 || registerEmail.length === '') {
            $('.student-icon').popover('show');
            emailValid = false;
        } else {
            $('.student-icon').popover('hide');
            emailValid = true;
        }

        if(emailValid) {
            objPeople.push({
            'email': registerEmail,
            'password': registerPassword
        });
        console.dir(document.getElementById('register-email'));
        console.log(objPeople);
        }
}



    