// Création d'une valeur primitive
let primitive = "Je suis une valeur primitive";
let type_prim = typeof primitive;
console.log(`Type de primitive : ${type_prim}`);

// Création d'un objet primitif
let chaine = new String("Je suis un objet");
let type_chaine = typeof chaine;
console.log(`Type de chaîne : ${type_chaine}`);

// Intérêt de recourir à une valeur primitive (plus rapide et plus légère):
// possibilité d'avoir "directement" des fonctions natives
let longueur_prim = primitive.length;
let maj_prim = primitive.toUpperCase();
let maj_chaine = chaine.toUpperCase();
console.log(`Longueur de primitive : ${longueur_prim} 
    \nPrimitive en majuscules : ${maj_prim} 
    \nChaînes en majuscules : ${maj_chaine}`);
