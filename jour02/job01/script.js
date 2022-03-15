'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {
    var bouton = document.getElementById('button');
    var article = document.getElementById('citation');

    function onClickChangeHTML(){
        var contenue = article.innerHTML;
        console.log(contenue);
    }

    bouton.addEventListener('click', onClickChangeHTML)
});