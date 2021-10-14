let binaryTimeCalcul = () => {
  // Tableau nombre de bits
  let bitArray = [];
  // tableau nombre binaire (0 ou 1)
  let binary = [];
  // Nombre de bits
  //let nombreDeBits = prompt("sur combien de bits?");
  let nombreDeBits = 6;

  // Boucle pour déterminer sur combien de bits on effectue un calcul
  for (let i = 0; i < nombreDeBits; i++) {
    bitArray.push(2 ** i);
  }

  // Valeur décimal
  //let valeurDecimal = prompt("Valeur décimal?");
  let valeurDecimal = new Date().getSeconds();
  let seconde = valeurDecimal;
  console.log(valeurDecimal);

  // Pour simplifier le calcul et tester chaque bits, on inverse le tableau du nombre de bits
  let bitArrayReverse = bitArray.reverse();
  let bitArrayReverseLength = bitArrayReverse.length;

  for (let j = 0; j < bitArrayReverseLength; j++) {
    if (valeurDecimal - bitArrayReverse[j] >= 0) {
      valeurDecimal -= bitArrayReverse[j];
      binary.push(1);
    } else {
      binary.push(0);
    }
  }

  console.log(binary);
  document.getElementById(
    "binary_time"
  ).innerHTML = `Nombre de secondes : ${seconde}, puis en binaire : ${binary.join(
    ""
  )}`;
};

setInterval(binaryTimeCalcul, 1000);
