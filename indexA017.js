/* -------------------------------------------------------------
1ère méthode - Objet littéral {} : POUR DES OBJETS SIMPLES
------------------------------------------------------------- */

const moi = {
  prenom: "Laurent",
  nom: "Reynaud",
  age: 48,

  identite() {
    return `${this.prenom} ${this.nom}`;
  },
};

console.log(moi.identite());

/* -------------------------------------------------------------
2ème méthode  - Constructeurs : YES ! YES ! YES !
------------------------------------------------------------- */

class IdentiteNouvelle {
  constructor(prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
  }
}

let lena = new IdentiteNouvelle("Lena", "Anderson", 24);
let erin = new IdentiteNouvelle("Erin", "Moriarty", 30);
console.log(`Age de Lena : ${lena.age} \nAge d'Erin : ${erin.age}`);
