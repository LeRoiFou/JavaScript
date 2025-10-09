let texte = "J'apprends le JAVASCRIPT";

// Minuscules et majuscules
let texteMin = texte.toLowerCase();
let texteMaj = texte.toUpperCase();
console.log(
  `Texte de base : ${texte} 
  \nTexte en minuscules : ${texteMin} 
  \nTexte en majuscules : ${texteMaj}
  `
);

// Position des caractères
let pos0 = texte.charAt(0);
let pos3 = texte.charAt(3);
let pos11 = texte.charAt(11);
console.log(
  `Texte de base : ${texte} 
    \nTexte en position 0 : ${pos0}
    \nTexte en position 3 : ${pos3}
    \nTexte en position 11 : ${pos11}
    `
);

// N° de position des caractères / mots
let premiere = texte.indexOf("p");
let derniere = texte.lastIndexOf("p");
let sequence = texte.indexOf("le");
let nontrouve = texte.indexOf("z");
let jmaj = texte.indexOf("J", 1);
console.log(
  `Texte de base : ${texte} 
    \nPremier p trouvé en position : ${premiere}
    \nDernier p trouvé en position : ${derniere}
    \nPremier "le" trouvé en position : ${sequence}
    \nPremier "z" trouvé en position : ${nontrouve}
    \nPremier "J" majuscule trouvé en position : ${jmaj}
    `
);

// Remplacements
console.log(texte.replace("JAVASCRIPT", "PHP"));

// Extractions
console.log(texte.slice(0, 10));
console.log(texte.slice(-11, -1));
let nouv_text = "       J'apprends le JAVASCRIPT ";
console.log(nouv_text.slice(-11, -1));

// Supression des espaces superflues
let texteNettoye = nouv_text.trim();
console.log(`
    Avant la fonction trim() : ${nouv_text}
    \n Après la fonction trim() : ${texteNettoye}
    `);
