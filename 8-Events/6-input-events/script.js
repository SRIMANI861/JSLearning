const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const chechbox = document.getElementById('checkbox');
const heading = document.getElementById('app-title');

function onInput(e){
    // console.log(e.key);
    // console.log(e.target.value);//this will print each letter by appending the next one we enter into input
    heading.textContent = e.target.value;//the input text entered will be replaced in heading
}
function onChecked(e){
    const isChecked = e.target.checked;
    console.log(isChecked);
    heading.textContent = isChecked? 'checked' :'Not Checked';
}
function onFocus(){
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'red';
}
function onBlur(){
    console.log('Input is blurred');
    itemInput.style.outlineStyle = '#fff';

}
itemInput.addEventListener('keypress',onInput);
itemInput.addEventListener('input',onInput);
priorityInput.addEventListener('change',onInput);
chechbox.addEventListener('change',onChecked);
itemInput.addEventListener('focus',onFocus);
itemInput.addEventListener('blur',onBlur);


