//REMOVING ELEMENTS

//REMOVING A BUTTON
function removeClearButton(){
    const clearBtn = document.querySelector('.clearAll');
    clearBtn.remove();
}

//REMOVING FIRST ITEM  ///IT's working
function removeFirstItem(){
    const ul = document.querySelector('ul');
    const div = ul.querySelector('div');
    
    const firstItem = ul.querySelector('div:first-child');
    // const li = div.querySelector('li');

    console.log(div.children);
    ul.removeChild(firstItem);
}

//REMOVING AN ITEM
function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    console.log(ul);
    const div = ul.querySelector(`div:nth-child(${itemNumber})`);
    const li = div.querySelector('li');

    div.removeChild(li);
}
//REMOVING ITEM AS REMOVING INDEX
function removeItem2(itemNumber){
    const ul = document.querySelector('ul');
    const div = ul.querySelectorAll('div')[itemNumber];//index starts from 0

    ul.removeChild(div);
}

removeItem2(3);
// removeClearButton();
// removeFirstItem();

