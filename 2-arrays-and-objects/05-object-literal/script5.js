const person={
    name: 'Srimani Narani',
    age: 20,
    isAdmin : false,
    address:{
        street: '13-2-944/A, karwan',
        city: 'Hyderabad',
        state: 'Telangana',
    },
    hobbies: ['singing','cooking','TV','Reading books'],
};

console.log(person);

let x;

x = person.age; //method 1 for accessing the properties in the object we use '.' notation
x = person['name']; //method 2 for accessing the properties from the object
x = person.hobbies[0];
x = person.address['street'];// accessing the inside object of another object
console.log(x);

person.age = 12;
person['isAdmin']=true;
x = person;// the original object is been changed where it replaces the age 20 to age 12
console.log(x);

console.log(person);

// ##############################################################
//to delete a property from the object literal 'Person'
delete person.isAdmin;// the property isAdmin will be removed from the person object.
console.log(person);


//adding the properties to the existing object
person.hasChildren = false;
console.log(person);

// ##################################################################

//Creating the functions and using the person object properties in it.
person.greet = function(){
    console.log(`Hello!!! My name is ${this.name}`);
};

person.greet();

const person2={
    'first name':'srimani',// variables like first name are not recommended, or they should not be used, we can use firstName or first_name.
    'last name':'narani',
};

//x = person2.first name;// here first name gives error since they are two seperate words and should not be used as variables.
//So when we are using such kind of variables separated by spaces, we access them by using [''] not by . operator
x = person2["first name"];
console.log(x);

