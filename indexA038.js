/* ------------------------------------------------------------------------
Les différentes méthodes de l'objet Event
------------------------------------------------------------------------ */

// Accès aux éléments
let div1 = document.getElementById("div1");
let p1 = document.getElementById("p1");

/* ------------------------------------------------------------------------
Propriétés target et currentTarget :
- target : retourne le type de l'élément qui déclenche l'évènement
- currentTarget : retourne le type de l'élément qui porte le gestionnaire
de l'évènement déclenchée
------------------------------------------------------------------------ */

// Evènements
div1.addEventListener("click", Message);
function Message(event) {
  this.innerHTML =
    "Element déclencheur : " +
    event.target +
    "<br> Elément portant l'évènement : " +
    event.currentTarget;
}

/* ------------------------------------------------------------------------
Propriété type : retourne le type d'évènement déclenché
------------------------------------------------------------------------ */

// Evènements
// div1.addEventListener("click", Message);
// function Message(event) {
//   this.innerHTML = "Type d'évènement déclenché : " + event.type;
// }

/* ------------------------------------------------------------------------
Propriété stopPropogation : empêche la propagation d'un évènement
------------------------------------------------------------------------ */

// Evènements
// div1.addEventListener("click", TexteD, true); // true -> phase de capture
// p1.addEventListener("click", TexteP, true);
// function TexteD(e) {
//   alert("Stop à la propagation");
//   e.stopPropagation();
// }
// function TexteP() {
//   alert("Ceci ne s'affichera pas");
// }

/* ------------------------------------------------------------------------
Propriété preventDefault : empêche l'évènement en soit
------------------------------------------------------------------------ */
// Evènements
// div1.addEventListener("click", TexteD, true); // true -> phase de capture
// p1.addEventListener("click", TexteP, true);
// function TexteD(e) {
//   e.preventDefault();
// }
// function TexteP() {
//   alert("La méthode preventDefault n'empêche pas la propagation");
// }
