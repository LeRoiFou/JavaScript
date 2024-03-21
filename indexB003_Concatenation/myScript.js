/* 
Lien : https://www.youtube.com/watch?v=Ew7KG2j8eII
Titre : [Cours / Tuto débutant] Apprendre Javascript de A à Z – Les bases (1/6)

La concaténation
00:36:45

Date : 21-03-24
*/

// 1ère variable
let chaine = "Je suis l'une des chaînes de caractères";

// 2ème variable concaténée avec la 1ère variable
let nouvelleChaine = "Chaîne précédente : " + chaine + ". Point final !";

// Autre concaténation avec guillements ALT GR + touche 7
let autreConcatenation = `Chaîne précédente : ${chaine}. Point final !`;

console.log(nouvelleChaine);
console.log(autreConcatenation);
