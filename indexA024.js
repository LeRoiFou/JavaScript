let x = Math.random() * 1_000;
let y = Math.round(x);
let inf = Math.floor(x);
let sup = Math.ceil(x);
let min = Math.min(0, -10, 200, 75, 25);
let max = Math.max(0, -10, 200, 75, 25);
let z = -4;
let abs = Math.abs(z);

console.log(`
Contenu de x : ${x}
Arrondi de x : ${y}
Arrondi inférieur de x : ${inf}
Arrondi supérieur de x : ${sup}
Valeur la plus petite : ${min}
Valeur la plus grande : ${max}
Valeur de z : ${z}
Valeur absolue de z : ${abs}
    `);

let a = 5,
  b = 3,
  c = 0.5;
let power = Math.pow(a, b); // = 5 ^ 3
let rac = Math.sqrt(a); // = racine carrée de 5
let cos = Math.cos(c);
let sin = Math.sin(c);
let pi = Math.PI;

console.log(`
Résultat de pow() : ${power}
Racine carrée de a : ${rac}
Cosinus de 0.5 : ${cos}
Sinus de 0.5 : ${sin}
Approximation de pi : ${pi}
    `);
