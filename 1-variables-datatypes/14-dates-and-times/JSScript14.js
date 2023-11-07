let d;

d= new Date();

console.log(d);

d=d.toString();

d=new Date("2015-03-25T12:00:00Z")
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
console.log(d.toLocaleTimeString());
console.log(d.getUTCDate());

d = new Date("2015-03-25T12:00:00-06:30");
console.log(d);
// Method 1
d=new Date(2002,3,19);// in this format the months are taken from 0.
/*
0-Jan
1-Feb
2-Mar
3-Apr
.
.
.
so on..
*/
//We can also add hrs, minutes and seconds as the parameters as follows:

// d=new Date(2002,3,19,17,30,0);

//Method 2
d = new Date('2021-09-12');//2021 september, 12
//In this format 09 will result in september itself , not august, it takes from 1 itself.

//short dates
d = new Date("03/25/2015");
console.log("Short dates"+" "+d);

//Long dates
d = new Date("Mar 25 2015");
console.log(d);

//Previous century
d= new Date(99,11,28);

//printing date in a more readable format
d.toDateString();
console.log(d);

d.toUTCString();
console.log(d);

d.toISOString();
console.log(d);

//It will convert the date to milli seconds
let msec=Date.parse("March 21, 2012");
console.log(msec);

d=new Date(msec);
console.log(d);

d=Date.now();
console.log(d);