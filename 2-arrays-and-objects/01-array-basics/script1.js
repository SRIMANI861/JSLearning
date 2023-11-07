let index;

// Method 1 - Array literal
const numbers=[12,23,34,35,65,86];

// Method 2 - Array constructor
const fruits = new Array('apple', 'grape', 'orange');

index = numbers[0]+numbers[2];
console.log(index);

index = `my favorite fruit is an ${fruits[0]} and ${fruits[2]}`;

console.log(index);

index = numbers.length;

fruits[2] = 'pear';

index = fruits;

console.log(index);

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';

index = fruits;

console.log(index);