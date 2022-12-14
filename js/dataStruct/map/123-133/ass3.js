let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

const keys = Object.keys(myInfo);
const values = Object.values(myInfo);

let mymap = new Map()

mymap.set(keys[0], values[0]).set(keys[1], values[1]).set(keys[2], values[2])

console.log(mymap);
console.log(mymap.size);
console.log(mymap.has("role"))

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true