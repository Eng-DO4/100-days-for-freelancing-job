function multiply(...params) {
    let total = 1;
    for (let index = 0; index < params.length; index++) {
        if (typeof params[index] === 'string') {
            continue;
        }
        total *= Math.trunc(params[index]);
    }
    console.log(total);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000