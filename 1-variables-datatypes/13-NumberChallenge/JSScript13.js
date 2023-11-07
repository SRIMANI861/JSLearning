let x;
let y;

x=Math.floor(Math.random()*100+1);
// console.log(x);

y=Math.floor(Math.random()*50+1);
// console.log(y);

let sum,difference,product,divide,remainder;
sum=x+y;
difference=x-y;
product=x*y;
divide=x/y;
remainder=x%y;

let sumOutput,differenceOutput,productOutput,quotientOutput,remainderOutput;

sumOutput=`${x} + ${y} = ${sum}`;
console.log(sumOutput);

differenceOutput=`${x} - ${y} = ${difference}`;
console.log(differenceOutput);

productOutput=`${x} * ${y} = ${product}`;
console.log(productOutput);

quotientOutput=`${x} / ${y} = ${divide}`;
console.log(quotientOutput);

remainderOutput=`${x} % ${y} = ${remainder}`;
console.log(remainderOutput);



