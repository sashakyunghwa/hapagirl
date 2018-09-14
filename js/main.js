$(document).ready(function() {

// Shop Page
var shirtIcons = document.getElementsByClassName('shirt-icons');
var versionOneTee = document.getElementById('version-one-tee');
var versionTwoTee = document.getElementById('version-two-tee');
var versionThreeTee = document.getElementById('version-three-tee');
 
// Add event listeners
for(i = 0; i < shirtIcons.length; i++){
    shirtIcons[i].addEventListener('click', shirtIconReplacesShirtImage);
}

});

function shirtIconReplacesShirtImage(){
    console.log('shirt icon clicked');
    var iconSource = this.src;
    var newIconSource = this.parentElement.parentElement.children[0].children[0].src;
    this.parentElement.parentElement.children[0].children[0].src = iconSource;
    this.src = newIconSource;
}

function checkWhichVersionTeePage(){
    if()
}

versionOneTee.addEventListener('click', );