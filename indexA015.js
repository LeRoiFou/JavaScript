let primitive = "Je suis une valeur primitive";

// Déclaration d'un objet
const moi = {
  // Déclaration de propriétés
  prenom: "Pierre",
  nom: "Giraud",
  age: 25,

  //   Déclaration d'une méthode
  identite() {
    return `Prenom : ${this.prenom} \nNom : ${this.nom} \nAge : ${this.age}`;
  },
};

console.log(moi.identite());
