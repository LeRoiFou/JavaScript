/*Les fonctions anonymes permettent d'instancier en variable une fonction
sans nom. Pour le JS en 2025, il est recommandé de recourir aux fonctions
flêchées comme ci-après */

// Déclaration d'une fonction
const carre = (x) => {
  console.log(`Carré de ${x} : ${x * x}`);
};

let y = prompt(`Entrer un nombre`);

carre(y);
