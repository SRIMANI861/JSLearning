//converting NaN to 0 using logical or operator ||
console.log(NaN||0);


let value="Srimani"
let amount='100'

// Change string to number
value=parseInt(value);
/* The below two are another kind of converting the string to number */
// value=+value;
// value=Number(value)
console.log(value,typeof value);
amount=parseInt(amount)
console.log(amount, typeof amount);

//Change number to string
amount=amount.toString();
// amount=String(amount);
console.log(amount,typeof amount);

//Change String to decimal
let amount1='99.5'
amount=parseFloat(amount1);
// amount=+amount
console.log(amount1,typeof amount1);

//Change number to boolean
let num=1;
num=Boolean(num)
console.log(num,typeof num);

//Change string to float
let str='';
str=parseFloat(str);
console.log(str,typeof str);

//Change string to boolean 
let string='';// '' gives false , and 'any value' gives true
string=Boolean(string);
console.log(string, typeof string);

console.log(Math.sqrt(-2));
console.log(1+NaN);
console.log(undefined+undefined);
console.log('hi'/12);


