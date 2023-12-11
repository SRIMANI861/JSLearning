const parent = document.querySelector('.parent');
let output = parent.childNodes;
console.log(output);
output = parent.childNodes[0].textContent; //WhiteSpace
output = parent.childNodes[0].nodeName; //#text
output = parent.childNodes[0] //#text with the properties are displayed
output = parent.childNodes[5].outerHTML;
console.log(output);
output = parent.childNodes[5].innerText = 'Child One';
console.log(output);
output = parent.childNodes[9].style.color = 'red';

output = parent.firstChild;
console.log(output);
output = parent.lastChild;

parent.firstChild.textContent = 'Hello';
console.log(output);
parent.lastChild.textContent = 'Bye';
console.log(output);

//Getting Parent nodes from child
const child = document.querySelector('.child');
output = child.parentElement;
output = child.parentNode;

child.parentNode.style.backgroundColor = 'yellow';
console.log(output);

child.parentNode.style.padding = '30px';
console.log(output);

//Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
console.log(secondItem);
output = secondItem.previousElementSibling;
console.log(output);
output = secondItem.nextSibling;
console.log(output);
output = secondItem.previousSibling;
console.log(output);




