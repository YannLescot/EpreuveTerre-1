/*
Un entier est pair si son modulo de 2 est égal à 0
1. tester les arguments
2. Tester la parité et l'afficher

*/
//Le tableau de arg ne doit pas contenir autre qeu 3 argz dont un seul que nous avons rentré
if (process.argv.length != 3 || isNaN(process.argv[2])) {
  console.log("Tu ne me la mettras pas à l'envers");
  process.exit(); // on sort
}

let number = process.argv[2];

if (number == parseInt(number)) {
  // on vérifie bien que ce qu'est entré est un entier
  parseInt(number) % 2 === 0 ? console.log("pair") : console.log("impair"); // vérification du reste avec un if ternaire
} else {
  console.log("Recommencez, ceci n'est pas un entier voyons !");
}
