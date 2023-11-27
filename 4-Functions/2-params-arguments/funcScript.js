function registerUser(user){
    return user + ' is registered';
}

console.log(registerUser('John'));

function sum(...numbers){
    let total =0;
    for(var num of numbers){
        total = total+num;
    }
    return total;
}
console.log(sum(9,3,1,4,5,8));

// ------------------------------------------------------------
//Objects as Params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
//Object
const user = {
    id:1,
    name:'John'
}
console.log(loginUser(user));
console.log(loginUser({
    id:2,
    name:'Srimani'
}));

// --------------------------------------------------------------
// Arrays as Params
function randNum(...arr){
    const randIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randIndex];

    console.log(item);
}

randNum([0,9,8,4,3,2,1,5,6,7]); //THis is the declaration of arr within the [], it is used when we pass only arr as parameter;

randNum(21,34,23,54,65,76,89,90,70,43,11,91,100);//This is declaration of arr as a parameter itself, it is used when we pass the array using the spread operator(...)

