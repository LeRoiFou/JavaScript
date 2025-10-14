let b = document.getElementById("test");
b.addEventListener("click", testValeur);

function testValeur() {
  let p = document.getElementById("msg");
  let x = document.getElementById("nb").value;

  try {
    // Si le nombre envoyé n'est pas un nombre ou le champ est vide
    if (isNan(x) || x == "") {
      throw "Vous n'avez pas entré de nombre valide";
    }
    // Le nombre saisi est différent de l'intervalle requis
    else if (x < 1 || x > 10) {
      throw "Valeur trop grande ou trop petite";
    } else {
      p.innerHTML = "Nombre ok";
    }
  } catch (e) {
    p.innerHTML = e;
  } finally {
    document.getElementById("nb").value = "";
  }
}
