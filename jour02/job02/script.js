'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {
    var bouton = document.querySelector('button');
    var article = document.querySelector('article');

    function onClickChangeHTML() {
        article.innerHTML = "L'important n'est pas la chute, mais l'atterrissage";
    }
    
    bouton.addEventListener('click', onClickChangeHTML)
});