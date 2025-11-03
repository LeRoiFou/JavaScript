/* *******************************************************************
LES SELECTEURS

Pour le script suivant :
document.querySelector("h4").style.background = "yellow";

- document -> c'est le DOM
- querySelector() -> c'est la méthode
- style -> c'est le style CSS
- background -> intervention sur le background
*/

/* *******************************************************************
CLICK EVENT : https://youtu.be/bP4e5Kwz8EE?t=1828
*/

// Déclaration des variables
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");

// Test des scripts : permet de tester si l'instruction ci-avant ok
console.log(questionContainer);
console.log(btn1, btn2);
console.log(response);

// A chaque fois qu'on clique sur un élément de la balise comprenant la
// classe 'click-event', on déclenche un console.log() -> ici, dans la console
// 'click' s'affiche à chaque clic
questionContainer.addEventListener("click", () => {
  console.log("Click !");
});

// A chaque fois qu'on clique sur un élément de la balise comprenant la
// classe 'question-clicked', le style de l'élément cliqué change de style
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

// A chaque fois qu'on clique sur le bouton
btn1.addEventListener("click", () => {
  // Affichage de la réponse
  response.classList.add("show-response");
  response.style.background = "green";
});

// A chaque fois qu'on clique sur le bouton
btn2.addEventListener("click", () => {
  // Affichage de la réponse
  response.classList.add("show-response");
  response.style.background = "red";
});

/* *******************************************************************
MOUSE EVENTS
*/

// Déclaration des variables
const mousemouv = document.querySelector(".mousemove");

// Test des scripts : permet de tester si l'instruction ci-avant ok
console.log(mousemouv);

window.addEventListener("mousemove", (e) => {
  mousemouv.style.left = e.pageX + "px";
  mousemouv.style.top = e.pageY + "px";
});
