/* Créez un button ayant comme id “button”. Créez une balise <p> ayant
comme id “compteur” et contenant “0”. Ce contenu doit évoluer
proportionnellement au nombre d'événements click reçu par le bouton.
Vous ne devez pas utiliser “onclick()” dans votre html. La fonction
permettant d’effectuer la modification doit s'appeler “addone()”.*/
'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {
    var bouton = document.getElementById('button');
    var p = document.getElementById('compteur');

    function addone(){
        var nombreclick = compteur.innerHTML;
        nombreclick++;
        p.innerHTML = nombreclick;
    }

    bouton.addEventListener('click', addone)
});