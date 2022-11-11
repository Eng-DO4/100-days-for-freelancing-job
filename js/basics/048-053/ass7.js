let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let index = start + true; index < mix.length; index++) {
    if (typeof mix[index] === "string") {
        continue
    }
    console.log(mix[index]);
}