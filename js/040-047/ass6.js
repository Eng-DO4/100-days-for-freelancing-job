let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = [...arr1, ...arr2].sort().slice(arr2.length)
console.log(allArrs.join("").toLowerCase()); // fxy