var a = 10;
var b = 13;

a = a + b; // 10 + 13 === 23;
b = a - b; // 23 - 13 === 10;
a = a - b;

console.log(a);
console.log(b);

/* ---- */

var c = 10;
var d = 13;

c = c ^ d;
d = c ^ d;
c = c ^ d;

console.log(c);
console.log(d);