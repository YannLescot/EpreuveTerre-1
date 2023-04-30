/* 1 . Vérifier les arguments
 tester les deux premiers chiffres 
 puis convertir en soustrayant 12 et en ajoutant AM ou PM.*/

// Vérification du remplaissage des arguments
if (process.argv.length != 3) {
  console.log("Erreur.");
  process.exit();
}
// ON décompose la string en plusieurs parties :
//les deux premiers chiffres
//les deux derniers
//on les convertit en intenger pour pouvoir faire des calculs
str = process.argv[2];
str1 = str.substring(0, 2);
str2 = str.substring(3);
int1 = parseInt(str1);
int2 = parseInt(str2);

// Vérification du "format", il faut 5 caractères, un ":" à l'indice 2 et il faut que les heures et minutes soient des caractères "nonbres"
if ((str.length != 5) & (str[2] != ":") & isNaN(str1) & isNaN(str2)) {
  console.log("Erreur");
  process.exit();
}

// Verification du signe de l'heure
if (
  str1 != int1 || // on verifie que ce sont bien de entiers
  str2 != int2 ||
  int1 > 24 || // les heures ne doivent pas être sup à 24
  int2 > 59 || // les minutes ne doivent pas être sup à 59
  int1 < 0 || // les deux ne peuvent être négatifs
  int2 < 0
) {
  console.log("Ceci n'est pas une heure valide");
  process.exit();
}

//Conversion

if (int1 >= 12) {
  // si les heures sont supérieures à 12, on soustrait leur soustrait 12 et on ajoute PM à la fin
  console.log(`${int1 - 12}:${str2}PM`);
} else {
  console.log(`${str}:${str2}AM`); // sinon on n'ajoute juste le AM à la fin
}
