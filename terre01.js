/* Nous allons utiliser le process.argv pour récupérer tous les "arguments"
1. le nom du fichier est à l'index 1 mais il s'agit d'un chemin complet
2. Nous allons donc trouver la position du dernier "/"
3. Nous allons ensuite lire les caractères suivant ce dernier "/" */

// Test  arguments
//console.log(process.argv);

//On met dans une variable le chemin d'accès
let chemin = process.argv[1];

// On récupère l'index de la dernière occurence de /
let index = chemin.lastIndexOf("/");
let newStr = "";

// On boucle en lisant la dernière partie du chemin d'accès
for (let i = index + 1; i <= chemin.length - 1; i++) {
  newStr = newStr + chemin[i];
}

// On affiche la chaîne ainsi créée
console.log(newStr);
