//METHOD-1 OF ON CLICK EVENT ( onclick="onClear()" )
function onClear(){
    alert('Clear Items');
}

const clearBtn = document.querySelector('.clearAll');

//JAVASCRIPT EVENT LISTENER----------------------------------------------------

    //----Here with js event listener,when we use console.log(), and alert the console.log will be printed no. of times we click the button 
// clearBtn.onclick = function(){
//     alert('Cleared');
// };

// clearBtn.onclick = function(){
//     console.log('Cleared');
// }




//addEventListener()------------------------------------------------------------
 //ADVANTAGE---
        //Advantage is using addEventListener() we can use both alert and console.log

    //----Here with addEventListener(), once the alert is displayed and clicked ok then statements in console are printed.


    //- alert is synchronous and it blocks so nothing gonna happen until alert msg is cleared.

//    clearBtn.addEventListener('click', function(){
//     alert('Clear Items');
// });

// clearBtn.addEventListener('click', ()=> console.log('Clear Items'));

// //The above using arrow function
// clearBtn.addEventListener = ('click', ()=> alert('Clear Items'));

//removeEventListener()-----------------------------------------------------------------------

clearBtn.addEventListener('click',onClear);

    //The below code will remove the clickable action for clear all button after 5 secs of execution start
setTimeout(()=> clearBtn.removeEventListener('click',onClear), 5000);

//------------------------------------------------------------------------------------------------------
// Clearing all ul items


//Method 1
// function onClick(){
//     const ulItems = document.querySelector('ul');
//     ulItems.outerHTML = '';
// }

//Method 2
// function onClick(){
//     const ulItems = document.querySelector('ul');
//     // const div = ulItems.querySelector('div');
//     const items = ulItems.querySelectorAll('li');

//     items.forEach((item) => item.remove());
// }

//Method 3
function onClick(){
    const ulItems = document.querySelector('ul');
    const items = ulItems.querySelectorAll('li');

    while(ulItems.firstChild){
        ulItems.removeChild(ulItems.firstChild);
    }
}       