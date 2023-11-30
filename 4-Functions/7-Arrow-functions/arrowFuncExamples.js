//Example 1
let add = (x,y,o) => x+y-o;
console.log(add(4,8,9));

//Example 2
Subtract = (p,q)=> q-p;
console.log(Subtract(28,12));

//Example 3
const Square = n=>n**2;
console.log(Square(19));

//Example 4
const SayHi = ()=> console.log("HEllo GooD mOrniNg");
SayHi();

//Example 5
// let age = prompt("What's your age?",20);

// const Welcome = (age<18)?
//     ()=> console.log("Not Eligible For Voting"):
//     ()=> console.log("Eligible for Voting");
// Welcome();

//Example 6
// let number = prompt("Enter a Number");

// const EvenNumbers = (number % 2==0)?
//     ()=> console.log("Even Number"):
//     ()=> console.log("Odd Number");
// EvenNumbers();

//Example 7
const prime = prompt("Enter a number");

const isPrime = () => {
    // Convert the input to a number
    const num = parseInt(prime);

    if (num <= 1) {
        console.log("Not a prime number");
        return;
    }

    // Loop to check for factors
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Not a prime number");
            return;
        }
    }

    console.log("Prime number");
}

isPrime();

// const prime = prompt("enter a number");
// const CheckingPrime =()=>{
//     if((prime % 1===0) && (prime%prime==0) ){
//         console.log("prime number");
//     }
//     else{
//         console.log("Not a prime number");
//     }
//     return prime;
// }
// CheckingPrime();