// Accès à l'élément à partir de l'ID
let my_title = document.getElementById("gros_titre");

// Accès au parent de l'élément ciblé
let my_parent = document.body;

// Suppression de l'élément
my_parent.removeChild(my_title);

/******************************************/

// Création d'un nouvel élément
let new_text_parent = document.createElement("h2");

// Assignation d'un texte à cet élément créé
new_text_parent.innerHTML = "Texte modifié en JS";

// Accès à l'élément à modifier à partir de l'ID
let my_text = document.getElementById("test");

// Modification du texte initial (nouvel élément, ancien élément)
my_parent.replaceChild(new_text_parent, my_text);
