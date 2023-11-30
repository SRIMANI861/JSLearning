// ||= assigns the right side value only if the left is a falsy value
let a = false;
// if(!a){
//     a = 10;
// }
// a = a||10; 
a ||=10;

console.log(a);

//&&= assigns the right side value only if the left is a truthy value
let b = 20;
if (b) {
    b = 20;
}

b &&= 20 ; //It is same as the above expression
console.log(b);

//??= Returns the right side operand only when the left is null or undefined
let c = null;

if (c === null ?? c=== undefined) {
    c = 20;
}
console.log(c);
