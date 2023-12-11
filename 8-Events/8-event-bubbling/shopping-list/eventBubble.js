//Event Bubbling
    //With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements
    // Button -> Div -> Body -> HTML -> Document

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

const form = document.querySelector('form');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    alert('button is clicked');
    e.stopPropagation(); //It will stop triggering the parent events(button is clicked will be printed)
})

div.addEventListener('click',()=>{
    alert('div is clicked');
})
form.addEventListener('click',()=>{
    alert('form is clicked');
})
document.addEventListener('click',()=>{
    alert('document is clicked');
})

