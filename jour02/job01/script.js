'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {
    var bouton = document.getElementById('button');
    var article = document.getElementById('citation');

    bouton.addEventListener('click', function onClickChangeHTML(){
        var contenue = article.innerHTML;
        console.log(contenue);
    })
});