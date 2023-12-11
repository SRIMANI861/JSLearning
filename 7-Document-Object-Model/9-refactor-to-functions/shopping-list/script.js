//IN THIS WE ARE GOING TO DIVIDE THE PREVIOUS CODE INTO MULTIPLE FUNCTIONS SUCH THAT IT IS MORE REUSABLE

//Clean & Performant

function createNewItem(item){
    const div = document.createElement('div');
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item)); //creating a text inside the li before the button
    li.id = 'item5';

    const button = createButton('remove-button');
    // const icon = createIcon('fa-solid fa-xmark');
    
    
    div.appendChild(li); //li inside div
    li.appendChild(button); // button inside li
    // button.appendChild(icon);//icon inside button
    
    document.querySelector('#item-list').appendChild(div);
    console.log(div);
    
}

//CREATING BUTTON FUNCTION
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    button.type = 'reset';

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

//CREATING ICON FUNCTION
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    
    return icon;
}

createNewItem('Mango');
createNewItem('Lilly');
createNewItem('rose');

