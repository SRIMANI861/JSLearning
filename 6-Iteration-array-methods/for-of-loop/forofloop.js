//Loop through arrays
const items = ['book','table','chair','kite'];
const users = [ {name:'Siri'},{name:'Srimani'},{name:'Mittu'}];

for(const item of items){
    console.log(item);
}

for(const user of users){
    console.log(user.name);
}

//Loop over Strings
const str = 'Hello World';
for(const letter of str){
    console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set('Wife\'s name','Regina');
map.set('Husband\'s name','John');

for(const [key,value] of map){
    console.log(key +" "+ "is "+" "+value);
}
