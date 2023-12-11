// console.log(window);

console.dir(window.document);
console.log(document.body.innerHTML);
console.log(document.body.innerText);

console.log(document.links[0]);//to access the links present in the file, and since it is a collection of multiple links, we can access a single link through the indexes.

document.body.innerHTML = '<h1>Hello World</h1>';

console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main</h1>';
document.querySelector('#main h1').innerHTML = 'Hello';