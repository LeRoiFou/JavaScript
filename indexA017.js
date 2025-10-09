/* -------------------------------------------------------------
1ère méthode  - new Object() : DECONSEILLEE !!!
------------------------------------------------------------- */

let objet_cree = new Object();

objet_cree.prenom = "Pierre";
objet_cree.nom = "Giraud";
objet_cree.age = 25;

console.log(objet_cree.prenom);

/* -------------------------------------------------------------
2ème méthode - Objet littéral {} : POUR DES OBJETS SIMPLES
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
3ème méthode  - Constructeurs : YES ! YES ! YES !
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
