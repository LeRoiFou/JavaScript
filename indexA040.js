let hauteur = screen.height;
let hauteurDispo = screen.availHeight;
let profondeur = screen.pixelDepth;

let para = document.querySelector("p");
para.innerHTML = `
Hauteur de l'écran : ${hauteur} px <br>
Hauteur disponible de l'écran : ${hauteurDispo} px <br>
Profondeur de couleur des pixels sur l'écran : ${profondeur} bits/px
`;
