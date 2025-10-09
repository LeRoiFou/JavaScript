// Accès au premier élément 'p'
let p1 = document.querySelector("p");

/* --------------------------------------------------------------------
1ère utilisation de la méthode addEventListener() 
-------------------------------------------------------------------- */

// Evènement lorsqu'on clique sur le premier élément 'p'
// Pas de parenthèse dans la fonction changeTexte pour qu'elle ne s'exécute
// pas immédiatement
// p1.addEventListener("click", changeTexte);

// Fonction qui va s'appliquer selon la ligne de code ci-avant
function changeTexte() {
  this.innerHTML = "<strong>Bravo !</strong>";
  this.style.color = "orange";
}

/* --------------------------------------------------------------------
2ème utilisation de la méthode addEventListener() 
-------------------------------------------------------------------- */

// Possibilité d'exécuter + d'une fonction avec une seule fonction
// Ici deux messages s'affichent avec un seul clique sur l'élément p
// p1.addEventListener("click", message1);
// p1.addEventListener("click", message2);

function message1() {
  alert("Premier message");
}

function message2() {
  alert("Deuxième message");
}

/* --------------------------------------------------------------------
3ème utilisation de la méthode addEventListener() 
-------------------------------------------------------------------- */
// Lorsqu'on passe sur le texte...
p1.addEventListener("mouseover", fonction1);
// Lorsqu'on sort de l'élément 'p'
p1.addEventListener("mouseout", reset1);
// Lorsqu'on clique sur le texte...
p1.addEventListener("mousedown", fonction2);
// Lorsqu'on relache le clique de la souris...
p1.addEventListener("mouseup", reset2);

function fonction1() {
  this.innerHTML = "Cliquez moi maintenant";
  this.style.backgroundColor = "orange";
}

function reset1() {
  this.innerHTML = "Cliquez moi !";
  this.style.backgroundColor = "";
}

function fonction2() {
  this.innerHTML = "Bravo !";
  this.style.color = "#26C";
  this.style.fontWeight = "bold";
  this.style.fontSize = "24px";
}

function reset2() {
  this.innerHTML = "Cliquez moi !";
  this.style.color = "";
  this.style.fontWeight = "";
  this.style.fontSize = "";
}
