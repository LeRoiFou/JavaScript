// Récupation de la 1ère ligne avec la balise 'p'
let expr = document.querySelector("p");

// Récupération de la chaîne de caractère de la 1ère ligne avec la balise 'p'
let rec = document.querySelector("p").textContent;

/* -------------------------------------------------------------------------
Recherches avec les REGEX
------------------------------------------------------------------------- */
// Recherche du mot 'xxx' en tenant compte de la casse (majuscule / minuscule)
let engagez = /engagez/;
let vous = /vous/;
let contenu = /ENGAGEZ/;
let aient = /aient/;

// Recherche du mot 'xxx' sans tenir compte de la casse (majuscule / minuscule),
// grâce au flage 'i' ('ignore case')
let engagez_i = /engagez/i;
let contenu_i = /ENGAGEZ/i;

// Recherche de toutes les occurrences du mot 'xxx' avec le flag 'g' (global),
// en tenant compte de la casse (majuscule / minuscule)
let vous_g = /vous/g;

// Recherche de toutes les occurrences du mot 'xxx', toujours sans tenir
// compte de la casse ('i'), et cette fois-ci avec le flag 'g' ('global')
let engagez_gi = /engagez/gi;

/* -------------------------------------------------------------------------
La méthode match() : recherche des caractères
------------------------------------------------------------------------- */
let varMatch1 = expr.textContent.match(engagez_i);
let varMatch2 = expr.textContent.match(engagez_gi);

let resultat1 = document.getElementById("regMatch");
resultat1.innerHTML = `
Résultat de match() sans tenir de la casse : ${varMatch1}<br>
Résultat de match() avec toutes les occurrences sans tenir de la casse : ${varMatch2}
`;

/* -------------------------------------------------------------------------
La méthode search() : retourne à la position à laquelle se trouve la première
occurrence ciblée, en commençant par 0 (-1 s'il ne trouve pas)
------------------------------------------------------------------------- */
let varSearch1 = expr.textContent.search(engagez_i);
let varSearch2 = expr.textContent.search(engagez);

let resultat2 = document.getElementById("regSearch");
resultat2.innerHTML = `
Résultat de search() sans tenir de la casse : ${varSearch1}<br>
Résultat de search() en tenant de la casse : ${varSearch2}<br>
`;

/* -------------------------------------------------------------------------
La méthode replace() : rechercher une expression et remplacer par une autre
------------------------------------------------------------------------- */
let varReplace1 = expr.textContent.replace(vous, "moi");
let varReplace2 = expr.textContent.replace(vous_g, "moi");

let resultat3 = document.getElementById("regReplace");
resultat3.innerHTML = `
Résultat de remplace() en tenant de la casse : ${varReplace1}<br>
Résultat de remplace() avec toutes les occurrences en tenant de la casse : ${varReplace2}<br>
`;

/* -------------------------------------------------------------------------
La méthode test() : rechercher une séquence de caractères dans une chaîne
de caractères en retournant un boléen
------------------------------------------------------------------------- */
let varTest1 = contenu.test(rec);
let varTest2 = contenu_i.test(rec);

let resultat4 = document.getElementById("regTest");
resultat4.innerHTML = `
Résultat de test() avec 'ENGAGEZ' (sensible à la casse) : ${varTest1}<br>
Résultat de test() avec 'engagez' (insensible à la casse) : ${varTest2}<br>
`;

/* -------------------------------------------------------------------------
La méthode exec() : rechercher une séquence de caractères dans une chaîne
de caractères en renvoyant le texte rechercher ou "null" si la recherche
est infructueuse
------------------------------------------------------------------------- */
let varExec = aient.exec(rec);

let result5 = document.getElementById("regExec");
result5.innerHTML = `
Résultat de exec() avec 'aient' (sans tenir de la casse) : ${varExec}<br>
`;
