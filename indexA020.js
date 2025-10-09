// Assignation d'un array (tableau) ==> [valeur1, valeur2, ...]
let prenom = ["Pierre", "Laurent", "Lena", "Easy"];

// Changement de valeur d'un composant
prenom[0] = "Paul";
console.log(`${prenom[0]}`);

// Nombre d'éléments dans un array
console.log(`
Notre tableau contient : ${prenom.length} éléments
`);

// Ajout de nouveaux éléments de l'array
prenom[prenom.length] = "Sonya";
prenom[prenom.length] = "Erin";
console.log(`
On a ajouté ${prenom[4]} et ${prenom[5]} à notre tableau
`);

// Affichage de toutes les valeurs de l'array
let p = "";
for (let index = 0; index < prenom.length; index++) {
  p += `Prénom n° ${index + 1} : ${prenom[index]} \n`;
}
console.log(p);

// Déclaration d'un objet ==> {cle : valeur}
let prenoms = {
  prenom1: "Dean",
  prenom2: "Clint",
  prenom3: "John",
  prenom4: "Tom",
};

// Affichage d'un élément de l'objet
console.log(prenoms.prenom1);

// Affichage de toutes les valeurs de l'objet
ps = "";
for (let clefs in prenoms) {
  ps += `clefs : ${prenoms[clefs]}\n`;
}
console.log(ps);
