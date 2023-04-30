/* On teste les arguments
1. ON fait une division euclidienne "~"console.log(~~(10 / 8));
2. On récumpère le reste :console.group(10 % 8);
*/

if (
  process.argv.length != 4 || // Pas plus de 2 arguments entrés par nous-même
  isNaN(process.argv[2]) || // Est-ce un caractère "nombre"?
  isNaN(process.argv[3]) //Est-ce un caractère "nombre"?
) {
  console.log("Erreur.");
  process.exit();
}

if (process.argv[3] === 0 || process.argv[3] > process.argv[2]) {
  // On ne peut pas diviser par 0 et le denominateur ne doit pas être supérieur au numérateur
  console.log("Erreur.");
  process.exit();
}

number1 = process.argv[2];
number2 = process.argv[3];

console.log(`Resultat : ${~~(number1 / number2)}`); //on affiche le résultat
console.log(`Reste : ${~~(number1 % number2)}`); // on affiche le reste
