/* ----------------------------------------------------------------------
L'objet history contient une propriété et 3 méthodes :

La propriété length permet de connaître le nombre d'url dans l'historique

La méthode back() : permet de charger la dernière url dans l'historique
La méthode forward() : permet de charger l'URL la plus récenter par rapport à la dernière
La méthode go() : permet de charger une URL spécifique dans l'historique
---------------------------------------------------------------------- */

let para = document.querySelector("p");
let precedent = document.getElementById("precedent");
let suivant = document.getElementById("suivant");
let specifique = document.getElementById("specifique");

precedent.addEventListener("click", arriere);
suivant.addEventListener("click", avant);
specifique.addEventListener("click", spec);

function arriere() {
  history.back();
}

function avant() {
  history.forward();
}

function spec() {
  history.go(-3);
}

let histo = history.length;
para.innerHTML = `URLS : ${histo}`;
