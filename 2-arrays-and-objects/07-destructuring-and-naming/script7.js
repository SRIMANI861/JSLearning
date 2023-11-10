const firstName = 'Srimani'
const lastName = 'Narani'
const age = 21

//The above properties are once declared here and it will have the global scope.
//Which means , they can be accessed in any objects without always providig the values multiple times


const person={
    firstName,
    lastName,
    age
};

console.log(person.firstName);

//Destructuring
const todo ={
    id: 1,
    title: 'My nick name',
    user:{
        petName:'mittu',
        hobbies : 'music',
    }
};

const{id: todo_ID, title,user:{petName},user:{hobbies}}=todo // accessing the properties using curly braces instead of '.' dot operator
// IMPPPP  {} for destructuring
//         id: todo_ID is for renaming
console.log(todo_ID,title,petName,hobbies);

//Destructure Arrays
const numbers = [12,23,4,36,67];

const [first,second,...rest] = numbers;
console.log(first,second,...rest);//... will print the rest of the values in the array other than the first and second elements of an array
