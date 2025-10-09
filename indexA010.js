/*
Par défaut, les valeurs instanciées sont égale à true sauf pour les valeurs :
- Nan
- null
- 0
- undifined
- chaînes de caractères vides
*/

let heure = 18;

if (!heure < 12) {
  console.log("Il est midi passé");
}

let x = 6,
  y = "";
if (x) {
  console.log("x est évalué à true par le JavaScript");
}
if (y) {
  console.log("y est évalué à true");
} else {
  console.log("y est évalué à false");
}
