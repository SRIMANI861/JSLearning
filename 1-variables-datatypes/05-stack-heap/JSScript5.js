//values are stored on the stack
// const name='John';
// const age=30;

//reference values are stored on the heap
// const person={
//     name:'Brad',
//     age:40
// }

let name='John'
let age=30

let person={
    name:'brad',
    age:20
}
let newName=name;//john is assigned to newname
newName='Jonathan'//new name is changed to Jonathan
let newPerson=person;// person and newPerson will refer to the same array in the heap memory.
newPerson.name='Bradley';

console.log(person.name);
