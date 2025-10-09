/* ------------------------------------------------------------------
La méthode open() permet d'ouvrir une fenêtre ou un onglet
1er argument : URL de destination
2nd argument : où doit s'ouvrir la nouvelle page (par ex _blank) avec 
l'attribution d'un nom
3ème argument : largeur, hauteur, position de la fenêtre...

Les bloqueurs de popup et politiques de sécurité des navigateurs peuvent empêcher 
l’ouverture ou la modification des fenêtres de façon programmatique
------------------------------------------------------------------ */
let para = document.querySelector("p");
para.addEventListener("click", ouvrirFenetre);
function ouvrirFenetre() {
  window.open("http://pierre-giraud.com", "_blank", "width=500, height=300");
}

/* ------------------------------------------------------------------
La méthode close() permet de fermer une fenêtre ou un onglet sans argument

Les bloqueurs de popup et politiques de sécurité des navigateurs peuvent empêcher 
l’ouverture ou la modification des fenêtres de façon programmatique
------------------------------------------------------------------ */
// Assignation d'une valeur vide qui constituera par la suite la nouvelle fenêtre
let fenetre = "";

let ouvrir = document.getElementById("ouvrir");
let fermer = document.getElementById("fermer");
ouvrir.addEventListener("click", fOuvrir);
fermer.addEventListener("click", fFermer);
function fOuvrir() {
  fenetre = window.open("./indexA039_Bis.html", "_blank", "width=500");
}
function fFermer() {
  fenetre.close();
}

/* ------------------------------------------------------------------
La méthode permet de redimensionner une fenêtre ou un onglet.
Elle va prendre comme argument la largeur et la hauteur en pixels

Les bloqueurs de popup et politiques de sécurité des navigateurs peuvent empêcher 
l’ouverture ou la modification des fenêtres de façon programmatique
------------------------------------------------------------------ */
let modifier = document.getElementById("modifier");
modifier.addEventListener("click", fModifier);
function fModifier() {
  fenetre.resizeTo(300, 300);
}
