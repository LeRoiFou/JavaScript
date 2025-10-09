let prenom = "Pierre",
  espace = " ",
  nom = "Giraud";
let moi = `${prenom}${espace}${nom}`;
let toi = "Victor" + " " + "Durand";
let sport = "courir";
let hobbie = `J'aime ${sport}`;

console.log(
  `Contenu de la variable moi : ${moi} 
Contenu de la variable toi : ${toi} 
Contenu de la variable hobbie : ${hobbie}`
);

// Dès qu'on passe à un type string, il n'y a plus d'addition/soustraction....
let x = 4 + 2 + "1";
let y = "1" + 2 + 4;
let z = 2 + "un" + 4;
console.log(`Variable x : ${x} \nVariable y : ${y} \nVariable z : ${z}`);
