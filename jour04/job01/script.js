// Créez un button ayant comme id “button”. Créez un fichier expression.txt
// contenant votre expression favorite. Lorsqu’un utilisateur clique sur le
// bouton, à l’aide de Fetch, récupérez le contenu du fichier expression.txt,
// placez le dans un paragraphe et insérez le dans le corps de votre page.



   
document.addEventListener('DOMContentLoaded', () => {

var bouton = $('#button');

bouton.on('click', () => {

    fetch('expression.txt')
        .then((reponse) => reponse.text())    // On prend la réponse et on la fait devenir du texte
        .then((data) => {                     // On récupere les données qu'on met dans la data
            $('p').append(data+"<br>") // On peut remplacer le "append" par "text", qui empeche les repetitions
        })
        .catch((error) => console.log(`%cERREUR: ${error.message}`, "color: red;"))
    ;
});

});