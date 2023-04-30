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
//On met les valeur dans des variables
number1 = process.argv[2];
number2 = process.argv[3];

/*//if ternaire l'exposant ne doit pas être négatif
   number2 < 0
  ? console.log("L'exposant ne peut pas être négatif")
  : console.log(number1 ** number2); */

// autre possibilité  en créan t la focntion puissance
if (number2 < 0) {
  console.log("L'exposant ne peut pas être négatif");
} else if (number2 == 0) {
  console.log(1);
} else if (number2 > 0) {
  result = 1;
  for (let i = 1; i <= number2; i++) {
    result = result * number1;
  }
  console.log(result);
}
