// Instanciation de l'objet Date() + nombre de ms écoulées depuis le 01/01/70
let datelit = Date();
let datems = Date.now();
console.log(`
Date littérale : ${datelit} \n
Date sous forme de ms depuis le 01/01/1970 : ${datems}
`);

// Situation à 0 ms
let d = new Date(0);
console.log(`${d}`);

// Situation à X ms
let e = new Date(604800000);
console.log(`${e}`);

// Dates modifiées
let f1 = new Date(2025, 6, 25, 12, 30, 20, 110);
let f2 = new Date(2025, 6, 25);
console.log(`
Date modifiée 1 : ${f1} 
\nDate modifiée 2 : ${f2}
`);

// Format de date ISO courte / ISO longue
let diso1 = new Date("2025-06-15");
let diso2 = new Date("2025-06-15T12:00:00");
console.log(`
Date ISO courte : ${diso1} 
\nDate ISO longue : ${diso2}
`);

// Format de date courte / date longue / date complète
let dcourte = new Date("06/15/2025");
let dlongue = new Date("January 25 2025 21:00:00");
let dcomp = new Date("Sun Jan 25 2025 21:00:00 GMT+0100");
console.log(`
Date courte : ${dcourte} 
\nDate longue : ${dlongue}
\nDate complète : ${dcomp}
`);
