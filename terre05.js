/* On teste les arguments
1. ON fait une division euclidienne "~"console.log(~~(10 / 8));
2. On récumpère le reste :console.group(10 % 8);
*/
if (
  process.argv.length != 4 ||
  isNaN(process.argv[2]) ||
  isNaN(process.argv[3])
) {
  console.log("Erreur.");
  process.exit();
}

if (process.argv[3] === 0 || process.argv[3] > process.argv[2]) {
  console.log("Erreur.");
  process.exit();
}

number1 = process.argv[2];
number2 = process.argv[3];

console.log(`Resultat : ${~~(number1 / number2)}`);
console.log(`Reste : ${~~(number1 % number2)}`);
