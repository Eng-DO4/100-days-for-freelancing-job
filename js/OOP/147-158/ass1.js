class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run = function () {
        return `Car Is Running Now`
    }
    stop = function () {
        return `Car Is Stopped`
    }
}

const car1 = new Car('MG', 2022, 420000);
const car2 = new Car('KIA', 2021, 340000);
const car3 = new Car('BYD', 2020, 650000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());

// Needed Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"