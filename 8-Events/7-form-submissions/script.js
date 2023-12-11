const form = document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();
    console.log('submit');

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === ''|| priority === '0') {
        alert('Please fill all fields');
        
    }
    console.log(item.value,priority.value);
    //If we don't provide the item and priority values for strings the default value stored is '' and for numbers it is '0'.
}
// form.addEventListener('submit',onSubmit);

function onSubmit2(e){
    e.preventDefault();
    const formData = new FormData(form);
    const item = formData.get('item');
    const priority = formData.get('priority');
    const entries = formData.entries();

    for (const entry of entries) {
        console.log(entry);
    }
    console.log(item,priority);
}
form.addEventListener('submit',onSubmit2);//Here the value 'submit' 1st parameter refers to the button type in the HTML page('+Add item' button is of submit type, so it is triggered)
