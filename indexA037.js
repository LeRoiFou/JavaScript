/* -------------------------------------------------------------------------
Cas complexe
---------------------------------------------------------------------------- */

// Accès aux éléments
let div1 = document.getElementById("div1");
let p1 = document.getElementById("p1");
let div2 = document.getElementById("div2");
let p2 = document.getElementById("p2");

// Phase de bouillonnement utilisée pour div1 et p1
div1.addEventListener("click", MessageDiv1);
p1.addEventListener("click", MessageP1);
function MessageDiv1() {
  alert("Evènement du div1");
}
function MessageP1() {
  alert("Evènement du p1");
}

// Phase de capture utilisée pour div2 et p2
div2.addEventListener("click", MessageDiv2, true);
p2.addEventListener("click", MessageP2, true);
function MessageDiv2() {
  alert("Evènement du div2");
}
function MessageP2() {
  alert("Evènement du p2");
}

/* -------------------------------------------------------------------------
Cas complexe
---------------------------------------------------------------------------- */

// Accès aux éléments
let body = document.body;
let div3 = document.getElementById("div3");
let p3 = document.getElementById("p3");
let strong = document.querySelector("strong");

// Phase de capture utilisée pour p3 et strong
p3.addEventListener("click", MessageP3, true);
strong.addEventListener("click", MessageStrong, true);
function MessageP3() {
  alert("Capture paragraphe avec l'élément p3 (capture -> descente)");
}
function MessageStrong() {
  alert("Capture de la balise strong (capture -> descente)");
}

// Phase de bouillonnement utilisée pour body et div3
body.addEventListener("click", MessageBody);
div3.addEventListener("click", MessageDiv3);
function MessageBody() {
  alert("Evènement du body (bouillonnement -> remontée)");
}
function MessageDiv3() {
  alert("Evènement du div3 (bouillonnement -> remontée)");
}
