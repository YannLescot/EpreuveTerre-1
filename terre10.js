/*

Un nombre 1er n'est "divisible " QUE par lui même ou par 1
Cad que le reste de ces divsions est 0
Donc il faut vérifier  qu'un nombre n'est pas divisible par ceux inférieurs à lui excepté 1

*/

if (process.argv.length != 3 || isNaN(process.argv[2])) {
  console.log("Erreur.");
  process.exit();
}
//Utilisation du float car réflexion sur les nombres premiers mais pas sûr
number = parseFloat(process.argv[2]);
// On élimine les cas 0 et 1
if (number == 0 || number == 1) {
  console.log("0 ou 1 ne sont pas des nombres premiers");
  process.exit();
}
// On boucle sur tous les nombre qui précèdent celui que nous testons
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    // test du modulo dans la boucle
    console.log(`Non ${number} n'est pas un nombre premier`); // S'il y a au moins 1 cas possible, ce n'est pas un nombre Premier
    process.exit(); // on sort
  }
}
console.log(`Oui ${number} est un nombre premier`); // Si on accède ici , c'est qu'il n'y avait rien dans la boucle
