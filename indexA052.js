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

/* 00:07:55 */
