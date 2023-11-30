console.log(10 < 20 && 30>15 && 40 > 30);
console.log(10>20 || 30 >15);

//&& - assigns the right side value only if the left is a truthy value

let a;
a = 0 && 20;
console.log(a);

a = 10 && 20 && 30;
console.log(a);

a = 10 && 0 && 30;
console.log(a);

a = 10 && '=' && 10 && 30;
console.log(a);

const posts = ['Post One','Post Two']
posts.length > 0 && console.log(posts[0]);

// ||- assigns the right side value only if the left is a falsy value

let b;
b = 10||20;
console.log(b);
b = null||20;
console.log(b);
b = 0 || null ||'89' || undefined;

console.log(b);

//??- Returns the right side operand only when the left is null or undefined
let c;

c=10 ?? 20;
console.log(c);
c= null??20;
console.log(c);
c= undefined??30;
console.log(c);
c=0??30;
console.log(c);
c=''??30;

console.log(c);