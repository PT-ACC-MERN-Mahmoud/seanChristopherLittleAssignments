import React from "react";

const add = (props) => {
  console.log("This is inside the function: ");
  console.log(props.num1 + props.num2);
  return props.num1 + props.num2;
};

const props = {
  num1: 5,
  num2: 8,
};

let sum = add(props);

console.log("This is the sum: ");
console.log(sum);
