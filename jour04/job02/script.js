//La functoin qui recois en param, la string, et la key
function jsonValueKey(string, key)
{
    let value = JSON.parse(string);  //On créer un variable qui contient le tableau transphormé en object java script
    return value[key]; //Retourne  la key du tableaux
}
//Le tableaux avec les données
var json = '{"name":"La Plateforme_", "address":"8 rue d hozier", "city":"Marseille", "nb_staff":"11", "creation":"2019"}';


document.write(jsonValueKey(json, "name"));