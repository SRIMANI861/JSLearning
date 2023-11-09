const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

console.log(fruits);

// let x =fruits[3][0];
// console.log(x);

const allFruits = [fruits,berries];

x = allFruits[1][1];
console.log(x);

console.log(allFruits);

x= fruits.concat(berries);
console.log(x);

console.log(fruits);

//Spread Operator(...)
x = [...fruits, ...berries]
console.log(x);

//Flatten Arrays
const arr = [1,2, [3,4],5,[2,1,9],0,9,[34,12]];
x = arr.flat();
console.log(x);

// Static methods on array object

x = Array.isArray(berries);//returns true if the argument passed is array
console.log(x);

x = fruits.length;
console.log(x);

x = Array.from('1231923');
console.log(x);
