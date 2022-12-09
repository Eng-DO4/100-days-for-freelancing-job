let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let [{title: t, age: a, available: av, skills: [, s]}, , ] = myFriends

switch (chosen) {
    case 1:
        break;
    case 2:
        [, {title: t, age: a, available: av, skills: [, s]}, ] = myFriends
        break;
    case 3:
        [ , , {title: t, age: a, available: av, skills: [, s]}] = myFriends
        break;
    default:
        console.log('choose int number from {1,2,3}')
}

console.log(t)
console.log(a)
console.log(av ? 'Available' : 'Not Available')
console.log(s)

// If chosen === 1
"Osama"
39
"Available"
"CSS"

// If chosen === 2
"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3
"Sayed"
33
"Available"
"Laravel"