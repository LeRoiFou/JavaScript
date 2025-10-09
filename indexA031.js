// Modification du contenu de l'élément HTML avec l'ID 'gros_titre'
document.getElementById("gros_titre").innerHTML = "Titre modifié";

// Données complémentaires du contenu de l'élément HTML ci-avant
document.getElementById("gros_titre").innerHTML +=
  " et du contenu complémentaire en JS";

// Ciblage de l'élément 'a' : modification du lien
document.querySelector("a").href = "http://wikipedia.org";

// Modification de l'attribut classe '.para' -> visible dans "Inspecter"
document.querySelector(".para").className = "para1";

// Changer la couleur et la taille du texte
document.getElementById("gros_titre").style.color = "orange";
document.getElementById("gros_titre").style.fontSize = "40px";
