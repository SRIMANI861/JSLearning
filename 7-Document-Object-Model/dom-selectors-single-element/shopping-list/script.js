//THIS SCRIPT IS TO DEMONSTRATE THAT WE CAN SELECT ANY ELEMENT FROM THE DOM AND THEN ADD OR CHANGE OR REMOVE WHATEVER WE WANT

// document.getElementById();
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//set attributes
document.getElementById('app-title').title='Shopping';
document.getElementById('app-title').setAttribute('class','title');

const title = document.getElementById('app-title'); //title is assigned with Shooping List heading
console.log(title);

//Get/Change content
console.log(title.textContent);
title.textContent = 'Hello World';//And here we are changing the text content
title.innerHTML = 'Hello people';
title.innerHTML = '<b>Shopping List</b>'

//Change styles
title.style.color = 'red';
title.style.backgroundColor = 'yellow';
title.style.border = '1px solid black';
title.style.borderRadius = '10px';
// ---------------------------------------------------------------------------------------------------------------

//document.querySelector()
console.log(document.querySelector('div'));
console.log(document.querySelector('#item-input'));
console.log(document.querySelector('.form-control'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(1)').innerText);

const secondItem = document.querySelector('li:nth-child(1)');
secondItem.innerText='Peers';
secondItem.style.color ='red';