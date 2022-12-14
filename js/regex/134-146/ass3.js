let phone = "+(995)-123 (4567)";

const regex = /\+\(\d{3}\)-\d{3} \(\d{4}\)/

console.log(phone.match(regex))