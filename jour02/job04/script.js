// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.

'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {

    var textarea = document.getElementById('keylogger');

    function keylogger() {
        var ancienmot = textarea.value;
        var lettre = event.key
        
        textarea.value =  ancienmot + lettre ;
    }

    document.addEventListener('keypress',keylogger)
});