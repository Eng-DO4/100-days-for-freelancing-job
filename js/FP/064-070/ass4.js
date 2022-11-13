function specialMix(...data) {
    // Your Code Here
    let total = 0
    for (let index = 0; index < data.length; index++) {
        if (Number.isNaN(parseInt(data[index]))) {
            continue;
        }
        total += parseInt(data[index]);
    }
    return total || `All Is Strings`;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings