let heure = 22;

if (typeof heure == "number") {
  if (heure < 0 || heure > 23) {
    console.log("L'heure est invalide");
  } else if (heure < 12) {
    console.log("C'est le matin");
  } else if (heure == 12) {
    console.log("Il est midi pile");
  } else {
    console.log("C'est l'après-midi ou le soir");
  }
} else {
  console.log("La valeur d'entrée ne semble pas valide");
}
