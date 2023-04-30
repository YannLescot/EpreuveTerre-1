/* 1 . Vérifier les arguments
 tester les deux premiers chiffres 
 puis convertir en soustrayant 12 et en ajoutant AM ou PM.*/

//LE PLUS DIFFCILE POUR MOI//

// Vérification du remplissage des arguments
// Soit on a 1 chiffre pour les heures soit nous en avons 2
//Donc 6 ou 7 caractères possibles dans l'argument

if (
  process.argv.length != 3 || // pas de possibilité d'ajouter un argument supplémentaire
  process.argv[2].length < 6 ||
  process.argv[2].length > 7
) {
  console.log("Erreur1.");
  process.exit();
}

// Création des variables pour les 2 cas de figures

str = process.argv[2];

//Cas où on a 6 caractères
str61 = str.substring(0, 1); // partie des heures n'a qu'un seul chiffre
str62 = str.substring(2, 4); // partie des minutes qui ne bouge pas en  soit
str63 = str.substring(4); // PM AM suffixe matin aprem
int61 = parseInt(str61); // on  crée une variable pour convertir en entier nombre
int62 = parseInt(str62);

//Cas où on a 7 caractères

str71 = str.substring(0, 2); //
str72 = str.substring(3, 5); //
str73 = str.substring(5); // PM AM
int71 = parseInt(str71);
int72 = parseInt(str72);

//Cas où on a 6 caractères---------------------------------------------
//On contrôle la présence des ":" et du AM ou PM
if ((str.length == 6) & (str[1] === ":") & (str63 == "PM" || str63 == "AM")) {
  if (
    str61 != int61 || // patreil qu'exo précedent
    str62 != int62 ||
    int61 < 10 || // On ne peut dans ce cas qu'avoir  1 2 3 4 5 6 7 8 9 en heures
    int62 > 59 ||
    int61 < 0 ||
    int62 < 0
  ) {
    console.log("Ceci n'est pas une heure valide");
    process.exit();
  }

  //Conversion 6 caractères-------------------------

  if (str63 == "AM") {
    console.log(`${str61}:${str62}`); // si suffixe AM on ne  change rien à part l'enlever
  } else {
    console.log(`${int61 + 12}:${str62}`); // sinon on ajoute 12 aux heures et on retire PM à la fin
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
    int71 < 13 || // ici on ne peut avoir que 10 11 12 en heures
    int71 > 9 ||
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
      console.log(`${int71 - 12}:${str72}`); // nous sommes à 12 heure en PM on retranche 12 pour faire 00:00 soit minuit
    } else {
      console.log(`${int71 + 12}:${str72}`); // dans les autres cas on ajoute simplement 12
    }
  }
} else {
  console.log("Erreur2.");
}
