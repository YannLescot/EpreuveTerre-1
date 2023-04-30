// Contrôle des arguments
// Comptage des caractères

if (process.argv.length != 3 || !isNaN(process.argv[2])) {
  console.log("Erreur.");
  process.exit();
}
// renvoie la longueur de la chaîne de caractères
str = process.argv[2];
console.log(str.length);
