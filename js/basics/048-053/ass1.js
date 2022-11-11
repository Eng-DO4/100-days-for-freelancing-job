let start = 10;
let end = 100;
let exclude = 40;

for (let step=start; start<=end; start+=step){
    if (start === exclude) {
        continue;
    }
    console.log(start);
}