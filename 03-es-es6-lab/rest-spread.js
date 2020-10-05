var a, b, rest;
// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

// [a, b, , , ...rest] = [1, 2, 3, 4, 5, 6, 7];
// const t = () => {
//   console.log("TEST: ", ...rest);
// };
// t();
// crest = [...rest, 10];
// console.log(crest, crest === rest);
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [5, 6, 7]
// //Position matching in arrat
// ({ a, c } = { a: 1, b: 2, c: 3 });
// console.log(a); // 1
// console.log(c); // 3

// ES7 - not implemented in Firefox 47a01
// ({a, b, ...rest} = {a:1, b:2, c:3, d:4});

a = [[1], [2], [3]];
b = [...a, [4]];
[, c] = a;
c.shift();

 b.shift().shift();

console.log("a=", a.toString());
console.log("b=", b.toString());
console.log("c=", c.toString());
