let theNumber = 100020003000;

// console.log(+`${theNumber}`.split('000').join(''));

console.log(+[...new Set([...`${theNumber}`])].map(n => {if (n !== '0') return n}).join(''));

// Needed Output
// 123