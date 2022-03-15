
'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {

var pos = document.getElementById('footer');

var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Resultat du scrolltop

window.addEventListener('scroll', function(){
    var progress = (document.documentElement.scrollTop / height) * 100;

    pos.style.width = progress + "%";

    if (progress <= 35 ){
        pos.style.background = "green";
    }
    else if (progress > 35  && progress <= 70 ) {
        pos.style.background = "red";
    }
    else if (progress > 70  && progress <= 100 ) {
        pos.style.background = "orange";
    }
    
})
})