let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]
let onlyNums = numsAndStrings.filter(e => typeof e === 'number').map(e => -e);
console.log(onlyNums);