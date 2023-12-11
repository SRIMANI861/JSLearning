function insertElement(){
    const filter = document.querySelector('.filter');

    const h3 = document.createElement('h3');
    h3.textContent = 'Filter Items';

    filter.insertAdjacentElement('afterend',h3);
}
//insertAdjacentText Example
function insertText(){
    const item = document.querySelector('li:first-child');
    console.log(item);
    item.insertAdjacentText('beforebegin','Items List');
}

//insertAdjacentHTML example
function insertHTML(){
    const clearBtn = document.querySelector('.clearAll');
    clearBtn.insertAdjacentHTML('beforebegin','<h3>Clear</h3>');
}

//insertBefore Example
function insertBeforeItem(){
    const ul = document.querySelector('ul');
    
    const div = document.createElement('div');

    const li = document.createElement('li');
    li.textContent = 'Mango';

    div.appendChild(li);

    const thirdItem = document.querySelector('div:last-child');
    console.log(ul.childNodes);
    ul.insertBefore(div,thirdItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();