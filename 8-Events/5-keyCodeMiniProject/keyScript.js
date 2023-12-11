//Method 1
// window.addEventListener('keydown', (e)=>{
//     const insert = document.getElementsByClassName('container');
//     insert.outerHTML = `
//          <div class="key">
//             ${e.key === ' ' ? 'Space': e.key}
//             <small>e.key</small>
//         </div>
//         <div class="key">
//             ${e.keyCode}
//             <small>e.keyCode</small>
//         </div>
//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
// `;
// });

//Method 2 This workss................. :)
function showKeyCodes(e){
    const insert = document.getElementById('insert');
//--------------------------------------------------------------------------
    //The below line will clear the boxes after each entry
        //which is it replaces the older one with new key, keycode and code.
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode':e.keyCode,
        'e.code':e.code,
    };

    for (let key in keyCodes) {
        const div = document.createElement('div');//div is created inside div with insert id
        div.className = 'key';//the div is created with classname called key
        const small = document.createElement('small');//a small tag is created inside the div
        const keyText = document.createTextNode(key);//keytext inside small tag is created
        const valueText = document.createTextNode(keyCodes[key]);//${e.code} is value
        
        small.appendChild(keyText);//keytext is appended to small which is e.code or e.keyCode or e.key
        div.appendChild(valueText);//The value to be entered by user is appended to div
        div.appendChild(small);// the small tag is appended to div

        insert.appendChild(div);//div is appended to div with id insert
    }

}
window.addEventListener('keydown', showKeyCodes);
