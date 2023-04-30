/*
La table ascii contient les caractères de l'alphabet

 1. On boucle dans la table ascii et on affiche l'alphabet
 2. On concatène chaque caractère à chaque tour de boucl
 3. On affiche avec un retour à la ligne
*/

let alphabet = "";
for (let i = 97; i <= 122; i++) {
  alphabet = alphabet + String.fromCharCode(i);
}
console.log(`${alphabet} \n`);
