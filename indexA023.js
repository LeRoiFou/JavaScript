let d = new Date();

/*LES METHODES DE TYPE GETTER*/

// Nombre de millisecondes écoulées depuis le 01/01/1970
let dms = d.getTime();

// L'année relative à la date
let dy = d.getFullYear();

// Mois relative à la date
let dmo = d.getMonth();

// Jour relative à la date
let ddate = d.getDate();

// Jour de la semaine relative à la date
let dday = d.getDay();

// Heure relative à la date
let dh = d.getHours();

// Minutes relative à la date
let dmi = d.getMinutes();

// Secondes relative à la date
let ds = d.getSeconds();

// Millisecondes relative à la date
let dMs = d.getMilliseconds();

console.log(`
Nous sommes le ${ddate}/${dmo}/${dy} \n
Il est actuellement ${dh}:${dmi}:${ds}:${dMs}
`);

/*LES METHODES DE TYPE SETTER*/

// Définir l'année
d.setFullYear(2025, 7, 6);

// Définir une heure
d.setHours(12);

// Définir les minutes
d.setMinutes(30);

// Définir les secondes
d.setSeconds(15);

console.log(`
Date définie : ${d}
`);

// Récupération des données sur les dates
let setdy = d.getFullYear();
let setdmo = d.getMonth();
let setdday = d.getDay();
let setddate = d.getDate();
let setdh = d.getHours();
let setdmi = d.getMinutes();
let setds = d.getSeconds();

let mois = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

let jour = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

console.log(`
On est le ${jour[setdday]} ${setddate} ${mois[setdmo]} ${setdy}.\n
Il est : ${setdh} h ${setdmi} mn et ${setds} s. 
    `);
