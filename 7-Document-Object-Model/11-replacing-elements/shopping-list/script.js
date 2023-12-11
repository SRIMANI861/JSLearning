//REPLACING THE FIRST ELEMENT
function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent='Replaced Items';

    firstItem.replaceWith(li);
}

//REPLACING SECOND ELEMENT
function replaceSecondItem(){
    // const secondItem = document.querySelector('div:nth-child(2)');
    const div = document.querySelector('ul.items > div:nth-child(2)');
    console.log(div.childNodes);
    div.outerHTML = '<li>Replaced Second</li>';
}

//REPLACING ALL ELEMENTS
function replaceAllItems(){
    const div = document.querySelectorAll('li');

    //------------USING TERENARY OPERATOR-------------------------------------------------------------------
    div.forEach((item,index)=> item.innerHTML = index ===0? '1st Item Replaced':'Replaced All');
    
    //------------USING IF ELSE CONDITIONS------------------------------------------------------------------  
    div.forEach((item, index) =>{
        if (index === 0) {
            item.innerHTML = '1st Item Replaced';
        }
        else if(index === 1){
            item.outerHTML = '<li>2nd Item Replaced</li>';
        }
        else{
            item.innerHTML = 'Replace all';
        }

    //item.outerHTML and item.innerHTML here gives the same result but the content should be given in li tags when outerHTML is used.
        // item.outerHTML = '<li>Replaced all items</li>';
        // item.innerHTML = 'Replaced Items';

   });
}
//REPLACING HEADING CHILD TAG(H1 TO H2)
function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.textContent = 'Shooping Items List';
    header.replaceChild(h2,h1);
    
}
replaceChildHeading();
replaceFirstItem();
replaceSecondItem();
replaceAllItems();