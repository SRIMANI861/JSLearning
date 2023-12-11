//THIS IS THE DEMONSTRATION OF SELCTING MULTIPLE ELEMENTS FROM DOM
//querySelectorAll()

let listItems = document.querySelectorAll('.items li');//It checks for the class items and inside it, it will check for li items and that are been selected and stored in the variable called listItems
console.log(listItems.length);

console.log(listItems[0].innerText);
console.log(listItems[1].innerText);

//Changing the single list item color to red
listItems[1].style.color = 'red';

listItems.forEach((item, index)=>{
//Adding a new Element to the li in the ul -------------------------------------------------------------------------------
    
        if (index >=3) {
            //Creating a new Item in a list using createElement and passing li to it.
            const newItem = document.createElement('li');
            newItem.innerText = 'Mango';

            //Creating a new div element
            const newDiv = document.createElement('div');

            //appending the li item inside the div element
            newDiv.appendChild(newItem);
            newItem.style.color = 'purple';
    
            //Append the new item to the list
            listItems = document.getElementById('item-list');
            listItems.append(newDiv);
        }
//---------------------------------------------------------------------------------------------------------------------------
    
//Changing multiple list items color to red.
    console.log(listItems);
    item.style.color = 'purple';
    console.log(index);
    if (index ===3) {
        item.innerText ='Peers';
    }

//Appending the remove mark to the last two items of the list
    if (index === 3) {
        item.innerHTML = `Peers
        <button type="reset" class="remove-button">
          <i class="fa-solid fa-xmark"></i>
        </button>`;
    }
    //NEED TO MODIFY THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    if (index > 3) {
        item.innerHTML =`Mango
        <button type="reset" class="remove-button">
          <i class="fa-solid fa-xmark"></i>
        </button>`;
    }
})

//------------------------------------------------------------------------------------------------------------------

//GETTING THE ELEMENTS USING getElementByClassName()
const listItems2 = document.getElementsByClassName('fruits-list');

console.log(listItems2[3].innerText);

//Converting list to array
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item)=>{
    console.log(item.innerText);
})

// listItems2.forEach((item) =>{
//     console.log(item.innerText);
// }); This won't work , so we have converted it to array

//-----------------------------------------------------------------------------------------------------
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[4].innerText);


