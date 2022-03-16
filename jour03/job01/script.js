function apparaitre() {

    $('#mydiv').append("<p>le $ est un bon élément monétaire. Le # de twitter est une bonne ID. Il faudra faire le point avec la classe pour cacher cet élément.</p>");
}
function cacher() {
    $('#mydiv').empty();
}
$(document).ready(function() {
    $('#button').click(apparaitre);

    $('#buttonCacher').click(cacher);
})