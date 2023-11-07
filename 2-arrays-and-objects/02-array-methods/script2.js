let x;

const arr= [32,121,45,68,98];

x = arr.push(9000);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(34);
console.log(arr);

arr.shift();
console.log(arr);

// arr.reverse();
// console.log(arr);

x = arr.includes(23);
console.log(x);

x=arr.indexOf(45);
console.log(x);

//-1 indicates that the element is not present and we are trying to access it's index


x = arr.slice(1,3);//stores the values from index 1 to index 2 into a separate array,doesn't modify the original array.
console.log(x);

// x = arr.splice(1,1);
console.log(arr);

x = arr.splice(1,1)
console.log(arr);

x = arr.splice(2,1)//removes 1 element from index 2, modifies the original array
console.log(arr);