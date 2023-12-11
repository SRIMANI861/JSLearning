const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title','My Element');

//Method 1- to add a text to the div element. 

//But innerText is to be used when we want to modify the existing content present in the element.
// div.innerText = 'Hello World';


//Method 2- to create the text node separately
const text2 = document.createTextNode('Hello!!!');
const text = document.createTextNode('Hello World created with text node');
div.append(text2);
div.appendChild(text);

console.log(div);
// document.body.append(text);
document.body.appendChild(div);

document.querySelector('ul').appendChild(div);

// const element = document.getElementById('my-element');
// const container = document.createElement('div');
// container.innerText = element.innerHTML;

// document.body.appendChild(container);