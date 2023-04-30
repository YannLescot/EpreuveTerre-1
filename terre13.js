// Vérification des arguments

if (
  process.argv.length != 5 ||
  isNaN(process.argv[2]) ||
  isNaN(process.argv[3]) ||
  isNaN(process.argv[4])
) {
  console.log("Erreur.");
  process.exit();
}

// Vérification d'entiers

if (
  (process.argv[2] != parseInt(process.argv[2])) &
  (process.argv[3] != parseInt(process.argv[3])) &
  (process.argv[4] != parseInt(process.argv[4]))
) {
  console.log("Merci d'entrer des entiers");
  process.exit();
}
// Déclaration des variables
int1 = parseInt(process.argv[2]);
int2 = parseInt(process.argv[3]);
int3 = parseInt(process.argv[4]);

if (int1 == int2 || int1 == int3 || int2 == int3) {
  console.log("Erreurs.");
} else {
  // Creation d'un tableau pour le trier ensuite

  newArray = [];
  newArray.push(int1);
  newArray.push(int2);
  newArray.push(int3);
  newArray.sort(function (a, b) {
    // Fonction pour trier des nombres :) dans un tableau
    return a - b;
  });
  console.log(newArray[1]);
}
