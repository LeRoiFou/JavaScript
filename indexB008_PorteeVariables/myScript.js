/*
Lien : https://www.youtube.com/watch?v=Ew7KG2j8eII
Cours : portée des variables

Portée des variables : 
Certaines variables ne sont déclarées que dans une fonction, lorsqu'elles ne
sont utiles que dans cette fonction

01:12:00
Date : 28-03-24
*/

const add = () => {
  let a = 4;
  console.log(a + 2);
};

add();

// Appel de la variable pas possible en dehors de la fonction, car la variable
// est déclarée dans la fonction add()
console.log(a);
