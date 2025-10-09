let x = 7,
  y = 14;

let vrai = x < y;
console.log(`vrai stocke : ${vrai}`);

let faux = 14 <= 7;
console.log(`faux stocke : ${faux}`);

// Test égalité '==' uniquement en valeur
let egalval = 4 == "4";
console.log(`egalval stocke : ${egalval}`);

// Test égalité '===' en valeur ET en type
let egalvaltype = 4 === "4";
console.log(`egalvaltype stocke: ${egalvaltype}`);

let difval = 4 != "4";
console.log(`difval stocke : ${difval}`);

let difvaltype = 4 !== "4";
console.log(`difvaltype stocke : ${difvaltype}`);
