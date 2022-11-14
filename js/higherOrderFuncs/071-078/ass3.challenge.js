let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let flatConc = myArray.reduce((acc, current) => {
    if (typeof current === 'object') {
        return acc += current.join('');
    } else {
        return acc += current
    }
});

console.log(flatConc)