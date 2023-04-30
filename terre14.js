// ON crée le même tableau mais trié.
// ON boucle en meme temps sur les deux tableau
//au préalbale on crée un booléen egal à true
// SI dans la double boucle on à des différence alors le tableau n'est pas trié et  le boléen sera à false

//------------------------------------------------------------------
//On découpe le tableau de argv pour récupérer juste un tableaux de
//des arguments entrés
//On boucle dans ce tableau pour vérifier que ne avons bien des entiers
//et que nous avons bien rentré des nombre
//------------------------------------------------------------------
array = process.argv.splice(2);

for (let h = 0; h < array.length; h++) {
  if (isNaN(array[h]) || array[h] != parseInt(array[h])) {
    console.log("Erreur.");
    process.exit();
  }
}
//----------------------------------------------------------------
// On crée un tableau dans lequel on met les valeurs nombres entiers
// Il est ajouté dans l'ordre de base
// On récrée un tableau qui sera le tableau trié précédent
//
//----------------------------------------------------------------
newArray = [];
for (let k = 0; k < array.length; k++) {
  newArray.push(parseInt(array[k]));
}
//console.log(newArray);
newArraySorted = newArray.sort(function (a, b) {
  return a - b;
});
console.log(newArraySorted);

//sorted = true;
//----------------------------------------------------------------
// On parcourt le tableau trié ainsi que non trié
// Dès qu'il y a une valeur différente --> Pas trié on sort
// SInon --> trié
//----------------------------------------------------------------
for (let i = 0; i < newArray.length; i++) {
  //for (let j = 0; j < newArraySorted.length; j++) {
  if (newArray[i] != newArraySorted[i]) {
    // console.log(newArray[i]);
    // console.log(newArraySorted[i]);
    console.log(" Pas triée ! ");
    process.exit();
  }
  // }
}
console.log("Triée ! ");
