//Falsy Values:
// 1. false
//  2. 0
//  3. "" or ''(Empty String)
//  4. null
//  5. undefined
//  6. NaN
const x = null;
if (x) {
    console.log('This is truthy');
}
else{
    console.log('Falsy');
}
console.log(Boolean(x));

//Truthy Values:
// - Everything else that is not falsy
// - true
//  - '0' (0 in a String)
//  - ' '(Space in a String)
//  - 'false'(false in a String)
//  - [] (empty array)
//  - {} (empty Object)
//  - function (){}(empty function)

const email ='test@test.com';
if(email){
    console.log('You passed in a email');
}
console.log(Boolean(email));


//Truthy and Falsy caveats
const children = 3;
if(!isNaN(children)){
    console.log(`you have ${children} children`);
}
else{
    console.log('please enter number of children');
}

//Checking for empty arrays
const posts = ['Post One'];
if (posts.length > 0) {
    console.log('List Posts');    
}
else{
    console.log('No Posts To List');
}

//Checking for empty objects
const user = {
    // name: 'Srimani', User details or empty user objects does return true itself.
};

//Object.keys(user).length>0 will return true , only if the object has any user details , else returns false

if(Object.keys(user).length>0){
    console.log('List User');
}
else{
    console.log('No User');
}

//Loose Equality(==)
console.log(false == 0);
console.log(''==0);
console.log(null == 0);
console.log(null==undefined);