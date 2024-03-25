/*
Lien : https://www.youtube.com/watch?v=Ew7KG2j8eII
Cours : les structures de contrôle 

Structures de contrôle = conditions

00:51:20
Date : 25-03-24
*/

let x = 2;
let y = 5;
let z = 3;
let a = 2;
let b = "2";

// Conditions
if (x > y) {
  alert("YES x plus gros que y");
} else if (y > x) {
  alert("Y plus grand !");
} else {
  alert("ILS SONT EGAUX");
}

// Conditions et booléens
if (z) {
  console.log("z existe !");
} else {
}

// == : teste l'égalité de valeur sans prendre en compte le type
if (a == b) {
  console.log("Ils sont égaux");
} else {
  console.log("Pas égaux !");
}

// === : Teste l'égalité en type et en contenu
if (a === b) {
  console.log("Ils sont égaux");
} else {
  console.log("Pas égaux !");
}

// || : ou
// && : et
if (x < y || x > 1) {
  console.log("Condition 'ou' remplie");
} else if (x < y && x > 1) {
  console.log("Condition 'et' remplie");
}
