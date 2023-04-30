/* 1 . Vérifier les arguments
 tester les deux premiers chiffres 
 puis convertir en soustrayant 12 et en ajoutant AM ou PM.*/

// Vérification du remplaissage des arguments
if (process.argv.length != 3) {
  console.log("Erreur.");
  process.exit();
}
str = process.argv[2];
str1 = str.substring(0, 2);
str2 = str.substring(3);
int1 = parseInt(str1);
int2 = parseInt(str2);

// Vérification du "format"
if ((str.length != 5) & (str[2] != ":") & isNaN(str1) & isNaN(str2)) {
  console.log("Erreur");
  process.exit();
}

// Verification du signe de l'heure
if (
  str1 != int1 ||
  str2 != int2 ||
  int1 >= 24 ||
  int2 > 59 ||
  int1 < 0 ||
  int2 < 0
) {
  console.log("Ceci n'est pas une heure valide");
  process.exit();
}

//Conversion
newStr = "";
if (int1 >= 12) {
  console.log(`${int1 - 12}:${str2}PM`);
} else {
  console.log(`${str}:${str2}AM`);
}
