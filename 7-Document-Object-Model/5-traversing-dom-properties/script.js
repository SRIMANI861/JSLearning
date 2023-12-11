//Get Child elements

let output;

const parent = document.querySelector('.parent');
output = parent.children;
console.log(output);

output = parent.children[1];
console.log(output);

console.dir(output);
console.log(parent.children[0].innerText);

output = parent.children[1].className;
console.log(output);

output = parent.children[1].nodeName;
console.log(output);

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'cyan';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

console.log(output);

//Get Parent Elements From child
const children = document.querySelector('.child');
console.log(children.parentElement);
children.parentElement.style.border = '2px solid purple';
children.parentElement.style.padding = '20px';

//Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
 
output = secondItem;
console.log(output);
output = secondItem.nextElementSibling;//The current item stored in secondItem is child Two and the next sibling of it is child Three
console.log(output);

secondItem.nextElementSibling.style.color = 'green';
console.log(output);

secondItem.nextElementSibling.style.fontSize = '20px';
console.log(output);
secondItem.nextElementSibling.style.fontWeight = 'bold';
console.log(output);
secondItem.nextElementSibling.style.fontStyle = 'italic';
console.log(output);
secondItem.previousElementSibling.style.border ='dotted';
console.log(output);
