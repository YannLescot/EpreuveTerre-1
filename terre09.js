/*
RACINE CARREE
*/

//Vérification des arguments
if (process.argv.length != 3 || isNaN(process.argv[2])) {
  console.log("Erreur.");
  process.exit();
}

number = process.argv[2];
// Argument doitêtre un entier non négatif
(number == parseInt(number)) & (parseInt(number) >= 0)
  ? console.log(parseInt(number) ** 0.5) // puissance 0,5 équivaut à la racine carrée
  : console.log("Ce n'est pas un entier positif");
