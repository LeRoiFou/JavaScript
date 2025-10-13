/* 
Les cookies permettent de conserver des informations et d'en se reservir
Les cookies ont une durée de vie limitée, ils sont supprimés par défaut lorsque le 
navigateur @ est fermé
*/

/*
Création d'un cookie avec :
-> Attribution d'un nom et d'une valeur (ici : nom=prenom1, valeur=John)
-> Séparation par un ";"
-> Application d'une date d'expiration avec le mot clé "expires"
-> Séparation par un ";"
-> Application d'un espae de validité avec le mot clé "path"
*/
document.cookie = "prenom1=John; expires=Sun, 12 Oct 2025 10:00:00 UTC; path=/";
document.cookie = "prenom2=Lena; expires=Sun, 12 Oct 2025 10:00:00 UTC; path=/";

// Affichage des cookies
let c1 = document.cookie;
document.getElementById("cook1").innerHTML = c1;

// Modification de la valeur d'un cookie
document.cookie =
  "prenom2=Anais; expires=Sun, 12 Oct 2025 10:00:00 UTC; path=/";

// Affichage des cookies
let c2 = document.cookie;
document.getElementById("cook2").innerHTML = c2;

// Suppression d'un cookie en mettant une date déjà passée
document.cookie = "prenom1=John; expires=Sun, 12 Oct 2005 10:00:00 UTC; path=/";

// Affichage des cookies
let c3 = document.cookie;
document.getElementById("cook3").innerHTML = c3;

/* -----------------------------------------------------------------------
Fonctions pour automatiser la création / la lecture et la suppression d'un cookie
----------------------------------------------------------------------- */

function creerCookie(nom, valeur, jour) {
  // Si les jours ont bien été définis...
  if (jour) {
    // On créé un objet date stockant la date actuelle
    let date = new Date();
    // On définit la date d'expiration du cookie
    date.setTime(date.getTime() + jour * 24 * 60 * 60 * 1_000);
    // On met la date au bon format pour un cookie
    let exp = "; expires=" + date.toGMTString();
  }
  // Si les jours n'ont pas été définis, pas besoin de calcul
  else {
    let exp = "";
  }
  document.cookie = nom + "=" + valeur + exp + ";path=/";
}

function lireCookie(nom) {
  // On récupère le nom du cooke et le signe '='
  let nomEtEgale = nom + "=";
  // On récupère tous les cookies dans un tableau
  let cTableau = document.cookie.split(";");
  // Parcourir le tableau créé
  for (let i = 0; i < c.cTableau.length; i++) {
    // on récupère tous les noms et valeurs des cookies
    let c = cTableau[i];
    // On supprime les espaces potentiels dans c jusqu'à tomber sur le nom d'un cookie
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nomEtEgale) == 0) {
      return c.substring(nomEtEgale.length, c.length);
    }
  }
  // Si le nom du cookie n'est pas trouvé, c'est qu'il n'existe pas
  return null;
}

function supprimerCookie(nom) {
  // On donne le nom du cookie à supprimer, puis on utilise creerCookie()
  // pour indiquer une date d'expiration passée
  creerCookie(nom, "", -1);
}

// On crée deux cookies
creerCookie("Cookie1", "Je suis le premier cookie", 7);
creerCookie("Cookie2", "Je suis un autre cookie", 7);

let affiche = document.getElementById("cook4");
affiche.innerHTML = "Valeur : " + lireCookie("Cookie1");
supprimerCookie("Cookie1");
