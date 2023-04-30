/*
Nous allons récupérer l'ensemble des arguments 
pour ce faire, nous allons "couper " le tableau
*/

if (process.argv[2]) {
  arguments = process.argv.slice(2);

  for (let i = 0; i <= arguments.length; i++) {
    console.log(arguments[i]);
  }
} else {
  console.log("Erreur. Vous n'avez pas entré d'arguments");
}
