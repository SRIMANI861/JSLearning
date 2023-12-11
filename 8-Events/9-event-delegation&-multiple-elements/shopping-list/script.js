const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
// listItems.forEach((item) => {
//     item.addEventListener('click',(e)=>{
//         console.log(e.target);
//     });
// });

// Method 1- Removing the li items by selecting li elements----------------------------------------------------------------------------------
listItems.forEach(item => {
    item.addEventListener('click',(e)=>{
        e.target.remove();
    })
});

//Method 2- Removing the li items by selecting the ul---------------------------------------------------------------------------------------- 
list.addEventListener('click',(e) =>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})

//This code will remove the li when we click on remove button-------------------------------------------------------------------------------- 
listItems.forEach(item =>{
    const removeBtn = item.querySelector('.remove-button'); //here in this statement we are selecting remove-button for each-item in the list of items.

    removeBtn.addEventListener('click',(e)=>{ //this means that when we click on the removeBtn , it will remove that respective item from the list of items.
            item.remove();
   });
});


//li on mousedown changes to red------------------------------------------------------------------------------------------------------------
list.addEventListener('mouseover',(e) =>{
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
    // console.log(e.target);
})