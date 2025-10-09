// Récupération de l'ID ciblé
let heure = document.getElementById("temps");

// Variable affichant l'heure mise à jour à chaque seconde (1000 ms = 1 sec)
let tempsReel = setInterval(horloge, 1_000);

// Variable récupérant le bouton pour arrêter le temps
let stop = document.getElementById("stop");

function horloge() {
  // Récupération de l'heure actuelle dans l'objet Date
  let d = new Date();

  // Affichage de l'heure actuelle selon le faisceau horaire où on est situé
  heure.innerHTML = d.toLocaleTimeString();
}

// Arrêt de l'exécution du temps
stop.addEventListener("click", arret);
function arret() {
  clearInterval(tempsReel);
}

// Récupération des éléments HTML
let body = document.body;
let btn = document.getElementById("btn");

// Lorsqu'on appuye sur le bouton...
btn.addEventListener("click", couleur);
function couleur() {
  // Changement de couleur de fond toutes les 0.20 secondes à partir d'une
  // fonction anonyme
  setTimeout(function () {
    body.style.backgroundColor = "#3BA";
  }, 200);
  setTimeout(function () {
    body.style.backgroundColor = "#4AB";
  }, 400);
  setTimeout(function () {
    body.style.backgroundColor = "#59B";
  }, 600);
  setTimeout(function () {
    body.style.backgroundColor = "#66B";
  }, 800);
  setTimeout(function () {
    body.style.backgroundColor = "#63B";
  }, 1_000);
  setTimeout(function () {
    body.style.backgroundColor = "#83A";
  }, 1_200);
  setTimeout(function () {
    body.style.backgroundColor = "#A3A";
  }, 1_400);
  setTimeout(function () {
    body.style.backgroundColor = "#A59";
  }, 1_600);
  setTimeout(function () {
    body.style.backgroundColor = "#A77";
  }, 1_800);
  setTimeout(function () {
    body.style.backgroundColor = "#995";
  }, 2_000);
}
