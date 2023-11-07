let x;

//const num=5; OR
const num = new Number(5.4272);
console.log(typeof num);

x=num.toString();
console.log(x, typeof x);

x=num.toString().length;
console.log(x, typeof x);

x=num.toFixed(3);
console.log(x, typeof x);

x=num.toPrecision(4);
console.log(x);

x=num.toExponential(2);
console.log(x);

// x=num.toLocaleString('ar-EG');
x=num.toLocaleString('en-US');
console.log(x);

x=num.valueOf();
console.log(x);

x=Number.MAX_VALUE;
console.log(x);

x=Number.MIN_VALUE;
console.log(x);


