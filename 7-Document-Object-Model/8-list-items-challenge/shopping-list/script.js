//Quick and Dirty
function createListItem(item){
    // const li = `<li>${item}</li>`;

//CREATING A NEW ELEMENT USING DOM PROPERTIES AND APPENDING IT TO THE ALREADY EXISTING LIST OF ITEMS
    const li = document.createElement('li');
    li.innerHTML = `${item}
    <button type="reset" class="remove-button">
                  <i class="fa-solid fa-xmark"></i>
    </button>`;
    document.querySelector('.items').appendChild(li); //to append the li item to the list of items we have to pass the "node" type to appendChild(), not the String.
}

//Clean & Performant

function createNewItem(item){
const div = document.createElement('div');

const li = document.createElement('li');
li.appendChild(document.createTextNode(item)); //creating a text inside the li before the button
li.id = 'item5';


const button = document.createElement('button');
button.className = 'remove-button';
button.type = 'reset';

const icon = document.createElement('i');
icon.className = 'fa-solid fa-xmark';

div.appendChild(li); //li inside div
li.appendChild(button); // button inside li
button.appendChild(icon);//icon inside button

document.querySelector('#item-list').appendChild(div);
console.log(div);
// console.log(button);

}



createListItem('Eggs');
createNewItem('Mango');