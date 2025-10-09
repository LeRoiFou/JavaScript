let prenoms = ["Pierre", "Laurent", "Lena", "Sonya"],
  a = "";
for (let index = 0; index < prenoms.length; index++) {
  a += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
}
console.log(`
Le tableau initial contient ${prenoms.length} éléments : \n${a}
`);

// Ajout de nouveaux éléments en fin de tableau avec la méthode push()
// let pushtest = prenoms.push("Easy", "Erin");
// let b = "";
// for (let index = 0; index < prenoms.length; index++) {
//   b += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
// }
// console.log(`
// Le tableau contient ${pushtest} éléments : \n${b}
// `);

// Suppression des éléments avec la méthode pop()
// let poptest = prenoms.pop();
// let c = "";
// for (let index = 0; index < prenoms.length; index++) {
//   c += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
// }
// console.log(`
// ${c}Nous avons supprimé ${poptest} du tableau
// `);

// Ajouter des éléments en début de tableau avec la méthode unshift()
// let unshifttest = prenoms.unshift("Dean", "Clint");
// let d = "";
// for (let index = 0; index < prenoms.length; index++) {
//   d += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
// }
// console.log(`
// Le tableau contient ${unshifttest} éléments : \n${d}
// `);

// Supprimer des éléments en début de tableau avec la méthode shift()
// let shifttest = prenoms.shift();
// let e = "";
// for (let index = 0; index < prenoms.length; index++) {
//   e += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
// }
// console.log(`
// ${e}Nous avons supprimé ${shifttest} du tableau
// `);

// Ajouter ou supprimer des éléments choisis avec la méthode splice() avec
// en 1er argument le n° de composant de réf à ajouter / supprimer le(s) élément(s)
// en 2ème argument le nombre d'éléments à supprimer
// à partir du 3ème argument le(s) élément(s) à ajouter
// Dans cet exemple, on ajoute des éléments
// prenoms.splice(1, 0, "Florian", "Chloé");
// let e = "";
// for (let index = 0; index < prenoms.length; index++) {
//   e += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
// }
// console.log(`
// Eléments du nouveau tableau :
// ${e}\n
// `);

// Ajouter ou supprimer des éléments choisis avec la méthode splice() avec
// en 1er argument le n° de composant de réf à ajouter / supprimer le(s) élément(s)
// en 2ème argument le nombre d'éléments à supprimer
// à partir du 3ème argument le(s) élément(s) à ajouter
// Dans cet exemple, on supprime des éléments
// prenoms.splice(1, 3);
// let e = "";
// for (let index = 0; index < prenoms.length; index++) {
//   e += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
// }
// console.log(`
// Eléments du nouveau tableau :
// ${e}\n
// `);

// Classer les éléments d'un tableau avec la méthode sort()
// Classe d'abord les mots en majuscule puis en minuscule, et trie par caractères
// let tabsort = ["Pierre", "pierre", "Sonya", "sonya"].sort();
// let sorttest = "";
// for (let index = 0; index < tabsort.length; index++) {
//   sorttest += `Prénom n° ${index + 1} : ${tabsort[index]} \n`;
// }
// console.log(`
// Le tableau trié contient ${tabsort.length} éléments : \n${sorttest}
// `);

// Inverser l'ordre des éléments d'un tableau avec la méthode reverse()
// tabsort.reverse();
// let reversetest = "";
// for (let index = 0; index < tabsort.length; index++) {
//   reversetest += `Prénom n° ${index + 1} : ${tabsort[index]} \n`;
// }
// console.log(`
// Le tableau 'inversé' contient ${tabsort.length} éléments : \n${reversetest}
// `);

// Chaines de caractères avec la méthode join()
// let chaine = prenoms.join(" / ");
// for (let index = 0; index < prenoms.length; index++) {
//   a += `Prénom n° ${index + 1} : ${prenoms[index]} \n`;
// }
// console.log(`
// Notre tableau converti en type str :
// ${chaine}
// `);

// Création d'un nouveau tableau avec la méthode slice()
// let filles = prenoms.slice(2, 4),
//   p = "";
// for (let index = 0; index < filles.length; index++) {
//   p += `Prénom n° ${index + 1} : ${filles[index]} \n`;
// }
// console.log(`
// Le tableau comprenant que les filles contient ${filles.length} éléments : \n${p}
// `);

// Concaténation de différents tableaux avec la méthode concat()
// let garcons = ["Pierre", "Laurent"];
// let filles = ["Sonya", "Lena", "Easy"];
// let animaux = ["Bubulle", "Minouche"];
// let gf = garcons.concat(filles);
// let fg = filles.concat(garcons);
// let fusion = garcons.concat(filles, animaux);
// console.log(`
//   Valeurs du tableau garçons : ${garcons} \n
//   Valeurs du tableau filles : ${filles} \n
//   Valeurs du tableau concaténé garçons-filles : ${gf} \n
//   Valeurs du tableau concaténé filles-garçons : ${fg} \n
//   Valeurs du tableau concaténé filles-garçons-animaux : ${fusion} \n
//   `);
