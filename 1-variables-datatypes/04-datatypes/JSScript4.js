/* Primitive data types
    1.String- sequence of chars,'' or ""
    2.Number- Integers as well as floating numbers
    3.Boolean- Logical entity/ true or false
    4.Null- Intentional absence of any object value
    5.Undefined- A variable that has not yet been defined/assigned
    6.Symbol- Built-in object whose constructor returns a unique symbol
    7.BigInt- Numbers that are greater than the "Number" type can handle
*/
/* Reference Types(Objects)
    Reference types or "objects" are non-primitive value and when assigned to a variable, 
    the variable is given a reference to that value

    -Object literals,arrays and functions are all reference types.

 */
//String
    const firstName='Srimani';
    console.log(firstName,typeof firstName);
//number
    const age=30;
    const temp=40.93;
    
//boolean
    const hasBike=true;
//null
const aptnumber=null;
const output=aptnumber;
console.log(output, typeof(output));

//Symbol
const id=Symbol('id');
console.log(id,typeof id);

//BigInt
const bignumber=39487389474n;
console.log(bignumber,typeof bignumber);

//Reference Types
const numbers =[1,2,3,4];
const person={name:'Brad',};
function sayHello(){
    console.log('Hello');
}
console.log(sayHello, typeof sayHello);