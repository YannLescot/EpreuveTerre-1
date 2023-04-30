/*
Utilisation d'une boucle en décrément
*/

if (process.argv.length != 3 || !isNaN(process.argv[2])) {
  console.log("Erreur.");
  process.exit();
}
//boucle  décrémentation
str = process.argv[2];
newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  newStr = newStr + str[i];
}

console.log(newStr);
