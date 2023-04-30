// ON crée le même tableau mai trié.
// ON boucle en meme temps sur les deux tableau
//au préalbale on crée un booléen egal à true
// SI dans la double boucle on à des différence alors le tableau n'est pas trié et  le boléen sera à false

array = process.argv.splice(2);

for (let h = 0; h < array.length; h++) {
  if (isNaN(array[h]) || array[h] != parseInt(array[h])) {
    console.log("Erreur.");
    process.exit();
  }
}
max = isNaN(array);
console.log(max);
newArray = [];
for (let k = 0; k < array.length; k++) {
  newArray.push(parseInt(array[k]));
}
console.log(newArray);
newArraySorted = newArray.sort(function (a, b) {
  return a - b;
});
console.log(newArraySorted);

sorted = true;

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
