// Récupération des textes dans le fichier HTML
let rec1 = document.getElementById("p1").textContent;
let rec2 = document.getElementById("p2").textContent;
let rec3 = document.getElementById("p3").textContent;
let rec4 = document.getElementById("p4").textContent;

/* ---------------------------------------------------------------------
Trouver tous les caractères à l'intérieur des crochets
--------------------------------------------------------------------- */

// Sans classe de caratères : recherche une suite complète de caractères
let r1 = /aeiouy/g;
let res1 = rec1.match(r1);

// Avec classe de caractères : recherche de chaque caractères dans un texte
let r2 = /[aeiouy]/g;
let res2 = rec1.match(r2);

// Affichage des résultats
let result1 = document.getElementById("reg1");
result1.innerHTML = `
Recherche sans classe, cad la suite complète de caractères 'aeiouy': ${res1} <br>
Recherche avec classe, cad chaque caractère 'aeiouy' dans le texte : ${res2}
`;

/* ---------------------------------------------------------------------
Autres exemples avec le recherche de caractères entre []
--------------------------------------------------------------------- */

// Trouver chaque caractère en majuscules de C à X dans le texte
let r3 = /[C-X]/g;
let res3 = rec1.match(r3);

// Trouver n'importe quel caractère sauf les caractères 'aeiou' en minuscules
let r4 = /[^aeiou]/g;
let res4 = rec1.match(r4);

// Trouver tous les chiffres entre 0 et 9
let r5 = /[0-9]/g;
let res5 = rec1.match(r5);

// Trouver une majuscule en début de chaîne de caractères
let r6 = /^[A-Z]/;
let res6 = r6.test(rec1);

// Trouver toutes successions de 4 chiffres
let r7 = /[0-9]{4}/g;
let res7 = rec1.match(r7);

// Affichage des résultats
let result2 = document.getElementById("reg2");
result2.innerHTML = `
Trouver chaque caractère de C à X en majuscules dans le texte : ${res3} <br>
Trouver n'importe quel caractère sauf les caractères 'aeiou' en minuscules : ${res4} <br>
Trouver tous les chiffres entre 0 et 9 : ${res5} <br>
Trouver une majuscule en début de chaîne de caractères : ${res6} <br>
Trouver toutes successions de 4 chiffres : ${res7}
`;

/* ---------------------------------------------------------------------
Rechercher dans plusieurs intervalles à la fois
--------------------------------------------------------------------- */

// Chercher toutes les lettres minuscules entre 'a et z', le 'à', le 'é' et le 'è'
let r8 = /[a-zàéè]/g;
let res8 = rec2.match(r8);

// Chercher toutes les lettres minuscules et majuscules de 'a à z' et de 0 à 9
let r9 = /[a-zA-Z0-9]/g;
let res9 = rec2.match(r9);

// Chercher tous ceux qui n'est pas dans l'intervalle a - z en minuscule et majuscule
let r10 = /[^a-zA-Z]/g;
let res10 = rec2.match(r10);

// Affichage des résultats
let result3 = document.getElementById("reg3");
result3.innerHTML = `
Chercher toutes les lettres minuscules entre 'a et z', le 'à', le 'é' et le 'è' : ${res8} <br>
Chercher toutes les lettres minuscules et majuscules de 'a à z' et de 0 à 9 : ${res9} <br>
Tout sauf a - z en minuscule et en majuscule : ${res10}
`;

/* ---------------------------------------------------------------------
Recherche de caractères spéciaux
--------------------------------------------------------------------- */

// Récupérer le mot 'regex' compris dans les crochets
let r11 = /\[regex\]/g;
let res11 = rec3.match(r11);

// Rechercher dans une classe, un crochet ouvrant, un crochet fermant et les 'e'
let r12 = /[e\[\]]/g;
let res12 = rec3.match(r12);

// Rechercher les chiffres et le '-'
let r13 = /[0-9-]/g;
let res13 = rec3.match(r13);

// Rechercher un '?' en fin de chaîne de caractères
let r14 = /\?$/;
let res14 = r14.test(rec3);

// Affichage des résultats
let result4 = document.getElementById("reg4");
result4.innerHTML = `
Récupérer le mot 'regex' compris dans les crochets : ${res11} <br>
Rechercher dans une classe, un crochet ouvrant, un crochet fermant et les 'e' : ${res12} <br>
Rechercher les chiffres et le '-' : ${res13} <br>
Rechercher un '?' en fin de chaîne de caractères : ${res14} <br>
`;

/* ---------------------------------------------------------------------
Les métacaractères ou les classes abrégée :
--------------------------------------------------------------------- */

// Trouve tout caractère sauf un retour à la ligne
let r15 = /./g;
let res15 = rec4.match(r15);

// Rechercher tous les chiffres
let r16 = /\d/g;
let res16 = rec4.match(r16);

// Rechercher tout ce qui n'est pas un chiffre
let r17 = /\D/g;
let res17 = rec4.match(r17);

// Rerchercher un 'r' en début ou en fin de mot
let r18 = /\br/;
let res18 = r18.test(rec4);

// Affichage des résultats
let result5 = document.getElementById("reg5");
result5.innerHTML = `
Trouve tout caractère sauf un retour à la ligne : ${res15} <br>
Rechercher tous les chiffres : ${res16} <br>
Rechercher tout ce qui n'est pas un chiffre : ${res17} <br>
Rerchercher un 'r' en début ou en fin de mot: ${res18} 
`;
