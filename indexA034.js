/* ---------------------------------------------------------------------------
Intervenir sur tous les éléments à partir d'un noeud (node) sans class ni ID
------------------------------------------------------------------------------ */

// Accéder à l'élément p en ciblant le 1er élément qui a la classe 'para'
let p1 = document.querySelector(".para");

// Accéder à la balise div qui comprend entre autres, l'élément ci-avant
let div1 = p1.parentNode;

// Changement du texte de couleur de tous les éléments présents à la balise div
div1.style.color = "teal";

/* ---------------------------------------------------------------------------
Récupération d'une valeur à partir de l'élément body
------------------------------------------------------------------------------ */

// Accéder à tous les éléments du body
let b1 = document.body;

// Accès à un des "enfants" du body -> récupération de l'élément div
// [1] -> espaces entre la balise body ouvrée et la balise ouvrée a
// [2] -> espaces entre la balise ouvrée a et la balise ouvrée h1
// [3] -> espaces entre la balise fermée h1 et la balise fermée a
// [4] -> espaces entre la balise fermée a et la balise ouverte h2
// [5] -> espaces entre la balise fermée h2 et la balise ouverte div
let div2 = b1.childNodes[5];

// Accès à un des "enfants" du div -> récupération de l'élément p
// [1] -> espaces entre la balise ouverte div et la balise ouverte p
let p2 = div2.childNodes[1];

// Récupération de la valeur de l'élément p récupéré ci-avant
// [0] -> aucun espace entre la balise ouverte p et la valeurr de cette balise
let texte1 = p2.childNodes[0].textContent;
console.log(texte1);

/* ---------------------------------------------------------------------------
Propriétés firstChild et lastChild : accès au premier et/ou au dernier noeud
------------------------------------------------------------------------------ */

// Accéder à l'élément p en ciblant le 2ème élément qui a la classe 'para'
let p3 = document.querySelectorAll(".para")[1];

// Accès au 1er et au dernier noeud de type texte
let premier = p3.firstChild;
let dernier = p3.lastChild;

// Récupération des valeurs des variables déclarées ci-avant
let inner1 = premier.textContent;
let inner2 = dernier.innerHTML;
console.log(`
Contenu du 1er enfant : ${inner1}
Contenu du dernier enfant : ${inner2}
`);

/* ---------------------------------------------------------------------------
Propriété nextSibling : accès aux espaces entre noeuds
------------------------------------------------------------------------------ */

// Accès à l'élément H2 à partir de sa classe
let titre1 = document.getElementById("gros_titre");

// Accès à l'espace entre la balise fermée H2 et la balise ouverte div
// let div3 = titre1.nextSibling;

// Accès à la balise ouverte div à partir de la balise fermée H2
let div4 = titre1.nextSibling.nextSibling;

// Modification de la valeur de l'élément div
div4.innerHTML = "<p>div totalement modifié !</p>";
