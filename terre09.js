if (process.argv.length != 3 || isNaN(process.argv[2])) {
  console.log("Erreur.");
  process.exit();
}

number = process.argv[2];

(number == parseInt(number)) & (parseInt(number) >= 0)
  ? console.log(parseInt(number) ** 0.5)
  : console.log("Ce n'est pas un entier positif");
