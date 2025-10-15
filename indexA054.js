// Toujours déclarer le mode script en début du fichier JS !!!
"use strict";
let afficheX = document.getElementById("varX");
let afficheY = document.getElementById("varY");

let x = 5;
/* La variable est déclarée sans l'instruction "let", donc rien ne s'affichera*/
y = 10;
afficheX.innerHTML = x;
afficheY.innerHTML = y;
