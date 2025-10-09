// Les propriétés de l'objet Number
let min = Number.MIN_VALUE;
let max = Number.MAX_VALUE;
let infneg = Number.NEGATIVE_INFINITY;
let infpos = Number.POSITIVE_INFINITY;
let notnumber = Number.NaN;

console.log(`
    Min :  ${min} \n
    Max :  ${max} \n
    Infini négatif :  ${infneg} \n
    Infini positif :  ${infpos} \n
    Pas un nombre :  ${notnumber}
    `);

// Les méthodes de l'objet Number
let x = 10;
let t = x.toString();
console.log(`
    Type de x : ${typeof x}\n
    Type de t : ${typeof t}
    `);

let y = 10.4531;
let u = y.toFixed(2);
console.log(`
    Valeur de u : ${u}\n
    Type de u : ${typeof u}
    `);

let v = y.toPrecision(5);
console.log(`
    Valeur de v : ${v}\n
    Type de v : ${typeof v}
    `);

let w = y.toExponential(2);
console.log(`
    Valeur de w : ${w}\n
    Type de w : ${typeof w}
    `);

let a = true;
let b = false;
let c = new Date();
console.log(`
    True : ${Number(a)}\n
    False : ${Number(b)}\n
    Date : ${Number(c)}\n
    `);

let d = "10.4531";
let int = parseInt(d);
let dec = parseFloat(d);
console.log(`
    ParseInt() : ${int} \n
    Type : ${typeof int} \n
    ParseFloat() : ${dec} \n
    Type : ${typeof dec}
    `);
