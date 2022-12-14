let myset = new Set([10]);
myset.add(20).add(myset.size);
console.log(myset);
myset.delete(2);
console.log(myset.size);