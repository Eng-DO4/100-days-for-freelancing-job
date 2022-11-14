let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let conc = mix.map((elem) => {
    Number.isNaN(parseInt(elem)) ? elem : '';
}).reduce((acc, current) => acc += current);

console.log(conc);