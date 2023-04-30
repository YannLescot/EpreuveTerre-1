/*
Un entier est pair si son modulo de 2 est égal à 0
1. tester les arguments
2. Tester la parité et l'afficher

*/

if (process.argv.length != 3 || isNaN(process.argv[2])) {
  console.log("TU ne me la mettras pas à l'envers");
  process.exit();
}

let number = process.argv[2];

if (number == parseInt(number)) {
  parseInt(number) % 2 === 0 ? console.log("pair") : console.log("impair");
} else {
  console.log("Recommencez, ceci n'est pas un entier voyons !");
}
