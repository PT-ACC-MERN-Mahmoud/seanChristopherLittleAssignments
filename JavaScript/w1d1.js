//array
// let arr = [1, 2, 3, 4];
// console.log(arr[0]);

//object
const student = {
  name: "John",
  email: "j@j.com",
  cohort: "June-6",
};

console.log(student.name);
console.log(student["email"]);

//object destructuring
const obj = {
  userName: "John",
  age: 30,
  stack: ["Python", "MERN"],
};

const { userName, age } = obj;
console.log("name", userName);
console.log("age", age);

//array destructuring
const arr = [1, 2, 3, 4, 5];
const [firstItem, , thirdItem] = arr;
console.log(firstItem, thirdItem);

//spread operator
const { stack, ...others } = obj;
console.log("stack", stack);
console.log("others", others);

const [firstIndex, ...rest] = arr;
console.log("first index", firstIndex);
console.log("rest", rest);
console.log("arr", arr);

//functions
function addTwoNumbers(a, b) {
  return a + b;
}
console.log(addTwoNumbers(4, 3));

//fat arrow
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 2));

//implicit return
//(do not use inside objects as methods or as a constructor for a Class!!!)
const add1 = (a, b) => a + b;
const add2 = (a) => a + 10;
console.log(add(2, 3));
