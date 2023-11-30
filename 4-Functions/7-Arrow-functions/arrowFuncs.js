//Arrow function syntax
const add = (a, b) =>{
    return a+b;
};
console.log(add(9,5));
// ----------------------------------------------------------------------

//Arrow Function with Implicit return
const subtract = (a, b) => a-b;
console.log(subtract(10,4));

// ----------------------------------------------------------------------

//Can leave off () with single parameter
const double = a => Math.sqrt(a);
console.log(double(625));

// ----------------------------------------------------------------------

//Returning an object
const createObj = ()=>({
    name:'Narani Srimani'
});

console.log(createObj());
// ----------------------------------------------------------------------

//Arrays without arrow functions
const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function (i){
    console.log(i);
});

// ----------------------------------------------------------------------
//Arrays with arrow functions
numbers.forEach((n)=> console.log(n))   ;
// ----------------------------------------------------------------------
