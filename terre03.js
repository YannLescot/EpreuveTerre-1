/*
La table ascii contient les caractères de l'alphabet

 1. On boucle dans la table ascii et on affiche l'alphabet
 2. On concatène chaque caractère à chaque tour de boucl
 3. On affiche avec un retour à la ligne
*/
// PAREIL QUE LE TERRE01 sauf que nous arjoutons

/* Nous vérifions la taille du tableau d'arguments*/
if (process.argv.length != 3) {
  console.log("Erreur. Mettez UN argument");
  process.exit();
}

let argument = process.argv[2];
if (
  (typeof argument === "string") &
  isNaN(argument) &
  (argument.length === 1) &
  (argument == argument.toLowerCase())
) {
  let alphabet = "";

  for (let i = 97; i <= 122; i++) {
    if (String.fromCharCode(i) >= argument) {
      alphabet = alphabet + String.fromCharCode(i);
    }
  }
  console.log(`${alphabet} \n`);
} else {
  console.log("Erreur.");
}
