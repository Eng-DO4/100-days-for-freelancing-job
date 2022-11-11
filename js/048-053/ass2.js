let start = 10;
let end = 0;
let _stop = 3;

for (; start >= _stop; start--) {
    if (start === 10) {
        console.log(start);
        continue;
    }
    console.log(`${end}${start}`)
}