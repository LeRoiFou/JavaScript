let validation = document.getElementById("bouton_envoi");
let prenom = document.getElementById("prenom");
let prenom_m = document.getElementById("prenom_manquant");

// REGEX :
// ^[a-zA-Zéèîï] : commencer par une lettre minuscule ou majuscule ou accentuée
// [a-zéèàçîï] : puis prendre uniquement des minuscules
// + : au moins deux lettres
// ()? : deuxième prénom facultatif
// [-'\s] : 2e prénom séparé du 1er prénom soit par -, soit par ' soit par un espace
let prenom_v = /^[a-zA-Zéèîï][a-zéèàçîï]+([-'\s][^a-zA-Zéèîï][a-zéèàçîï]+)?/;

// Bloquer l'envoi du formulaire si un élément n'a pas été saisi
validation.addEventListener("click", f_valid);
function f_valid(e) {
  // S'il le prénom n'a pas été saisi...
  if (prenom.validity.valueMissing) {
    // Méthode de l'objet élément : blocage de l'envoi du formulaire
    e.preventDefault();
    // Texte à afficher dans le formulaire + config du texte à afficher
    prenom_m.textContent = "Prénom manquant !";
    prenom_m.style.color = "red";
    prenom_m.style.fontWeight = "bold";
    // Si les données du prénom saisies sont incorrectes selon le REGEX ci-avant
  } else if (prenom_v.test(prenom.value) == false) {
    // Méthode de l'objet élément : blocage de l'envoi du formulaire
    e.preventDefault();
    // Texte à afficher dans le formulaire + config du texte à afficher
    prenom_m.textContent = "Format incorrect !";
    prenom_m.style.color = "orange";
    prenom_m.style.fontWeight = "bold";
  } else {
  }
}
