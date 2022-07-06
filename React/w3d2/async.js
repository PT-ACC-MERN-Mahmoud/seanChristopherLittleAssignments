const isEven = (num, cb) => {
  setTimeout(() => {
    if (num % 2 === 0) {
      cb(null, "even");
    } else {
      cb("odd", null);
    }
  }, 1000);
};

isEven(10, (error, result) => {
  if (error) {
    console.error("Error", error);
  } else {
    console.log("RESULT:", result);
  }
});

console.log("HELLO");

// Promises
function isEvenPromise(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("EVEN");
    } else {
      reject("ODD");
    }
  });
}

isEvenPromise(21)
  .then((result) => console.log("THE RESULT is...", result))
  .catch((err) => console.log("ERROR:", err));

isEvenPromise(30)
  .then((result) => `the result is ${result}!!!`)
  .then((str) => console.log(str))
  .catch((err) => console.log("ERROR:", err));

console.log("WORLD");

//AJAX
