const age = 10;

// if (age >= 18) {
//     console.log('You can Vote');
// }else{
//     console.log('You cannot vote');
// }

//Ternary Operator
age >= 18 ? console.log('You can Vote'):console.log('You cannot vote');
//OR
const vote = age >= 18 ? 'You can Vote':'You cannot vote';
console.log(vote);


//Assigning a conditional value to a variable
const canVote = age>=18 ? true:false;
console.log(canVote);


//Multiple Statements
const auth = true;

// const redirect = auth ? (alert('Welcome to dashboard'),'/dashboard') :(alert('Access Denied'),'/login');

// console.log(redirect);

auth ? console.log('Welcome to the dashboard'):null;