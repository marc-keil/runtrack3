function sommenombrespremiers(nombre1,nombre2) {

    for ( var i = 2 ;  i < nombre1 ; i++){
        if ( variable1 % i == 0) {
            return false;
        }
        
    }

    for ( var i = 2 ;  i < nombre2 ; i++){
        if ( variable2 % i == 0) {
           return false;
        }
        
    }

    
    var resultat = nombre1 + nombre2 ;
    return resultat;
}
