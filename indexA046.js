// Récupération du contenu à partir des ID
let recP1 = document.getElementById("p1").textContent;
let recP2 = document.getElementById("p2").textContent;
let recP3 = document.getElementById("p3").textContent;

/* --------------------------------------------------------------------------
Les quantifieurs en REGEX  avec '+' : 1er exemple
-------------------------------------------------------------------------- */

// Rechercher un "1" suivi d'au moins un "0" (10, 100, 1000,...) dans toute
// la chaîne de caractères
let r1 = /10+/g;

// Méthode match() : recherche des caractères
let res1 = recP1.match(r1);

// Affichage du résultat
let result1 = document.getElementById("reg1");
result1.innerHTML = `
Résultat(s) en recherchant un "1" suivi d'au moins un "0" : ${res1}
`;

/* --------------------------------------------------------------------------
Les quantifieurs en REGEX avec '+' : 2ème exemple
-------------------------------------------------------------------------- */

// Le paragraphe contient au moins un "x"
let r2 = /x+/;

// Méthode test() : retourne un booléen pour donner le résultat recherché
let res2 = r2.test(recP2);

// Affichage du résultat
let result2 = document.getElementById("reg2");
result2.innerHTML = `
Paragraphe contenant au moins un 'x' ? ${res2}
`;

/* --------------------------------------------------------------------------
Les quantifieurs en REGEX avec '?'
-------------------------------------------------------------------------- */

// Rechercher soit un "e" seul, soit la suite "end" dans toute la chaîne de
// caractères
let r3 = /e(nd)?/g;

// Méthode match() : recherche des caractères
let res3 = recP2.match(r3);

// Affichage du résultat
let result3 = document.getElementById("reg3");
result3.innerHTML = `
Résultat(s) en recherchant soit un 'e' seul, soit la suite 'end' dans toute la chaîne de caractères : ${res3}
`;

/* --------------------------------------------------------------------------
Les quantifieurs en REGEX avec '$'
-------------------------------------------------------------------------- */

// Rechercher si le paragraphe se termine par un "e"
let r4 = /e$/;

// Méthode test() : retourne un booléen pour donner le résultat recherché
let res4 = r4.test(recP2);

// Affichage du résultat
let result4 = document.getElementById("reg4");
result4.innerHTML = `
Paragraphe se terminant par 'e' ? ${res4}
`;

/* --------------------------------------------------------------------------
Les quantifieurs en REGEX avec '{nombre}'
-------------------------------------------------------------------------- */

// Vérifier si le paragraphe contient 2 'p' à la suite
let r5 = /p{2}/;

// Méthode test() : retourne un booléen pour donner le résultat recherché
let res5 = r5.test(recP2);

// Affichage du résultat
let result5 = document.getElementById("reg5");
result5.innerHTML = `
Paragraphe contenant 2 'p' à la suite ? ${res5}
`;

/* --------------------------------------------------------------------------
Les quantifieurs en REGEX avec '(?=)'
-------------------------------------------------------------------------- */

// Vérifier si le paragraphe contient le mot 'Java' suivi de 'Script'
let r6 = /Java(?=Script)/;

// Méthode test() : retourne un booléen pour donner le résultat recherché
let res6 = r6.test(recP2);

// Affichage du résultat
let result6 = document.getElementById("reg6");
result6.innerHTML = `
Paragraphe contenant le mot 'Java' suivi de 'Script' ? ${res6}
`;

/* --------------------------------------------------------------------------
Les options et les modificateurs
-------------------------------------------------------------------------- */

// Récupérer les mots commençant avec la lettre 'd'
let r9 = /^d/;

// Rechercher si une ligne commence par un d
let r10 = /^d/m;

// Méthode test() : retourne un booléen pour donner le résultat recherché
let res9 = r9.test(recP3);
let res10 = r10.test(recP3);

// Affichage des résultats
let result7 = document.getElementById("reg7");
result7.innerHTML = `
Récupérer les mots commençant avec la lettre 'd' : ${res9}<br>
Rechercher si une ligne commence par un d : ${res10}
`;
