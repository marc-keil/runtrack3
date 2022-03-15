// Créez une fonction “tri” qui prend en paramètres un numbers de nombres
// nommé “numbers” et une variable “order” qui contient “asc” ou “desc”. A
// l’aide de la fonction sort() d’un algorithme développé par vos soins, cette fonction
// doit trier le numbers dans l’ordre ascendant ou décroissant, selon le
// paramètre passé, puis retourner le numbers 

function tri(array, order) {

    if (order != "desc" && order != "asc") {
        return false;
    }
    var length = array.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                var temporaire = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporaire;
            }
        }
    }
    if (order == "desc") {
        array = array.reverse();
    }
    return array;
}

var numbers = [5, 4, 6, 3, 1, 9];

var resultat = tri(numbers, "desc");

console.log(resultat);