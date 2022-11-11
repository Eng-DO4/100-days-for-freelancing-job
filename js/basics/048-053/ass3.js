let start = 1;
let end = 6;

for (; start <= end; start++) {
    console.log(start);
    let breaker = 2;
    for (let cond = end - breaker; breaker <= cond; breaker += cond / cond + true) {
        console.log(`-- ${breaker}`);
    }
}