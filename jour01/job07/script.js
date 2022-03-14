function jourtravaille(date) {

var datedujour = new Date(date);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var date_fr = datedujour.toLocaleDateString('fr-FR', options);


var joursferies = [
    '2020-01-01',
    '2020-04-13',
    '2020-05-01',
    '2020-05-08',
    '2020-05-21',
    '2020-06-01',
    '2020-07-14',
    '2020-08-15',
    '2020-11-01',
    '2020-11-11',
    '2020-12-25'];

    if (joursferies.includes(date) == true) {
        console.log("Le " + date_fr + " est un jour férié");
    }
    else if (datedujour.getDay() == 6 || datedujour.getDay() == 0 ){
        console.log("Non, " + date_fr + " est un weekend");
    }
    else {
        console.log("Oui, " + date_fr + " est un jour travaillé");
    }

}
jourtravaille("2020-01-01")










