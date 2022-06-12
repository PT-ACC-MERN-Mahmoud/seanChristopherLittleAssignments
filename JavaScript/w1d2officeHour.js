//ES5
function functionName(x, y) {
  return x + y;
}
console.log(functionName(2, 3));

//ES6
const add = (a, b) => {
  console.log("A", a, "B", b);
  return a + b;
};
console.log(add(6, 3));

const add2 = (a, b) => a + b;
console.log(add(6, 3));
console.log(add2(6, 6));

const add5 = (a) => a + 5;
