/* -----------------------------------------------------------------------
L'objet navigator comprend 10 propriétés :
La propriété language : retourne la lange définit dans le navigateur
La propriété geolocation : définit la géolocalisation de l'utilisateur
La propriété product : nom du moteur utilisé par le navigateur (plus autorisée)
La propriété cookieEnabled : dit si les cookies sont autorisés ou non
La propriété appName : retourne le nom du navigateur (plus autorisée)
La propriété appCodeName : retourne le nom du code du navigateur (plus autorisée)
La propriété appVersion : retourne la version du navigateur utilisée (plus autorisée)
La propriété userAgent : retourne la version du navigateur utilisée (remplace appVersion)
La propriété onLine : détermine si le navigateur est en ligne ou pas
La propriété plateform : détermine quelle plateforme est compilée (plus autorisée)
----------------------------------------------------------------------- */
let langue = navigator.language;
let version = navigator.userAgent;
let cookieA = navigator.cookieEnabled;
let p1 = document.getElementById("p1");
p1.innerHTML = `
Langue utilisée : ${langue} <br>
Version utilisé : ${version} <br>
Cookie ? : ${cookieA}
`;

let loc = navigator.geolocation;
let p2 = document.getElementById("p2");
(function () {
  if (loc) {
    loc.getCurrentPosition(coordonnees);
  } else {
    p2.innerHTML = "Localisation non disponible";
  }
})();
function coordonnees(x) {
  p2.innerHTML = `
    Latitude : ${x.coords.latitude} <br>
    Longitutde : ${x.coords.longitude}
    `;
}
