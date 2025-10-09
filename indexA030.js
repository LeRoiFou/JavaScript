// Accès à un élément HTML par son ID avec getElementById()
let IDAccess = document.getElementById("gros_titre");
console.log(`Élément avec ID "gros_titre" :`, IDAccess);

/* Accès à tous les éléments HTML d'une même balise
   avec getElementsByTagName() */
let tagAccess = document.getElementsByTagName("p");
console.log(`Notre page contient ${tagAccess.length} paragraphe(s)`);

/* Accès à tous les éléments HTML possédant une classe spécifique
   avec getElementsByClassName() */
let classAccess = document.getElementsByClassName("cible");
console.log(
  `Notre page contient ${classAccess.length} paragraphe(s) avec la classe 'cible'`
);

// Accès à un élément correspondant à un sélecteur CSS avec querySelector()
// querySelector = premier élément correspondant
let queryAccess = document.querySelector("p a");
// querySelectorAll = liste de tous les éléments correspond
let queryAllAccess = document.querySelectorAll(".para");
console.log(`
Lien trouvé dans un paragraphe : ${queryAccess}
Premier élément .para : ${queryAllAccess[0]}
Deuxième élément .para : ${queryAllAccess[1]}
    `);

// Accès au contenu HTML interne (innerHTML)
let IDAccess2 = document.getElementById("gros_titre").innerHTML;
console.log(`Contenu HTML de "gros_titre" :`, IDAccess2);
// Si le contenu contient du HTML (ex : liens), innerHTML garde les balises
let queryAccess2 = document.querySelector(".lien").innerHTML;
console.log(`Texte + balise(s) :`, queryAccess2);
// Pour récupérer seulement le texte, on utilise textContent
let queryAccess3 = document.querySelector(".lien").textContent;
console.log(`Texte seul (sans balises) :`, queryAccess3);

// Autres accès fréquents au contenu du document
let titleAccess = document.title; // Contenu de la balise <title>
let bodyAccess = document.body; // Élément <body>
let linksAccess = document.links; // Collection de tous les liens (<a>)
console.log(`
Titre de la page : ${titleAccess}
Élément <body> : ${bodyAccess}
Premier lien : ${linksAccess[0]}
Deuxième lien : ${linksAccess[1]}
Troisième lien : ${linksAccess[2]}
    `);
