/*
L'objet location possède 9 propriétés :
- hash : retourne la partie encre d'une URL
- search : retourne la partie recherche d'une URL
- pathname : retourne le chemin d'une URL
- href : retourne l'URL complète
- hostname : retourne le nom de l'hôte
- port : retourne le port de l'URL
- protocol : retourne le protocole de l'URL
- host : retourne le nom de l'hôte et le port relatif à l'URL
- origin : retourne le nom de l'hôte, le nom de l'hôte et le protocole de l'URL

Et dispose 3 méthodes :
- assign() : charge un nouveau document
- reload() : recharge le document
- replace() : remplace le document actuel par un autre
*/

let para = document.querySelector("p");
let charger = document.getElementById("charger");
let recharger = document.getElementById("recharger");
let changer = document.getElementById("changer");

charger.addEventListener("click", charge);
recharger.addEventListener("click", recharge);
changer.addEventListener("click", change);

function charge() {
  location.assign("http://pierre-giraud.com");
}
function recharge() {
  location.reload();
}
function change() {
  location.replace("http://pierre-giraud.com");
}

let url = location.href;
let chemin = location.pathname;

para.innerHTML = `URL : ${url} <br>Chemin : ${chemin}`;
