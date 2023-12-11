const itemInput = document.getElementById('item-input');
function itemInputFunc(e){
    itemInput.preventDefault();
    if (e.keyCode === 13) {
        e.preventDefault();
    }
}
const onKeyPress = () =>{
    console.log('keypress');
}
const onKeyUp = () =>{
    console.log('keyUp');
}
const onKeyDown = (e) =>{
    // console.log('keyDown');
    
    //key----------------------------------
    console.log(e.key);
    document.querySelector('h1').innerText = e.key;

    if (e.key === 'Enter') {
        alert('You pressed enter');
    }

    //keyCode-----------------------------
    //https://www/toptal.com/developers/keycode/table-of-all-keycodes
    if (e.keyCode === 13) {
        alert('Enter key is pressed');
    }

    //code
    if (e.code === 'Digit1') {
        console.log('you pressed 1');
    }

    if(e.repeat){
        console.log('you are holding down'+ e.key);
    }
    console.log('Shift: '+ e.shiftKey);
    console.log('Control: '+ e.ctrlKey);
    console.log('Alt: '+e.altKey);
    
    if (e.shiftKey=== true && e.key ==='k') {
        console.log('Shift key + K is pressed');
    }
}

itemInput.addEventListener('keypress',onKeyPress);
itemInput.addEventListener('keyUP',onKeyUp);
itemInput.addEventListener('keyDown',onKeyDown);