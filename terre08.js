/* On gère els erreurs d'arguments
Pas d'exposants négatif
On affiche le résultat*/

if (
  process.argv.length != 4 ||
  isNaN(process.argv[2]) ||
  isNaN(process.argv[3])
) {
  console.log("Erreur.");
  process.exit();
}

number1 = process.argv[2];
number2 = process.argv[3];

number2 < 0
  ? console.log("L'exposant ne peut pas être négatif")
  : console.log(number1 ** number2);