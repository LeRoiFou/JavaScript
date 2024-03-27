/*
Lien : https://www.youtube.com/watch?v=Ew7KG2j8eII
Cours : Les fonctions

01:02:30
Date : 27-03-24
*/

// Fonction classique
function fonctionClassique() {
  console.log("Fonction classique");
}
fonctionClassique();

// Fonction fléchée ( => : on est face à une fonction)
const fonctionFlechee = () => {
  console.log("Fonction fléchée");
};
fonctionFlechee();

// Fonction fléchée paramétrée
const addition = (a, b) => {
  console.log("Fonction fléchée paramétrée : " + a + b);
};
addition(2, 5);
