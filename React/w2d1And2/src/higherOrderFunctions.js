let arr = [1, 2, 3, 4, 5];

//forEach example
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  //   console.log(element);
  console.log(`index ${i}, value: ${element}`);
}

console.log("=====FOREACH=====");
arr.forEach((ele, index) => {
  console.log(`index ${index}, value: ${ele}`);
});

//.map example
//create a new array
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  newArr.push(element * 2);
}
console.log("NEW ARRAY", newArr);

console.log("=====.MAP=====");
let newArr2 = arr.map((ele, index) => {
  return ele * 2;
});
console.log("Array Map", newArr2);
console.log(
  "TYPE OF ARRAY?",
  typeof newArr2,
  //typeof will return array as an object
  //Array.isArray will return Boolean
  Array.isArray(newArr2),
  Array.isArray({})
);

//.filter example
let filteredArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 4) {
    filteredArray.push(arr[i]);
  }
}
console.log(filteredArray);

console.log("=====>FILTER=====");
let filteredArray2 = arr.filter((ele, index) => {
  return ele !== 4;
});
console.log(filteredArray2);

//reduce example
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("SUM", sum);

let sum2 = arr.reduce((acc, ele, index) => {
  return acc + ele;
}, 0);
console.log(sum2);

//reduce example w/ split (outside question)
let x = ["str 1", "str 2", "str 3"];
console.log(x[0].split(" ")[1]);

let sum3 = x.reduce((acc, ele, index) => {
  return acc + Number(ele.split(" ")[1]);
}, 0);
console.log(sum3);
