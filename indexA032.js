// Ajout d'un élément p avec un attribut id
let newPara = document.createElement("p");
newPara.id = "nouveau";

// Nouveau texte
let texte = document.createTextNode("Inséré");

// Texte rattaché à l'élément p
newPara.appendChild(texte);

// Sélection du premier paragraphe qui a l'attribut ID 'para'
let para1 = document.querySelector(".para");

// Insertion du nouveau texte à la fin de l'élément body
// document.body.appendChild(newPara);

// Insertion du nouveau texte avant premier texte qui dispose de l'attribut
// ID 'para'
document.body.insertBefore(newPara, para1);
