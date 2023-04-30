/* 1 . Vérifier les arguments
 tester les deux premiers chiffres 
 puis convertir en soustrayant 12 et en ajoutant AM ou PM.*/

// Vérification du remplissage des arguments
if (
  process.argv.length != 3 ||
  process.argv[2].length < 6 ||
  process.argv[2].length > 7
) {
  console.log("Erreur1.");
  process.exit();
}
str = process.argv[2];
//Cas où on a 6 caractères
str61 = str.substring(0, 1); //
str62 = str.substring(2, 4); //
str63 = str.substring(4); // PM AM
int61 = parseInt(str61);
int62 = parseInt(str62);

//Cas où on a 7 caractères

str71 = str.substring(0, 2); //
str72 = str.substring(3, 5); //
str73 = str.substring(5); // PM AM
int71 = parseInt(str71);
int72 = parseInt(str72);

//Cas où on a 6 caractères---------------------------------------------
if ((str.length == 6) & (str[1] === ":") & (str63 == "PM" || str63 == "AM")) {
  if (
    str61 != int61 ||
    str62 != int62 ||
    int61 > 12 ||
    int62 > 59 ||
    int61 < 0 ||
    int62 < 0
  ) {
    console.log("Ceci n'est pas une heure valide");
    process.exit();
  }

  //Conversion 6 caractères-------------------------

  if (str63 == "AM") {
    console.log(`${str61}:${str62}`);
  } else {
    console.log(`${int61 + 12}:${str62}`);
  }
}

//Cas où on a 7 caractères---------------------------------------------------
else if (
  (str.length == 7) &
  (str[2] == ":") &
  (str73 == "PM" || str73 == "AM")
) {
  if (
    str71 != int71 ||
    str72 != int72 ||
    int71 > 12 ||
    int72 > 59 ||
    int71 < 0 ||
    int72 < 0
  ) {
    console.log("Ceci n'est pas une heure valide");
    process.exit();
  }
  //Conversion 7 caractères-------------------------
  if (str73 == "AM") {
    console.log(`${str71}:${str72}`);
  } else {
    if (int71 == 12) {
      console.log(`${int71 - 12}:${str72}`);
    } else {
      console.log(`${int71 + 12}:${str72}`);
    }
  }
} else {
  console.log("Erreur2.");
}
