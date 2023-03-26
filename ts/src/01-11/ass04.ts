let arr: (number | boolean[] | (string | (string | number)[])[])[];

arr = [
    1, 2, //number
    [true, false], //boolean[]
    ["str1", "str2", ["str4", "str5", 3, 4]] //(string | (string | number)[])[]
];