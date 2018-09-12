$(document).ready(function() {

var shirtIcons = document.getElementsByClassName('shirt-icons');
 
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
    // $('.image-row-one').css('visibility', 'hidden');
    // $('.version-two-tee').css('visibility', 'visible');
    // $('.version-three-tee').css('visibility', 'visible');
}
