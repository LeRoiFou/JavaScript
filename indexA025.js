/*Si on ne met pas le mot-clé 'let' avant la déclaration d'une variable,
JS va considérer que cette variable est globale
Il est fortement déconseillé de déclarer une variable sans le mot-clé 'let' */

// Assignation d'une variable globale
let y = 4;

const locale = () => {
  /*Assignation d'une variable locale qui ne peut pas être appelée en
  dehors de cette fonction*/
  let x = 5;
  console.log(`Valeur de x déclaréee à l'intérieur de la fonction : ${x}`);
  console.log(`Valeur de y à l'intérieur de la fonction : ${y}`);
};

locale();
console.log(`Valeur de y à l'extérieur de la fonction : ${y}`);

// Assignation d'une variable globale
let z = 5;

const locale2 = () => {
  // Assignation d'une variable locale avec le MEME NOM que la variable globale
  let z = 22;
  return z;
};

console.log(`
Valeur de z à l'extérieur de la fonction : ${z}
Valeur de z à l'intérieur de la fonction : ${locale2()}
    `);

const locale3 = () => {
  // Assignation d'une variable sans le mot clé 'let'
  a = 3;
  return a;
};

console.log(`
Valeur de 'a' à l'intérieur de la fonction : ${locale3()}
Valeur de 'a' à l'extérieur de la fonction : ${a}
    `);
