/* 
[Cours / Tuto débutant] Apprendre Javascript de A à Z – Les bases (1/6)

Affichage des messages :
- L'instruction console.log() permet d'afficher dans la console de la page @
- L'instruction alert() permet d'afficher un message sur la page @

Date : 19/06/2025
*/

// Les variables : modifications possibles
let maVariable = 5;
console.log(maVariable);
maVariable += 10;
console.log(maVariable);
maVariable = 12;
console.log(maVariable);

// Les constantes : modifications impossibles
const prenom = "Lena";
console.log(prenom);

// Concaténation
let nouvelleChaine = "Chaîne précédente : " + prenom;
console.log(nouvelleChaine);

// Concaténation avec la backticks ``
let nouvelleConcatenation = `Avec les backticks 👉 ${nouvelleChaine}`;
console.log(nouvelleConcatenation);

// Les types de données
let string = "Je suis une chaîne de caractères";
console.log(string);
let number = 24;
console.log(number);
let boolean = false;
console.log(boolean);
let array = ["je", "suis", 47, true];
console.log(array);
let object = {
  prenom: "Audrey",
  age: 33,
  ville: "Bordeaux",
};
console.log(object);
let arbre; // variable déclarée non instanciée (comme Java)
arbre = "sapin";
console.log(arbre);

// Les opérateurs d'affectation
let total = 0;
total += 1;
console.log(total);
total -= 5;
console.log(total);
total *= 3;
console.log(total);
total /= 4;
console.log(total);
total **= 2;
console.log(total);
total++;
console.log(total);
total--;
console.log(total);

// Les structures de contrôle avec "if(){}", "else if(){}" et "else{}"
let x = 2;
let y = 5;
if (x > y) {
  console.log("x est plus grand que y");
} else if (x < y) {
  console.log("y est plus grand");
} else {
  console.log("x est égal à y");
}

// Les structures de contrôle avec des variables non instanciées
if (x) {
  console.log("la variable x non instanciée existe !");
}

// Les structures de contrôles avec des égalités
if (x == y) {
  console.log("ils sont égaux");
} else {
  console.log("ils ne sont pas égaux");
}

// Les structures de contrôles avec les && et les ||
if (x < y && x > 6) {
  console.log("Oui, la condition avec && marche");
} else {
  console.log("Non, la condition avec && ne marche pas");
}

// Les fonctions flêchées non argumentées
const faireQuelqueChose = () => {
  let a = 4;
  console.log("Je fais un truc");
  alert("Calcul terminé !");
  return console.log("4 + 6 = " + `${a + 6}`);
};
faireQuelqueChose();

// Les fonctions flêchées argumentées
const addition = (a, b) => {
  return console.log("La sommes est : " + `${a + b}`);
};
addition(153, 513);
