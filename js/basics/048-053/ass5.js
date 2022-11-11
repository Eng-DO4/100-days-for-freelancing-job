let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = 1;

for (let index = 0; index < friends.length; index++) {
    if (friends[index].startsWith(letter.toUpperCase())) {
        continue;
    }
    console.log(`${counter++} => ${friends[index]}`);
}