/*

Un nombre 1er n'est "divisible " QUE par lui même ou par 1
Cad que le reste de ces divsions est 0
Donc il faut vérifier  qu'un nombre n'est pas divisible par ceux inférieurs à lui excepté 1

*/

if (process.argv.length != 3 || isNaN(process.argv[2])) {
  console.log("Erreur.");
  process.exit();
}

number = parseFloat(process.argv[2]);

if (number == 0 || number == 1) {
  console.log("0 ou 1 ne sont pas des nombres premiers");
  process.exit();
}

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    console.log(`Non ${number} n'est pas un nombre premier`);
    process.exit();
  }
}
console.log(`Oui ${number} est un nombre premier`);
