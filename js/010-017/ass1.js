// Add Variables Here
let a = 10;
let b = "20";

// Ouput
console.log(a + b); // Normal Concatenate => 1020
console.log(typeof(a + b)); // Normal Concatenate => String
console.log(`${a}${b}`); // Template Literals Way => 1020
console.log(typeof(`${a}${b}`)); // Template Literals Way => String

console.log("20\n10");
/*
  Normal Concatenate
  20
  10
*/

console.log(`20
10`);
/*
  Template Literals Way
  20
  10
*/