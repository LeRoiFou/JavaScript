let x = 0,
  xprime = 0,
  alpha = 10,
  alphaprime = 10,
  z = 0,
  i = "";
let y = x++;
let beta = alpha--;
let yprime = ++xprime;
let betaprime = --alphaprime;
console.log(`Valeur de y : ${y}`);
console.log(`Valeur de beta : ${beta}`);
console.log(`Valeur de yprime : ${yprime}`);
console.log(`Valeur de betaprime : ${betaprime}`);

// Boucle while
while (x < 10) {
  console.log(`x contient la valeur : ${x}`);
  x++; // incrémentation de 1
}

// Boucle do while
do {
  console.log(`z vaut : ${z}`);
  z--;
} while (z > 10);

// Boucle for
for (let i = 0; i < 10; i++) {
  console.log(`i contient la valeur : ${i}`);
}
