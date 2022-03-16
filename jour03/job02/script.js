
// Le but de ce job sera dans un premier temps de créer une balise button
// ayant comme id “button”. Cette balise servira à mélanger l’ensemble des
// images de l’arc-en-ciel. Par la suite, vous devrez faire en sorte qu’il soit
// possible de remettre les images dans le bon ordre. Lorsque l’on clique sur
// une image, elle doit changer de div.
// Le bouton mélanger fait remonter les images présents dans la div
// “rangees” et réorganise les images de façon aléatoire.
// Une fois qu’il y a 6 images dans la div “rangees”, un message s’affiche en
// dessous. Si l’arc-en ciel est bien reconstitué, le message “Vous avez
// gagné” s’affiche en vert. Sinon, le message “Vous avez perdu” s’affiche en
// rouge.

//FONCTION 
function shuffle() {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



var start = ["arc1.png","arc2.png","arc3.png","arc4.png","arc5.png","arc6.png"];
var images = ["arc1.png","arc2.png","arc3.png","arc4.png","arc5.png","arc6.png"];
var newTab = [] ;
var nbr = 0 ;
var point = 0;

 
for (var i = 0 ; i < images.length ; i++) {
    $('#melangees').append("<img class='img' src='"+images[i]+"' />");

}  

$('#button').click(function() {
    
    
    $('img').remove("");
    

   $('#button').hide();
  
    
    shuffle(images);
  
        
    for (var i = 0 ; i < images.length ; i++) {
        $('#melangees').append("<img class='img' src='"+images[i]+"' />");
 
    }  

    $('.img').click(function() {
        $(this).css("display","none");
        var src = $(this).attr('src');
        $('#rangees').append("<img  src='"+src+"' />");
  
        
        newTab[nbr] = src;
        nbr++;
        

        if ( newTab.length === 6) {
            for ( let i = 0 ; i < newTab.length ; i++) {
                if (start[i] === newTab[i]) {
                    point++;
                }

                
            }

            if (point === 6){
                $('#rangees').append("<h1>Vous avez gagné</h1>");
                $('h1').css("color","green");
            }else {
                $('#rangees').append("<h1>Vous avez perdu</h1>");
                $('h1').css("color","red");
            }


        }

      
    })

    
    
   
    
})
