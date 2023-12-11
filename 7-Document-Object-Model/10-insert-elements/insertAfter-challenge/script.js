function insertAfter(newElement,existingElement){
    existingElement.parentElement.insertBefore(newElement, existingElement.nextSibling);
}
    //New element to insert
    const li = document.createElement('li');

    // const li = document.createElement('li');
    li.textContent = 'Insert Me after';
    // div.appendChild(li);

    //Existing element
    const firstItem = document.querySelector('li:nth-child(1)');
    console.log(firstItem.childNodes);

    insertAfter(li,firstItem);


