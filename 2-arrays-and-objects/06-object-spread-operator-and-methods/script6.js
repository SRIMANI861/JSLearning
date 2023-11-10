let x;

// 1st way to create an object
// const todo = {};

// 2nd way to create an object
const todo = new Object();

todo.id = 1;
todo.name = 'Lunch';
todo.completed = false;

x =todo;

console.log(x);

const person ={
    address:{
        coords:{
            lat : 42.4839,
            lng: -42.3432,
        },
    },
};

x = person.address.coords.lat;

const obj1 = {a:1,b:2}
const obj2 = {c:3, d:4};

//Using Spread Operator we are assigning the objects to another object
const obj3 = {...obj1,...obj2};

//Object.assign() is used before introducing the spread operator
const obj4 = Object.assign({},obj1,obj3);//Output: {a:1,b:2,c:3,d:4} is moved into {} 
//obj4 will have the properties present in the obj1
//when we try to assign both obj1 and obj3 where obj3 has both obj1 and obj2 properties, it will remove the duplicates and only have the unique properties in the new object created.

x = obj4;
console.log(x);


//creating multiple objects in an array

const todos = [
    {id:1, task:'Go home'},
    {id:2, task:'Early dinner'},
    {id:3, task:'Sleep Early'},
    {id:4, task:'Wakeup early'},
];

let y ;
y = todos;

console.log(y);

//accessing individual object 
y = todos[0];
console.log(y);//1st object will be printed

//accessing the properties in an individual object
y = todos[0].task;
console.log(y);


// Object Methods
x = Object.keys(todo);//keys will be displayed
y = Object.keys(todos[0]);//keys for the specific object will be displayed, this syntax is used when their are multiple objects within an array

x = Object.values(todo);
y = Object.values(todos);

x = Object.values(todos).length;

x = Object.entries(todo);//to get array of key value pairs

x = todo.hasOwnProperty('task');//returns true, if the object has task property, else false

console.log(x);
console.log(y);
