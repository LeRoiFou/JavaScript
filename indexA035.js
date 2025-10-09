// Accès au premier élément 'p'
let p1 = document.querySelector("p");

// Fonction anonyme afin qu'elle ne s'exécute pas immédiatement
p1.onclick = function () {
  // this = élément 'p' sélectionné
  this.innerHTML = "<strong>Bravo ! </strong>";
  this.style.color = "orange";
};

/*
Mais depuis plusieurs années, il est recommandé d’utiliser addEventListener 
plutôt que l’attribut onclick pour une plus grande souplesse, 
*/
