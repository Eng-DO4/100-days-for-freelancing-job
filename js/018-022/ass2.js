let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + true + --num); // 6

// Soultion Three
console.log(num + num + num); // 6

// Soultion Four
console.log(num++ + true + num++); // 6

// Solution Five
console.log(++num + true); // 6

// Solution Six
console.log(++num); // 6