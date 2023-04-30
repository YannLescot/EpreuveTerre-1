/*
La table ascii contient les caractères de l'alphabet

 1. On boucle dans la table ascii et on affiche l'alphabet
 2. On concatène chaque caractère à chaque tour de boucl
 3. On affiche avec un retour à la ligne
*/

/* Nous vérifions la taille du tableau d'arguments*/
if (process.argv.length != 3) {
  console.log("Erreur. Mettez UN argument");
  process.exit();
}

let argument = process.argv[2];

if (
  (typeof argument === "string") & // chaîne de caractère
  isNaN(argument) & // Chaine de caractère "nombre"
  (argument.length === 1) & // juste un caractère
  (argument == argument.toLowerCase()) // contrôle si c'est une minuscule
) {
  let alphabet = "";

  for (let i = 97; i <= 122; i++) {
    if (String.fromCharCode(i) >= argument) {
      //dès qu'on atteint la lettre en argument
      alphabet = alphabet + String.fromCharCode(i); //On concatène les lettres
    }
  }
  console.log(`${alphabet} \n`); // On affiche le résultat avec un retour à la ligne à la fin
} else {
  console.log("Erreur.");
}
