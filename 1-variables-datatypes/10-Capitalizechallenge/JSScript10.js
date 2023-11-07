const String='developer';

let output=String.charAt(0)
console.log(output);//prints d

output=output.toUpperCase();
console.log(output);//prints D

output=output+String.slice(-8);
console.log(output);//concats D and eveloper => Developer

//can be done the above things in one line
//Solution 1
output=String.charAt(0).toUpperCase()+String.slice(-8); //or slice(1)
console.log(output);

//Solution 2 with substring
output=String.charAt(0).toUpperCase()+String.substring(1);
console.log(output); 

//Solution 3
output=String.replace('d','D');
console.log(output);

//Solution 4
output=String[0].toUpperCase()+String.substring(1);
console.log(output);

//Solution 5 using Template literals
output=`${String[0].toUpperCase()}${String.slice(1)}`;
console.log(output);