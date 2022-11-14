let myString = "EElllzzzzzzzeroo";

// Elzero
let filtr = myString.split('')
                    .filter((_elem, indx, arr) => arr[indx] !== arr[indx-1])
                    .join('');

console.log(filtr);