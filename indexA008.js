let heure = 22;

if (typeof heure == "number") {
  if (heure < 12) {
    console.log("C'est le matin");
  } else if (heure == 12) {
    console.log("Il est midi");
  } else if (heure <= 18) {
    console.log("C'est l'après-midi");
  } else {
    console.log("C'est le soir");
  }
} else {
  console.log("Mauvais type de valeur");
}
