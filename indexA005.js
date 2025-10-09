let x = 5,
  y = 10,
  z = -2;

x += 1;
x -= 2;
console.log(x);

y *= 2;
console.log(y);

let mult = x * y;
console.log(mult);

let divi = y / z;
console.log(divi);

let mod = 13 % 3;
console.log(mod);

alert(
  `Variable mult :  ${mult}
    \nVariable divi : ${divi}
    \nVariable mod :  ${mod}`
);

let priorite = x + ((y / (4 + z)) % 3);
alert(priorite);
