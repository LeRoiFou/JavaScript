let x = 25;
let xprime = "25";
let y = -75;
let z = 3.14;

let prenom = "Pierre";
let nom = "Giraud";
let sexe = "Je suis un homme";

// Recours aux anti-slaches '\' en cas de confusion 'apostrophes' <-> "guillemets"
let dpt = 'Je vis dans le "83"';
let dpt2 = 'Je vis dans le "83"';
let ville = "J`'habite à Toulon";
let ville2 = "J'habite à Toulon";

// Les booléens
let a = true,
  b = false;
let c = "true";

// Déclaration de valeurs atypiques de JavaScript
let n = null;
let u = undefined;
let nn = NaN; // NaN = Not A Number (type de cette variable = number...)

// Changement de valeurs
x = "quatre";

// Affichage des types attribués aux variables
alert(
  "Variable x : " +
    typeof x +
    "\nVariable y : " +
    typeof y +
    "\nVariable a : " +
    typeof a +
    "\nVariable n : " +
    typeof n +
    "\nVariable u : " +
    typeof u +
    "\nVariable nn : " +
    typeof nn
);
