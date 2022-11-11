let start = 0;
let swappedName = "elZerO";

let output = swappedName.toUpperCase();
let temp = output.split("");
for (let index = 0; index < output.length; index++) {
    if (index === 2 || index === 5) {
        temp[index] = temp[index].toLowerCase();
    }
}
output = temp.join("")
console.log(output);

// Output
"ELzERo"