let output;

const firstName='Srimani'
const lastName='Narani'
const age=20;

//old method
output = 'Hello, my name is '+firstName+" "+lastName+" "+"and I am"+" "+age+" "+"years old";

//Template literals
output=`Hello, my name is ${firstName+" "+lastName} and I am ${age} years old`
console.log(output);

//String properties and methods
const s='Hello Srimani';
console.log(typeof s);
let x;

x=s.length;

const str=new String('Hello Mitts')
console.log(str, typeof str);

//Access value by key
x=s[1];
x=s.__proto__;
console.log(x);
//Using the methods
// s=s.toLowerCase();// Assignment to a constant variable is not possible.
let operation=s.toLowerCase();
console.log(operation);

operation=s.toUpperCase();
console.log(operation);

// operation=str.charAt(15);//If we try to access the string value which is out of the length, it will not show any thing or it doesn't lead to any error.
// console.log(operation);

operation=str.substring(2,8);// for 2,8 it prints value from index 2 till 7th index, which is (last index - 1).
console.log(operation);

operation=str.substring(9);//starts from particular index number given and prints upto the end of the string if only single parameter is given
console.log(operation);

//If we try to access the indexof a string with the value which is not in the string , it will return -1.
operation=str.indexOf('t');
console.log(operation);

console.log(str);
operation = str.slice(-11,-4);
console.log(operation);

operation=str.concat(" "+'How are you???');
console.log(operation);

operation=str.replaceAll('He','High time');
console.log(operation);



x='                     Hi Friends';
x=x.trim();
console.log(x);

x=str.replace('Mitts','Mittu');
console.log(x);

x=str.includes('Hello');
console.log(x);

x=str.valueOf();
console.log(x);

x=str.split('l');
console.log(x);