const compteur = () => {
  let i = 0;
  return function () {
    return i++;
  };
};
console.log(compteur());

// Cas d'une closure en instanciant la fonction ci-avant dans des variables
let plusUn = compteur();
let autreInstance = compteur();
console.log(`
Premier tour de la variable plusUn : ${plusUn()}
Deuxième tour de la variable plusUn : ${plusUn()}
Premier tour de la variable autreInstance : ${autreInstance()}
Troisième tour de la variable plusUn : ${plusUn()}
Deuxième tour de la variable autreInstance : ${autreInstance()}
Troisième tour de la variable autreInstance : ${autreInstance()}
    `);
